import Link from 'next/link'

interface Tab {
  label: string
  href: string
  slug: string
}

interface CategoryTabsProps {
  tabs: Tab[]
  activeSlug: string
}

export function CategoryTabs({ tabs, activeSlug }: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {tabs.map((tab) => {
          const isActive = tab.slug === activeSlug
          return (
            <Link
              key={tab.slug}
              href={tab.href}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-brand-dark text-white'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
