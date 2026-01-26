import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import remarkYoutube from './remark-youtube'
import yaml from 'js-yaml'

const contentDirectory = path.join(process.cwd(), 'src/content')

// ============================================================================
// TYPES
// ============================================================================

/**
 * Blog post type matching frontmatter schema
 */
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category?: string
  image: string
  author: string
  featured?: boolean
  lang: 'et' | 'en'
  tags: string[]
  // SEO fields
  seoTitle?: string
  ogImage?: string
  keywords?: string[]
  // Additional fields
  imageWidth?: number
  imageHeight?: number
  content: string
}

// ============================================================================
// INTERNAL UTILITIES
// ============================================================================

/**
 * Transform relative image paths to absolute paths
 * Converts ./images/filename.avif to /images/blog-content/filename.avif
 *
 * Customize this function based on your project structure:
 * - Change target path (/images/blog-content/) to match your public folder structure
 * - Adjust regex pattern if using different relative path conventions
 */
function transformImagePaths(content: string): string {
  // Transform markdown image syntax: ![alt](./images/...) -> ![alt](/images/blog-content/...)
  let transformed = content.replace(
    /!\[([^\]]*)\]\(\.\/images\/([^)]+)\)/g,
    '![$1](/images/blog-content/$2)'
  )
  // Transform HTML img tags: src="./images/..." -> src="/images/blog-content/..."
  transformed = transformed.replace(
    /src=["']\.\/images\/([^"']+)["']/g,
    'src="/images/blog-content/$1"'
  )
  return transformed
}

/**
 * Render markdown to HTML using remark with GitHub Flavored Markdown support
 */
async function markdownToHtml(markdown: string): Promise<string> {
  // Transform relative image paths before processing
  const transformedMarkdown = transformImagePaths(markdown)

  const result = await remark()
    .use(gfm) // GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(remarkYoutube) // Auto-embed YouTube videos
    .use(html, { sanitize: false }) // Convert to HTML without sanitization
    .process(transformedMarkdown)
  return result.toString()
}

/**
 * Get all markdown files from a directory
 */
function getMarkdownFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory)

  if (!fs.existsSync(fullPath)) {
    return []
  }

  const files = fs.readdirSync(fullPath)
  return files.filter((file) => file.endsWith('.md')).map((file) => path.join(fullPath, file))
}

/**
 * Transform frontmatter image path from relative to absolute
 * Also handles URL-encoded characters from Webflow export
 */
function transformFrontmatterImage(image: string | undefined): string {
  if (!image) return ''
  if (image.startsWith('./images/')) {
    return image
      .replace('./images/', '/images/blog-content/')
      .replace(/%CC%[0-9a-fA-F]{2}/g, '') // Remove combining characters (ä → a)
      .replace(/%2520/g, '-') // Double-encoded space → dash
      .replace(/%20/g, '-') // Space → dash
      .replace(/%25([0-9a-fA-F]{2})/g, '%$1') // Unescape double-encoding
      .replace(/ /g, '-') // Any remaining spaces → dash
  }
  return image
}

/**
 * Parse a markdown file and return frontmatter + content
 */
async function parseMarkdownFile<T>(filePath: string): Promise<T & { content: string }> {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  // Convert markdown content to HTML
  const htmlContent = await markdownToHtml(content)

  // Transform frontmatter image path if present
  if (data.image) {
    data.image = transformFrontmatterImage(data.image)
  }

  return {
    ...data,
    content: htmlContent,
  } as T & { content: string }
}

// ============================================================================
// PUBLIC API - BLOG POSTS
// ============================================================================

/**
 * Get all blog posts for a specific locale
 *
 * @param lang - Locale filter ('et' or 'en')
 * @returns Array of blog posts sorted by date (newest first)
 */
export async function getBlogPosts(lang: 'et' | 'en'): Promise<BlogPost[]> {
  const files = getMarkdownFiles('blog')

  const posts = await Promise.all(
    files.map(async (file) => {
      const post = await parseMarkdownFile<Omit<BlogPost, 'content'>>(file)
      return post as BlogPost
    })
  )

  // Filter by language and sort by date (newest first)
  return posts
    .filter((post) => post.lang === lang)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
}

/**
 * Get a single blog post by slug and locale
 *
 * @param slug - Post slug from frontmatter
 * @param lang - Locale ('et' or 'en')
 * @returns Blog post or null if not found
 */
export async function getBlogPost(slug: string, lang: 'et' | 'en'): Promise<BlogPost | null> {
  const files = getMarkdownFiles('blog')

  for (const file of files) {
    const post = await parseMarkdownFile<Omit<BlogPost, 'content'>>(file)

    if ((post as BlogPost).slug === slug && (post as BlogPost).lang === lang) {
      return post as BlogPost
    }
  }

  return null
}

/**
 * Get related blog posts based on matching tags
 *
 * @param currentSlug - Current post slug to exclude
 * @param currentTags - Tags to match against
 * @param lang - Locale filter
 * @param limit - Max number of related posts to return
 * @returns Array of related posts sorted by relevance
 */
export async function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  lang: 'et' | 'en',
  limit = 3
): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts(lang)

  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      post: p,
      score: (p.tags || []).filter((t) => currentTags.includes(t)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}

// ============================================================================
// PUBLIC API - SUPPORT TOPICS
// ============================================================================

/**
 * Support topic type matching frontmatter schema
 */
export interface SupportTopic {
  slug: string
  title: string
  description: string
  icon?: string
  order?: number
  lang: 'et' | 'en'
  content: string
}

/**
 * Get all support topics for a specific locale
 *
 * @param lang - Locale filter ('et' or 'en')
 * @returns Array of support topics sorted by order (ascending)
 */
export async function getSupportTopics(lang: 'et' | 'en'): Promise<SupportTopic[]> {
  const files = getMarkdownFiles('support')

  const topics = await Promise.all(
    files.map(async (file) => {
      const topic = await parseMarkdownFile<Omit<SupportTopic, 'content'>>(file)
      return topic as SupportTopic
    })
  )

  // Filter by language and sort by order (ascending)
  return topics
    .filter((topic) => topic.lang === lang)
    .sort((a, b) => (a.order || 99) - (b.order || 99))
}

/**
 * Get a single support topic by slug and locale
 *
 * @param slug - Topic slug from frontmatter
 * @param lang - Locale ('et' or 'en')
 * @returns Support topic or null if not found
 */
export async function getSupportTopic(
  slug: string,
  lang: 'et' | 'en'
): Promise<SupportTopic | null> {
  const files = getMarkdownFiles('support')

  for (const file of files) {
    const topic = await parseMarkdownFile<Omit<SupportTopic, 'content'>>(file)

    if ((topic as SupportTopic).slug === slug && (topic as SupportTopic).lang === lang) {
      return topic as SupportTopic
    }
  }

  return null
}

// ============================================================================
// PUBLIC API - INSIGHTS
// ============================================================================

/**
 * Insight type matching frontmatter schema
 */
export interface Insight {
  slug: string
  title: string
  description: string
  date: string
  category?: string
  image?: string
  author?: string
  lang: 'et' | 'en'
  tags?: string[]
  content: string
}

/**
 * Get all insights for a specific locale
 *
 * @param lang - Locale filter ('et' or 'en')
 * @returns Array of insights sorted by date (newest first)
 */
export async function getInsights(lang: 'et' | 'en'): Promise<Insight[]> {
  const files = getMarkdownFiles('insights')

  const insights = await Promise.all(
    files.map(async (file) => {
      const insight = await parseMarkdownFile<Omit<Insight, 'content'>>(file)
      return insight as Insight
    })
  )

  // Filter by language and sort by date (newest first)
  return insights
    .filter((insight) => insight.lang === lang)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
}

/**
 * Get a single insight by slug and locale
 *
 * @param slug - Insight slug from frontmatter
 * @param lang - Locale ('et' or 'en')
 * @returns Insight or null if not found
 */
export async function getInsight(slug: string, lang: 'et' | 'en'): Promise<Insight | null> {
  const files = getMarkdownFiles('insights')

  for (const file of files) {
    const insight = await parseMarkdownFile<Omit<Insight, 'content'>>(file)

    if ((insight as Insight).slug === slug && (insight as Insight).lang === lang) {
      return insight as Insight
    }
  }

  return null
}

// ============================================================================
// PUBLIC API - TOPICS
// ============================================================================

export interface TopicIndex {
  slug: string
  visualTitle: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  content: string
}

export interface TopicArticle {
  slug: string
  title: string
  author: string
  rank: number
  summary: string
  image: string
  seoTitle: string
  seoDesc: string
  date: string
  subTopic?: string
  faqSchema?: Array<{ question: string; answer: string }>
  content: string
}

export interface TopicTranslation {
  name: string
  slug: string
}

/**
 * Get all topic directory slugs (directory names)
 */
export function getTopicSlugs(): string[] {
  const topicsDir = path.join(contentDirectory, 'topics')
  if (!fs.existsSync(topicsDir)) return []
  return fs.readdirSync(topicsDir).filter((entry) => {
    const fullPath = path.join(topicsDir, entry)
    return fs.statSync(fullPath).isDirectory()
  })
}

/**
 * Get topic translations from .translations.yml
 */
export function getTopicTranslations(topicSlug: string): Record<string, TopicTranslation> {
  const filePath = path.join(contentDirectory, 'topics', topicSlug, '.translations.yml')
  if (!fs.existsSync(filePath)) return {}
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return yaml.load(fileContents) as Record<string, TopicTranslation>
}

/**
 * Get topic index page data (_index.md) for a given topic and locale
 */
export async function getTopicIndex(topicSlug: string, lang: string): Promise<TopicIndex | null> {
  const filePath = path.join(contentDirectory, 'topics', topicSlug, lang, '_index.md')
  if (!fs.existsSync(filePath)) return null

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content)

  return {
    slug: topicSlug,
    visualTitle: data.visual_title || '',
    seoTitle: data.seo_title || '',
    seoDescription: data.seo_description || '',
    seoKeywords: data.seo_keywords || '',
    content: htmlContent,
  }
}

/**
 * Get all articles for a topic in a given locale, sorted by rank
 */
export async function getTopicArticles(topicSlug: string, lang: string): Promise<TopicArticle[]> {
  const dirPath = path.join(contentDirectory, 'topics', topicSlug, lang)
  if (!fs.existsSync(dirPath)) return []

  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md') && f !== '_index.md')

  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dirPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const htmlContent = await markdownToHtml(content)

      return {
        slug: data.slug || file.replace('.md', ''),
        title: data.title || '',
        author: data.author || '',
        rank: data.rank || 99,
        summary: data.summary || '',
        image: data.image || '',
        seoTitle: data.seo_title || '',
        seoDesc: data.seo_desc || '',
        date: data.date || '',
        subTopic: data.sub_topic,
        faqSchema: data.faq_schema,
        content: htmlContent,
      } as TopicArticle
    })
  )

  return articles.sort((a, b) => a.rank - b.rank)
}

/**
 * Get a single topic article by slug
 */
export async function getTopicArticle(
  topicSlug: string,
  articleSlug: string,
  lang: string
): Promise<TopicArticle | null> {
  const articles = await getTopicArticles(topicSlug, lang)
  return articles.find((a) => a.slug === articleSlug) || null
}

// ============================================================================
// PUBLIC API - TOPICS FOR NAVIGATION
// ============================================================================

export interface NavTopic {
  slug: string
  name: string
  description: string
  href: string
}

/**
 * Get all topics formatted for navigation (Nav + Footer)
 * Combines .translations.yml (name, slug) with _index.md (seo_description)
 *
 * @param lang - Locale ('et', 'en', 'lv', 'uk')
 * @returns Array of topics with name, description, and href
 */
export async function getTopicsForNav(lang: string): Promise<NavTopic[]> {
  const topicSlugs = getTopicSlugs()

  const topics = await Promise.all(
    topicSlugs.map(async (topicSlug) => {
      // Get translations (name, slug)
      const translations = getTopicTranslations(topicSlug)
      const translation = translations[lang] || translations['en']

      // Get index page for description
      const index = await getTopicIndex(topicSlug, lang)

      if (!translation) return null

      return {
        slug: topicSlug,
        name: translation.name,
        description: index?.seoDescription || '',
        href: `/${lang}/topics/${topicSlug}`,
      }
    })
  )

  // Filter out nulls and return
  return topics.filter((t): t is NavTopic => t !== null)
}
