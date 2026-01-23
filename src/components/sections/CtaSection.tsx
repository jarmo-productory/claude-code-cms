'use client'

import { Button } from '@/components/ui/Button'

interface CtaSectionProps {
  headline: string
  description?: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  className?: string
}

export function CtaSection({
  headline,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className,
}: CtaSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-brand-primary ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-display">
            {headline}
          </h2>

          {description && (
            <p className="text-xl text-white/80 mb-8 leading-relaxed">{description}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href={primaryCtaHref}
              size="lg"
              className="bg-white text-brand-primary hover:bg-gray-100 px-8 shadow-lg"
            >
              {primaryCtaText}
            </Button>

            {secondaryCtaText && secondaryCtaHref && (
              <Button
                as="a"
                href={secondaryCtaHref}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
