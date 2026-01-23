'use client'

import Image from 'next/image'

interface CustomerLogosProps {
  overline?: string
  headline?: string
  description?: string
  imageAlt?: string
  className?: string
}

export function CustomerLogos({
  overline,
  headline,
  description,
  imageAlt,
  className,
}: CustomerLogosProps) {
  return (
    <section className={`relative py-24 overflow-hidden bg-brand-surface/30 ${className || ''}`}>
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/hero/dots.svg')] opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          {/* Thought Bubble Decoration */}
          <div className="hidden lg:block absolute -left-56 -top-4">
            <Image
              src="/images/sections/thought-bubble.svg"
              alt="Does it work for me?"
              width={180}
              height={180}
              className="w-44 h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {overline && (
            <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
              {overline}
            </p>
          )}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            {headline}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Logos Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/sections/customers-cloud.webp"
            alt={imageAlt || 'Agrello customers'}
            width={1200}
            height={600}
            className="w-full max-w-4xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  )
}
