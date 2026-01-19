'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface TwoColumnSectionProps {
  overline?: string
  headline: string
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  overlayText?: string
  ctaText?: string
  ctaHref?: string
  imagePosition?: 'left' | 'right'
  className?: string
}

export function TwoColumnSection({
  overline,
  headline,
  description,
  imageSrc,
  imageAlt,
  overlayText,
  ctaText,
  ctaHref,
  imagePosition = 'right',
  className,
}: TwoColumnSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white overflow-hidden ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
            {overline && (
              <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
                {overline}
              </p>
            )}
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display leading-[1.1] tracking-tight">
              {headline}
            </h2>
            
            <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
              {description}
            </div>
            
            {ctaText && ctaHref && (
              <div>
                <Button as="a" href={ctaHref} size="lg" className="bg-brand-primary text-white hover:bg-blue-700 px-8 shadow-lg shadow-blue-900/20 group">
                  {ctaText}
                  <svg className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={`relative ${imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Blue Banner Overlay */}
              {overlayText && (
                <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-brand-primary text-white p-8 max-w-xs lg:max-w-sm shadow-2xl z-20 hidden md:block rounded-xl border border-white/10 backdrop-blur-sm">
                  <p className="text-lg lg:text-xl font-medium leading-snug">
                    {overlayText}
                  </p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
