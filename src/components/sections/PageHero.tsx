'use client'

import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  overline?: string
  headline: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function PageHero({
  overline,
  headline,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  className,
}: PageHeroProps) {
  const hasCtaButtons = primaryCtaText && primaryCtaHref

  return (
    <section
      className={`relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {overline && (
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
              {overline}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 font-display">
            {headline}
          </h1>

          {description && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{description}</p>
          )}

          {hasCtaButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  {secondaryCtaText}
                </Link>
              )}
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                {primaryCtaText}
              </Link>
            </div>
          )}
        </div>

        {imageSrc && (
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src={imageSrc}
                alt={imageAlt || 'Hero image'}
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
