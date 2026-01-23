import Link from 'next/link'

interface Article {
  slug: string
  title: string
  date?: string
  description?: string
}

interface ArticleListPageProps {
  title: string
  description?: string
  locale: string
  basePath: string
  articles: Article[]
  emptyMessage?: string
}

export function ArticleListPage({
  title,
  description,
  locale,
  basePath,
  articles,
  emptyMessage = 'No articles yet.',
}: ArticleListPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">{title}</h1>
          {description && <p className="text-xl text-gray-600">{description}</p>}
        </header>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{emptyMessage}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.slug} className="border-b border-gray-200 pb-8 last:border-0">
                <Link href={`${basePath}/${article.slug}`} className="group block">
                  <h2 className="text-3xl font-display font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h2>
                  {article.date && (
                    <time className="text-sm text-gray-500 block mb-3">
                      {new Date(article.date).toLocaleDateString(
                        locale === 'et' ? 'et-EE' : 'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </time>
                  )}
                  {article.description && (
                    <p className="text-gray-600 leading-relaxed">{article.description}</p>
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
