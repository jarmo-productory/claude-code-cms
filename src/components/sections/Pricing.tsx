import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: '[FREE_TIER_DESCRIPTION]',
    features: [
      '[FREE_FEATURE_1]',
      '[FREE_FEATURE_2]',
      '[FREE_FEATURE_3]',
      '[FREE_FEATURE_4]',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: '[PRO_TIER_DESCRIPTION]',
    features: [
      '[PRO_FEATURE_1]',
      '[PRO_FEATURE_2]',
      '[PRO_FEATURE_3]',
      '[PRO_FEATURE_4]',
      '[PRO_FEATURE_5]',
      '[PRO_FEATURE_6]',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: '[ENTERPRISE_TIER_DESCRIPTION]',
    features: [
      '[ENTERPRISE_FEATURE_1]',
      '[ENTERPRISE_FEATURE_2]',
      '[ENTERPRISE_FEATURE_3]',
      '[ENTERPRISE_FEATURE_4]',
      '[ENTERPRISE_FEATURE_5]',
    ],
    cta: 'Contact Sales',
  },
]

export function Pricing() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            [PRICING_SECTION_TITLE]
          </h2>
          <p className="text-xl text-slate-600">
            [PRICING_SECTION_SUBTITLE]
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              variant={tier.highlighted ? 'highlight' : 'default'}
              padding="lg"
              className={`relative ${tier.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Most popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="bg-brand-accent text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-brand-primary">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-slate-500 ml-2">
                    {tier.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {tier.description}
              </p>

              {/* CTA button */}
              <Button
                as="a"
                href="#"
                variant={tier.highlighted ? 'primary' : 'outline'}
                size="lg"
                className="w-full mb-8"
              >
                {tier.cta}
              </Button>

              {/* Features list */}
              <ul className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      size="md"
                      className="text-brand-secondary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
