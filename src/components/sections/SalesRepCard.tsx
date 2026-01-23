import Image from 'next/image'

interface SalesRepCardProps {
  locale: string
  className?: string
}

const translations = {
  en: {
    overline: 'YOUR CONTACT',
    headline: 'Meet your dedicated sales representative',
    name: 'Harry Käsk',
    title: 'Head of Sales & Customer Success',
    description:
      "Hi! I'm Harry, and I'll be your dedicated point of contact at Agrello. With years of experience helping businesses streamline their contract workflows, I understand the challenges you face. Let's chat about how we can make your document processes simpler and more efficient.",
    cta: 'Schedule a call with Harry',
    ctaHref: 'https://calendly.com/harry-375/agrello-workshop',
    image: '/images/team/harry.webp',
    imageAlt: 'Harry Käsk - Agrello Sales Representative',
  },
  et: {
    overline: 'SINU KONTAKT',
    headline: 'Tutvu oma pühendunud müügiesindajaga',
    name: 'Harry Käsk',
    title: 'Müügi- ja kliendiedu juht',
    description:
      'Tere! Olen Harry ja saan olema sinu pühendunud kontaktisik Agrellos. Aastatepikkuse kogemusega ettevõtete lepingute töövoogude sujuvamaks muutmisel mõistan väljakutseid, millega silmitsi seisad. Räägime sellest, kuidas saame sinu dokumendiprotsessid lihtsamaks ja tõhusamaks muuta.',
    cta: 'Broneeri kõne Harryga',
    ctaHref: 'https://calendly.com/harry-375/agrello-workshop',
    image: '/images/team/harry.webp',
    imageAlt: 'Harry Käsk - Agrello müügiesindaja',
  },
  lv: {
    overline: 'JŪSU KONTAKTPERSONA',
    headline: 'Iepazīstieties ar savu pārdošanas pārstāvi',
    name: 'Kristaps',
    title: 'Pārdošanas un klientu veiksmes vadītājs',
    description:
      'Sveiki! Es esmu Kristaps, un es būšu jūsu kontaktpersona Agrello. Ar gadiem ilgu pieredzi, palīdzot uzņēmumiem racionalizēt līgumu darbplūsmas, es saprotu izaicinājumus, ar kuriem jūs saskaraties. Parunāsim par to, kā mēs varam padarīt jūsu dokumentu procesus vienkāršākus un efektīvākus.',
    cta: 'Rezervēt zvanu ar Kristapu',
    ctaHref: 'https://calendly.com/kristaps-agrello/30min',
    image: '/images/team/harry.webp',
    imageAlt: 'Kristaps - Agrello pārdošanas pārstāvis',
  },
  uk: {
    overline: 'ВАШ КОНТАКТ',
    headline: 'Познайомтеся з вашим персональним менеджером з продажів',
    name: 'Ігор',
    title: 'Керівник відділу продажів та успіху клієнтів',
    description:
      'Привіт! Я Ігор, і я буду вашою контактною особою в Agrello. Маючи багаторічний досвід допомоги бізнесам оптимізувати процеси роботи з контрактами, я розумію виклики, з якими ви стикаєтесь. Давайте поговоримо про те, як ми можемо зробити ваші документні процеси простішими та ефективнішими.',
    cta: 'Запланувати дзвінок з Ігорем',
    ctaHref: 'https://calendly.com/ihor-agrello/30min',
    image: '/images/team/harry.webp',
    imageAlt: 'Ігор - Agrello менеджер з продажів',
  },
}

export function SalesRepCard({ locale, className = '' }: SalesRepCardProps) {
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'
  const t = translations[lang]

  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
            {t.overline}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-display tracking-tight">
            {t.headline}
          </h2>
        </div>

        {/* Sales Rep Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row gap-8 items-center">
            {/* Image */}
            <div className="shrink-0">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image src={t.image} alt={t.imageAlt} fill className="object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1 font-display">{t.name}</h3>
              <p className="text-brand-primary font-medium mb-4">{t.title}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{t.description}</p>
              <a
                href={t.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
              >
                {t.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
