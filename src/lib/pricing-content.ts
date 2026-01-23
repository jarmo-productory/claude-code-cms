/**
 * Shared pricing content used by both homepage and pricing page
 * Single source of truth for pricing plans and related content
 */

export interface PricingPlan {
  name: string
  price: string
  period: string
  subtext: string
  description: string
  ctaText: string
  ctaHref: string
  featured?: boolean
  badge?: string
}

export interface PricingContent {
  overline: string
  headline: string
  description: string
  plans: PricingPlan[]
  contactCta: {
    headline: string
    description: string
    buttonText: string
    buttonHref: string
  }
}

export interface FeaturesContent {
  overline: string
  headline: string
  description: string
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}

export interface CustomerStoryContent {
  headline: string
  description: string
  authorName: string
  authorTitle: string
  ctaText: string
}

export function getPricingContent(lang: string): PricingContent {
  const content: Record<string, PricingContent> = {
    en: {
      overline: 'PRICING',
      headline: 'Plans that fit your scale',
      description: 'All plans include the full set of e-signing and contract management features',
      plans: [
        {
          name: 'Team',
          price: '€99',
          period: '10 USERS/MONTH',
          subtext: 'INCL. 500 DOCS/MONTH*',
          description:
            'Get your whole team on board by adding up to 10 members. Can easily be integrated with your existing tools and workflows.',
          ctaText: 'Sign up',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
        },
        {
          name: 'Starter',
          price: '€19.90',
          period: 'USER/MONTH',
          subtext: 'INCL. 50 DOCS/MONTH*',
          description:
            'Start with one seat, add more as you scale. Drafting, approvals, and commenting are included for better collaboration.',
          ctaText: 'Try for free',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
          featured: true,
          badge: '14 days free!',
        },
        {
          name: 'Custom',
          price: 'Contact us',
          period: 'FOR ANNUAL PRICE',
          subtext: 'UNLIMITED DOCS AND USERS',
          description:
            'Unlock unlimited users, documents, and API access with a plan built just for your business.',
          ctaText: 'Get in touch',
          ctaHref: `/${lang}/contact`,
        },
      ],
      contactCta: {
        headline: "Didn't find what you need?",
        description: 'Contact our team and we can discuss further.',
        buttonText: 'Contact us',
        buttonHref: `/${lang}/contact`,
      },
    },
    et: {
      overline: 'HINNAD',
      headline: 'Plaanid, mis sobivad sinu mastaabiga',
      description:
        'Kõik paketid sisaldavad täielikku e-allkirjastamise ja lepinguhalduse funktsioonide komplekti',
      plans: [
        {
          name: 'Meeskond',
          price: '€99',
          period: '10 KASUTAJAT/KUU',
          subtext: 'SH 500 DOKUMENTI/KUU*',
          description:
            'Kaasa kogu meeskond, lisades kuni 10 liiget. Lihtne integratsioon olemasolevate tööriistade ja töövoogudega.',
          ctaText: 'Registreeru',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
        },
        {
          name: 'Starter',
          price: '€19.90',
          period: 'KASUTAJA/KUU',
          subtext: 'SH 50 DOKUMENTI/KUU*',
          description:
            'Alusta ühe kohaga, lisa rohkem vastavalt vajadusele. Mustandi koostamine, kinnitused ja kommenteerimine on kaasas.',
          ctaText: 'Proovi tasuta',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
          featured: true,
          badge: '14 päeva tasuta!',
        },
        {
          name: 'Kohandatud',
          price: 'Võta ühendust',
          period: 'AASTAHINNA EEST',
          subtext: 'PIIRAMATUD DOKUMENDID JA KASUTAJAD',
          description:
            'Ava piiramatud kasutajad, dokumendid ja API ligipääs plaaniga, mis on loodud just sinu ettevõttele.',
          ctaText: 'Võta ühendust',
          ctaHref: `/${lang}/contact`,
        },
      ],
      contactCta: {
        headline: 'Ei leidnud sobivat?',
        description: 'Võta meie meeskonnaga ühendust ja arutame edasi.',
        buttonText: 'Võta ühendust',
        buttonHref: `/${lang}/contact`,
      },
    },
    lv: {
      overline: 'CENAS',
      headline: 'Plāni, kas atbilst jūsu mērogam',
      description:
        'Visi plāni ietver pilnu e-parakstīšanas un līgumu pārvaldības funkciju komplektu',
      plans: [
        {
          name: 'Komanda',
          price: '€99',
          period: '10 LIETOTĀJI/MĒNESĪ',
          subtext: 'IEKĻ. 500 DOKUMENTI/MĒNESĪ*',
          description:
            'Pievienojiet visu komandu, pievienojot līdz 10 dalībniekiem. Viegli integrējams ar esošajiem rīkiem un darbplūsmām.',
          ctaText: 'Reģistrēties',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
        },
        {
          name: 'Starter',
          price: '€19.90',
          period: 'LIETOTĀJS/MĒNESĪ',
          subtext: 'IEKĻ. 50 DOKUMENTI/MĒNESĪ*',
          description:
            'Sāciet ar vienu vietu, pievienojiet vairāk pēc vajadzības. Melnraksti, apstiprinājumi un komentēšana ir iekļauta.',
          ctaText: 'Izmēģināt bez maksas',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
          featured: true,
          badge: '14 dienas bez maksas!',
        },
        {
          name: 'Pielāgots',
          price: 'Sazinieties',
          period: 'PAR GADA CENU',
          subtext: 'NEIEROBEŽOTI DOKUMENTI UN LIETOTĀJI',
          description:
            'Atbloķējiet neierobežotus lietotājus, dokumentus un API piekļuvi ar plānu, kas izveidots tieši jūsu biznesam.',
          ctaText: 'Sazināties',
          ctaHref: `/${lang}/contact`,
        },
      ],
      contactCta: {
        headline: 'Neatradāt vajadzīgo?',
        description: 'Sazinieties ar mūsu komandu, un mēs varam apspriest tālāk.',
        buttonText: 'Sazināties',
        buttonHref: `/${lang}/contact`,
      },
    },
    uk: {
      overline: 'ЦІНИ',
      headline: 'Плани, що відповідають вашому масштабу',
      description:
        'Всі плани включають повний набір функцій е-підписання та управління контрактами',
      plans: [
        {
          name: 'Команда',
          price: '€99',
          period: '10 КОРИСТУВАЧІВ/МІСЯЦЬ',
          subtext: 'ВКЛ. 500 ДОКУМЕНТІВ/МІСЯЦЬ*',
          description:
            'Підключіть всю команду, додавши до 10 учасників. Легко інтегрується з існуючими інструментами та робочими процесами.',
          ctaText: 'Зареєструватися',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
        },
        {
          name: 'Starter',
          price: '€19.90',
          period: 'КОРИСТУВАЧ/МІСЯЦЬ',
          subtext: 'ВКЛ. 50 ДОКУМЕНТІВ/МІСЯЦЬ*',
          description:
            'Почніть з одного місця, додавайте більше за потреби. Чернетки, затвердження та коментування включені.',
          ctaText: 'Спробувати безкоштовно',
          ctaHref: 'https://docs.agrello.io/app/login?open_tab=sign_up',
          featured: true,
          badge: '14 днів безкоштовно!',
        },
        {
          name: 'Індивідуальний',
          price: "Зв'яжіться з нами",
          period: 'ЗА РІЧНУ ЦІНУ',
          subtext: 'НЕОБМЕЖЕНІ ДОКУМЕНТИ ТА КОРИСТУВАЧІ',
          description:
            'Відкрийте необмежену кількість користувачів, документів та доступ до API з планом, створеним для вашого бізнесу.',
          ctaText: "Зв'язатися",
          ctaHref: `/${lang}/contact`,
        },
      ],
      contactCta: {
        headline: 'Не знайшли потрібне?',
        description: "Зв'яжіться з нашою командою, і ми обговоримо далі.",
        buttonText: "Зв'язатися",
        buttonHref: `/${lang}/contact`,
      },
    },
  }

  return content[lang] || content.en
}

export function getFeaturesContent(lang: string): FeaturesContent {
  const content: Record<string, FeaturesContent> = {
    en: {
      overline: 'ALL PLANS INCLUDE',
      headline: 'The full set of e-signing and contract management features',
      description: 'Everything you need to create, sign, and manage contracts efficiently',
      items: [
        {
          icon: 'Layout',
          title: 'Templates',
          description:
            'Editable templates, PDF templates, bulk creation, and template conversion for faster contract preparation.',
        },
        {
          icon: 'FileText',
          title: 'Documents',
          description:
            'Word editor, PDF/ASIC output, fillable fields, reminders, sharing, and AI-powered document analyzer.',
        },
        {
          icon: 'FolderKanban',
          title: 'Contract Management',
          description:
            'Kanban board, list views, folder sharing, granular permissions, and powerful search capabilities.',
        },
        {
          icon: 'Users',
          title: 'Workspace Management',
          description:
            'Team member management, billing controls, custom branding, and ownership transfer options.',
        },
        {
          icon: 'Mail',
          title: 'Signing Process',
          description:
            'Email invitations, custom branding, resending options, additional signers, and real-time notifications.',
        },
        {
          icon: 'FileSignature',
          title: 'E-signature Methods',
          description:
            'Simple signatures, qualified signatures via Smart-ID, Mobile-ID, eID cards, and Swedish BankID.',
        },
        {
          icon: 'Lock',
          title: 'Security',
          description:
            'Passwordless authentication, Google/Microsoft login, encryption, and Google Cloud infrastructure.',
        },
        {
          icon: 'Puzzle',
          title: 'Integrations & API',
          description:
            'Template-based creation, document sending, folder management, and Zapier connectivity.',
        },
      ],
    },
    et: {
      overline: 'KÕIK PAKETID SISALDAVAD',
      headline: 'Täielik e-allkirjastamise ja lepinguhalduse funktsioonide komplekt',
      description: 'Kõik vajalik lepingute loomiseks, allkirjastamiseks ja haldamiseks',
      items: [
        {
          icon: 'Layout',
          title: 'Mallid',
          description:
            'Redigeeritavad mallid, PDF-mallid, hulgiloome ja mallide teisendamine kiirema lepingu ettevalmistuse jaoks.',
        },
        {
          icon: 'FileText',
          title: 'Dokumendid',
          description:
            'Wordiredaktor, PDF/ASIC väljund, täidetavad väljad, meeldetuletused, jagamine ja AI-põhine dokumendianalüüsija.',
        },
        {
          icon: 'FolderKanban',
          title: 'Lepinguhaldus',
          description:
            'Kanban-tahvel, loendivaated, kaustade jagamine, detailsed õigused ja võimas otsingufunktsioon.',
        },
        {
          icon: 'Users',
          title: 'Tööruumi haldus',
          description:
            'Meeskonnaliikmete haldus, arvelduse kontrollid, kohandatud bränding ja omandiõiguse üleandmine.',
        },
        {
          icon: 'Mail',
          title: 'Allkirjastamisprotsess',
          description:
            'E-posti kutsed, kohandatud bränding, uuesti saatmine, lisaallkirjastajad ja reaalajas teavitused.',
        },
        {
          icon: 'FileSignature',
          title: 'E-allkirja meetodid',
          description:
            'Lihtsad allkirjad, kvalifitseeritud allkirjad Smart-ID, Mobiil-ID, ID-kaardi ja Rootsi BankID kaudu.',
        },
        {
          icon: 'Lock',
          title: 'Turvalisus',
          description:
            'Paroolivaba autentimine, Google/Microsofti sisselogimine, krüpteerimine ja Google Cloudi infrastruktuur.',
        },
        {
          icon: 'Puzzle',
          title: 'Integratsioonid ja API',
          description:
            'Mallipõhine loomine, dokumentide saatmine, kaustahaldus ja Zapieri ühenduvus.',
        },
      ],
    },
    lv: {
      overline: 'VISI PLĀNI IETVER',
      headline: 'Pilns e-parakstīšanas un līgumu pārvaldības funkciju komplekts',
      description: 'Viss, kas nepieciešams līgumu izveidei, parakstīšanai un pārvaldībai',
      items: [
        {
          icon: 'Layout',
          title: 'Veidnes',
          description:
            'Rediģējamas veidnes, PDF veidnes, masveida izveide un veidņu konvertēšana ātrākai līgumu sagatavošanai.',
        },
        {
          icon: 'FileText',
          title: 'Dokumenti',
          description:
            'Word redaktors, PDF/ASIC izvade, aizpildāmi lauki, atgādinājumi, koplietošana un AI dokumentu analizators.',
        },
        {
          icon: 'FolderKanban',
          title: 'Līgumu pārvaldība',
          description:
            'Kanban dēlis, saraksta skati, mapju koplietošana, detalizētas atļaujas un jaudīga meklēšana.',
        },
        {
          icon: 'Users',
          title: 'Darba telpas pārvaldība',
          description:
            'Komandas locekļu pārvaldība, norēķinu kontrole, pielāgots zīmols un īpašumtiesību nodošana.',
        },
        {
          icon: 'Mail',
          title: 'Parakstīšanas process',
          description:
            'E-pasta uzaicinājumi, pielāgots zīmols, atkārtota nosūtīšana, papildu parakstītāji un reāllaika paziņojumi.',
        },
        {
          icon: 'FileSignature',
          title: 'E-paraksta metodes',
          description:
            'Vienkārši paraksti, kvalificēti paraksti ar Smart-ID, Mobile-ID, eID kartēm un Zviedrijas BankID.',
        },
        {
          icon: 'Lock',
          title: 'Drošība',
          description:
            'Autentifikācija bez paroles, Google/Microsoft pieteikšanās, šifrēšana un Google Cloud infrastruktūra.',
        },
        {
          icon: 'Puzzle',
          title: 'Integrācijas un API',
          description:
            'Veidņu bāzēta izveide, dokumentu nosūtīšana, mapju pārvaldība un Zapier savienojamība.',
        },
      ],
    },
    uk: {
      overline: 'ВСІ ПЛАНИ ВКЛЮЧАЮТЬ',
      headline: 'Повний набір функцій е-підписання та управління контрактами',
      description: 'Все необхідне для створення, підписання та управління контрактами',
      items: [
        {
          icon: 'Layout',
          title: 'Шаблони',
          description:
            'Редаговані шаблони, PDF-шаблони, масове створення та конвертація шаблонів для швидшої підготовки контрактів.',
        },
        {
          icon: 'FileText',
          title: 'Документи',
          description:
            'Word-редактор, PDF/ASIC вивід, заповнювані поля, нагадування, спільний доступ та AI-аналізатор документів.',
        },
        {
          icon: 'FolderKanban',
          title: 'Управління контрактами',
          description:
            'Kanban-дошка, списки, спільний доступ до папок, детальні дозволи та потужний пошук.',
        },
        {
          icon: 'Users',
          title: 'Управління робочим простором',
          description:
            'Управління членами команди, контроль оплати, власний брендинг та передача права власності.',
        },
        {
          icon: 'Mail',
          title: 'Процес підписання',
          description:
            'Email-запрошення, власний брендинг, повторне надсилання, додаткові підписанти та сповіщення в реальному часі.',
        },
        {
          icon: 'FileSignature',
          title: 'Методи е-підпису',
          description:
            'Прості підписи, кваліфіковані підписи через Smart-ID, Mobile-ID, eID-картки та шведський BankID.',
        },
        {
          icon: 'Lock',
          title: 'Безпека',
          description:
            'Автентифікація без пароля, вхід через Google/Microsoft, шифрування та інфраструктура Google Cloud.',
        },
        {
          icon: 'Puzzle',
          title: 'Інтеграції та API',
          description:
            'Створення на основі шаблонів, надсилання документів, управління папками та підключення Zapier.',
        },
      ],
    },
  }

  return content[lang] || content.en
}

export function getCustomerStoryContent(lang: string): CustomerStoryContent {
  const content: Record<string, CustomerStoryContent> = {
    en: {
      headline: 'Smarten Logistics saved 3 hours per week on contract preparation',
      description:
        'With Agrello templates and bulk creation, the HR team eliminated manual copy-paste work and reduced errors in employment contracts.',
      authorName: 'Mari-Liis Kreem',
      authorTitle: 'HR Director, Smarten Logistics',
      ctaText: 'Read case study',
    },
    et: {
      headline: 'Smarten Logistics säästis 3 tundi nädalas lepingute ettevalmistamisel',
      description:
        'Agrello mallide ja hulgiloomega kõrvaldas personaliosakond käsitsi kopeerimise-kleepimise töö ja vähendas vigu töölepingutes.',
      authorName: 'Mari-Liis Kreem',
      authorTitle: 'Personalijuht, Smarten Logistics',
      ctaText: 'Loe juhtumiuuringut',
    },
    lv: {
      headline: 'Smarten Logistics ietaupīja 3 stundas nedēļā līgumu sagatavošanā',
      description:
        'Ar Agrello veidnēm un masveida izveidi HR komanda novērsa manuālu kopēšanu-ielīmēšanu un samazināja kļūdas darba līgumos.',
      authorName: 'Mari-Liis Kreem',
      authorTitle: 'HR direktore, Smarten Logistics',
      ctaText: 'Lasīt gadījuma izpēti',
    },
    uk: {
      headline: 'Smarten Logistics заощадила 3 години на тиждень на підготовці контрактів',
      description:
        'Завдяки шаблонам Agrello та масовому створенню HR-команда усунула ручне копіювання-вставку та зменшила помилки в трудових договорах.',
      authorName: 'Mari-Liis Kreem',
      authorTitle: 'HR-директор, Smarten Logistics',
      ctaText: 'Читати кейс',
    },
  }

  return content[lang] || content.en
}
