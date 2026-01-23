'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

interface WorkshopCTAProps {
  overline: string
  headline: string
  description: string
  benefits: string[]
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function WorkshopCTA({
  overline,
  headline,
  description,
  benefits,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  className,
}: WorkshopCTAProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column - Left */}
          <div className="flex flex-col">
            {/* Overline */}
            <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
              {overline}
            </p>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">
              {headline}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-cyan-600" />
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  {secondaryCtaText}
                </Link>
              )}
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                {primaryCtaText}
              </Link>
            </div>
          </div>

          {/* Image Column - Right */}
          <div className="relative lg:-mr-8">
            <div className="relative overflow-hidden rounded-lg lg:rounded-l-lg lg:rounded-r-none">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={700}
                className="w-full h-auto object-cover grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
