import { LanguageProvider } from '@/context/LanguageContext'

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
      {children}
    </LanguageProvider>
  )
}
