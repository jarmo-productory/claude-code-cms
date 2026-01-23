import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/content'
import { mapBlogPostToContentItem } from '@/lib/content-mappers'
import { ContentIndexLayout } from '@/components/content/ContentIndexLayout'
import { buildContentTabs, buildContentSidebar } from '@/lib/content-nav'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and updates',
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const posts = await getBlogPosts(locale as 'et' | 'en')
  const items = posts.map((post) => mapBlogPostToContentItem(post, locale))

  const tabs = buildContentTabs(locale, 'blog')
  const sidebar = buildContentSidebar(locale, 'blog')

  const subtitles: Record<string, string> = {
    en: 'Resources and Insights',
    et: 'Ressursid ja ülevaated',
    lv: 'Resursi un ieskati',
    ua: 'Ресурси та огляди',
  }

  const titles: Record<string, string> = {
    en: 'Blog',
    et: 'Blogi',
    lv: 'Emuārs',
    ua: 'Блог',
  }

  const emptyMessages: Record<string, string> = {
    en: 'No blog posts yet.',
    et: 'Blogipostitusi pole veel.',
    lv: 'Emuāra ierakstu vēl nav.',
    ua: 'Записів у блозі ще немає.',
  }

  return (
    <ContentIndexLayout
      items={items}
      locale={locale}
      featuredStrategy="first"
      tabs={tabs}
      activeTab="blog"
      sidebar={sidebar}
      subtitle={subtitles[locale] || subtitles.en}
      title={titles[locale] || titles.en}
      emptyMessage={emptyMessages[locale] || emptyMessages.en}
    />
  )
}
