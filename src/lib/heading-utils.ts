function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u00C0-\u024F]+/gi, '-')
    .replace(/^-|-$/g, '')
}

export function generateHeadingIds(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, content) => {
    const text = content.replace(/<[^>]+>/g, '').trim()
    const id = slugify(text)
    if (attrs.includes('id="')) return match
    return `<h2${attrs} id="${id}">${content}</h2>`
  })
}

/**
 * Transform blockquotes with callout markers into styled callout divs.
 * Supports: [!INFO], [!WARNING], [!SUCCESS], [!ERROR]
 */
export function processCallouts(html: string): string {
  return html.replace(
    /<blockquote>\s*<p>\[!(INFO|WARNING|SUCCESS|ERROR)\]\s*([\s\S]*?)<\/blockquote>/gi,
    (_, type, rest) => {
      const variant = type.toLowerCase()
      return `<div class="callout callout-${variant}"><p>${rest}</div>`
    }
  )
}

/**
 * Process all content transformations: heading IDs + callouts
 */
export function processArticleContent(html: string): string {
  let result = generateHeadingIds(html)
  result = processCallouts(result)
  return result
}
