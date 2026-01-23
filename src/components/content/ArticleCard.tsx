import Link from 'next/link'
import type { ContentItem } from '@/lib/content-types'
import { AuthorRow } from '@/components/ui/AuthorRow'

interface ArticleCardProps {
  item: ContentItem
  locale: string
}

export function ArticleCard({ item, locale }: ArticleCardProps) {
  return (
    <Link href={item.href} className="group block">
      {item.image && (
        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-brand-surface">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-display font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors flex items-start gap-1.5">
        <span>{item.title}</span>
        <svg
          className="w-4 h-4 mt-1.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </h3>
      {item.description && (
        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{item.description}</p>
      )}
      <AuthorRow
        author={item.author}
        date={item.date}
        readingTime={item.readingTime}
        locale={locale}
      />
    </Link>
  )
}
