export interface ContentAuthor {
  name: string
  avatarSrc?: string
}

export interface ContentItem {
  slug: string
  title: string
  description: string
  image: string
  href: string
  date: string
  readingTime?: string
  author: ContentAuthor
  featured?: boolean
  rank?: number
  category?: string
}
