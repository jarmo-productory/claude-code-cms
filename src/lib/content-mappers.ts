import type { ContentItem } from './content-types'
import type { TopicArticle, BlogPost } from './content'
import { resolveAuthor } from './authors'
import { calculateReadingTime, formatReadingTime } from './reading-time'

/**
 * Resolve a content image path to a usable URL.
 * Handles:
 * - Absolute paths: /assets/docs.webp → pass through
 * - HTTP URLs: https://... → pass through
 * - Relative paths: ../../../assets/filename.webp → /assets/filename.webp
 * - Webflow hash names: 68517e09..._684c10ec..._folders.webp → /assets/folders.webp
 * - Blog-style: ./images/filename.png → /images/blog-content/filename.png
 */
function resolveImage(image: string): string {
  if (!image) return ''
  if (image.startsWith('http')) return image
  if (image.startsWith('/')) return image

  // Blog-style relative: ./images/filename → /images/blog-content/filename
  if (image.startsWith('./images/')) {
    return image
      .replace('./images/', '/images/blog-content/')
      .replace(/%CC%[0-9a-fA-F]{2}/g, '')
      .replace(/%25[0-9a-fA-F]{2}|%20/g, '-')
  }

  // Relative path containing /assets/: extract filename
  if (image.includes('/assets/')) {
    const filename = image.split('/assets/').pop()
    if (filename) return `/assets/${filename}`
  }

  // Webflow hash-prefixed filename: [hex24]_[hex24]_realname.ext
  const webflowMatch = image.match(/^[0-9a-f]{20,}_[0-9a-f]{20,}_(.+)$/i)
  if (webflowMatch) {
    return `/assets/${webflowMatch[1]}`
  }

  return ''
}

export function mapTopicArticleToContentItem(
  article: TopicArticle,
  topicSlug: string,
  locale: string
): ContentItem {
  const author = resolveAuthor(article.author)
  const minutes = calculateReadingTime(article.content)
  const readingTime = formatReadingTime(minutes, locale as 'et' | 'en')

  return {
    slug: article.slug,
    title: article.title,
    description: article.summary,
    image: resolveImage(article.image),
    href: `/${locale}/topics/${topicSlug}/${article.slug}`,
    date: article.date,
    readingTime,
    author,
    rank: article.rank,
    category: topicSlug,
  }
}

export function mapBlogPostToContentItem(post: BlogPost, locale: string): ContentItem {
  const author = resolveAuthor(post.author)
  const minutes = calculateReadingTime(post.content)
  const readingTime = formatReadingTime(minutes, locale as 'et' | 'en')

  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: resolveImage(post.image),
    href: `/${locale}/blog/${post.slug}`,
    date: post.date,
    readingTime,
    author,
    featured: post.featured,
    category: post.category,
  }
}
