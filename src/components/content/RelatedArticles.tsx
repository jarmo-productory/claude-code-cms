import Link from 'next/link'

interface RelatedArticle {
  slug: string
  title: string
  description: string
  image: string
  category?: string
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
  locale: string
  basePath: string
  heading?: string
}

export function RelatedArticles({ articles, locale, basePath, heading }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  const defaultHeading = locale === 'et' ? 'Seotud artiklid' : 'Related Articles'

  return (
    <section className="border-t border-gray-100 pt-12 mt-16">
      <h2 className="text-xl font-display font-bold text-brand-dark mb-8">
        {heading || defaultHeading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`${basePath}/${article.slug}`}
            className="group block rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden bg-brand-surface">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              {article.category && (
                <span className="text-xs font-medium text-brand-primary mb-1.5 block">
                  {article.category}
                </span>
              )}
              <h3 className="text-sm font-semibold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
