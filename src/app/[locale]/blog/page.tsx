import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/content'
import { mapBlogPostToContentItem } from '@/lib/content-mappers'
import { ContentIndexLayout } from '@/components/content/ContentIndexLayout'
import { buildContentTabs, buildContentSidebar } from '@/lib/content-nav'
import { generatePageMetadata, type Locale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/seo'

const pageMeta = {
  en: {
    title: 'Blog - E-Signature & Contract Insights',
    description:
      'Read the latest articles on e-signatures, contract management, digital transformation, and business productivity. Tips and strategies for modern teams.',
    keywords: [
      'blog',
      'e-signature articles',
      'contract management tips',
      'digital transformation',
    ],
  },
  et: {
    title: 'Blogi - E-allkirja ja lepingute ülevaated',
    description:
      'Loe viimaseid artikleid e-allkirjade, lepinguhalduse, digitaalse transformatsiooni ja äri tootlikkuse kohta. Näpunäited kaasaegsetele meeskondadele.',
    keywords: [
      'blogi',
      'e-allkirja artiklid',
      'lepinguhalduse nõuanded',
      'digitaalne transformatsioon',
    ],
  },
  lv: {
    title: 'Blogs - E-paraksta un līgumu ieskati',
    description:
      'Lasiet jaunākos rakstus par e-parakstiem, līgumu pārvaldību, digitālo transformāciju un biznesa produktivitāti. Padomi mūsdienu komandām.',
    keywords: [
      'blogs',
      'e-paraksta raksti',
      'līgumu pārvaldības padomi',
      'digitālā transformācija',
    ],
  },
  uk: {
    title: 'Блог - Огляди е-підписів та контрактів',
    description:
      'Читайте останні статті про е-підписи, управління контрактами, цифрову трансформацію та продуктивність бізнесу. Поради для сучасних команд.',
    keywords: [
      'блог',
      'статті про е-підписи',
      'поради з управління контрактами',
      'цифрова трансформація',
    ],
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
    path: 'blog',
    keywords: meta.keywords,
  })
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
