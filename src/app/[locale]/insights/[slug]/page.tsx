import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getInsight, getInsights } from '@/lib/content'
import { Badge } from '@/components/ui'
import { ArrowLeft, Calendar, User } from 'lucide-react'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const insight = await getInsight(slug, lang)

  if (!insight) {
    return {
      title: 'Insight Not Found - Agrello',
    }
  }

  return {
    title: `${insight.title} - Agrello Insights`,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      images: insight.image ? [insight.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const [enInsights, etInsights] = await Promise.all([getInsights('en'), getInsights('et')])

  const params: { locale: string; slug: string }[] = []

  enInsights.forEach((insight) => {
    params.push({ locale: 'en', slug: insight.slug })
  })

  etInsights.forEach((insight) => {
    params.push({ locale: 'et', slug: insight.slug })
  })

  return params
}

const translations = {
  en: {
    backToInsights: 'Back to Insights',
    by: 'By',
  },
  et: {
    backToInsights: 'Tagasi ülevaadetesse',
    by: 'Autor:',
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

export default async function InsightPage({ params }: PageProps) {
  const { locale, slug } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const t = translations[lang] || translations.en

  const insight = await getInsight(slug, lang)

  if (!insight) {
    notFound()
  }

  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToInsights}
          </Link>

          {insight.category && (
            <Badge variant="default" className="mb-4">
              {insight.category}
            </Badge>
          )}

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display tracking-tight mb-6">
            {insight.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
            {insight.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {t.by} {insight.author}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(insight.date, lang)}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {insight.image && (
        <section className="pb-8 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article
            className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4 font-display">
            {lang === 'et' ? 'Valmis alustama?' : 'Ready to get started?'}
          </h2>
          <Link
            href="https://docs.agrello.io/app/login?open_tab=sign_up"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
          >
            {lang === 'et' ? 'Proovi Agrellot tasuta' : 'Try Agrello for free'}
          </Link>
        </div>
      </section>
    </main>
  )
}
