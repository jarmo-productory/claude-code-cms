import Link from 'next/link'
import type { ContentAuthor } from '@/lib/content-types'
import { Icon } from '@/components/ui/Icon'
import { TableOfContents } from './TableOfContents'
import { processArticleContent } from '@/lib/heading-utils'
import { ReadingProgressBar } from './ReadingProgressBar'
import { CodeBlockEnhancer } from './CodeBlockEnhancer'
import { RelatedArticles } from './RelatedArticles'
import { ArticleCTA } from './ArticleCTA'

interface RelatedArticle {
  slug: string
  title: string
  description: string
  image: string
  category?: string
}

interface ArticleDetailPageProps {
  locale: string
  backHref: string
  backLabel: string
  title: string
  date?: string
  author?: ContentAuthor
  content: string
  image: string
  readingTime?: string
  description?: string
  category?: string
  subcategory?: string
  relatedArticles?: RelatedArticle[]
  relatedBasePath?: string
}

function formatDate(date: string, locale: string): string {
  const localeMap: Record<string, string> = {
    et: 'et-EE',
    en: 'en-US',
    lv: 'lv-LV',
    ua: 'uk-UA',
  }
  return new Date(date).toLocaleDateString(localeMap[locale] || 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function ArticleDetailPage({
  locale,
  backHref,
  backLabel,
  title,
  date,
  author,
  content,
  image,
  readingTime,
  description,
  category,
  subcategory,
  relatedArticles = [],
  relatedBasePath = '',
}: ArticleDetailPageProps) {
  const processedContent = processArticleContent(content)

  return (
    <>
      <ReadingProgressBar />

      <div className="min-h-screen bg-white">
        {/* ZONE 1: HERO (Split Layout) */}
        <section className="pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* LEFT COLUMN: Meta + Title (~40%) */}
              <div className="lg:w-[40%] flex flex-col">
                {/* Back button (circle) */}
                <Link
                  href={backHref}
                  className="w-10 h-10 rounded-full border border-gray-200 inline-flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-colors mb-6"
                  aria-label={backLabel}
                >
                  <Icon name="arrow-left" size="sm" />
                </Link>

                {/* Breadcrumb: Category / Subcategory / Reading time */}
                {(category || readingTime) && (
                  <div className="inline-flex items-center gap-2 mb-4 text-sm text-gray-600 bg-gray-50 rounded-full px-4 py-1.5 w-fit">
                    {category && <span className="font-medium">{category}</span>}
                    {category && subcategory && <span className="text-gray-300">/</span>}
                    {subcategory && <span>{subcategory}</span>}
                    {readingTime && <span className="text-gray-400 ml-1">{readingTime}</span>}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-brand-dark leading-[1.15] tracking-tight mb-5">
                  {title}
                </h1>

                {/* Date */}
                {date && (
                  <time className="text-sm text-gray-500 mb-4 block">
                    {formatDate(date, locale)}
                  </time>
                )}

                {/* Author */}
                {author && (
                  <div className="flex items-center gap-3">
                    {author.avatarSrc ? (
                      <img
                        src={author.avatarSrc}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary font-semibold flex items-center justify-center text-sm">
                        {getInitials(author.name)}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-semibold text-brand-dark">{author.name}</div>
                      <div className="text-xs text-gray-500">Agrello</div>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Hero Image (~60%) */}
              <div className="lg:w-[60%]">
                <div className="rounded-xl overflow-hidden bg-brand-surface">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONE 2: CONTENT (TOC Sidebar + Article Body) */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-[1000px] mx-auto px-6 md:px-8">
            <div className="flex gap-12 lg:gap-16">
              {/* TOC Sidebar */}
              <TableOfContents contentHtml={processedContent} />

              {/* Article Body */}
              <article className="flex-1 min-w-0 max-w-3xl">
                {/* Description box */}
                {description && (
                  <div className="mb-10 p-5 md:p-6 bg-gray-50 rounded-lg">
                    <p className="text-base text-gray-700 leading-relaxed font-medium m-0">
                      {description}
                    </p>
                  </div>
                )}

                {/* Prose content */}
                <div
                  className="article-prose prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-dark prose-headings:font-bold prose-headings:scroll-mt-24 prose-p:text-gray-800 prose-a:text-brand-primary prose-a:no-underline prose-a:font-medium hover:prose-a:text-brand-secondary hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-brand-primary prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:not-italic prose-img:rounded-lg prose-img:border prose-img:border-gray-200"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />
                <CodeBlockEnhancer />

                {/* Related Articles */}
                <RelatedArticles
                  articles={relatedArticles}
                  locale={locale}
                  basePath={relatedBasePath}
                />

                {/* CTA */}
                <ArticleCTA locale={locale} />
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
