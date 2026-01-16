'use client'

import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  period: string
  subtext: string
  description: string
  ctaText: string
  ctaHref: string
  featured?: boolean
  badge?: string
}

interface PricingProps {
  overline: string
  headline: string
  description: string
  plans: PricingPlan[]
  contactCta?: {
    headline: string
    description: string
    buttonText: string
    buttonHref: string
  }
  className?: string
}

export function Pricing({
  overline,
  headline,
  description,
  plans,
  contactCta,
  className,
}: PricingProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
            {overline}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            {headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-4 items-end">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col items-center text-center px-6 py-10 ${
                plan.featured
                  ? 'border-2 border-gray-900 rounded-3xl bg-white shadow-xl -mt-4 md:py-14'
                  : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-6 -right-8 md:-top-4 md:-right-12 z-10">
                  <div className="bg-brand-primary text-white text-sm font-medium px-5 py-4 rounded-full rotate-[30deg] shadow-lg">
                    <span className="block text-xs leading-tight whitespace-nowrap">{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl lg:text-6xl font-light text-gray-900">
                  {plan.price}
                </span>
              </div>

              {/* Period */}
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-1">
                {plan.period}
              </p>

              {/* Subtext */}
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-6">
                {plan.subtext}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-8 max-w-xs">
                {plan.description}
              </p>

              {/* CTA Button */}
              <Link
                href={plan.ctaHref}
                className={`inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg transition-colors ${
                  plan.featured
                    ? 'bg-brand-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {contactCta && (
          <div className="text-center mt-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-display">
              {contactCta.headline}
            </h3>
            <p className="text-gray-600 mb-6">
              {contactCta.description}
            </p>
            <Link
              href={contactCta.buttonHref}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              {contactCta.buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
