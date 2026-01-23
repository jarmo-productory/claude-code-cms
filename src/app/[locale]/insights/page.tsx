import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getInsights } from '@/lib/content'
import { Card, Badge } from '@/components/ui'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insights - Agrello',
  description:
    'Industry insights, trends, and expert analysis on e-signatures, contract management, and digital transformation.',
}

const translations = {
  en: {
    overline: 'INSIGHTS',
    headline: 'Industry trends and analysis',
    description:
      'Stay informed with the latest insights on contract automation, e-signatures, and digital transformation.',
    readMore: 'Read more',
    noInsights: 'Insights coming soon...',
  },
  et: {
    overline: 'ÜLEVAATED',
    headline: 'Valdkonna trendid ja analüüs',
    description:
      'Püsi kursis viimaste ülevaadetega lepingute automatiseerimise, e-allkirjade ja digitaalse transformatsiooni kohta.',
    readMore: 'Loe lähemalt',
    noInsights: 'Ülevaated tulekul...',
  },
}

function formatDate(dateString: string, lang: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(lang === 'et' ? 'et-EE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const t = translations[lang] || translations.en

  const insights = await getInsights(lang)

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

      {/* Insights Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {insights.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <Link key={insight.slug} href={`/${locale}/insights/${insight.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    {/* Image */}
                    {insight.image && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {insight.category && (
                        <Badge variant="default" className="mb-3">
                          {insight.category}
                        </Badge>
                      )}

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                        {insight.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {insight.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {formatDate(insight.date, lang)}
                        </div>

                        <span className="text-brand-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          {t.readMore}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.noInsights}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
