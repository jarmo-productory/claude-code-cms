'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { StyleguideSubnav } from '@/components/styleguide/StyleguideSubnav'

const navItems = [
  { href: '/styleguide', label: 'Overview' },
  { href: '/styleguide/styles', label: 'Styles' },
  { href: '/styleguide/elements', label: 'Elements' },
  { href: '/styleguide/components', label: 'Components' },
  { href: '/styleguide/layouts', label: 'Layouts' },
]

export default function StyleguideLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLayoutsPage = pathname?.startsWith('/styleguide/layouts')

  return (
    <div className="min-h-screen bg-brand-surface">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/styleguide" className="text-xl font-bold text-brand-dark">
              Agrello Styleguide
            </Link>
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-brand-primary transition-colors"
            >
              Back to site
            </a>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex gap-1 -mb-px">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/styleguide' && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-3 text-sm font-medium border-b-2 transition-colors
                    ${
                      isActive
                        ? 'border-brand-primary text-brand-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Secondary Navigation (only for Layouts) */}
        {isLayoutsPage && <StyleguideSubnav />}
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}
