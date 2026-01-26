import type { Metadata } from 'next'
import {
  ContactHero,
  WorkshopSection,
  CustomersSection,
  FAQ,
  LatestPosts,
} from '@/components/sections'
import { getBlogPosts } from '@/lib/content'
import { mapBlogPostsToLatestPosts } from '@/lib/content-mappers'
import { generatePageMetadata, type Locale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/seo'

const pageMeta = {
  en: {
    title: 'Contact Us - Get in Touch',
    description:
      'Get in touch with the Agrello team. Book a demo, ask questions, or get support for your contract management and e-signing needs.',
    keywords: ['contact', 'demo', 'support', 'sales', 'e-signature help'],
  },
  et: {
    title: 'Võta ühendust',
    description:
      'Võta Agrello meeskonnaga ühendust. Broneeri demo, esita küsimusi või saa tuge lepinguhalduse ja e-allkirjastamise vajadustele.',
    keywords: ['kontakt', 'demo', 'tugi', 'müük', 'e-allkirja abi'],
  },
  lv: {
    title: 'Sazināties ar mums',
    description:
      'Sazinieties ar Agrello komandu. Rezervējiet demonstrāciju, uzdodiet jautājumus vai saņemiet atbalstu līgumu pārvaldības un e-parakstīšanas vajadzībām.',
    keywords: ['kontakti', 'demonstrācija', 'atbalsts', 'pārdošana', 'e-paraksta palīdzība'],
  },
  uk: {
    title: "Зв'яжіться з нами",
    description:
      "Зв'яжіться з командою Agrello. Забронюйте демо, поставте питання або отримайте підтримку для управління контрактами та е-підписання.",
    keywords: ['контакт', 'демо', 'підтримка', 'продажі', 'допомога з е-підписом'],
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
    path: 'contact',
    keywords: meta.keywords,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'

  const dictionary = {
    en: {
      hero: {
        overline: 'GET IN TOUCH',
        headline: (
          <>
            Let&apos;s find out if Agrello <span className="text-brand-primary">fits you</span>
          </>
        ),
        description:
          'Each company is unique. Skip the email threads and book a direct slot with us to see how we can handle your specific document workflow needs.',
        ctaText: 'Call us now',
        trustText: 'Get a free Personalized platform tour.',
        tabs: {
          bookCall: 'Book a call',
          askQuestion: 'Ask a question',
        },
        formLabels: {
          name: 'Your name',
          email: 'Email address',
          company: 'Company name',
          message: 'Your message',
          submit: 'Send message',
          success: "Thank you! Your message has been sent. We'll get back to you soon.",
          error: 'Something went wrong. Please try again or email us directly.',
        },
        calendlyUrl:
          'https://calendly.com/harry-375/agrello-workshop?embed_domain=www.agrello.io&embed_type=Inline',
      },
      info: {
        headline: 'Contact information',
        email: 'info@agrello.io',
        address: ['Agrello OÜ', 'Rotermanni 6', '10111 Tallinn', 'Estonia'],
        hours: 'Mon-Fri 9:00 - 18:00 EET',
        labels: {
          email: 'Email',
          phone: 'Phone',
          address: 'Office',
          hours: 'Business hours',
        },
      },
      faq: {
        overline: 'SUPPORT',
        headline: 'Frequently asked questions',
        description: 'Quick answers to common questions.',
        imageOverlay: "We're here to help you succeed",
        items: [
          {
            question: 'How quickly do you respond?',
            answer: 'We typically respond to all inquiries within 24 hours during business days.',
          },
          {
            question: 'Do you offer demos?',
            answer:
              'Yes! We offer free personalized demos to show you how Agrello can help your business. Book a demo through the contact form.',
          },
          {
            question: 'What if I need technical support?',
            answer:
              'For existing customers, technical support is available through the in-app help center. For urgent issues, contact us directly via email.',
          },
          {
            question: 'Can I schedule a workshop?',
            answer:
              "Absolutely! We offer free e-signing workshops to help you get started. Mention this in your message and we'll set one up.",
          },
        ],
        ctaText: 'Learn more',
      },
      latestPosts: {
        overline: 'FROM OUR BLOG',
        headline: 'Latest blog posts',
        description: 'Tools and strategies modern teams need to grow their companies.',
        viewAllText: 'View all posts',
      },
    },
    et: {
      hero: {
        overline: 'VÕTA ÜHENDUST',
        headline: (
          <>
            Uurime, kas Agrello <span className="text-brand-primary">sobib sulle</span>
          </>
        ),
        description:
          'Iga ettevõte on unikaalne. Jäta e-mailid sinnapaika ja broneeri meiega otse kohtumine, et näha, kuidas saame aidata sinu dokumenditöövoo vajadustega.',
        ctaText: 'Helista meile',
        trustText: 'Saa tasuta personaalne platvormitutvustus.',
        tabs: {
          bookCall: 'Broneeri kõne',
          askQuestion: 'Esita küsimus',
        },
        formLabels: {
          name: 'Sinu nimi',
          email: 'E-posti aadress',
          company: 'Ettevõtte nimi',
          message: 'Sinu sõnum',
          submit: 'Saada sõnum',
          success: 'Täname! Sinu sõnum on saadetud. Võtame sinuga peagi ühendust.',
          error: 'Midagi läks valesti. Palun proovi uuesti või kirjuta meile otse.',
        },
        calendlyUrl:
          'https://calendly.com/harry-375/agrello-workshop?embed_domain=www.agrello.io&embed_type=Inline',
      },
      info: {
        headline: 'Kontaktandmed',
        email: 'info@agrello.io',
        address: ['Agrello OÜ', 'Rotermanni 6', '10111 Tallinn', 'Eesti'],
        hours: 'E-R 9:00 - 18:00 EET',
        labels: {
          email: 'E-post',
          phone: 'Telefon',
          address: 'Kontor',
          hours: 'Tööaeg',
        },
      },
      faq: {
        overline: 'TUGI',
        headline: 'Korduma kippuvad küsimused',
        description: 'Kiired vastused levinud küsimustele.',
        imageOverlay: 'Oleme siin, et aidata sul edu saavutada',
        items: [
          {
            question: 'Kui kiiresti te vastate?',
            answer: 'Vastame tavaliselt kõigile päringutele 24 tunni jooksul tööpäevadel.',
          },
          {
            question: 'Kas pakute demosid?',
            answer:
              'Jah! Pakume tasuta personaliseeritud demosid, et näidata, kuidas Agrello saab sinu äri aidata. Broneeri demo kontaktivormi kaudu.',
          },
          {
            question: 'Mis siis, kui vajan tehnilist tuge?',
            answer:
              'Olemasolevatele klientidele on tehniline tugi saadaval rakendusesisese abikeskuse kaudu. Kiireloomuliste probleemide korral võta meiega otse e-posti teel ühendust.',
          },
          {
            question: 'Kas saan broneerida töötoa?',
            answer:
              'Kindlasti! Pakume tasuta e-allkirjastamise töötubasid, et aidata sul alustada. Maini seda oma sõnumis ja me korraldame selle.',
          },
        ],
        ctaText: 'Loe lähemalt',
      },
      latestPosts: {
        overline: 'MEIE BLOGIST',
        headline: 'Viimased blogipostitused',
        description:
          'Tööriistad ja strateegiad, mida kaasaegsed meeskonnad vajavad ettevõtete kasvatamiseks.',
        viewAllText: 'Vaata kõiki postitusi',
      },
    },
    lv: {
      hero: {
        overline: 'SAZINĀTIES',
        headline: (
          <>
            Noskaidrosim, vai Agrello <span className="text-brand-primary">der jums</span>
          </>
        ),
        description:
          'Katrs uzņēmums ir unikāls. Izlaidiet e-pasta saraksti un rezervējiet tiešu laiku ar mums, lai redzētu, kā mēs varam palīdzēt ar jūsu dokumentu darba plūsmas vajadzībām.',
        ctaText: 'Zvaniet mums',
        trustText: 'Saņemiet bezmaksas personalizētu platformas apskatu.',
        tabs: {
          bookCall: 'Rezervēt zvanu',
          askQuestion: 'Uzdot jautājumu',
        },
        formLabels: {
          name: 'Jūsu vārds',
          email: 'E-pasta adrese',
          company: 'Uzņēmuma nosaukums',
          message: 'Jūsu ziņa',
          submit: 'Nosūtīt ziņu',
          success: 'Paldies! Jūsu ziņa ir nosūtīta. Mēs drīz sazināsimies.',
          error: 'Kaut kas nogāja greizi. Lūdzu, mēģiniet vēlreiz vai rakstiet mums tieši.',
        },
        calendlyUrl:
          'https://calendly.com/kristaps-agrello/30min?embed_domain=www.agrello.io&embed_type=Inline',
      },
      info: {
        headline: 'Kontaktinformācija',
        email: 'info@agrello.io',
        address: ['Agrello OÜ', 'Rotermanni 6', '10111 Tallinn', 'Igaunija'],
        hours: 'P-Pk 9:00 - 18:00 EET',
        labels: {
          email: 'E-pasts',
          phone: 'Tālrunis',
          address: 'Birojs',
          hours: 'Darba laiks',
        },
      },
      faq: {
        overline: 'ATBALSTS',
        headline: 'Bieži uzdotie jautājumi',
        description: 'Ātras atbildes uz biežiem jautājumiem.',
        imageOverlay: 'Mēs esam šeit, lai palīdzētu jums gūt panākumus',
        items: [
          {
            question: 'Cik ātri jūs atbildat?',
            answer: 'Mēs parasti atbildam uz visiem pieprasījumiem 24 stundu laikā darba dienās.',
          },
          {
            question: 'Vai piedāvājat demonstrācijas?',
            answer:
              'Jā! Mēs piedāvājam bezmaksas personalizētas demonstrācijas, lai parādītu, kā Agrello var palīdzēt jūsu biznesam. Rezervējiet demonstrāciju, izmantojot kontakta veidlapu.',
          },
          {
            question: 'Ja man nepieciešams tehniskais atbalsts?',
            answer:
              'Esošajiem klientiem tehniskais atbalsts ir pieejams lietotnes palīdzības centrā. Steidzamiem jautājumiem sazinieties ar mums tieši pa e-pastu.',
          },
          {
            question: 'Vai varu rezervēt darbnīcu?',
            answer:
              'Noteikti! Mēs piedāvājam bezmaksas e-parakstīšanas darbnīcas, lai palīdzētu jums sākt. Pieminiet to savā ziņā, un mēs to organizēsim.',
          },
        ],
        ctaText: 'Uzzināt vairāk',
      },
      latestPosts: {
        overline: 'NO MŪSU BLOGA',
        headline: 'Jaunākie bloga ieraksti',
        description: 'Rīki un stratēģijas, kas mūsdienu komandām nepieciešamas uzņēmuma izaugsmei.',
        viewAllText: 'Skatīt visus ierakstus',
      },
    },
    uk: {
      hero: {
        overline: "ЗВ'ЯЗАТИСЯ",
        headline: (
          <>
            Дізнаймося, чи Agrello <span className="text-brand-primary">підходить вам</span>
          </>
        ),
        description:
          'Кожна компанія унікальна. Пропустіть електронні листи та забронюйте прямий слот з нами, щоб побачити, як ми можемо допомогти з вашими потребами в документообігу.',
        ctaText: 'Зателефонуйте нам',
        trustText: 'Отримайте безкоштовну персоналізовану екскурсію платформою.',
        tabs: {
          bookCall: 'Забронювати дзвінок',
          askQuestion: 'Поставити питання',
        },
        formLabels: {
          name: "Ваше ім'я",
          email: 'Електронна пошта',
          company: 'Назва компанії',
          message: 'Ваше повідомлення',
          submit: 'Надіслати',
          success: "Дякуємо! Ваше повідомлення надіслано. Ми скоро зв'яжемося з вами.",
          error: 'Щось пішло не так. Будь ласка, спробуйте ще раз або напишіть нам напряму.',
        },
        calendlyUrl:
          'https://calendly.com/ihor-agrello/30min?embed_domain=www.agrello.io&embed_type=Inline',
      },
      info: {
        headline: 'Контактна інформація',
        email: 'info@agrello.io',
        address: ['Agrello OÜ', 'Rotermanni 6', '10111 Tallinn', 'Естонія'],
        hours: 'Пн-Пт 9:00 - 18:00 EET',
        labels: {
          email: 'Електронна пошта',
          phone: 'Телефон',
          address: 'Офіс',
          hours: 'Робочі години',
        },
      },
      faq: {
        overline: 'ПІДТРИМКА',
        headline: 'Часті питання',
        description: 'Швидкі відповіді на поширені питання.',
        imageOverlay: 'Ми тут, щоб допомогти вам досягти успіху',
        items: [
          {
            question: 'Як швидко ви відповідаєте?',
            answer: 'Ми зазвичай відповідаємо на всі запити протягом 24 годин у робочі дні.',
          },
          {
            question: 'Чи пропонуєте ви демо?',
            answer:
              'Так! Ми пропонуємо безкоштовні персоналізовані демо, щоб показати, як Agrello може допомогти вашому бізнесу. Забронюйте демо через контактну форму.',
          },
          {
            question: 'Якщо мені потрібна технічна підтримка?',
            answer:
              "Для існуючих клієнтів технічна підтримка доступна через центр допомоги в додатку. Для термінових питань зв'яжіться з нами напряму електронною поштою.",
          },
          {
            question: 'Чи можу я забронювати воркшоп?',
            answer:
              'Звичайно! Ми пропонуємо безкоштовні воркшопи з е-підписання, щоб допомогти вам почати. Згадайте це у своєму повідомленні, і ми організуємо його.',
          },
        ],
        ctaText: 'Дізнатись більше',
      },
      latestPosts: {
        overline: 'З НАШОГО БЛОГУ',
        headline: 'Останні публікації блогу',
        description:
          'Інструменти та стратегії, які потрібні сучасним командам для розвитку компаній.',
        viewAllText: 'Переглянути всі публікації',
      },
    },
  }

  const t = dictionary[lang] || dictionary.en

  // Fetch actual blog posts - fallback to 'en' for lv/uk since content only supports et/en
  const blogLang = lang === 'et' || lang === 'en' ? lang : 'en'
  const rawPosts = await getBlogPosts(blogLang)
  const blogPosts = mapBlogPostsToLatestPosts(rawPosts, lang, 3)

  return (
    <main>
      {/* Hero */}
      <ContactHero
        overline={t.hero.overline}
        headline={t.hero.headline}
        description={t.hero.description}
        ctaText={t.hero.ctaText}
        ctaHref="tel:+3726005015"
        trustText={t.hero.trustText}
        tabs={t.hero.tabs}
        formLabels={t.hero.formLabels}
        calendlyUrl={t.hero.calendlyUrl}
      />

      {/* Free workshop details */}
      <WorkshopSection locale={lang} className="bg-gray-50" />

      {/* Our customers */}
      <CustomersSection locale={lang} />

      {/* FAQ */}
      <FAQ
        overline={t.faq.overline}
        headline={t.faq.headline}
        description={t.faq.description}
        items={t.faq.items}
        imageSrc="/images/sections/faq-illustration.webp"
        imageAlt="Contact FAQ"
        imageOverlay={t.faq.imageOverlay}
        ctaText={t.faq.ctaText}
        ctaHref={`/${lang}/features`}
        className="bg-gray-50"
      />

      {/* Latest blog posts */}
      <LatestPosts
        overline={t.latestPosts.overline}
        headline={t.latestPosts.headline}
        description={t.latestPosts.description}
        viewAllText={t.latestPosts.viewAllText}
        viewAllHref={`/${lang}/blog`}
        posts={blogPosts}
      />
    </main>
  )
}
