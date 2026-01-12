import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-dark">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-brand-mesh opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          [CTA_HEADLINE]
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          [CTA_SUBTITLE]
        </p>

        {/* CTA button */}
        <Button
          as="a"
          href="#"
          variant="primary"
          size="lg"
          onDark
          className="shadow-2xl"
        >
          [CTA_BUTTON_TEXT]
        </Button>
      </div>
    </section>
  )
}
