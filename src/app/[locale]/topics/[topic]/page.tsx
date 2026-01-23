import type { Metadata } from 'next'
import { getTopicSlugs, getTopicIndex, getTopicArticles } from '@/lib/content'
import { notFound } from 'next/navigation'
import { mapTopicArticleToContentItem } from '@/lib/content-mappers'
import { ContentIndexLayout } from '@/components/content/ContentIndexLayout'
import { buildContentTabs, buildContentSidebar } from '@/lib/content-nav'

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
  const items = articles.map((article) => mapTopicArticleToContentItem(article, topic, locale))

  const tabs = buildContentTabs(locale, topic)
  const sidebar = buildContentSidebar(locale, topic)

  const subtitles: Record<string, string> = {
    en: 'Resources and Insights',
    et: 'Ressursid ja ülevaated',
    lv: 'Resursi un ieskati',
    ua: 'Ресурси та огляди',
  }

  const emptyMessages: Record<string, string> = {
    en: 'No articles available for this topic yet.',
    et: 'Selle teema kohta pole veel artikleid.',
    lv: 'Šai tēmai vēl nav rakstu.',
    ua: 'Для цієї теми ще немає статей.',
  }

  return (
    <ContentIndexLayout
      items={items}
      locale={locale}
      featuredStrategy="rank"
      tabs={tabs}
      activeTab={topic}
      sidebar={sidebar}
      subtitle={subtitles[locale] || subtitles.en}
      title={index.visualTitle}
      description={index.seoDescription}
      emptyMessage={emptyMessages[locale] || emptyMessages.en}
    />
  )
}
