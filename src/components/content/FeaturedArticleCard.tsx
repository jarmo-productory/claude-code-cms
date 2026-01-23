import Link from 'next/link'
import type { ContentItem } from '@/lib/content-types'
import { AuthorRow } from '@/components/ui/AuthorRow'
import { Badge } from '@/components/ui'

interface FeaturedArticleCardProps {
  item: ContentItem
  locale: string
  badgeText?: string
}

export function FeaturedArticleCard({
  item,
  locale,
  badgeText = 'FEATURED',
}: FeaturedArticleCardProps) {
  return (
    <Link href={item.href} className="group block mb-12">
      <div className="relative">
        {item.image && (
          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-brand-surface">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4">
              <Badge>{badgeText}</Badge>
            </div>
          </div>
        )}
        {!item.image && (
          <div className="mb-3">
            <Badge>{badgeText}</Badge>
          </div>
        )}
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
        {item.title}
      </h2>
      {item.description && (
        <p className="text-lg text-gray-600 leading-relaxed mb-4">{item.description}</p>
      )}
      <AuthorRow
        author={item.author}
        date={item.date}
        readingTime={item.readingTime}
        locale={locale}
        size="md"
      />
    </Link>
  )
}
