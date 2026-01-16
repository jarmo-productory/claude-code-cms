import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Components | Agrello Styleguide',
  description: 'Composite components - cards, section headers, and more',
}

export default function ComponentsPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-4xl font-bold text-brand-dark mb-2">Components</h1>
        <p className="text-lg text-gray-600">
          Composite components built from atomic elements
        </p>
      </header>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Cards</h2>

        <div className="space-y-8">
          {/* Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <h4 className="text-lg font-semibold mb-2">Default Card</h4>
                <p className="text-gray-600 text-sm">
                  Standard card with white background and subtle shadow.
                </p>
              </Card>
              <Card variant="highlight">
                <h4 className="text-lg font-semibold mb-2">Highlight Card</h4>
                <p className="text-gray-600 text-sm">
                  Card with brand accent border for emphasis.
                </p>
              </Card>
              <Card variant="frosted">
                <h4 className="text-lg font-semibold mb-2">Frosted Card</h4>
                <p className="text-gray-600 text-sm">
                  Glassmorphism effect with backdrop blur.
                </p>
              </Card>
            </div>
          </div>

          {/* Hoverable */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Interactive</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card hoverable>
                <h4 className="text-lg font-semibold mb-2">Hoverable</h4>
                <p className="text-gray-600 text-sm">
                  Hover to see the lift effect.
                </p>
              </Card>
              <Card hoverable variant="highlight">
                <h4 className="text-lg font-semibold mb-2">Hoverable Highlight</h4>
                <p className="text-gray-600 text-sm">
                  Combined with highlight variant.
                </p>
              </Card>
            </div>
          </div>

          {/* Padding */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Padding Sizes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card padding="sm">
                <h4 className="text-lg font-semibold mb-2">Small Padding</h4>
                <p className="text-gray-600 text-sm">Compact card.</p>
              </Card>
              <Card padding="md">
                <h4 className="text-lg font-semibold mb-2">Medium Padding</h4>
                <p className="text-gray-600 text-sm">Default padding.</p>
              </Card>
              <Card padding="lg">
                <h4 className="text-lg font-semibold mb-2">Large Padding</h4>
                <p className="text-gray-600 text-sm">Extra breathing room.</p>
              </Card>
            </div>
          </div>

          {/* Card with content */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Example: Feature Card</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card hoverable padding="lg">
                <Badge className="mb-4">New</Badge>
                <h4 className="text-xl font-semibold mb-2">Contract Automation</h4>
                <p className="text-gray-600 mb-4">
                  Automate your contract workflow with templates and bulk operations.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </Card>
              <Card hoverable padding="lg">
                <Badge variant="status" showDot className="mb-4">Popular</Badge>
                <h4 className="text-xl font-semibold mb-2">E-Signatures</h4>
                <p className="text-gray-600 mb-4">
                  Legally binding signatures that comply with eIDAS regulations.
                </p>
                <Button variant="outline" size="sm">Learn more</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Headers */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Section Headers</h2>

        <div className="space-y-8">
          {/* Left aligned */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6">Left Aligned (default)</h3>
            <SectionHeader
              overline="Features"
              headline="Everything you need"
              body="Build modern websites with our comprehensive component library."
            />
          </div>

          {/* Centered */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6">Centered</h3>
            <SectionHeader
              overline="Pricing"
              headline="Simple, transparent pricing"
              body="Choose the plan that fits your business needs."
              align="center"
            />
          </div>

          {/* On Dark */}
          <div className="bg-brand-dark rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-white">On Dark Background</h3>
            <SectionHeader
              overline="Get Started"
              headline="Ready to streamline your contracts?"
              body="Start your free trial today. No credit card required."
              align="center"
              onDark
            />
          </div>
        </div>
      </section>
    </div>
  )
}
