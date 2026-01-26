import type { Metadata } from 'next'
import Link from 'next/link'
import { getSupportTopics } from '@/lib/content'
import { Card } from '@/components/ui'
import { Rocket, PenTool, FileText, Settings, HelpCircle } from 'lucide-react'
import { generatePageMetadata, type Locale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/seo'

const pageMeta = {
  en: {
    title: 'Help Center - Support & Guides',
    description:
      'Find answers to your questions about Agrello. Browse our support topics for guides on e-signatures, templates, and contract management.',
    keywords: ['help center', 'support', 'guides', 'e-signature help', 'FAQ'],
  },
  et: {
    title: 'Abikeskus - Tugi ja juhendid',
    description:
      'Leia vastused oma küsimustele Agrello kohta. Sirvi tugiteemasid juhendite jaoks e-allkirjade, mallide ja lepinguhalduse kohta.',
    keywords: ['abikeskus', 'tugi', 'juhendid', 'e-allkirja abi', 'KKK'],
  },
  lv: {
    title: 'Palīdzības centrs - Atbalsts un ceļveži',
    description:
      'Atrodiet atbildes uz saviem jautājumiem par Agrello. Pārlūkojiet atbalsta tēmas, lai atrastu ceļvežus par e-parakstiem, veidnēm un līgumu pārvaldību.',
    keywords: ['palīdzības centrs', 'atbalsts', 'ceļveži', 'e-paraksta palīdzība', 'BUJ'],
  },
  uk: {
    title: 'Центр допомоги - Підтримка та посібники',
    description:
      'Знайдіть відповіді на ваші питання про Agrello. Перегляньте теми підтримки для посібників з е-підписів, шаблонів та управління контрактами.',
    keywords: ['центр допомоги', 'підтримка', 'посібники', 'допомога з е-підписом', 'FAQ'],
  },
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
  const meta = pageMeta[validLocale] || pageMeta.en

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale: validLocale,
    path: 'support',
    keywords: meta.keywords,
  })
}

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  HelpCircle: <HelpCircle className="w-6 h-6" />,
}

const translations = {
  en: {
    overline: 'HELP CENTER',
    headline: 'How can we help you?',
    description: 'Find guides, tutorials, and answers to common questions about using Agrello.',
    contactTitle: 'Still need help?',
    contactDescription: "Can't find what you're looking for? Our support team is here to help.",
    contactCta: 'Contact Support',
  },
  et: {
    overline: 'ABIKESKUS',
    headline: 'Kuidas saame aidata?',
    description:
      'Leia juhendid, õpetused ja vastused levinud küsimustele Agrello kasutamise kohta.',
    contactTitle: 'Vajad veel abi?',
    contactDescription: 'Ei leia otsitut? Meie tugimeeskond on siin, et aidata.',
    contactCta: 'Võta ühendust',
  },
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const t = translations[lang] || translations.en

  const topics = await getSupportTopics(lang)

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
            {t.overline}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            {t.headline}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.description}</p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {topics.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link key={topic.slug} href={`/${locale}/support/${topic.slug}`}>
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        {topic.icon ? (
                          iconMap[topic.icon] || <HelpCircle className="w-6 h-6" />
                        ) : (
                          <HelpCircle className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Support topics coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-display">
            {t.contactTitle}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t.contactDescription}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
          >
            {t.contactCta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
