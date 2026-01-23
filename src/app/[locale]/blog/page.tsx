import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/content'
import { ArticleListPage } from '@/components/content/ArticleListPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and updates',
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const posts = await getBlogPosts(locale as 'et' | 'en')

  return (
    <ArticleListPage
      title="Blog"
      description="Latest articles and updates"
      locale={locale}
      basePath={`/${locale}/blog`}
      articles={posts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
      }))}
      emptyMessage="No blog posts yet."
    />
  )
}
