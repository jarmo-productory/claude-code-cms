interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: '[STEP_1_TITLE]',
    description: '[STEP_1_DESCRIPTION]',
  },
  {
    number: 2,
    title: '[STEP_2_TITLE]',
    description: '[STEP_2_DESCRIPTION]',
  },
  {
    number: 3,
    title: '[STEP_3_TITLE]',
    description: '[STEP_3_DESCRIPTION]',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            [HOW_IT_WORKS_TITLE]
          </h2>
          <p className="text-xl text-slate-600">
            [HOW_IT_WORKS_SUBTITLE]
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connecting line (hidden on mobile, last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-gradient text-white font-display font-bold text-3xl mb-6 shadow-lg">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
