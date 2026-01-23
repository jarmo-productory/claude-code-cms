'use client'

import { FileText, FolderOpen, Users, PenTool, Shield, Link2, Layout, Mail } from 'lucide-react'

interface WhatsIncludedProps {
  locale: string
  className?: string
}

const translations = {
  en: {
    headline: "What's included?",
    description:
      'Both packages come with the full set of the best e-signing and contract management features for small and medium sized companies.',
    highlight: 'All documents and signatures included.',
    categories: [
      {
        icon: 'Layout',
        title: 'Templates',
        features: [
          'Editable templates',
          'PDF templates',
          'Bulk-creation of documents from templates',
          'Convert any document to template',
        ],
      },
      {
        icon: 'FileText',
        title: 'Documents',
        features: [
          'Built-in Word editor',
          'PDF and ASIC container e-signing output',
          'Dynamic fillable fields ("Fill & Sign")',
          'Document reminders for followup actions',
          'Sharing the documents with external parties',
          'Agrello Codriver: AI document analyzer',
          'Import signed documents',
        ],
      },
      {
        icon: 'FolderOpen',
        title: 'Contract management',
        features: [
          'Kanban-board for contract lifecycle overview',
          'List views for sorting and filtering the documents',
          'Shared with team members',
          'Granular access permissions management',
          'Shared templates with team members',
          'Home screen for most important tasks',
          'Inbox of every document sent to you for signing or viewing',
          'Document search',
        ],
      },
      {
        icon: 'Users',
        title: 'Workspace management',
        features: [
          'Manage team members and permissions',
          'Manage your subscription and billing',
          'Customize signing invitation branding',
          'Transfer the ownership of whole workspace',
        ],
      },
      {
        icon: 'Mail',
        title: 'Signing process',
        features: [
          'Automatic signing invitation over email',
          'Custom branding of signing invitation emails',
          'Resending signing invitations',
          'Add additional signers to signed documents',
          'Get notified of new signatures',
        ],
      },
      {
        icon: 'PenTool',
        title: 'E-signature methods',
        features: [
          'Simple electronic signatures',
          'Qualified electronic signatures (Smart-ID, Mobile-ID, eID cards)',
          'Swedish BankID',
        ],
      },
      {
        icon: 'Shield',
        title: 'Security and authentication',
        features: [
          'Passwordless authentication',
          'Google and Microsoft account login',
          'Encrypted communications',
          'Trusted Google Cloud infrastructure',
        ],
      },
      {
        icon: 'Link2',
        title: 'Integrations and API',
        features: [
          'Create documents from templates',
          'Send documents for signing',
          'Create and manage folders',
          'Connect with 4000+ tools via Zapier',
        ],
      },
    ],
  },
  et: {
    headline: 'Mis on kaasas?',
    description:
      'Mõlemad paketid sisaldavad täielikku komplekti parimaid e-allkirjastamise ja lepinguhalduse funktsioone väikestele ja keskmise suurusega ettevõtetele.',
    highlight: 'Kõik dokumendid ja allkirjad kaasas.',
    categories: [
      {
        icon: 'Layout',
        title: 'Mallid',
        features: [
          'Redigeeritavad mallid',
          'PDF-mallid',
          'Dokumentide hulgiloome mallidest',
          'Teisenda mis tahes dokument malliks',
        ],
      },
      {
        icon: 'FileText',
        title: 'Dokumendid',
        features: [
          'Sisseehitatud Wordi redaktor',
          'PDF ja ASIC konteineri e-allkirja väljund',
          'Dünaamilised täidetavad väljad ("Täida ja allkirjasta")',
          'Dokumendi meeldetuletused järeltegevusteks',
          'Dokumentide jagamine väliste osapooltega',
          'Agrello Codriver: AI dokumendianalüsaator',
          'Allkirjastatud dokumentide import',
        ],
      },
      {
        icon: 'FolderOpen',
        title: 'Lepinguhaldus',
        features: [
          'Kanban-tahvel lepingu elutsükli ülevaateks',
          'Loendivaated dokumentide sortimiseks ja filtreerimiseks',
          'Jagatud meeskonnaliikmetega',
          'Detailne juurdepääsuõiguste haldus',
          'Jagatud mallid meeskonnaliikmetega',
          'Avakuva kõige olulisemate ülesannete jaoks',
          'Postkast kõigi allkirjastamiseks või vaatamiseks saadetud dokumentidega',
          'Dokumentide otsing',
        ],
      },
      {
        icon: 'Users',
        title: 'Tööruumi haldus',
        features: [
          'Halda meeskonnaliikmeid ja õigusi',
          'Halda tellimust ja arveldust',
          'Kohanda allkirjastamiskutse brändingut',
          'Kanna üle kogu tööruumi omandiõigus',
        ],
      },
      {
        icon: 'Mail',
        title: 'Allkirjastamisprotsess',
        features: [
          'Automaatne allkirjastamiskutse e-posti teel',
          'Allkirjastamiskutse e-kirjade kohandatud bränding',
          'Allkirjastamiskutsete uuesti saatmine',
          'Lisa allkirjastatud dokumentidele täiendavaid allkirjastajaid',
          'Saa teavitusi uutest allkirjadest',
        ],
      },
      {
        icon: 'PenTool',
        title: 'E-allkirja meetodid',
        features: [
          'Lihtsad e-allkirjad',
          'Kvalifitseeritud e-allkirjad (Smart-ID, Mobiil-ID, ID-kaardid)',
          'Rootsi BankID',
        ],
      },
      {
        icon: 'Shield',
        title: 'Turvalisus ja autentimine',
        features: [
          'Paroolivaba autentimine',
          'Google ja Microsofti konto sisselogimine',
          'Krüpteeritud side',
          'Usaldusväärne Google Cloudi infrastruktuur',
        ],
      },
      {
        icon: 'Link2',
        title: 'Integratsioonid ja API',
        features: [
          'Loo dokumente mallidest',
          'Saada dokumente allkirjastamiseks',
          'Loo ja halda kaustu',
          'Ühenda 4000+ tööriistaga Zapieri kaudu',
        ],
      },
    ],
  },
  lv: {
    headline: 'Kas ir iekļauts?',
    description:
      'Abās paketēs ir pilns labāko e-parakstīšanas un līgumu pārvaldības funkciju komplekts maziem un vidējiem uzņēmumiem.',
    highlight: 'Visi dokumenti un paraksti iekļauti.',
    categories: [
      {
        icon: 'Layout',
        title: 'Veidnes',
        features: [
          'Rediģējamas veidnes',
          'PDF veidnes',
          'Masveida dokumentu izveide no veidnēm',
          'Pārvērst jebkuru dokumentu par veidni',
        ],
      },
      {
        icon: 'FileText',
        title: 'Dokumenti',
        features: [
          'Iebūvēts Word redaktors',
          'PDF un ASIC konteinera e-paraksta izvade',
          'Dinamiski aizpildāmi lauki ("Aizpildīt un parakstīt")',
          'Dokumentu atgādinājumi turpmākām darbībām',
          'Dokumentu kopīgošana ar ārējām pusēm',
          'Agrello Codriver: AI dokumentu analizators',
          'Parakstītu dokumentu imports',
        ],
      },
      {
        icon: 'FolderOpen',
        title: 'Līgumu pārvaldība',
        features: [
          'Kanban panelis līguma dzīves cikla pārskatam',
          'Sarakstu skati dokumentu kārtošanai un filtrēšanai',
          'Kopīgots ar komandas locekļiem',
          'Detalizēta piekļuves atļauju pārvaldība',
          'Kopīgotas veidnes ar komandas locekļiem',
          'Sākuma ekrāns svarīgākajiem uzdevumiem',
          'Iesūtne ar visiem dokumentiem, kas nosūtīti parakstīšanai vai apskatei',
          'Dokumentu meklēšana',
        ],
      },
      {
        icon: 'Users',
        title: 'Darba telpas pārvaldība',
        features: [
          'Pārvaldīt komandas locekļus un atļaujas',
          'Pārvaldīt abonementu un norēķinus',
          'Pielāgot parakstīšanas uzaicinājuma zīmolu',
          'Nodot visas darba telpas īpašumtiesības',
        ],
      },
      {
        icon: 'Mail',
        title: 'Parakstīšanas process',
        features: [
          'Automātisks parakstīšanas uzaicinājums pa e-pastu',
          'Parakstīšanas uzaicinājuma e-pastu pielāgots zīmols',
          'Parakstīšanas uzaicinājumu atkārtota sūtīšana',
          'Pievienot papildu parakstītājus parakstītiem dokumentiem',
          'Saņemt paziņojumus par jauniem parakstiem',
        ],
      },
      {
        icon: 'PenTool',
        title: 'E-paraksta metodes',
        features: [
          'Vienkārši elektroniskie paraksti',
          'Kvalificēti elektroniskie paraksti (Smart-ID, Mobile-ID, eID kartes)',
          'Zviedrijas BankID',
        ],
      },
      {
        icon: 'Shield',
        title: 'Drošība un autentifikācija',
        features: [
          'Autentifikācija bez paroles',
          'Google un Microsoft konta pieslēgšanās',
          'Šifrēti sakari',
          'Uzticama Google Cloud infrastruktūra',
        ],
      },
      {
        icon: 'Link2',
        title: 'Integrācijas un API',
        features: [
          'Izveidot dokumentus no veidnēm',
          'Sūtīt dokumentus parakstīšanai',
          'Izveidot un pārvaldīt mapes',
          'Savienoties ar 4000+ rīkiem caur Zapier',
        ],
      },
    ],
  },
  uk: {
    headline: 'Що включено?',
    description:
      'Обидва пакети містять повний набір найкращих функцій е-підписання та управління контрактами для малих та середніх компаній.',
    highlight: 'Всі документи та підписи включені.',
    categories: [
      {
        icon: 'Layout',
        title: 'Шаблони',
        features: [
          'Редаговані шаблони',
          'PDF шаблони',
          'Масове створення документів з шаблонів',
          'Конвертація будь-якого документа в шаблон',
        ],
      },
      {
        icon: 'FileText',
        title: 'Документи',
        features: [
          'Вбудований редактор Word',
          'Вивід PDF та ASIC контейнера е-підпису',
          'Динамічні поля для заповнення ("Заповнити та підписати")',
          'Нагадування про документи для подальших дій',
          'Спільний доступ до документів із зовнішніми сторонами',
          'Agrello Codriver: AI аналізатор документів',
          'Імпорт підписаних документів',
        ],
      },
      {
        icon: 'FolderOpen',
        title: 'Управління контрактами',
        features: [
          'Kanban-дошка для огляду життєвого циклу контракту',
          'Списки для сортування та фільтрації документів',
          'Спільний доступ з членами команди',
          'Детальне управління правами доступу',
          'Спільні шаблони з членами команди',
          'Головний екран для найважливіших завдань',
          'Вхідні з усіма документами, надісланими на підпис або перегляд',
          'Пошук документів',
        ],
      },
      {
        icon: 'Users',
        title: 'Управління робочим простором',
        features: [
          'Управління членами команди та дозволами',
          'Управління підпискою та оплатою',
          'Налаштування брендингу запрошення на підпис',
          'Передача права власності на весь робочий простір',
        ],
      },
      {
        icon: 'Mail',
        title: 'Процес підписання',
        features: [
          'Автоматичне запрошення на підпис електронною поштою',
          'Власний брендинг листів із запрошенням на підпис',
          'Повторне надсилання запрошень на підпис',
          'Додавання додаткових підписантів до підписаних документів',
          'Сповіщення про нові підписи',
        ],
      },
      {
        icon: 'PenTool',
        title: 'Методи е-підпису',
        features: [
          'Прості електронні підписи',
          'Кваліфіковані електронні підписи (Smart-ID, Mobile-ID, eID картки)',
          'Шведський BankID',
        ],
      },
      {
        icon: 'Shield',
        title: 'Безпека та автентифікація',
        features: [
          'Автентифікація без пароля',
          'Вхід через акаунт Google та Microsoft',
          "Шифрований зв'язок",
          'Надійна інфраструктура Google Cloud',
        ],
      },
      {
        icon: 'Link2',
        title: 'Інтеграції та API',
        features: [
          'Створення документів з шаблонів',
          'Надсилання документів на підпис',
          'Створення та управління папками',
          'Підключення до 4000+ інструментів через Zapier',
        ],
      },
    ],
  },
}

const iconMap = {
  Layout,
  FileText,
  FolderOpen,
  Users,
  Mail,
  PenTool,
  Shield,
  Link2,
}

export function WhatsIncluded({ locale, className }: WhatsIncludedProps) {
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'
  const t = translations[lang]

  return (
    <section className={`py-16 lg:py-24 bg-white ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
            {t.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            {t.description} <strong className="text-gray-900">{t.highlight}</strong>
          </p>
        </div>

        {/* Feature Categories - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {t.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Layout
            return (
              <div key={index}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Feature List */}
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-start gap-3">
                      <span className="text-gray-400 mt-1.5 text-xs">■</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
