import type { Metadata } from 'next'
import {
  PageHero,
  Pricing,
  FeaturesGrid,
  SmartenStory,
  FAQ,
  WorkshopSection,
  LatestPosts,
} from '@/components/sections'
import { getBlogPosts } from '@/lib/content'
import { mapBlogPostsToLatestPosts } from '@/lib/content-mappers'

export const metadata: Metadata = {
  title: 'Pricing - Agrello',
  description: 'Simple, transparent pricing for Agrello. Start free, upgrade when you need more.',
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'

  const dictionary = {
    en: {
      hero: {
        overline: 'PRICING',
        headline: 'Simple, transparent pricing',
        description:
          'Start with a free trial. No credit card required. Upgrade when you need more.',
      },
      pricing: {
        overline: 'CHOOSE YOUR PLAN',
        headline: 'Plans for every team size',
        description: 'All plans include 14-day free trial with full features',
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
      features: {
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
      faq: {
        overline: 'QUESTIONS',
        headline: 'Pricing FAQ',
        description: 'Everything you need to know about our pricing.',
        imageOverlay: 'Find the right plan for your needs',
        items: [
          {
            question: 'Can I try Agrello for free?',
            answer:
              'Yes! All plans include a 14-day free trial with full features. No credit card required to start.',
          },
          {
            question: 'What happens after the trial?',
            answer:
              'After your trial ends, you can choose to upgrade to a paid plan or your account will be limited. Your documents are always safe and accessible.',
          },
          {
            question: 'Can I change plans later?',
            answer:
              'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
          },
          {
            question: 'What counts as a document?',
            answer:
              "A document is any contract or agreement you create or upload for signing. Drafts that are never sent don't count toward your limit.",
          },
          {
            question: 'Do you offer annual billing?',
            answer:
              'Yes, we offer annual billing with a discount. Contact us for custom annual pricing.',
          },
          {
            question: 'Is there a setup fee?',
            answer: 'No setup fees. You can start using Agrello immediately after signing up.',
          },
        ],
        ctaText: 'Contact us',
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
        overline: 'HINNAD',
        headline: 'Lihtne ja läbipaistev hinnastus',
        description:
          'Alusta tasuta prooviperioodiga. Krediitkaarti pole vaja. Uuenda, kui vajad rohkem.',
      },
      pricing: {
        overline: 'VALI OMA PAKETT',
        headline: 'Plaanid igale meeskonnale',
        description: 'Kõik paketid sisaldavad 14-päevast tasuta prooviperioodi',
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
      features: {
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
      faq: {
        overline: 'KÜSIMUSED',
        headline: 'Hinnastuse KKK',
        description: 'Kõik, mida pead teadma meie hindade kohta.',
        imageOverlay: 'Leia oma vajadustele sobiv plaan',
        items: [
          {
            question: 'Kas saan Agrellot tasuta proovida?',
            answer:
              'Jah! Kõik paketid sisaldavad 14-päevast tasuta prooviperioodi kõigi funktsioonidega. Alustamiseks pole krediitkaarti vaja.',
          },
          {
            question: 'Mis juhtub pärast prooviperioodi?',
            answer:
              'Pärast prooviperioodi lõppu saad valida tasulise paketi või sinu konto piiratakse. Sinu dokumendid on alati turvalised ja ligipääsetavad.',
          },
          {
            question: 'Kas saan plaani hiljem muuta?',
            answer:
              'Kindlasti. Saad oma plaani igal ajal uuendada või alandada. Muudatused jõustuvad järgmise arveldustsükli alguses.',
          },
          {
            question: 'Mis loetakse dokumendiks?',
            answer:
              'Dokument on iga leping või kokkulepe, mille lood või laadid üles allkirjastamiseks. Mustandid, mida kunagi ei saadeta, ei lähe limiidi arvesse.',
          },
          {
            question: 'Kas pakute aasta arveldust?',
            answer:
              'Jah, pakume aasta arveldust soodushinnaga. Võta meiega ühendust kohandatud aastahinna saamiseks.',
          },
          {
            question: 'Kas on seadistustasu?',
            answer:
              'Seadistustasusid pole. Saad Agrellot kohe pärast registreerumist kasutama hakata.',
          },
        ],
        ctaText: 'Võta ühendust',
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
        overline: 'CENAS',
        headline: 'Vienkārša, caurspīdīga cenu politika',
        description:
          'Sāciet ar bezmaksas izmēģinājumu. Kredītkarte nav nepieciešama. Jauniniet, kad nepieciešams vairāk.',
      },
      pricing: {
        overline: 'IZVĒLIETIES PLĀNU',
        headline: 'Plāni katrai komandas izmēram',
        description: 'Visi plāni ietver 14 dienu bezmaksas izmēģinājumu ar pilnām funkcijām',
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
      features: {
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
      faq: {
        overline: 'JAUTĀJUMI',
        headline: 'Cenu BUJ',
        description: 'Viss, kas jums jāzina par mūsu cenām.',
        imageOverlay: 'Atrodiet jūsu vajadzībām piemērotu plānu',
        items: [
          {
            question: 'Vai varu izmēģināt Agrello bez maksas?',
            answer:
              'Jā! Visi plāni ietver 14 dienu bezmaksas izmēģinājumu ar pilnām funkcijām. Lai sāktu, kredītkarte nav nepieciešama.',
          },
          {
            question: 'Kas notiek pēc izmēģinājuma?',
            answer:
              'Pēc izmēģinājuma beigām varat izvēlēties jaunināt uz maksas plānu vai jūsu konts tiks ierobežots. Jūsu dokumenti vienmēr ir droši un pieejami.',
          },
          {
            question: 'Vai varu mainīt plānus vēlāk?',
            answer:
              'Noteikti. Varat jaunināt vai pazemināt savu plānu jebkurā laikā. Izmaiņas stājas spēkā nākamā norēķinu cikla sākumā.',
          },
          {
            question: 'Kas tiek uzskatīts par dokumentu?',
            answer:
              'Dokuments ir jebkurš līgums vai vienošanās, ko izveidojat vai augšupielādējat parakstīšanai. Melnraksti, kas nekad netiek nosūtīti, netiek ieskaitīti jūsu limitā.',
          },
          {
            question: 'Vai piedāvājat gada norēķinus?',
            answer:
              'Jā, mēs piedāvājam gada norēķinus ar atlaidi. Sazinieties ar mums, lai saņemtu pielāgotu gada cenu.',
          },
          {
            question: 'Vai ir iestatīšanas maksa?',
            answer: 'Nav iestatīšanas maksu. Varat sākt lietot Agrello uzreiz pēc reģistrēšanās.',
          },
        ],
        ctaText: 'Sazināties',
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
        overline: 'ЦІНИ',
        headline: 'Проста, прозора цінова політика',
        description:
          'Почніть з безкоштовного пробного періоду. Кредитна картка не потрібна. Оновіть, коли потрібно більше.',
      },
      pricing: {
        overline: 'ОБЕРІТЬ ПЛАН',
        headline: 'Плани для будь-якого розміру команди',
        description:
          'Всі плани включають 14-денний безкоштовний пробний період з повними функціями',
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
      features: {
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
      faq: {
        overline: 'ПИТАННЯ',
        headline: 'FAQ щодо цін',
        description: 'Все, що потрібно знати про наші ціни.',
        imageOverlay: 'Знайдіть план, який відповідає вашим потребам',
        items: [
          {
            question: 'Чи можу я спробувати Agrello безкоштовно?',
            answer:
              'Так! Всі плани включають 14-денний безкоштовний пробний період з повними функціями. Для початку кредитна картка не потрібна.',
          },
          {
            question: 'Що відбувається після пробного періоду?',
            answer:
              'Після закінчення пробного періоду ви можете обрати платний план або ваш акаунт буде обмежено. Ваші документи завжди в безпеці та доступні.',
          },
          {
            question: 'Чи можу я змінити план пізніше?',
            answer:
              'Звичайно. Ви можете оновити або понизити свій план у будь-який час. Зміни набирають чинності на початку наступного платіжного циклу.',
          },
          {
            question: 'Що вважається документом?',
            answer:
              'Документ — це будь-який контракт або угода, яку ви створюєте або завантажуєте для підписання. Чернетки, які ніколи не надсилаються, не враховуються у вашому ліміті.',
          },
          {
            question: 'Чи пропонуєте ви річну оплату?',
            answer:
              "Так, ми пропонуємо річну оплату зі знижкою. Зв'яжіться з нами для індивідуальної річної ціни.",
          },
          {
            question: 'Чи є плата за налаштування?',
            answer:
              'Плати за налаштування немає. Ви можете почати використовувати Agrello відразу після реєстрації.',
          },
        ],
        ctaText: "Зв'язатися",
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
      <PageHero
        overline={t.hero.overline}
        headline={t.hero.headline}
        description={t.hero.description}
      />

      <Pricing plans={t.pricing.plans} contactCta={t.pricing.contactCta} hideHeader />

      <FeaturesGrid
        overline={t.features.overline}
        headline={t.features.headline}
        description={t.features.description}
        features={t.features.items}
      />

      <SmartenStory locale={lang} />

      <FAQ
        overline={t.faq.overline}
        headline={t.faq.headline}
        description={t.faq.description}
        items={t.faq.items}
        imageSrc="/images/sections/faq-illustration.webp"
        imageAlt="Pricing FAQ"
        imageOverlay={t.faq.imageOverlay}
        ctaText={t.faq.ctaText}
        ctaHref={`/${lang}/contact`}
      />

      <WorkshopSection locale={lang} />

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
