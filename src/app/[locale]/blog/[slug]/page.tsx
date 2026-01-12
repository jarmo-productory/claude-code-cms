import type { Metadata } from 'next'
import { getBlogPosts, getBlogPost } from '@/lib/content'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const etPosts = await getBlogPosts('et')
  const enPosts = await getBlogPosts('en')

  const params: { locale: string; slug: string }[] = []

  etPosts.forEach(post => {
    params.push({ locale: 'et', slug: post.slug })
  })

  enPosts.forEach(post => {
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
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href={`/${locale}/blog`}
          className="text-brand-primary hover:text-brand-secondary transition-colors mb-8 inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">
            {post.title}
          </h1>
          {post.date && (
            <time className="text-gray-500 block mb-4">
              {new Date(post.date).toLocaleDateString(
                locale === 'et' ? 'et-EE' : 'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
            </time>
          )}
          {post.author && (
            <p className="text-gray-600">By {post.author}</p>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-dark prose-a:text-brand-primary hover:prose-a:text-brand-secondary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
