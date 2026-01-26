import type { Metadata } from 'next'
import {
  PageHero,
  TwoColumnSection,
  FeaturesTabs,
  WhatsIncluded,
  CustomersSection,
  SmartenStory,
  WorkshopSection,
} from '@/components/sections'
import { generatePageMetadata, type Locale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/seo'

const pageMeta = {
  en: {
    title: 'Features - E-Signing & Contract Management',
    description:
      'Effortless e-signing for your busy day. Cut signing time by 60% with templates, contract management, and qualified e-signatures.',
    keywords: ['e-signing features', 'contract automation', 'bulk signing', 'templates', 'eIDAS'],
  },
  et: {
    title: 'Funktsionaalsus - E-allkirjastamine ja lepinguhaldus',
    description:
      'Vaevatu e-allkirjastamine sinu kiirele päevale. Vähenda allkirjastamisele kuluvat aega 60% mallide, lepinguhalduse ja kvalifitseeritud e-allkirjadega.',
    keywords: [
      'e-allkirjastamise funktsioonid',
      'lepingute automatiseerimine',
      'hulgiallkirjastamine',
      'mallid',
      'eIDAS',
    ],
  },
  lv: {
    title: 'Funkcijas - E-parakstīšana un līgumu pārvaldība',
    description:
      'Viegla e-parakstīšana jūsu aizņemtajai dienai. Samaziniet parakstīšanas laiku par 60% ar veidnēm, līgumu pārvaldību un kvalificētiem e-parakstiem.',
    keywords: [
      'e-parakstīšanas funkcijas',
      'līgumu automatizācija',
      'masveida parakstīšana',
      'veidnes',
      'eIDAS',
    ],
  },
  uk: {
    title: 'Функції - Е-підписання та управління контрактами',
    description:
      'Легке е-підписання для вашого насиченого дня. Скоротіть час підписання на 60% з шаблонами, управлінням контрактами та кваліфікованими е-підписами.',
    keywords: [
      'функції е-підписання',
      'автоматизація контрактів',
      'масове підписання',
      'шаблони',
      'eIDAS',
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const validLocale = SUPPORTED_LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE
  const meta = pageMeta[validLocale] || pageMeta.en

  return generatePageMetadata({
    title: meta.title,
    description: meta.description,
    locale: validLocale,
    path: 'features',
    keywords: meta.keywords,
  })
}

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'

  const dictionary = {
    en: {
      hero: {
        headline: 'Effortless e-signing for your busy day',
        description: "Cut signing time by 60% with Agrello's easy-to-use platform",
        primaryCta: 'Sign up',
        secondaryCta: 'Book a demo',
      },
      problem: {
        overline: 'THE PROBLEM',
        headline: 'Still struggling with manual contract workflows?',
        description: (
          <p>
            Printing, scanning, emailing, chasing signatures...{' '}
            <strong className="text-gray-900">Sound familiar?</strong>
            <br />
            <br />
            Manual contract processes drain your time, create bottlenecks, and lead to missed
            deadlines. Your team deserves better than endless back-and-forth and version chaos.
          </p>
        ),
        overlay: 'The average employee spends 5+ hours per week on manual document tasks',
        cta: 'See how we solve this',
      },
    },
    et: {
      hero: {
        headline: 'Vaevatu e-allkirjastamine sinu kiirele päevale',
        description:
          'Vähenda allkirjastamisele kuluvat aega 60% Agrello lihtsasti kasutatava platvormiga',
        primaryCta: 'Registreeru',
        secondaryCta: 'Broneeri demo',
      },
      problem: {
        overline: 'PROBLEEM',
        headline: 'Kas maadled endiselt käsitsi lepingute töövoogudega?',
        description: (
          <p>
            Printimine, skannimine, meilimine, allkirjade tagaajamine...{' '}
            <strong className="text-gray-900">Kõlab tuttavalt?</strong>
            <br />
            <br />
            Käsitsi lepinguprotsessid raiskavad su aega, tekitavad ummikuid ja viivad tähtaegade
            ületamiseni. Sinu meeskond väärib paremat kui lõputut edasi-tagasi ja versioonisegadust.
          </p>
        ),
        overlay: 'Keskmine töötaja kulutab 5+ tundi nädalas käsitsi dokumenditöödele',
        cta: 'Vaata, kuidas me seda lahendame',
      },
    },
    lv: {
      hero: {
        headline: 'Viegla e-parakstīšana jūsu aizņemtajai dienai',
        description: 'Samaziniet parakstīšanas laiku par 60% ar Agrello viegli lietojamo platformu',
        primaryCta: 'Reģistrēties',
        secondaryCta: 'Rezervēt demo',
      },
      problem: {
        overline: 'PROBLĒMA',
        headline: 'Vai joprojām cīnāties ar manuālām līgumu darbplūsmām?',
        description: (
          <p>
            Drukāšana, skenēšana, e-pastošana, parakstu meklēšana...{' '}
            <strong className="text-gray-900">Izklausās pazīstami?</strong>
            <br />
            <br />
            Manuālie līgumu procesi izsūc jūsu laiku, rada sastrēgumus un noved pie nokavētiem
            termiņiem. Jūsu komanda ir pelnījusi labāku nekā bezgalīgu turp-šurp un versiju haosu.
          </p>
        ),
        overlay: 'Vidējais darbinieks pavada 5+ stundas nedēļā manuāliem dokumentu uzdevumiem',
        cta: 'Skatiet, kā mēs to atrisinām',
      },
    },
    uk: {
      hero: {
        headline: 'Легке е-підписання для вашого насиченого дня',
        description: 'Скоротіть час підписання на 60% з легкою у використанні платформою Agrello',
        primaryCta: 'Зареєструватися',
        secondaryCta: 'Забронювати демо',
      },
      problem: {
        overline: 'ПРОБЛЕМА',
        headline: 'Все ще боретеся з ручними процесами контрактів?',
        description: (
          <p>
            Друк, сканування, електронна пошта, погоня за підписами...{' '}
            <strong className="text-gray-900">Звучить знайомо?</strong>
            <br />
            <br />
            Ручні процеси контрактів поглинають ваш час, створюють затори та призводять до
            пропущених дедлайнів. Ваша команда заслуговує кращого, ніж нескінченне туди-сюди та хаос
            версій.
          </p>
        ),
        overlay: 'Середній працівник витрачає 5+ годин на тиждень на ручні документи',
        cta: 'Подивіться, як ми це вирішуємо',
      },
    },
  }

  const t = dictionary[lang] || dictionary.en

  return (
    <main>
      {/* Hero */}
      <PageHero
        headline={t.hero.headline}
        description={t.hero.description}
        primaryCtaText={t.hero.primaryCta}
        primaryCtaHref="https://docs.agrello.io/app/login?open_tab=sign_up"
        secondaryCtaText={t.hero.secondaryCta}
        secondaryCtaHref={`/${lang}/contact`}
        imageSrc="/images/macbooks-screenshot-folders.webp"
        imageAlt="Agrello dashboard on MacBook"
      />

      {/* Problem (v2) */}
      <TwoColumnSection
        overline={t.problem.overline}
        headline={t.problem.headline}
        description={t.problem.description}
        imageSrc="/images/features/automation.webp"
        imageAlt="Manual document workflows"
        overlayText={t.problem.overlay}
        ctaText={t.problem.cta}
        ctaHref="#features"
        imagePosition="right"
        className="bg-gray-50"
      />

      {/* Main value prop: Focus on what matters - FeaturesTabs */}
      <div id="features">
        <FeaturesTabs locale={lang} />
      </div>

      {/* Featurelist: What's included */}
      <WhatsIncluded locale={lang} />

      {/* Our customers */}
      <CustomersSection locale={lang} />

      {/* Featured customer: Smarten */}
      <SmartenStory locale={lang} />

      {/* Contact us */}
      <WorkshopSection locale={lang} />
    </main>
  )
}
