import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Styleguide',
  description: 'Component library and design system showcase',
}

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-brand-surface py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">
            Styleguide
          </h1>
          <p className="text-xl text-gray-600">
            Component library and design system showcase
          </p>
        </header>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <div className="bg-brand-dark h-24 rounded-lg mb-2 shadow-lg"></div>
              <p className="text-sm font-medium">Brand Dark</p>
              <code className="text-xs text-gray-500">brand-dark</code>
            </div>
            <div>
              <div className="bg-brand-primary h-24 rounded-lg mb-2 shadow-lg"></div>
              <p className="text-sm font-medium">Brand Primary</p>
              <code className="text-xs text-gray-500">brand-primary</code>
            </div>
            <div>
              <div className="bg-brand-secondary h-24 rounded-lg mb-2 shadow-lg"></div>
              <p className="text-sm font-medium">Brand Secondary</p>
              <code className="text-xs text-gray-500">brand-secondary</code>
            </div>
            <div>
              <div className="bg-brand-accent h-24 rounded-lg mb-2 shadow-lg"></div>
              <p className="text-sm font-medium">Brand Accent</p>
              <code className="text-xs text-gray-500">brand-accent</code>
            </div>
            <div>
              <div className="bg-brand-surface h-24 rounded-lg mb-2 shadow-lg border border-gray-200"></div>
              <p className="text-sm font-medium">Brand Surface</p>
              <code className="text-xs text-gray-500">brand-surface</code>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Typography
          </h2>
          <div className="space-y-6 bg-white p-8 rounded-lg">
            <div>
              <h1 className="text-6xl font-display font-bold text-brand-dark">
                Display Heading
              </h1>
              <code className="text-xs text-gray-500">font-display text-6xl</code>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-brand-dark">
                Heading 1
              </h2>
              <code className="text-xs text-gray-500">font-display text-4xl</code>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-brand-dark">
                Heading 2
              </h3>
              <code className="text-xs text-gray-500">font-display text-2xl</code>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                Body text - Sofia Sans provides excellent readability for longer content.
              </p>
              <code className="text-xs text-gray-500">font-sans text-lg</code>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Buttons
          </h2>
          <div className="space-y-8 bg-white p-8 rounded-lg">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div className="bg-brand-dark p-8 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-4 text-white">
                On Dark Background
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" onDark>
                  Primary
                </Button>
                <Button variant="secondary" onDark>
                  Secondary
                </Button>
                <Button variant="outline" onDark>
                  Outline
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Badges
          </h2>
          <div className="space-y-8 bg-white p-8 rounded-lg">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="status">Status</Badge>
                <Badge showDot>With Dot</Badge>
              </div>
            </div>
            <div className="bg-brand-dark p-8 rounded-lg">
              <h3 className="text-xl font-display font-bold mb-4 text-white">
                On Dark Background
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge onDark>Default</Badge>
                <Badge variant="outline" onDark>
                  Outline
                </Badge>
                <Badge variant="status" onDark>
                  Status
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Cards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-display font-bold mb-2">Default Card</h3>
              <p className="text-gray-600">
                Standard card with white background and subtle shadow.
              </p>
            </Card>
            <Card variant="highlight" hoverable>
              <h3 className="text-xl font-display font-bold mb-2">
                Highlight Card
              </h3>
              <p className="text-gray-600">
                Hover over this card to see the interactive effect.
              </p>
            </Card>
            <Card variant="frosted">
              <h3 className="text-xl font-display font-bold mb-2">
                Frosted Card
              </h3>
              <p className="text-gray-600">
                Glassmorphism effect with backdrop blur.
              </p>
            </Card>
            <Card padding="lg">
              <h3 className="text-xl font-display font-bold mb-2">Large Padding</h3>
              <p className="text-gray-600">
                Card with extra padding for more breathing room.
              </p>
            </Card>
          </div>
        </section>

        {/* Section Headers */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
            Section Headers
          </h2>
          <div className="space-y-12 bg-white p-8 rounded-lg">
            <SectionHeader
              overline="Features"
              headline="Everything you need"
              body="Build modern websites with our comprehensive component library."
            />
            <SectionHeader
              overline="About"
              headline="Centered alignment"
              body="Section headers can be centered for hero sections and feature blocks."
              align="center"
            />
          </div>
          <div className="bg-brand-dark p-8 rounded-lg mt-6">
            <SectionHeader
              overline="Dark Mode"
              headline="On dark backgrounds"
              body="Section headers automatically adapt to dark backgrounds."
              onDark
            />
          </div>
        </section>
      </div>
    </div>
  )
}
