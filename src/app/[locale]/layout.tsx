import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import { TopicsProvider } from '@/context/TopicsContext'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { getTopicsForNav } from '@/lib/content'
import { SITE_URL, SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from '@/lib/seo'

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE

  // Build hreflang alternates
  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}`
  }
  languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}`

  return {
    alternates: {
      canonical: `${SITE_URL}/${validLocale}`,
      languages,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const topics = await getTopicsForNav(locale)

  return (
    <LanguageProvider defaultLang={locale as 'et' | 'en' | 'lv' | 'uk'}>
      <TopicsProvider topics={topics}>
        <Navigation />
        {children}
        <Footer />
      </TopicsProvider>
    </LanguageProvider>
  )
}
