'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTopics } from '@/context/TopicsContext'

export function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  // Languages config
  type Lang = 'en' | 'et' | 'lv' | 'uk'
  type Dictionary = {
    madeIn: string
    company: string
    home: string
    pricing: string
    contact: string
    resources: string
    blog: string
    articles: string
    language: string
    copyright: string
    terms: string
    privacy: string
  }

  const languages: Array<{ code: Lang; label: string }> = [
    { code: 'en', label: 'English' },
    { code: 'et', label: 'Eesti' },
    { code: 'lv', label: 'Latviešu' },
    { code: 'uk', label: 'Українська' },
  ]

  // Determine current language
  const currentLangCode: Lang =
    languages.find((l) => pathname?.startsWith(`/${l.code}`))?.code ?? 'en'

  // Translations
  const dictionaries: Record<Lang, Dictionary> = {
    en: {
      madeIn: 'Made in Estonia',
      company: 'Company',
      home: 'HOME',
      pricing: 'PRICING',
      contact: 'CONTACT US',
      resources: 'Resources',
      blog: 'Blog',
      articles: 'Articles',
      language: 'Language',
      copyright: 'All rights reserved.',
      terms: 'Terms and conditions',
      privacy: 'Privacy policy',
    },
    et: {
      madeIn: 'Tehtud Eestis',
      company: 'Ettevõte',
      home: 'AVALEHT',
      pricing: 'HINNAD',
      contact: 'VÕTA ÜHENDUST',
      resources: 'Ressursid',
      blog: 'Blogi',
      articles: 'Artiklid',
      language: 'Keel',
      copyright: 'Kõik õigused kaitstud.',
      terms: 'Kasutustingimused',
      privacy: 'Privaatsuspoliitika',
    },
    lv: {
      madeIn: 'Ražots Igaunijā',
      company: 'Uzņēmums',
      home: 'SĀKUMS',
      pricing: 'CENAS',
      contact: 'SAZINĀTIES',
      resources: 'Resursi',
      blog: 'Blogs',
      articles: 'Raksti',
      language: 'Valoda',
      copyright: 'Visas tiesības aizsargātas.',
      terms: 'Lietošanas noteikumi',
      privacy: 'Privātuma politika',
    },
    uk: {
      madeIn: 'Зроблено в Естонії',
      company: 'Компанія',
      home: 'ГОЛОВНА',
      pricing: 'ЦІНИ',
      contact: 'КОНТАКТИ',
      resources: 'Ресурси',
      blog: 'Блог',
      articles: 'Статті',
      language: 'Мова',
      copyright: 'Всі права захищені.',
      terms: 'Умови використання',
      privacy: 'Політика конфіденційності',
    },
  }

  const dictionary = dictionaries[currentLangCode] ?? dictionaries.en

  // Get topics from context (dynamically loaded from /content/topics/)
  const topics = useTopics()

  // Social Links
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '/images/footer/facebook.svg' },
    { name: 'Twitter', href: '#', icon: '/images/footer/twitter.svg' },
    { name: 'LinkedIn', href: '#', icon: '/images/footer/linkedin.svg' },
  ]

  // Navigation Columns
  const navigation = {
    company: [
      { name: dictionary.home, href: `/${currentLangCode}` },
      { name: dictionary.pricing, href: `/${currentLangCode}/pricing` },
      { name: dictionary.contact, href: `/${currentLangCode}/contact` },
      { name: dictionary.blog, href: `/${currentLangCode}/blog` },
    ],
    // Resources from dynamic topics + blog + articles
    resources: [
      ...topics.map((topic) => ({ name: topic.name, href: topic.href })),
      { name: dictionary.blog, href: `/${currentLangCode}/blog` },
      { name: dictionary.articles, href: '/articles' },
    ],
  }

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand, Social, Trust */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Link href={`/${currentLangCode}`}>
                <Image
                  src="/logo-white.svg"
                  alt="Agrello"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <Image
                src="/images/footer/heart.svg"
                alt="Made in Estonia"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-white text-base">{dictionary.madeIn}</span>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center hover:bg-white transition-colors group"
                  aria-label={item.name}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="opacity-80 group-hover:opacity-100 group-hover:brightness-0"
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="inline-block">
                <Image
                  src="/images/footer/eidas.png"
                  alt="eIDAS compliant e-signatures"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <Image
                src="/images/footer/commerce.svg"
                alt="Eesti Kaubandus-Tööstuskoda"
                width={100}
                height={100}
                className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white/80 font-bold uppercase tracking-wide text-sm mb-6">
              {dictionary.company}
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 font-bold uppercase tracking-wide hover:text-brand-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white/80 font-bold uppercase tracking-wide text-sm mb-6">
              {dictionary.resources}
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            Copyright © Agrello {currentYear}. {dictionary.copyright}{' '}
            <Link href={`/${currentLangCode}/terms`} className="underline hover:text-gray-300">
              {dictionary.terms}
            </Link>
            .{' '}
            <Link href={`/${currentLangCode}/privacy`} className="underline hover:text-gray-300">
              {dictionary.privacy}
            </Link>
            .
          </p>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            {languages.map((lang, index) => (
              <div key={lang.code} className="flex items-center">
                {index > 0 && <span className="text-gray-700 mr-4">|</span>}
                <Link
                  href={`/${lang.code}`}
                  className={`uppercase hover:text-white transition-colors ${
                    lang.code === currentLangCode ? 'text-white font-bold' : 'text-gray-500'
                  }`}
                >
                  {lang.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
