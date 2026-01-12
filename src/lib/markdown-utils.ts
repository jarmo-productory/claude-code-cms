import GithubSlugger from 'github-slugger'

export interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

/**
 * Extract table of contents from HTML content
 * Looks for h2, h3, h4 headings and builds a nested structure
 */
export function extractToc(htmlContent: string): TocItem[] {
  // Match h2-h4 tags and capture everything inside, including nested tags
  const headingRegex = /<h([2-4])([^>]*)>([\s\S]*?)<\/h[2-4]>/gi
  const slugger = new GithubSlugger()
  const items: TocItem[] = []

  let match
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10)
    // Strip HTML tags from the captured content to get plain text
    const rawText = match[3]
    const text = rawText.replace(/<[^>]*>/g, '').trim()

    if (text) {
      const id = slugger.slug(text)
      items.push({ id, text, level })
    }
  }

  return items
}

/**
 * Build nested TOC structure from flat list
 */
export function buildNestedToc(items: TocItem[]): TocItem[] {
  const result: TocItem[] = []
  const stack: TocItem[] = []

  for (const item of items) {
    const newItem = { ...item, children: [] }

    // Find the right parent level
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      result.push(newItem)
    } else {
      const parent = stack[stack.length - 1]
      if (!parent.children) parent.children = []
      parent.children.push(newItem)
    }

    stack.push(newItem)
  }

  return result
}

/**
 * Add IDs to headings in HTML content
 */
export function addHeadingIds(htmlContent: string): string {
  const slugger = new GithubSlugger()

  return htmlContent.replace(
    /<h([2-4])([^>]*)>([\s\S]*?)<\/h[2-4]>/gi,
    (match, level, attrs, innerContent) => {
      // Strip HTML tags to get plain text for slug generation
      const text = innerContent.replace(/<[^>]*>/g, '').trim()
      if (!text) return match

      const id = slugger.slug(text)
      // Check if id already exists in attrs
      if (attrs.includes('id=')) {
        return match
      }
      return `<h${level}${attrs} id="${id}">${innerContent}</h${level}>`
    }
  )
}

/**
 * Check if content has enough headings for TOC (threshold: 3)
 */
export function hasSufficientHeadings(htmlContent: string, threshold: number = 3): boolean {
  const items = extractToc(htmlContent)
  return items.length >= threshold
}
