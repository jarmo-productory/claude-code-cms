import type { ContentItem } from '@/lib/content-types'
import { ArticleCard } from './ArticleCard'

interface ArticleGridProps {
  items: ContentItem[]
  locale: string
  emptyMessage?: string
}

export function ArticleGrid({
  items,
  locale,
  emptyMessage = 'No articles yet.',
}: ArticleGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
      {items.map((item) => (
        <ArticleCard key={item.slug} item={item} locale={locale} />
      ))}
    </div>
  )
}
