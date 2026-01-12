import { Card } from '@/components/ui/Card'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote: '[TESTIMONIAL_1_QUOTE]',
    name: '[CUSTOMER_1_NAME]',
    title: '[CUSTOMER_1_TITLE]',
    company: '[CUSTOMER_1_COMPANY]',
    avatar: '👤', // Placeholder emoji
  },
  {
    quote: '[TESTIMONIAL_2_QUOTE]',
    name: '[CUSTOMER_2_NAME]',
    title: '[CUSTOMER_2_TITLE]',
    company: '[CUSTOMER_2_COMPANY]',
    avatar: '👤', // Placeholder emoji
  },
  {
    quote: '[TESTIMONIAL_3_QUOTE]',
    name: '[CUSTOMER_3_NAME]',
    title: '[CUSTOMER_3_TITLE]',
    company: '[CUSTOMER_3_COMPANY]',
    avatar: '👤', // Placeholder emoji
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            [TESTIMONIALS_SECTION_TITLE]
          </h2>
          <p className="text-xl text-slate-600">
            [TESTIMONIALS_SECTION_SUBTITLE]
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="default"
              padding="lg"
              hoverable
              className="flex flex-col"
            >
              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div>
                  <div className="font-semibold text-brand-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
