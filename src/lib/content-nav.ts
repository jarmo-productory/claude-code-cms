import { getTopicSlugs, getTopicTranslations } from './content'

const BLOG_LABELS: Record<string, string> = {
  en: 'Blog',
  et: 'Blogi',
  lv: 'Emuārs',
  ua: 'Блог',
}

const ALL_LABELS: Record<string, string> = {
  en: 'All',
  et: 'Kõik',
  lv: 'Visi',
  ua: 'Усі',
}

export function buildContentTabs(locale: string, activeSlug: string) {
  const topicSlugs = getTopicSlugs()

  const tabs = [
    { label: ALL_LABELS[locale] || 'All', href: `/${locale}/topics`, slug: 'all' },
    { label: BLOG_LABELS[locale] || 'Blog', href: `/${locale}/blog`, slug: 'blog' },
  ]

  for (const slug of topicSlugs) {
    const translations = getTopicTranslations(slug)
    const name = translations[locale]?.name || slug
    tabs.push({ label: name, href: `/${locale}/topics/${slug}`, slug })
  }

  return tabs
}

export function buildContentSidebar(locale: string, activeSlug: string) {
  const topicSlugs = getTopicSlugs()

  const items = [
    {
      label: ALL_LABELS[locale] || 'All',
      href: `/${locale}/topics`,
      isActive: activeSlug === 'all',
    },
    {
      label: BLOG_LABELS[locale] || 'Blog',
      href: `/${locale}/blog`,
      isActive: activeSlug === 'blog',
    },
  ]

  for (const slug of topicSlugs) {
    const translations = getTopicTranslations(slug)
    const name = translations[locale]?.name || slug
    items.push({ label: name, href: `/${locale}/topics/${slug}`, isActive: slug === activeSlug })
  }

  return items
}
