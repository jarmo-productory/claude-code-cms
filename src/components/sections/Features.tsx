import { Card } from '@/components/ui/Card'
import { Icon, type IconName } from '@/components/ui/Icon'

interface Feature {
  icon: IconName
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'rocket',
    title: '[FEATURE_1_TITLE]',
    description: '[FEATURE_1_DESCRIPTION]',
  },
  {
    icon: 'sparkles',
    title: '[FEATURE_2_TITLE]',
    description: '[FEATURE_2_DESCRIPTION]',
  },
  {
    icon: 'chart-bar',
    title: '[FEATURE_3_TITLE]',
    description: '[FEATURE_3_DESCRIPTION]',
  },
  {
    icon: 'users',
    title: '[FEATURE_4_TITLE]',
    description: '[FEATURE_4_DESCRIPTION]',
  },
  {
    icon: 'cog',
    title: '[FEATURE_5_TITLE]',
    description: '[FEATURE_5_DESCRIPTION]',
  },
  {
    icon: 'light-bulb',
    title: '[FEATURE_6_TITLE]',
    description: '[FEATURE_6_DESCRIPTION]',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            [FEATURES_SECTION_TITLE]
          </h2>
          <p className="text-xl text-slate-600">
            [FEATURES_SECTION_SUBTITLE]
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="default"
              padding="lg"
              hoverable
              className="text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary mb-6">
                <Icon name={feature.icon} size="xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
