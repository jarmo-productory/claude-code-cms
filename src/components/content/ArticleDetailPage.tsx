import Link from 'next/link'

interface ArticleDetailPageProps {
  locale: string
  backHref: string
  backLabel: string
  title: string
  date?: string
  author?: string
  content: string
}

export function ArticleDetailPage({
  locale,
  backHref,
  backLabel,
  title,
  date,
  author,
  content,
}: ArticleDetailPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <Link
          href={backHref}
          className="text-brand-primary hover:text-brand-secondary transition-colors mb-8 inline-flex items-center gap-2"
        >
          &larr; {backLabel}
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-display font-bold text-brand-dark mb-4">{title}</h1>
          {date && (
            <time className="text-gray-500 block mb-4">
              {new Date(date).toLocaleDateString(locale === 'et' ? 'et-EE' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
          {author && <p className="text-gray-600">By {author}</p>}
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-dark prose-a:text-brand-primary hover:prose-a:text-brand-secondary"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  )
}
