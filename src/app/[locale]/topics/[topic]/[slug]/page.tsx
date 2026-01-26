import type { Metadata } from 'next'
import {
  getTopicSlugs,
  getTopicArticles,
  getTopicArticle,
  getTopicTranslations,
} from '@/lib/content'
import { notFound } from 'next/navigation'
import { ArticleDetailPage } from '@/components/content/ArticleDetailPage'
import { resolveAuthor } from '@/lib/authors'
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time'
import { resolveImage } from '@/lib/content-mappers'

const SUPPORTED_LOCALES = ['en', 'et', 'lv', 'ua']

export async function generateStaticParams() {
  const topics = getTopicSlugs()
  const params: { locale: string; topic: string; slug: string }[] = []

  for (const topic of topics) {
    for (const locale of SUPPORTED_LOCALES) {
      const articles = await getTopicArticles(topic, locale)
      for (const article of articles) {
        params.push({ locale, topic, slug: article.slug })
      }
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string; slug: string }>
}): Promise<Metadata> {
  const { locale, topic, slug } = await params
  const article = await getTopicArticle(topic, slug, locale)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDesc || article.summary,
  }
}

export default async function TopicArticlePage({
  params,
}: {
  params: Promise<{ locale: string; topic: string; slug: string }>
}) {
  const { locale, topic, slug } = await params
  const article = await getTopicArticle(topic, slug, locale)

  if (!article) {
    notFound()
  }

  const translations = getTopicTranslations(topic)
  const topicName = translations[locale]?.name || topic

  const backLabel = locale === 'et' ? `Tagasi: ${topicName}` : `Back to ${topicName}`
  const author = resolveAuthor(article.author)
  const image = resolveImage(article.image || '') || '/images/blog-content/default-article.webp'
  const minutes = calculateReadingTime(article.content)
  const readingTime = formatReadingTime(minutes, locale as 'et' | 'en')

  return (
    <>
      <ArticleDetailPage
        locale={locale}
        backHref={`/${locale}/topics/${topic}`}
        backLabel={backLabel}
        title={article.title}
        date={article.date}
        author={author}
        content={article.content}
        image={image}
        readingTime={readingTime}
        description={article.summary}
        category={topicName}
        subcategory={article.subTopic}
      />
      {article.faqSchema && article.faqSchema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: article.faqSchema.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  )
}
