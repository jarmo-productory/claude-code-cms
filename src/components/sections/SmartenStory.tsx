'use client'

import { CustomerStory } from './CustomerStory'

interface SmartenStoryProps {
  locale: string
  className?: string
}

const translations = {
  en: {
    headline: "Smarten saved a week's worth of manual work",
    description:
      "Smarten Logistics uses the Agrello platform's reusable templates feature to create and sign new employment contracts on an ongoing basis.",
    authorName: 'Mari-Liis Kreem',
    authorTitle: 'HR Director',
  },
  et: {
    headline: 'Smarten säästis nädala jagu käsitsi tööd',
    description:
      'Smarten Logistics kasutab Agrello platvormi taaskasutatavate mallide funktsiooni, et luua ja allkirjastada uusi töölepinguid pidevalt.',
    authorName: 'Mari-Liis Kreem',
    authorTitle: 'Personalidirektor',
  },
  lv: {
    headline: 'Smarten ietaupīja nedēļas manuālo darbu',
    description:
      'Smarten Logistics izmanto Agrello platformas atkārtoti lietojamo veidņu funkciju, lai regulāri izveidotu un parakstītu jaunus darba līgumus.',
    authorName: 'Mari-Liis Kreem',
    authorTitle: 'Personāla direktore',
  },
  uk: {
    headline: 'Smarten заощадив тиждень ручної роботи',
    description:
      'Smarten Logistics використовує функцію багаторазових шаблонів платформи Agrello для постійного створення та підписання нових трудових договорів.',
    authorName: 'Марі-Лійс Креем',
    authorTitle: 'HR-директор',
  },
}

export function SmartenStory({ locale, className }: SmartenStoryProps) {
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'
  const t = translations[lang]

  return (
    <CustomerStory
      headline={t.headline}
      description={t.description}
      imageSrc="/images/smarten.webp"
      imageAlt="Smarten Logistics warehouse workers"
      authorName={t.authorName}
      authorTitle={t.authorTitle}
      companyLogoSrc="/images/logos/smarten-logistics.svg"
      companyLogoAlt="Smarten Logistics"
      className={className}
    />
  )
}
