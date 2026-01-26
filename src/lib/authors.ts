import type { ContentAuthor } from './content-types'

const AUTHORS: Record<string, ContentAuthor> = {
  'jarmo-tuisk': {
    name: 'Jarmo Tuisk',
    // avatarSrc: '/images/team/jarmo.webp', // Add when available
  },
  'harry-kask': {
    name: 'Harry Kask',
    avatarSrc: '/images/team/harry.webp',
  },
  team: {
    name: 'Agrello Team',
    // avatarSrc: '/images/team/agrello-logo.webp', // Add when available
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
