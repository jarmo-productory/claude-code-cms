'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface CustomerStoryProps {
  headline: string
  description: string
  imageSrc: string
  imageAlt: string
  authorName: string
  authorTitle: string
  companyLogoSrc?: string
  companyLogoAlt?: string
  ctaText?: string
  ctaHref?: string
  rating?: number
  className?: string
}

export function CustomerStory({
  headline,
  description,
  imageSrc,
  imageAlt,
  authorName,
  authorTitle,
  companyLogoSrc,
  companyLogoAlt,
  ctaText = 'Learn more',
  ctaHref = '#',
  rating = 5,
  className,
}: CustomerStoryProps) {
  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Left */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={700}
                height={500}
                className="w-full h-auto object-cover grayscale-[30%]"
              />
            </div>
          </div>

          {/* Content Column - Right */}
          <div className="flex flex-col">
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">
              {headline}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>

            {/* Attribution Row */}
            <div className="flex items-center gap-6 mb-8">
              {/* Author Info */}
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">{authorName}</span>
                <span className="text-gray-500 text-sm">{authorTitle}</span>
              </div>

              {/* Divider */}
              {companyLogoSrc && (
                <>
                  <div className="h-10 w-px bg-gray-300" />

                  {/* Company Logo - using img for SVG compatibility */}
                  <img
                    src={companyLogoSrc}
                    alt={companyLogoAlt || 'Company logo'}
                    className="h-8 w-auto object-contain"
                  />
                </>
              )}
            </div>

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
