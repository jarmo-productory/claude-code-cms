import { LanguageProvider } from '@/context/LanguageContext'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export function generateStaticParams() {
  return [{ locale: 'et' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <LanguageProvider defaultLang={locale as 'et' | 'en'}>
      <Navigation />
      {children}
      <Footer lang={locale as 'et' | 'en'} />
    </LanguageProvider>
  )
}
