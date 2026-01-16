import { Navigation } from '@/components/layout/Navigation'
import Link from 'next/link'

export const metadata = {
  title: 'Header Preview | Agrello Styleguide',
}

export default function HeaderPreviewPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section - Shows transparent header */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-primary font-semibold mb-4">HEADER PREVIEW</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Scroll down to see the header change
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The header starts transparent and becomes white with a shadow when you scroll.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/styleguide/layouts"
              className="text-brand-primary hover:underline"
            >
              ← Back to Layouts
            </Link>
          </div>
        </div>
      </section>

      {/* Content sections to enable scrolling */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Header Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Scroll Detection</h3>
              <p className="text-gray-600 text-sm">
                Uses useEffect hook to listen for scroll events. Triggers at 20px scroll.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Smooth Transition</h3>
              <p className="text-gray-600 text-sm">
                300ms CSS transition for background color and shadow changes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Resources Dropdown</h3>
              <p className="text-gray-600 text-sm">
                Click "Resources" in the nav to see the dropdown menu.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Mobile Menu</h3>
              <p className="text-gray-600 text-sm">
                Resize to mobile width to see the hamburger menu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Navigation Structure</h2>
          <div className="bg-white rounded-xl p-6">
            <pre className="text-sm text-gray-600 overflow-x-auto">
{`Left:    Logo (Agrello)
Center:  Features | Pricing | Resources ▼ | Contact us
Right:   🇬🇧 🇪🇪 🇱🇻 🇺🇦 | Log in | [Try for free]`}
            </pre>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">More Content</h2>
          <p className="text-gray-600 mb-6">
            This extra content is here so you can scroll and observe the header behavior.
          </p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-500">Content block {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">End of Preview</h2>
          <p className="text-white/70 mb-6">
            Scroll back up to see the header become transparent again.
          </p>
          <Link
            href="/styleguide/layouts"
            className="inline-block bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Back to Layouts
          </Link>
        </div>
      </section>
    </>
  )
}
