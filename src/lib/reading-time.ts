/**
 * Calculate reading time from HTML content
 * Average reading speed: 200 words per minute
 */
export function calculateReadingTime(htmlContent: string, wordsPerMinute: number = 200): number {
  // Strip HTML tags and get plain text
  const text = htmlContent.replace(/<[^>]*>/g, '')

  // Count words (split by whitespace)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length

  // Calculate minutes (minimum 1)
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))

  return minutes
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number, locale: 'et' | 'en'): string {
  if (locale === 'et') {
    return `${minutes} min lugemist`
  }
  return `${minutes} min read`
}
