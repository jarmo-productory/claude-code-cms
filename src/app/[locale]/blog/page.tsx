import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/content'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and updates',
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const posts = await getBlogPosts(locale as 'et' | 'en')

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Latest articles and updates
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block"
                >
                  <h2 className="text-3xl font-display font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.date && (
                    <time className="text-sm text-gray-500 block mb-3">
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
                  {post.description && (
                    <p className="text-gray-600 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
