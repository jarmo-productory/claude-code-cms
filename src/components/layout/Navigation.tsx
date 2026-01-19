'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export function Navigation({ isStatic = false }: { isStatic?: boolean }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)

  // Handle scroll detection
  useEffect(() => {
    if (isStatic) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isStatic])

  type Lang = 'en' | 'et' | 'lv' | 'uk'
  type Dictionary = {
    features: string
    pricing: string
    resources: string
    blog: string
    help: string
    api: string
    contact: string
    login: string
    signup: string
  }

  const languages: Array<{ code: Lang; flag: string; label: string }> = [
    { code: 'en', flag: '/flags/gb.svg', label: 'English' },
    { code: 'et', flag: '/flags/ee.svg', label: 'Eesti' },
    { code: 'lv', flag: '/flags/lv.svg', label: 'Latviešu' },
    { code: 'uk', flag: '/flags/ua.svg', label: 'Українська' },
  ]

  // Determine current language from path or default to English
  const currentLangCode: Lang = languages.find(l => pathname?.startsWith(`/${l.code}`))?.code ?? 'en'
  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0]

  const dictionaries: Record<Lang, Dictionary> = {
    en: {
      features: 'Features',
      pricing: 'Pricing',
      resources: 'Resources',
      blog: 'Blog',
      help: 'Help Center',
      api: 'API Docs',
      contact: 'Contact us',
      login: 'Log in',
      signup: 'Try for free',
    },
    et: {
      features: 'Funktsionaalsus',
      pricing: 'Hinnad',
      resources: 'Ressursid',
      blog: 'Blogi',
      help: 'Abikeskus',
      api: 'API',
      contact: 'Võta ühendust',
      login: 'Logi sisse',
      signup: 'Proovi tasuta',
    },
    lv: {
      features: 'Funkcijas',
      pricing: 'Cenas',
      resources: 'Resursi',
      blog: 'Blogs',
      help: 'Palīdzības centrs',
      api: 'API',
      contact: 'Sazināties',
      login: 'Pieteikties',
      signup: 'Izmēģināt bez maksas',
    },
    uk: {
      features: 'Функції',
      pricing: 'Ціни',
      resources: 'Ресурси',
      blog: 'Блог',
      help: 'Центр допомоги',
      api: 'API',
      contact: 'Зв\'язатися',
      login: 'Увійти',
      signup: 'Спробувати',
    },
  }

  const dictionary = dictionaries[currentLangCode] ?? dictionaries.en

  const navItems = [
    { href: `/${currentLangCode}/features`, label: dictionary.features },
    { href: `/${currentLangCode}/pricing`, label: dictionary.pricing },
  ]

  const resourcesItems = [
    { href: `/${currentLangCode}/blog`, label: dictionary.blog },
    { href: `/${currentLangCode}/help`, label: dictionary.help },
    { href: `/${currentLangCode}/api`, label: dictionary.api },
  ]

  return (
    <nav
      className={`z-50 transition-all duration-300 ${
        isStatic
          ? 'relative w-full bg-white border-b border-gray-200'
          : `fixed top-0 left-0 right-0 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${currentLangCode}`} className="flex items-center cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Agrello"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLanguageMenuOpen(false)
                  setResourcesOpen(!resourcesOpen)
                }}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                className="flex items-center gap-1 text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
              >
                {dictionary.resources}
                <svg
                  className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${currentLangCode}/contact`}
              className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
            >
              {dictionary.contact}
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setResourcesOpen(false)
                  setLanguageMenuOpen(!languageMenuOpen)
                }}
                onBlur={() => setTimeout(() => setLanguageMenuOpen(false), 150)}
                className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Image
                  src={currentLang.flag}
                  alt={currentLang.label}
                  width={20}
                  height={15}
                  className="rounded-[2px]"
                />
                <span className="text-sm font-medium text-gray-700 uppercase">{currentLang.code}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors cursor-pointer ${
                        currentLang.code === lang.code ? 'bg-gray-50 font-medium text-brand-primary' : 'text-gray-700'
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={20}
                        height={15}
                        className="rounded-[2px] shadow-sm"
                      />
                      {lang.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Log in */}
            <Link
              href="/login"
              className="text-gray-700 hover:text-brand-primary transition-colors text-sm font-medium cursor-pointer"
            >
              {dictionary.login}
            </Link>

            {/* CTA Button */}
            <Button as="a" href="/signup" size="md">
              {dictionary.signup}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
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
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors py-3 px-2 rounded-lg cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Resources in mobile */}
              <div className="py-3 px-2">
                <p className="text-sm font-medium text-gray-500 mb-2">{dictionary.resources}</p>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-brand-primary py-2 pl-4 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href={`/${currentLangCode}/contact`}
                className="text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors py-3 px-2 rounded-lg cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dictionary.contact}
              </Link>

              {/* Language Flags Mobile */}
              <div className="flex items-center gap-3 py-3 px-2 border-t border-gray-100 mt-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    title={lang.label}
                    className="cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.label}
                      width={28}
                      height={18}
                      className="rounded-sm"
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
                <Button as="a" href="/login" variant="outline" size="md" onClick={() => setMobileMenuOpen(false)}>
                  {dictionary.login}
                </Button>
                <Button as="a" href="/signup" size="md" onClick={() => setMobileMenuOpen(false)}>
                  {dictionary.signup}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
