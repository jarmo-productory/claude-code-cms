import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getSupportTopic, getSupportTopics } from '@/lib/content'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const topic = await getSupportTopic(slug, lang)

  if (!topic) {
    return {
      title: 'Topic Not Found - Agrello Support',
    }
  }

  return {
    title: `${topic.title} - Agrello Support`,
    description: topic.description,
  }
}

export async function generateStaticParams() {
  const [enTopics, etTopics] = await Promise.all([getSupportTopics('en'), getSupportTopics('et')])

  const params: { locale: string; slug: string }[] = []

  enTopics.forEach((topic) => {
    params.push({ locale: 'en', slug: topic.slug })
  })

  etTopics.forEach((topic) => {
    params.push({ locale: 'et', slug: topic.slug })
  })

  return params
}

const translations = {
  en: {
    backToSupport: 'Back to Support',
    contactTitle: 'Need more help?',
    contactDescription: 'Our support team is ready to assist you.',
    contactCta: 'Contact Support',
  },
  et: {
    backToSupport: 'Tagasi tugisse',
    contactTitle: 'Vajad rohkem abi?',
    contactDescription: 'Meie tugimeeskond on valmis sind aitama.',
    contactCta: 'Võta ühendust',
  },
}

export default async function SupportTopicPage({ params }: PageProps) {
  const { locale, slug } = await params
  const lang = locale === 'et' || locale === 'en' ? locale : 'en'
  const t = translations[lang] || translations.en

  const topic = await getSupportTopic(slug, lang)

  if (!topic) {
    notFound()
  }

  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href={`/${locale}/support`}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToSupport}
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display tracking-tight">
            {topic.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">{topic.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article
            className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2 font-display">{t.contactTitle}</h2>
          <p className="text-gray-600 mb-6">{t.contactDescription}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors text-sm"
          >
            {t.contactCta}
          </Link>
        </div>
      </section>
    </main>
  )
}
