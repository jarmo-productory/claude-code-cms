'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  overline: string
  headline: string
  description: string
  items: FAQItem[]
  imageSrc: string
  imageAlt: string
  imageOverlay: string
  ctaText: string
  ctaHref: string
  className?: string
}

export function FAQ({
  overline,
  headline,
  description,
  items,
  imageSrc,
  imageAlt,
  imageOverlay,
  ctaText,
  ctaHref,
  className,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-16 lg:py-24 bg-white ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column - Header + Image */}
          <div className="flex flex-col">
            {/* Header */}
            <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
              {overline}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
              {headline}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>

            {/* Image with overlay */}
            <div className="relative mb-8">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={500}
                className="w-full max-w-md h-auto rounded-lg"
              />
              {/* Blue overlay banner */}
              <div className="absolute bottom-8 left-4 right-4 max-w-sm bg-brand-primary text-white p-6 rounded-lg">
                <p className="text-lg font-medium leading-snug">
                  {imageOverlay}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-4 h-4 text-gray-500" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
