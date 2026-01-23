import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Styles | Agrello Styleguide',
  description: 'Brand colors, typography, and design tokens',
}

export default function StylesPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-4xl font-bold text-brand-dark mb-2">Styles</h1>
        <p className="text-lg text-gray-600">Brand colors, typography, spacing, and shadows</p>
      </header>

      {/* Brand Colors */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="bg-brand-dark h-24 rounded-lg mb-3 shadow-lg"></div>
            <p className="font-medium">Dark</p>
            <code className="text-sm text-gray-500">#272833</code>
            <p className="text-xs text-gray-400 mt-1">bg-brand-dark</p>
          </div>
          <div>
            <div className="bg-brand-primary h-24 rounded-lg mb-3 shadow-lg"></div>
            <p className="font-medium">Primary Blue</p>
            <code className="text-sm text-gray-500">#0d2ae6</code>
            <p className="text-xs text-gray-400 mt-1">bg-brand-primary</p>
          </div>
          <div>
            <div className="bg-brand-secondary h-24 rounded-lg mb-3 shadow-lg"></div>
            <p className="font-medium">Green Accent</p>
            <code className="text-sm text-gray-500">#2ee0ab</code>
            <p className="text-xs text-gray-400 mt-1">bg-brand-secondary</p>
          </div>
          <div>
            <div className="bg-brand-surface h-24 rounded-lg mb-3 shadow-lg border border-gray-200"></div>
            <p className="font-medium">Surface</p>
            <code className="text-sm text-gray-500">#f5f6fa</code>
            <p className="text-xs text-gray-400 mt-1">bg-brand-surface</p>
          </div>
        </div>
      </section>

      {/* Grey Palette */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Grey Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: '50', hex: '#f9fafb', class: 'bg-gray-50', border: true },
            { name: '100', hex: '#f2f4f7', class: 'bg-gray-100' },
            { name: '200', hex: '#eaecf0', class: 'bg-gray-200' },
            { name: '300', hex: '#d0d5dd', class: 'bg-gray-300' },
            { name: '400', hex: '#98a2b3', class: 'bg-gray-400' },
            { name: '500', hex: '#667085', class: 'bg-gray-500' },
            { name: '600', hex: '#475467', class: 'bg-gray-600' },
            { name: '700', hex: '#394152', class: 'bg-gray-700' },
            { name: '800', hex: '#1d1d22', class: 'bg-gray-800' },
            { name: '900', hex: '#00010d', class: 'bg-gray-900' },
          ].map((color) => (
            <div key={color.name}>
              <div
                className={`${color.class} h-16 rounded-lg mb-2 ${color.border ? 'border border-gray-200' : ''}`}
              ></div>
              <p className="text-sm font-medium">Gray {color.name}</p>
              <code className="text-xs text-gray-500">{color.hex}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Typography</h2>
        <p className="text-gray-600 mb-8">
          Montserrat is used for all text. Weight variations create hierarchy.
        </p>
        <div className="bg-white rounded-xl p-8 space-y-8">
          <div className="border-b border-gray-100 pb-6">
            <h1 className="text-6xl font-bold text-brand-dark mb-2">Display Heading</h1>
            <code className="text-sm text-gray-400">text-6xl font-bold (60px)</code>
          </div>
          <div className="border-b border-gray-100 pb-6">
            <h2 className="text-4xl font-bold text-brand-dark mb-2">Heading 1</h2>
            <code className="text-sm text-gray-400">text-4xl font-bold (36px)</code>
          </div>
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-2xl font-semibold text-brand-dark mb-2">Heading 2</h3>
            <code className="text-sm text-gray-400">text-2xl font-semibold (24px)</code>
          </div>
          <div className="border-b border-gray-100 pb-6">
            <h4 className="text-xl font-semibold text-brand-dark mb-2">Heading 3</h4>
            <code className="text-sm text-gray-400">text-xl font-semibold (20px)</code>
          </div>
          <div className="border-b border-gray-100 pb-6">
            <p className="text-lg text-gray-600 mb-2">
              Body Large - For introductions and lead text.
            </p>
            <code className="text-sm text-gray-400">text-lg (18px)</code>
          </div>
          <div className="border-b border-gray-100 pb-6">
            <p className="text-base text-gray-600 mb-2">
              Body - Default paragraph text for content.
            </p>
            <code className="text-sm text-gray-400">text-base (16px)</code>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Small - Captions, labels, and secondary text.
            </p>
            <code className="text-sm text-gray-400">text-sm (14px)</code>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Spacing Scale</h2>
        <div className="bg-white rounded-xl p-8">
          <div className="space-y-4">
            {[
              { name: '1', size: '4px', class: 'w-1' },
              { name: '2', size: '8px', class: 'w-2' },
              { name: '3', size: '12px', class: 'w-3' },
              { name: '4', size: '16px', class: 'w-4' },
              { name: '6', size: '24px', class: 'w-6' },
              { name: '8', size: '32px', class: 'w-8' },
              { name: '12', size: '48px', class: 'w-12' },
              { name: '16', size: '64px', class: 'w-16' },
              { name: '24', size: '96px', class: 'w-24' },
            ].map((space) => (
              <div key={space.name} className="flex items-center gap-4">
                <code className="text-sm text-gray-500 w-12">{space.name}</code>
                <div className={`${space.class} h-4 bg-brand-primary rounded`}></div>
                <span className="text-sm text-gray-400">{space.size}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Shadows</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white h-24 rounded-lg shadow-sm flex items-center justify-center">
            <code className="text-xs text-gray-400">shadow-sm</code>
          </div>
          <div className="bg-white h-24 rounded-lg shadow flex items-center justify-center">
            <code className="text-xs text-gray-400">shadow</code>
          </div>
          <div className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center">
            <code className="text-xs text-gray-400">shadow-md</code>
          </div>
          <div className="bg-white h-24 rounded-lg shadow-lg flex items-center justify-center">
            <code className="text-xs text-gray-400">shadow-lg</code>
          </div>
        </div>
      </section>
    </div>
  )
}
