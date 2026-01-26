import type { Metadata } from 'next'
import { getBlogPosts, getBlogPost, getRelatedPosts } from '@/lib/content'
import { notFound } from 'next/navigation'
import { ArticleDetailPage } from '@/components/content/ArticleDetailPage'
import { resolveAuthor } from '@/lib/authors'
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time'
import { resolveImage } from '@/lib/content-mappers'
import {
  generateBlogMetadata,
  buildArticleJsonLd,
  type Locale,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
} from '@/lib/seo'

export async function generateStaticParams() {
  const etPosts = await getBlogPosts('et')
  const enPosts = await getBlogPosts('en')

  const params: { locale: string; slug: string }[] = []

  etPosts.forEach((post) => {
    params.push({ locale: 'et', slug: post.slug })
  })

  enPosts.forEach((post) => {
    params.push({ locale: 'en', slug: post.slug })
  })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE
  const post = await getBlogPost(slug, locale as 'et' | 'en')

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generateBlogMetadata(post, validLocale)
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = await getBlogPost(slug, locale as 'et' | 'en')

  if (!post) {
    notFound()
  }

  const minutes = calculateReadingTime(post.content)
  const readingTime = formatReadingTime(minutes, locale as 'et' | 'en')

  const related = await getRelatedPosts(slug, post.tags || [], locale as 'et' | 'en', 3)
  const relatedArticles = related.map((r) => ({
    slug: r.slug,
    title: r.title,
    description: r.description,
    image: resolveImage(r.image || '') || '/images/blog-content/default-article.webp',
    category: r.category,
  }))

  // Build Article JSON-LD schema
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE
  const articleJsonLd = buildArticleJsonLd(post, validLocale)

  return (
    <>
      {/* Article JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleDetailPage
        locale={locale}
        backHref={`/${locale}/blog`}
        backLabel={locale === 'et' ? 'Tagasi blogisse' : 'Back to Blog'}
        title={post.title}
        date={post.date}
        author={resolveAuthor(post.author)}
        content={post.content}
        image={resolveImage(post.image || '') || '/images/blog-content/default-article.webp'}
        readingTime={readingTime}
        description={post.description}
        category={post.category}
        relatedArticles={relatedArticles}
        relatedBasePath={`/${locale}/blog`}
      />
    </>
  )
}
