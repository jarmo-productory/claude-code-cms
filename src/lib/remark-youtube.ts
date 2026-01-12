import { visit } from 'unist-util-visit'
import type { Root, Paragraph, Text, Link } from 'mdast'

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

/**
 * Get YouTube URL from paragraph if it only contains a YouTube link/URL
 */
function getYoutubeUrl(node: Paragraph): string | null {
  if (node.children.length !== 1) {
    return null
  }

  const child = node.children[0]

  // Case 1: Plain text URL
  if (child.type === 'text') {
    const text = (child as Text).value.trim()
    if (extractYoutubeId(text)) {
      return text
    }
  }

  // Case 2: Markdown link [text](url)
  if (child.type === 'link') {
    const link = child as Link
    if (extractYoutubeId(link.url)) {
      return link.url
    }
  }

  return null
}

/**
 * Remark plugin to convert standalone YouTube URLs to embedded iframes
 */
export default function remarkYoutube() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      const youtubeUrl = getYoutubeUrl(node)

      if (!youtubeUrl || parent === null || index === null) {
        return
      }

      const videoId = extractYoutubeId(youtubeUrl)

      if (!videoId) {
        return
      }

      // Replace paragraph with HTML node containing responsive YouTube embed
      const htmlNode = {
        type: 'html',
        value: `
<div class="youtube-embed-wrapper" style="position: relative; width: 100%; max-width: 100%; margin: 2rem 0;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
    <iframe
      src="https://www.youtube-nocookie.com/embed/${videoId}"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
      title="YouTube video"
    ></iframe>
  </div>
</div>`.trim(),
      }

      // @ts-ignore - remark types are complex, but this works
      parent.children[index] = htmlNode
    })
  }
}
