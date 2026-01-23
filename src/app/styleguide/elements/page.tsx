import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'

export const metadata: Metadata = {
  title: 'Elements | Agrello Styleguide',
  description: 'Atomic UI elements - buttons, badges, inputs, and icons',
}

export default function ElementsPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-4xl font-bold text-brand-dark mb-2">Elements</h1>
        <p className="text-lg text-gray-600">
          Atomic UI elements - the building blocks of the interface
        </p>
      </header>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Buttons</h2>

        <div className="space-y-8">
          {/* Variants */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* On Dark */}
          <div className="bg-brand-dark rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4 text-white">On Dark Background</h3>
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

          {/* States */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Badges</h2>

        <div className="space-y-8">
          {/* Variants */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="status">Status</Badge>
            </div>
          </div>

          {/* With Dot */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">With Status Dot</h3>
            <div className="flex flex-wrap gap-4">
              <Badge showDot>Active</Badge>
              <Badge showDot variant="outline">
                Pending
              </Badge>
            </div>
          </div>

          {/* On Dark */}
          <div className="bg-brand-dark rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4 text-white">On Dark Background</h3>
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

      {/* Inputs */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Inputs</h2>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">Text Inputs</h3>
            <div className="max-w-md space-y-4">
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Password" type="password" placeholder="Enter password" />
              <Input
                label="With Helper"
                placeholder="Type here..."
                helperText="This is helper text"
              />
              <Input label="Disabled" placeholder="Cannot edit" disabled />
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Links</h2>

        <div className="bg-white rounded-xl p-8">
          <div className="space-y-4">
            <p>
              <a href="#" className="text-brand-primary hover:underline">
                Default link style
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                Subtle link style
              </a>
            </p>
            <p className="text-gray-600">
              Inline link in{' '}
              <a href="#" className="text-brand-primary hover:underline">
                paragraph text
              </a>{' '}
              example.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
