import type { Metadata } from 'next'
import { getBlogPosts, getBlogPost } from '@/lib/content'
import { notFound } from 'next/navigation'
import { ArticleDetailPage } from '@/components/content/ArticleDetailPage'

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
  const post = await getBlogPost(slug, locale as 'et' | 'en')

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description || post.title,
  }
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

  return (
    <ArticleDetailPage
      locale={locale}
      backHref={`/${locale}/blog`}
      backLabel="Back to Blog"
      title={post.title}
      date={post.date}
      author={post.author}
      content={post.content}
    />
  )
}
