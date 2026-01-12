import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-brand-mesh opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline with gradient */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            <span className="text-white">[YOUR_HEADLINE]</span>
            {' '}
            <span className="bg-clip-text text-transparent bg-brand-gradient">
              [GRADIENT_TEXT]
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            [YOUR_TAGLINE_OR_VALUE_PROPOSITION]
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              as="a"
              href="#"
              variant="primary"
              size="lg"
              onDark
            >
              [PRIMARY_CTA]
            </Button>
            <Button
              as="a"
              href="#"
              variant="outline"
              size="lg"
              onDark
            >
              [SECONDARY_CTA]
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
