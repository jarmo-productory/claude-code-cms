#!/usr/bin/env npx ts-node

/**
 * Webflow CSV Import Script
 *
 * Imports blog articles from Webflow CMS CSV export into Next.js content structure.
 *
 * Features:
 * - Parses CSV export with all locales (en, et, lv)
 * - Downloads images from Webflow CDN
 * - Converts HTML to Markdown
 * - Generates frontmatter-based markdown files
 * - Organizes content by locale in staging folder
 *
 * Usage:
 *   npm run import-webflow <csv-file-path> [--locale=en,et,lv] [--limit=10]
 *
 * Examples:
 *   npm run import-webflow ./docs/webflow-migration/articles.csv
 *   npm run import-webflow ./articles.csv --locale=en --limit=5
 */

import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'
import TurndownService from 'turndown'
import * as https from 'https'
import * as http from 'http'

// ============================================================================
// Types
// ============================================================================

interface WebflowArticle {
  Name: string
  Slug: string
  'Collection ID': string
  'Item ID': string
  Archived: string
  Draft: string
  'Created On': string
  'Updated On': string
  'Published On': string
  'Meta Title': string
  'Meta Description': string
  Keyword: string
  'Main Image (1200x630)': string
  'Thumbnail image (520x273)': string
  Locale: string
  Topic: string
  'Sub-topic': string
  'Publish date': string
  'Post Summary': string
  'Reading time': string
  'Post Body': string
  Author: string
  'Support only': string
  'Featured on category page': string
  'Keyword cluster': string
  Tag: string
  Categories: string
}

interface BlogFrontmatter {
  title: string
  slug: string
  metaTitle: string
  description: string
  keyword: string
  image: string
  thumbnail: string
  lang: string
  topic: string
  subTopic: string
  date: string
  excerpt: string
  readingTime: string
  author: string
  supportOnly: boolean
  featured: boolean
  keywordCluster: string
  tags: string[]
  categories: string[]
}

interface ImportOptions {
  csvPath: string
  locales: string[]
  limit?: number
  includeDrafts?: boolean
  slugs?: string[]
}

interface ImportStats {
  total: number
  imported: number
  skipped: number
  failed: number
  images: number
  errors: string[]
}

// ============================================================================
// Configuration
// ============================================================================

const OUTPUT_DIR = path.join(process.cwd(), 'src', 'content', 'blog-import')
// Images stored in content folder for Ritemark preview AND public folder for Next.js
const CONTENT_IMAGES_DIR = path.join(OUTPUT_DIR, 'images')
const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog-content')
const DOWNLOADED_IMAGES = new Map<string, string>() // URL -> local path

// ============================================================================
// Utilities
// ============================================================================

function parseArgs(): ImportOptions {
  const args = process.argv.slice(2)

  if (args.length === 0 || args[0].startsWith('--')) {
    console.error('Error: CSV file path is required')
    console.log('Usage: npm run import-webflow <csv-file-path> [--locale=en,et,lv] [--limit=10]')
    process.exit(1)
  }

  const options: ImportOptions = {
    csvPath: args[0],
    locales: ['en', 'et', 'lv'],
  }

  for (let i = 1; i < args.length; i++) {
    if (args[i].startsWith('--locale=')) {
      options.locales = args[i].substring(9).split(',')
    } else if (args[i].startsWith('--limit=')) {
      options.limit = parseInt(args[i].substring(8), 10)
    } else if (args[i] === '--include-drafts') {
      options.includeDrafts = true
    } else if (args[i].startsWith('--slugs=')) {
      options.slugs = args[i].substring(8).split(',')
    }
  }

  return options
}

function log(message: string, indent: number = 0) {
  const prefix = '  '.repeat(indent)
  console.log(`${prefix}${message}`)
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return new Date().toISOString().split('T')[0]
    }
    return date.toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

function parseBoolean(value: string): boolean {
  return value?.toLowerCase() === 'true'
}

function parseTags(value: string): string[] {
  if (!value) return []
  return value
    .split(';')
    .map((t) => t.trim())
    .filter(Boolean)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// ============================================================================
// Image Handling
// ============================================================================

async function downloadImage(url: string, articleSlug: string): Promise<string> {
  // Check if already downloaded
  if (DOWNLOADED_IMAGES.has(url)) {
    return DOWNLOADED_IMAGES.get(url)!
  }

  try {
    // Extract filename from URL
    const urlPath = new URL(url).pathname
    const ext = path.extname(urlPath) || '.png'
    const urlFilename = path.basename(urlPath, ext)

    // Use URL hash for unique filename (Webflow uses hashes)
    const filename = `${urlFilename}${ext}`
    const contentPath = path.join(CONTENT_IMAGES_DIR, filename)
    const publicPath = path.join(PUBLIC_IMAGES_DIR, filename)
    // Use relative path for Ritemark compatibility (transformed at build time)
    const relativePath = `./images/${filename}`

    // Skip if file already exists in both locations
    if (fs.existsSync(contentPath) && fs.existsSync(publicPath)) {
      DOWNLOADED_IMAGES.set(url, relativePath)
      return relativePath
    }

    // Download image to buffer first
    const protocol = url.startsWith('https') ? https : http

    const buffer = await new Promise<Buffer>((resolve, reject) => {
      protocol
        .get(url, (response) => {
          if (response.statusCode === 200) {
            const chunks: Buffer[] = []
            response.on('data', (chunk) => chunks.push(chunk))
            response.on('end', () => resolve(Buffer.concat(chunks)))
          } else {
            reject(new Error(`Failed to download: ${response.statusCode}`))
          }
        })
        .on('error', reject)
    })

    // Write to both locations for Ritemark preview AND Next.js serving
    fs.writeFileSync(contentPath, buffer)
    fs.writeFileSync(publicPath, buffer)

    DOWNLOADED_IMAGES.set(url, relativePath)
    return relativePath
  } catch (error) {
    console.warn(
      `    Warning: Failed to download image ${url}: ${error instanceof Error ? error.message : error}`
    )
    return '' // Return empty string on failure
  }
}

async function downloadInlineImages(html: string, articleSlug: string): Promise<string> {
  const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g
  let modifiedHtml = html
  const matches = [...html.matchAll(imgRegex)]

  for (const match of matches) {
    const cdnUrl = match[1]

    // Only process Webflow CDN URLs
    if (
      cdnUrl.includes('cdn.prod.website-files.com') ||
      cdnUrl.includes('uploads-ssl.webflow.com')
    ) {
      const localPath = await downloadImage(cdnUrl, articleSlug)
      if (localPath) {
        modifiedHtml = modifiedHtml.replace(cdnUrl, localPath)
      }
    }
  }

  return modifiedHtml
}

// ============================================================================
// HTML to Markdown Conversion
// ============================================================================

function initTurndown(): TurndownService {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
  })

  // Preserve YouTube embeds
  turndown.addRule('youtube', {
    filter: (node) => {
      return node.nodeName === 'IFRAME' && node.getAttribute('src')?.includes('youtube.com/embed')
    },
    replacement: (content, node) => {
      const src = (node as HTMLElement).getAttribute('src') || ''
      const videoId = src.match(/embed\/([^?]+)/)?.[1]
      return videoId ? `\n\n[YouTube Video](https://www.youtube.com/watch?v=${videoId})\n\n` : ''
    },
  })

  return turndown
}

function convertHtmlToMarkdown(html: string): string {
  if (!html) return ''

  const turndown = initTurndown()

  try {
    return turndown.turndown(html).trim()
  } catch (error) {
    console.warn(`    Warning: HTML conversion failed, keeping as raw HTML`)
    return html
  }
}

// ============================================================================
// Article Processing
// ============================================================================

function mapArticleToFrontmatter(article: WebflowArticle): BlogFrontmatter {
  return {
    title: article.Name,
    slug: article.Slug,
    metaTitle: article['Meta Title'] || article.Name,
    description: article['Meta Description'],
    keyword: article.Keyword,
    image: '', // Will be set after download
    thumbnail: '', // Will be set after download
    lang: article.Locale,
    topic: article.Topic,
    subTopic: article['Sub-topic'],
    date: formatDate(article['Publish date']),
    excerpt: article['Post Summary'],
    readingTime: article['Reading time'],
    author: article.Author,
    supportOnly: parseBoolean(article['Support only']),
    featured: parseBoolean(article['Featured on category page']),
    keywordCluster: article['Keyword cluster'],
    tags: parseTags(article.Tag),
    categories: parseTags(article.Categories),
  }
}

async function processArticle(article: WebflowArticle, stats: ImportStats): Promise<void> {
  try {
    log(`Processing: ${article.Name} [${article.Locale}]`, 1)

    // Map to frontmatter
    const frontmatter = mapArticleToFrontmatter(article)

    // Download featured images
    if (article['Main Image (1200x630)']) {
      frontmatter.image = await downloadImage(article['Main Image (1200x630)'], article.Slug)
      if (frontmatter.image) stats.images++
    }

    if (article['Thumbnail image (520x273)']) {
      frontmatter.thumbnail = await downloadImage(
        article['Thumbnail image (520x273)'],
        article.Slug
      )
      if (frontmatter.thumbnail) stats.images++
    }

    // Download inline images and convert HTML to Markdown
    let processedHtml = article['Post Body']
    if (processedHtml) {
      processedHtml = await downloadInlineImages(processedHtml, article.Slug)

      // Count inline images
      const inlineImageCount = (processedHtml.match(/\/images\/blog-import\//g) || []).length - 2 // Subtract featured images
      stats.images += Math.max(0, inlineImageCount)
    }

    const content = convertHtmlToMarkdown(processedHtml)

    // Generate markdown file
    const markdown = generateMarkdown(frontmatter, content)

    // Write file (flat structure, locale in frontmatter - matches productory pattern)
    // This keeps images and markdown at same level for ./images/ relative paths to work
    const filename = `${article.Slug}-${article.Locale}.md`
    const filepath = path.join(OUTPUT_DIR, filename)

    fs.writeFileSync(filepath, markdown, 'utf-8')

    stats.imported++
    log(`✓ Imported: ${filename}`, 2)
  } catch (error) {
    stats.failed++
    const errorMsg = `Failed to process ${article.Name}: ${error instanceof Error ? error.message : error}`
    stats.errors.push(errorMsg)
    log(`✗ ${errorMsg}`, 2)
  }
}

function generateMarkdown(frontmatter: BlogFrontmatter, content: string): string {
  const fm = {
    ...frontmatter,
    tags: frontmatter.tags.length > 0 ? frontmatter.tags : undefined,
    categories: frontmatter.categories.length > 0 ? frontmatter.categories : undefined,
  }

  // Build YAML frontmatter
  let yaml = '---\n'
  for (const [key, value] of Object.entries(fm)) {
    if (value === undefined || value === '') continue

    if (Array.isArray(value)) {
      yaml += `${key}:\n`
      value.forEach((item) => {
        yaml += `  - ${item}\n`
      })
    } else if (typeof value === 'boolean') {
      yaml += `${key}: ${value}\n`
    } else {
      // Escape quotes in string values
      const escaped = String(value).replace(/"/g, '\\"')
      yaml += `${key}: "${escaped}"\n`
    }
  }
  yaml += '---\n\n'

  return yaml + content
}

// ============================================================================
// Main Import Logic
// ============================================================================

async function importArticles(options: ImportOptions): Promise<void> {
  console.log('\n🚀 Webflow CSV Import\n')
  console.log(`CSV File: ${options.csvPath}`)
  console.log(`Locales: ${options.locales.join(', ')}`)
  if (options.limit) console.log(`Limit: ${options.limit}`)
  console.log('')

  // Validate CSV file exists
  if (!fs.existsSync(options.csvPath)) {
    throw new Error(`CSV file not found: ${options.csvPath}`)
  }

  // Create output directories
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }
  // Create both image directories (content for Ritemark, public for Next.js)
  if (!fs.existsSync(CONTENT_IMAGES_DIR)) {
    fs.mkdirSync(CONTENT_IMAGES_DIR, { recursive: true })
  }
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true })
  }

  // Parse CSV
  log('📖 Reading CSV...')
  const csvContent = fs.readFileSync(options.csvPath, 'utf-8')
  const records: WebflowArticle[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  })

  log(`Found ${records.length} articles\n`)

  // Filter articles
  let articles = records.filter((article) => {
    // If specific slugs requested, only include those
    if (options.slugs && options.slugs.length > 0) {
      return options.slugs.includes(article.Slug)
    }

    // Skip archived posts (always skip archived)
    if (parseBoolean(article.Archived)) {
      return false
    }

    // Skip draft posts unless --include-drafts is set
    if (parseBoolean(article.Draft) && !options.includeDrafts) {
      return false
    }

    // Filter by locale
    if (!options.locales.includes(article.Locale)) {
      return false
    }

    // Check required fields
    if (!article.Name || !article.Slug) {
      return false
    }

    return true
  })

  log(`After filtering: ${articles.length} articles`)

  // Apply limit
  if (options.limit && options.limit > 0) {
    articles = articles.slice(0, options.limit)
    log(`Limited to: ${articles.length} articles\n`)
  }

  // Statistics
  const stats: ImportStats = {
    total: articles.length,
    imported: 0,
    skipped: 0,
    failed: 0,
    images: 0,
    errors: [],
  }

  // Group by locale for better output
  const byLocale = new Map<string, WebflowArticle[]>()
  articles.forEach((article) => {
    const locale = article.Locale
    if (!byLocale.has(locale)) {
      byLocale.set(locale, [])
    }
    byLocale.get(locale)!.push(article)
  })

  // Process articles by locale
  for (const [locale, localeArticles] of byLocale) {
    log(`\n📝 Processing ${locale.toUpperCase()} (${localeArticles.length} articles)\n`)

    for (const article of localeArticles) {
      await processArticle(article, stats)
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60))
  console.log('✅ Import Complete\n')
  console.log(`Total articles: ${stats.total}`)
  console.log(`Imported: ${stats.imported}`)
  console.log(`Failed: ${stats.failed}`)
  console.log(`Images downloaded: ${stats.images}`)
  console.log('')
  console.log(`Output: ${OUTPUT_DIR}`)
  console.log(`Images (Ritemark): ${CONTENT_IMAGES_DIR}`)
  console.log(`Images (Next.js):  ${PUBLIC_IMAGES_DIR}`)

  if (stats.errors.length > 0) {
    console.log('\n⚠️  Errors:')
    stats.errors.forEach((error) => console.log(`  - ${error}`))
  }

  console.log('\n' + '='.repeat(60))
  console.log('\n📂 Next Steps:\n')
  console.log('1. Review imported content (flat structure with locale suffix):')
  console.log(`   ls -la ${OUTPUT_DIR}/*.md`)
  console.log('')
  console.log('2. Review images (stored in both locations):')
  console.log(`   ls -la ${CONTENT_IMAGES_DIR}  # Ritemark preview`)
  console.log(`   ls -la ${PUBLIC_IMAGES_DIR}   # Next.js serving`)
  console.log('')
  console.log('3. Test in dev server:')
  console.log('   npm run dev')
  console.log('')
  console.log('4. Move approved content to production:')
  console.log('   mv src/content/blog-import/* src/content/blog/')
  console.log('   # Images already in public/images/blog-content/ (no move needed)')
  console.log('')
}

// ============================================================================
// Entry Point
// ============================================================================

async function main() {
  try {
    const options = parseArgs()
    await importArticles(options)
  } catch (error) {
    console.error('\n❌ Import failed:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

main()
