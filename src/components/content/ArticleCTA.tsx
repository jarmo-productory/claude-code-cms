import Link from 'next/link'

interface ArticleCTAProps {
  locale: string
}

const content = {
  et: {
    heading: 'Valmis alustama?',
    description: 'Liitu Agrelloga ja halda oma lepinguid nutikalt.',
    primaryLabel: 'Alusta tasuta',
    secondaryLabel: 'Tutvu lähemalt',
  },
  en: {
    heading: 'Ready to get started?',
    description: 'Join Agrello and manage your contracts the smart way.',
    primaryLabel: 'Start for free',
    secondaryLabel: 'Learn more',
  },
}

export function ArticleCTA({ locale }: ArticleCTAProps) {
  const t = content[locale as keyof typeof content] || content.en

  return (
    <section className="mt-16 rounded-xl bg-brand-dark p-8 md:p-10 text-center">
      <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-3">{t.heading}</h2>
      <p className="text-gray-300 text-sm md:text-base mb-6 max-w-md mx-auto">{t.description}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="https://docs.agrello.io/app/login?open_tab=sign_up"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-brand-secondary text-brand-dark font-semibold text-sm hover:brightness-110 transition-all"
        >
          {t.primaryLabel}
        </Link>
        <Link
          href={`/${locale}/features`}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-600 text-white font-medium text-sm hover:border-gray-400 transition-colors"
        >
          {t.secondaryLabel}
        </Link>
      </div>
    </section>
  )
}
