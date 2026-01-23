import type { ContentItem } from '@/lib/content-types'
import { CategoryTabs } from './CategoryTabs'
import { TopicSidebar } from './TopicSidebar'
import { FeaturedArticleCard } from './FeaturedArticleCard'
import { ArticleGrid } from './ArticleGrid'

interface ContentIndexLayoutProps {
  items: ContentItem[]
  locale: string
  featuredStrategy: 'rank' | 'first' | 'none'
  tabs?: { label: string; href: string; slug: string }[]
  activeTab?: string
  sidebar?: { label: string; href: string; isActive: boolean }[]
  sidebarTitle?: string
  emptyMessage?: string
  title?: string
  subtitle?: string
  description?: string
}

function pickFeatured(
  items: ContentItem[],
  strategy: 'rank' | 'first' | 'none'
): { featured: ContentItem | null; rest: ContentItem[] } {
  if (strategy === 'none' || items.length === 0) {
    return { featured: null, rest: items }
  }

  if (strategy === 'rank') {
    // Pick item with lowest rank (highest priority)
    const sorted = [...items].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99))
    return { featured: sorted[0], rest: sorted.slice(1) }
  }

  // strategy === 'first'
  return { featured: items[0], rest: items.slice(1) }
}

export function ContentIndexLayout({
  items,
  locale,
  featuredStrategy,
  tabs,
  activeTab,
  sidebar,
  sidebarTitle = 'EXPLORE TOPICS',
  emptyMessage,
  title,
  subtitle,
  description,
}: ContentIndexLayoutProps) {
  const { featured, rest } = pickFeatured(items, featuredStrategy)

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* 1. Category tabs - directly below main nav */}
      {tabs && activeTab !== undefined && (
        <div className="pt-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <CategoryTabs tabs={tabs} activeSlug={activeTab} />
          </div>
        </div>
      )}

      {/* 2. Hero heading section */}
      {title && (
        <header className={`${tabs ? 'pt-12 md:pt-16' : 'pt-32 md:pt-40'} pb-12 md:pb-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {subtitle && (
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-3">
                {subtitle}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-dark mb-4">
              {title}
            </h1>
            {description && <p className="text-lg text-gray-600 max-w-3xl">{description}</p>}
          </div>
        </header>
      )}

      {/* 3. Content area: sidebar + featured + grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12 pt-12">
          {sidebar && <TopicSidebar title={sidebarTitle} topics={sidebar} />}

          <div className="flex-1 min-w-0">
            {featured && <FeaturedArticleCard item={featured} locale={locale} />}
            <ArticleGrid items={rest} locale={locale} emptyMessage={emptyMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}
