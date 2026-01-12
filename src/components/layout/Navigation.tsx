'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function Navigation() {
  const { lang, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: `/${lang}/#features`, label: t('Teenused', 'Features') },
    { href: `/${lang}/#pricing`, label: t('Hinnad', 'Pricing') },
    { href: `/${lang}/blog`, label: t('Blogi', 'Blog') },
    { href: '/styleguide', label: 'Styleguide' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-white font-display font-semibold text-lg">
              [YOUR_BRAND]
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/et"
                className={`px-2 py-1 rounded ${lang === 'et' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'}`}
              >
                ET
              </Link>
              <Link
                href="/en"
                className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'}`}
              >
                EN
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${lang}/#contact`}
              className="bg-brand-accent text-white px-5 py-2 rounded-xl font-semibold hover:bg-fuchsia-600 transition-colors text-sm"
            >
              {t('Võta ühendust', 'Contact Us')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Link href="/et" className={`text-sm ${lang === 'et' ? 'text-white' : 'text-white/50'}`}>
                  Eesti
                </Link>
                <Link href="/en" className={`text-sm ${lang === 'en' ? 'text-white' : 'text-white/50'}`}>
                  English
                </Link>
              </div>
              <Link
                href={`/${lang}/#contact`}
                className="bg-brand-accent text-white px-5 py-3 rounded-xl font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('Võta ühendust', 'Contact Us')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
