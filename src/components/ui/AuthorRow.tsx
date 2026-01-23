import type { ContentAuthor } from '@/lib/content-types'

interface AuthorRowProps {
  author: ContentAuthor
  date: string
  readingTime?: string
  locale: string
  size?: 'sm' | 'md'
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function formatDate(date: string, locale: string): string {
  const localeMap: Record<string, string> = {
    et: 'et-EE',
    en: 'en-US',
    lv: 'lv-LV',
    ua: 'uk-UA',
  }
  return new Date(date).toLocaleDateString(localeMap[locale] || 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function AuthorRow({ author, date, readingTime, locale, size = 'sm' }: AuthorRowProps) {
  const avatarSize = size === 'md' ? 'w-10 h-10 text-sm' : 'w-7 h-7 text-xs'

  return (
    <div className="flex items-center gap-3">
      {author.avatarSrc ? (
        <img
          src={author.avatarSrc}
          alt={author.name}
          className={`${avatarSize} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${avatarSize} rounded-full bg-brand-primary/10 text-brand-primary font-semibold flex items-center justify-center`}
        >
          {getInitials(author.name)}
        </div>
      )}
      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <span className="font-medium text-gray-700">{author.name}</span>
        <span>&middot;</span>
        <span>{formatDate(date, locale)}</span>
        {readingTime && (
          <>
            <span>&middot;</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
    </div>
  )
}
