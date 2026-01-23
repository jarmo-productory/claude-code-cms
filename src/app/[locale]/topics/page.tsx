import type { Metadata } from 'next'
import { getTopicSlugs, getTopicArticles, getBlogPosts } from '@/lib/content'
import { mapTopicArticleToContentItem, mapBlogPostToContentItem } from '@/lib/content-mappers'
import { ContentIndexLayout } from '@/components/content/ContentIndexLayout'
import { buildContentTabs, buildContentSidebar } from '@/lib/content-nav'

const SUPPORTED_LOCALES = ['en', 'et', 'lv', 'ua']

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    en: 'All Topics | Agrello',
    et: 'Kõik teemad | Agrello',
    lv: 'Visas tēmas | Agrello',
    ua: 'Усі теми | Agrello',
  }
  const descriptions: Record<string, string> = {
    en: 'Browse all Agrello topics: e-signatures, contract management, document automation, and more.',
    et: 'Sirvi kõiki Agrello teemasid: e-allkirjad, lepinguhaldus, dokumendiautomaatika ja palju muud.',
    lv: 'Pārlūkojiet visas Agrello tēmas: e-paraksti, līgumu pārvaldība, dokumentu automatizācija un vairāk.',
    ua: 'Переглядайте всі теми Agrello: електронні підписи, управління контрактами, автоматизація документів та інше.',
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  }
}

export default async function TopicsHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const topicSlugs = getTopicSlugs()

  // Gather all articles from all topics
  const allItems = []
  for (const topicSlug of topicSlugs) {
    const articles = await getTopicArticles(topicSlug, locale)
    for (const article of articles) {
      allItems.push(mapTopicArticleToContentItem(article, topicSlug, locale))
    }
  }

  // Include blog posts in "All" view
  const blogLocale = locale === 'et' || locale === 'en' ? locale : 'en'
  const blogPosts = await getBlogPosts(blogLocale)
  for (const post of blogPosts) {
    allItems.push(mapBlogPostToContentItem(post, locale))
  }

  // Sort by date (newest first), then by rank
  allItems.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    if (dateB !== dateA) return dateB - dateA
    return (a.rank ?? 99) - (b.rank ?? 99)
  })

  const tabs = buildContentTabs(locale, 'all')
  const sidebar = buildContentSidebar(locale, 'all')

  const subtitles: Record<string, string> = {
    en: 'Resources and Insights',
    et: 'Ressursid ja ülevaated',
    lv: 'Resursi un ieskati',
    ua: 'Ресурси та огляди',
  }

  const titles: Record<string, string> = {
    en: 'All articles & resources',
    et: 'Kõik artiklid ja ressursid',
    lv: 'Visi raksti un resursi',
    ua: 'Усі статті та ресурси',
  }

  const emptyMessages: Record<string, string> = {
    en: 'No articles available yet.',
    et: 'Artikleid pole veel saadaval.',
    lv: 'Raksti vēl nav pieejami.',
    ua: 'Статті ще недоступні.',
  }

  return (
    <ContentIndexLayout
      items={allItems}
      locale={locale}
      featuredStrategy="rank"
      tabs={tabs}
      activeTab="all"
      sidebar={sidebar}
      subtitle={subtitles[locale] || subtitles.en}
      title={titles[locale] || titles.en}
      emptyMessage={emptyMessages[locale] || emptyMessages.en}
    />
  )
}
