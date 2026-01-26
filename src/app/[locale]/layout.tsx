import { LanguageProvider } from '@/context/LanguageContext'
import { TopicsProvider } from '@/context/TopicsContext'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { getTopicsForNav } from '@/lib/content'

export function generateStaticParams() {
  return [{ locale: 'et' }, { locale: 'en' }, { locale: 'lv' }, { locale: 'uk' }]
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
