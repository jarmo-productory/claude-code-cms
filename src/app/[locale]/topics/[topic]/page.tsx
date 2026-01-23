import type { Metadata } from 'next'
import { getTopicSlugs, getTopicIndex, getTopicArticles } from '@/lib/content'
import { notFound } from 'next/navigation'
import { ArticleListPage } from '@/components/content/ArticleListPage'

const SUPPORTED_LOCALES = ['en', 'et', 'lv', 'ua']

export async function generateStaticParams() {
  const topics = getTopicSlugs()
  const params: { locale: string; topic: string }[] = []

  for (const topic of topics) {
    for (const locale of SUPPORTED_LOCALES) {
      params.push({ locale, topic })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>
}): Promise<Metadata> {
  const { locale, topic } = await params
  const index = await getTopicIndex(topic, locale)

  if (!index) {
    return { title: 'Topic Not Found' }
  }

  return {
    title: index.seoTitle,
    description: index.seoDescription,
    keywords: index.seoKeywords,
  }
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>
}) {
  const { locale, topic } = await params
  const index = await getTopicIndex(topic, locale)

  if (!index) {
    notFound()
  }

  const articles = await getTopicArticles(topic, locale)

  return (
    <ArticleListPage
      title={index.visualTitle}
      description={index.seoDescription}
      locale={locale}
      basePath={`/${locale}/topics/${topic}`}
      articles={articles.map((article) => ({
        slug: article.slug,
        title: article.title,
        date: article.date,
        description: article.summary,
      }))}
      emptyMessage="No articles available for this topic yet."
    />
  )
}
