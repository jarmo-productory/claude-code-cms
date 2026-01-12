import * as fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import remarkYoutube from './remark-youtube'

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
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(fullPath, file))
}

/**
 * Transform frontmatter image path from relative to absolute
 */
function transformFrontmatterImage(image: string | undefined): string {
  if (!image) return ''
  if (image.startsWith('./images/')) {
    return image.replace('./images/', '/images/blog-content/')
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
    .filter(post => post.lang === lang)
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
      score: p.tags.filter((t) => currentTags.includes(t)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}
