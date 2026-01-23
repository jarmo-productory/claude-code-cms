import type { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Agrello Styleguide',
  description: 'Design system and component library for Agrello',
}

const sections = [
  {
    title: 'Styles',
    href: '/styleguide/styles',
    description: 'Brand colors, grey palette, typography, spacing, and shadows.',
    items: ['4 brand colors', '10-step grey scale', 'Montserrat typography', 'Spacing & shadows'],
  },
  {
    title: 'Elements',
    href: '/styleguide/elements',
    description: 'Atomic UI elements - the smallest building blocks.',
    items: ['Buttons (4 variants)', 'Badges', 'Inputs', 'Links'],
  },
  {
    title: 'Components',
    href: '/styleguide/components',
    description: 'Composite components built from atomic elements.',
    items: ['Cards (3 variants)', 'Section headers', 'Feature cards'],
  },
  {
    title: 'Layouts',
    href: '/styleguide/layouts',
    description: 'Grid systems, containers, and page patterns.',
    items: ['Container widths', 'Grid systems', 'Section spacing', 'Page shells'],
  },
]

export default function StyleguideOverview() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Agrello Design System</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A comprehensive library of styles, elements, components, and layouts for building
          consistent Agrello experiences.
        </p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-primary text-white rounded-xl p-6">
          <div className="text-3xl font-bold">4</div>
          <div className="text-sm opacity-80">Brand Colors</div>
        </div>
        <div className="bg-brand-secondary text-brand-dark rounded-xl p-6">
          <div className="text-3xl font-bold">1</div>
          <div className="text-sm opacity-80">Font Family</div>
        </div>
        <div className="bg-brand-dark text-white rounded-xl p-6">
          <div className="text-3xl font-bold">7+</div>
          <div className="text-sm opacity-80">UI Elements</div>
        </div>
        <div className="bg-gray-100 text-brand-dark rounded-xl p-6">
          <div className="text-3xl font-bold">4</div>
          <div className="text-sm opacity-80">Grid Patterns</div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card hoverable padding="lg" className="h-full">
              <h2 className="text-xl font-bold text-brand-dark mb-2">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Link>
        ))}
      </div>

      {/* Brand Preview */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Brand at a Glance</h2>
        <div className="bg-white rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Colors
              </h3>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg bg-brand-dark" title="#272833"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-primary" title="#0d2ae6"></div>
                <div className="w-12 h-12 rounded-lg bg-brand-secondary" title="#2ee0ab"></div>
                <div
                  className="w-12 h-12 rounded-lg bg-brand-surface border border-gray-200"
                  title="#f5f6fa"
                ></div>
              </div>
            </div>
            {/* Typography */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Typography
              </h3>
              <p className="text-2xl font-bold text-brand-dark">Montserrat</p>
              <p className="text-gray-500">Regular, Semibold, Bold</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
