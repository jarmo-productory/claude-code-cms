import type { ContentAuthor } from './content-types'

const AUTHORS: Record<string, ContentAuthor> = {
  'jarmo-tuisk': {
    name: 'Jarmo Tuisk',
  },
}

export function resolveAuthor(authorSlug: string | undefined): ContentAuthor {
  if (!authorSlug) {
    return { name: 'Agrello' }
  }

  if (AUTHORS[authorSlug]) {
    return AUTHORS[authorSlug]
  }

  // Unknown author: capitalize slug parts
  const name = authorSlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  return { name }
}
