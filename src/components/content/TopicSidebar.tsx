import Link from 'next/link'

interface SidebarTopic {
  label: string
  href: string
  isActive: boolean
}

interface TopicSidebarProps {
  title: string
  topics: SidebarTopic[]
}

export function TopicSidebar({ title, topics }: TopicSidebarProps) {
  return (
    <aside className="hidden lg:block sticky top-24 self-start w-52 shrink-0">
      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">{title}</h4>
      <nav className="flex flex-col gap-1.5">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className={`text-sm py-1.5 transition-colors ${
              topic.isActive
                ? 'font-bold text-brand-primary'
                : 'text-gray-600 hover:text-brand-dark'
            }`}
          >
            {topic.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
