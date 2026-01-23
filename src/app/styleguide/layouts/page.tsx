import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BigHero, TwoColumnSection, CustomerLogos } from '@/components/sections'
import { StyleguideSubnav } from '@/components/styleguide/StyleguideSubnav'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Layouts | Agrello Styleguide',
  description: 'Grid systems, containers, and page layout patterns',
}

export default function LayoutsPage() {
  return (
    <div className="space-y-16 relative">
      <header>
        <h1 className="text-4xl font-bold text-brand-dark mb-2">Layouts</h1>
        <p className="text-lg text-gray-600">Grid systems, containers, and responsive patterns</p>
      </header>

      {/* Header Component */}
      <section id="header" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Header / Navigation</h2>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
          <Navigation isStatic />
          {/* Info */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-gray-500">Behavior:</span>
                <span className="ml-2 text-gray-700">Transparent → White on scroll</span>
              </div>
              <div>
                <span className="text-gray-500">Position:</span>
                <span className="ml-2 text-gray-700">Fixed top</span>
              </div>
              <div>
                <span className="text-gray-500">Height:</span>
                <span className="ml-2 text-gray-700">80px (h-20)</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/preview/header"
                className="inline-flex items-center gap-2 text-brand-primary hover:underline text-sm font-medium cursor-pointer"
              >
                View full preview with scroll
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Component:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded">
            src/components/layout/Navigation.tsx
          </code>
        </p>
      </section>

      {/* Hero Section */}
      <section id="hero" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Hero / BigHero</h2>
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
          <BigHero />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Component:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded">
            src/components/sections/BigHero.tsx
          </code>
        </p>
      </section>

      {/* Two Column Section */}
      <section id="two-column" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Two Column Section</h2>
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
          <TwoColumnSection
            overline="NEW GENERATION E-SIGNING AND CONTRACT MANAGEMENT"
            headline="Tired of wasting time on printing, scanning, and posting contracts?"
            description={
              <p>
                Say goodbye to the hassles of printing, scanning, and posting contracts for signing.
                Agrello streamlines your entire contract process, allowing you to{' '}
                <strong className="text-gray-900">
                  create, sign, and track agreements with just a few clicks.
                </strong>
              </p>
            }
            imageSrc="/images/sections/macbook-screenshot.webp"
            imageAlt="Agrello Dashboard"
            overlayText="Experience the ease and efficiency of digital contract management with Agrello"
            ctaText="Features"
            ctaHref="/features"
            imagePosition="right"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Component:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded">
            src/components/sections/TwoColumnSection.tsx
          </code>
        </p>
      </section>

      {/* Customer Logos Section */}
      <section id="customers" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Customer Logos</h2>
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
          <CustomerLogos />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Component:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded">
            src/components/sections/CustomerLogos.tsx
          </code>
        </p>
      </section>

      {/* Footer Component */}
      <section id="footer" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Footer</h2>
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <Footer />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Component:{' '}
          <code className="bg-gray-100 px-2 py-0.5 rounded">src/components/layout/Footer.tsx</code>
        </p>
      </section>

      {/* Container Widths */}
      <section id="container-widths" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Container Widths</h2>
        <div className="space-y-4">
          {[
            { name: 'max-w-4xl', width: '896px', desc: 'Blog content, articles' },
            { name: 'max-w-5xl', width: '1024px', desc: 'Standard content' },
            { name: 'max-w-6xl', width: '1152px', desc: 'Wide content' },
            { name: 'max-w-7xl', width: '1280px', desc: 'Full-width sections' },
          ].map((container) => (
            <div key={container.name} className="bg-white rounded-lg p-4">
              <div
                className={`${container.name} mx-auto bg-brand-primary/10 border-2 border-dashed border-brand-primary/30 rounded p-4`}
              >
                <div className="flex justify-between items-center">
                  <code className="text-sm font-medium">{container.name}</code>
                  <span className="text-sm text-gray-500">{container.width}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{container.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Systems */}
      <section id="grid-systems" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Grid Systems</h2>

        <div className="space-y-8">
          {/* 2 Column */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">2 Column Grid</h3>
            <code className="text-sm text-gray-500 block mb-4">grid md:grid-cols-2 gap-6</code>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">Column 1</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">Column 2</div>
            </div>
          </div>

          {/* 3 Column */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">3 Column Grid</h3>
            <code className="text-sm text-gray-500 block mb-4">grid md:grid-cols-3 gap-6</code>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">Column 1</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">Column 2</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">Column 3</div>
            </div>
          </div>

          {/* 4 Column */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">4 Column Grid</h3>
            <code className="text-sm text-gray-500 block mb-4">
              grid md:grid-cols-2 lg:grid-cols-4 gap-6
            </code>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">1</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">2</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">3</div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">4</div>
            </div>
          </div>

          {/* Asymmetric */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-4">Asymmetric Grid (Content + Sidebar)</h3>
            <code className="text-sm text-gray-500 block mb-4">grid lg:grid-cols-3 gap-8</code>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-100 rounded-lg p-6 text-center text-gray-500">
                Main Content (2/3)
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">
                Sidebar (1/3)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spacing */}
      <section id="spacing" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Section Spacing</h2>
        <div className="bg-white rounded-xl p-8">
          <p className="text-gray-600 mb-6">Consistent vertical rhythm between page sections.</p>
          <div className="space-y-4">
            {[
              { name: 'py-12', pixels: '48px', use: 'Compact sections' },
              { name: 'py-16', pixels: '64px', use: 'Standard sections' },
              { name: 'py-20', pixels: '80px', use: 'Feature sections' },
              { name: 'py-24', pixels: '96px', use: 'Hero sections' },
            ].map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <code className="text-sm font-medium w-20">{spacing.name}</code>
                <span className="text-sm text-gray-500 w-16">{spacing.pixels}</span>
                <span className="text-sm text-gray-400">{spacing.use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Breakpoints */}
      <section id="breakpoints" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Responsive Breakpoints</h2>
        <div className="bg-white rounded-xl p-8">
          <div className="space-y-3">
            {[
              { name: 'sm', width: '640px', desc: 'Small devices' },
              { name: 'md', width: '768px', desc: 'Tablets' },
              { name: 'lg', width: '1024px', desc: 'Laptops' },
              { name: 'xl', width: '1280px', desc: 'Desktops' },
              { name: '2xl', width: '1536px', desc: 'Large screens' },
            ].map((bp) => (
              <div key={bp.name} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <code className="text-sm font-medium text-brand-primary w-12">{bp.name}:</code>
                <span className="text-sm font-mono text-gray-600 w-20">{bp.width}</span>
                <span className="text-sm text-gray-400">{bp.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Shell Example */}
      <section id="page-shell" className="scroll-mt-40">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">Page Shell Pattern</h2>
        <div className="bg-gray-800 rounded-xl p-4 overflow-hidden">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            {/* Mock Header */}
            <div className="bg-brand-dark h-16 flex items-center px-6">
              <div className="w-24 h-6 bg-white/20 rounded"></div>
              <div className="ml-auto flex gap-4">
                <div className="w-16 h-4 bg-white/20 rounded"></div>
                <div className="w-16 h-4 bg-white/20 rounded"></div>
                <div className="w-20 h-8 bg-brand-primary rounded"></div>
              </div>
            </div>
            {/* Mock Hero */}
            <div className="bg-gradient-to-b from-brand-dark to-gray-900 py-16 px-6">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-32 h-4 bg-brand-secondary/40 rounded mx-auto mb-4"></div>
                <div className="w-64 h-8 bg-white/30 rounded mx-auto mb-4"></div>
                <div className="w-48 h-4 bg-white/20 rounded mx-auto"></div>
              </div>
            </div>
            {/* Mock Content */}
            <div className="py-12 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-100 rounded-lg h-32"></div>
                  <div className="bg-gray-100 rounded-lg h-32"></div>
                  <div className="bg-gray-100 rounded-lg h-32"></div>
                </div>
              </div>
            </div>
            {/* Mock Footer */}
            <div className="bg-gray-100 py-8 px-6">
              <div className="max-w-4xl mx-auto flex justify-between">
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
                <div className="flex gap-4">
                  <div className="w-12 h-4 bg-gray-300 rounded"></div>
                  <div className="w-12 h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Standard page structure: Header → Hero → Content Sections → Footer
        </p>
      </section>
    </div>
  )
}
