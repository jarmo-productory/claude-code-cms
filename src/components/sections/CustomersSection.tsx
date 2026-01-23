'use client'

import { CustomerLogos } from './CustomerLogos'

interface CustomersSectionProps {
  locale: string
  className?: string
}

const translations = {
  en: {
    overline: 'OUR CUSTOMERS',
    headline: 'Your business, simplified',
    description:
      "Agrello's intuitive platform helps businesses of all sizes to simplify document workflows and enhance efficiency. Join a growing community of organizations streamlining their operations with ease.",
  },
  et: {
    overline: 'MEIE KLIENDID',
    headline: 'Sinu äri, lihtsustatud',
    description:
      'Agrello intuitiivne platvorm aitab igas suuruses ettevõtetel lihtsustada dokumenditöövoogusid ja tõsta efektiivsust. Liitu kasvava kogukonnaga organisatsioonidest, kes muudavad oma tegevuse sujuvamaks.',
  },
  lv: {
    overline: 'MŪSU KLIENTI',
    headline: 'Jūsu bizness, vienkāršots',
    description:
      'Agrello intuitīvā platforma palīdz visu izmēru uzņēmumiem vienkāršot dokumentu darbplūsmas un uzlabot efektivitāti. Pievienojieties augošai organizāciju kopienai, kas racionalizē savas darbības.',
  },
  uk: {
    overline: 'НАШІ КЛІЄНТИ',
    headline: 'Ваш бізнес, спрощений',
    description:
      'Інтуїтивна платформа Agrello допомагає бізнесам будь-якого розміру спростити документообіг та підвищити ефективність. Приєднуйтесь до зростаючої спільноти організацій, що оптимізують свої операції.',
  },
}

export function CustomersSection({ locale, className }: CustomersSectionProps) {
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'
  const t = translations[lang]

  return (
    <CustomerLogos
      overline={t.overline}
      headline={t.headline}
      description={t.description}
      className={className}
    />
  )
}
