import type { Metadata } from 'next'
import {
  BigHero,
  TwoColumnSection,
  CustomersSection,
  FeaturesTabs,
  LatestPosts,
  SmartenStory,
  WorkshopSection,
  Pricing,
  FAQ,
} from '@/components/sections'
import { getBlogPosts } from '@/lib/content'
import { mapBlogPostsToLatestPosts } from '@/lib/content-mappers'
import { Zap, FileText, PenTool } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Claude Code CMS - A modern Next.js starter with everything you need',
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'

  const dictionary = {
    en: {
      hero: {
        overline: 'Secure e-signatures & contract management platform',
        headline: (
          <>
            Cut contract signing time by{' '}
            <span className="text-brand-primary">60% with Agrello</span>
          </>
        ),
        description: 'Create, e-sign, and track contracts faster and more securely.',
        cta: 'Try it out for free',
        trust: '14-days free trial. No credit card needed. Full functionality. No hidden agenda.',
      },
      twoCol: {
        overline: 'NEW GENERATION E-SIGNING AND CONTRACT MANAGEMENT',
        headline: 'Tired of wasting time on printing, scanning, and posting contracts?',
        description: (
          <p>
            Say goodbye to the hassles of printing, scanning, and posting contracts for signing.
            Agrello streamlines your entire contract process, allowing you to{' '}
            <strong className="text-gray-900">
              create, sign, and track agreements with just a few clicks.
            </strong>
          </p>
        ),
        overlay: 'Experience the ease and efficiency of digital contract management with Agrello',
        cta: 'Features',
      },
      latestPosts: {
        overline: 'OUR BLOG',
        headline: 'Latest blog posts',
        description: 'Tools and strategies modern teams need to help their companies grow.',
        viewAllText: 'View all posts',
      },
      pricing: {
        overline: 'PRICES',
        headline: 'Plans suitable for everyone',
        description: 'Choose the subscription plan that matches your needs',
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
            badge: '14 days free trial!',
          },
          {
            name: 'Custom',
            price: 'Contact us',
            period: 'FOR ANNUAL PRICE',
            subtext: 'UNLIMITED DOCS AND USERS',
            description:
              'Unlock unlimited users, documents, and API access with a plan built just for your business.',
            ctaText: 'Get in touch',
            ctaHref: '/en/contact',
          },
        ],
        contactCta: {
          headline: "Didn't find what you need?",
          description: 'Contact our team and we can discuss further.',
          buttonText: 'Contact us',
          buttonHref: '/en/contact',
        },
      },
      faq: {
        overline: 'SUPPORT',
        headline: 'FAQs',
        description:
          "Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our team.",
        imageOverlay: "Let's find out how to make your e-signing processes faster",
        ctaText: 'Get in touch',
        items: [
          {
            question: "What's the price?",
            answer:
              '19.90 EUR per month for one user, and 99 EUR per month for 10 users. You can add more users if you want, and yearly packages are available.',
          },
          {
            question: 'Does Agrello offer a free trial?',
            answer:
              "Yes! Agrello has a free 14 day trial in which you can test out Agrello's features, create your own documents, templates and test out bulk creation.",
          },
          {
            question: 'Who should consider using Agrello?',
            answer:
              'Companies that regularly handle a high volume of contracts or have a steady flow of standardised contracts can benefit from Agrello, especially if they are struggling with existing manual tools like Word, Excel, and email to manage their contracts.',
          },
          {
            question: 'What problem does Agrello primarily address?',
            answer:
              'Agrello solves the problem of inefficient manual contract creation. It helps companies reduce the time it takes to prepare, approve, and sign contracts, which in turn helps prevent delays and unnecessary costs associated with manual workflows.',
          },
          {
            question: 'How does Agrello benefit businesses?',
            answer:
              'Agrello improves productivity by reducing the manual effort needed to create contracts. It provides legal certainty and compliance, reduces tool fatigue, and minimises workflow disruptions. Automated workflows save time and increase productivity.',
          },
          {
            question: 'What sets Agrello apart from other contract management tools?',
            answer:
              "Agrello's bulk creation tool is unique, enabling the creation of hundreds of contracts from a single template and an Excel sheet. Additionally, Agrello supports bulk signing and bulk download, making it efficient for organisations to handle large volumes of contracts.",
          },
          {
            question: 'What integrations does Agrello offer?',
            answer:
              'Agrello integrates with other tools via Zapier, allowing access to thousands of applications like Sharepoint, Google Drive, Hubspot, and Bamboo HR. A public API is also available for custom integrations.',
          },
          {
            question: 'How does Agrello support contract management?',
            answer:
              'Agrello provides a team-wide workspace where contracts can be organised into access-controlled folders. Users can also set key dates for contract renewal and expiry. The Kanban view gives a quick overview of documents based on their status, from draft to signed and active.',
          },
          {
            question: 'How does Agrello simplify the signing process?',
            answer:
              "Signing with Agrello is frictionless. It's as easy as a few clicks. Companies can customise signature invitations with their logos and text, and reminders can be sent to signers. Agrello's signature methods include its own e-signature, and bulk signing is available for multiple documents at once.",
          },
          {
            question: 'What features does Agrello offer for contract preparation?',
            answer:
              'Agrello offers a suite of tools that includes a built-in Word editor for contract preparation, customisable templates, and bulk creation tools.',
          },
          {
            question: 'What is Agrello, and who is it for?',
            answer:
              'Agrello is a contract preparation and signing tool designed for companies that want to streamline the creation, management, and signing of standardised documents.',
          },
        ],
      },
      featuresTabs: {
        overline: 'PLATFORM FEATURES',
        headline: 'Make your e-signing and contract management easier',
        description:
          'Agrello streamlines every step — draft, sign, store, and track — so you can focus on real work.',
        tabs: [
          {
            id: 'automation',
            label: 'Automation',
            content: {
              overline: 'FEATURES',
              headline: 'Say goodbye to manual data entry and errors',
              description: (
                <p>
                  With Agrello, you can create contracts using Microsoft Word templates, just like
                  you're used to. Need to generate multiple contracts at once? <br />
                  <br />
                  Simply <strong>pull your data from an Excel spreadsheet</strong>, and let Agrello
                  do the rest.
                </p>
              ),
              imageOverlay: 'Create multiple contracts at once using Excel and Word templates',
              primaryCta: 'Learn more',
              secondaryCta: 'Get started',
            },
          },
          {
            id: 'management',
            label: 'Contract management',
            content: {
              overline: 'MANAGEMENT',
              headline: 'Keep all your agreements organized in one place',
              description: (
                <p>
                  Stop searching through email chains and shared drives. Agrello provides a{' '}
                  <strong>centralized repository</strong> for all your contracts.
                  <br />
                  <br />
                  Track status, set reminders for renewals, and find any document instantly.
                </p>
              ),
              imageOverlay: 'Centralized dashboard for complete visibility',
              primaryCta: 'Explore management',
            },
          },
          {
            id: 'signing',
            label: 'Secure e-signing',
            content: {
              overline: 'E-SIGNING',
              headline: 'Legally binding signatures, simplified',
              description: (
                <p>
                  Collect signatures from anyone, anywhere, on any device. Agrello supports{' '}
                  <strong>eIDAS compliant qualified electronic signatures</strong> (QES) and
                  advanced electronic signatures (AdES).
                </p>
              ),
              imageOverlay: 'eIDAS compliant signatures for peace of mind',
              primaryCta: 'Start signing',
            },
          },
        ],
      },
    },
    et: {
      hero: {
        overline: 'Turvaline e-allkirjastamise ja lepingute haldamise platvorm',
        headline: (
          <>
            Vähenda lepingute allkirjastamise aega{' '}
            <span className="text-brand-primary">60% Agrelloga</span>
          </>
        ),
        description: 'Loo, allkirjasta ja halda lepinguid kiiremini ja turvalisemalt.',
        cta: 'Proovi tasuta',
        trust: '14-päevane tasuta prooviperiood. Krediitkaarti pole vaja. Varjatud tasusid pole.',
      },
      twoCol: {
        overline: 'UUE PÕLVKONNA E-ALLKIRJASTAMINE JA LEPINGUTE HALDUS',
        headline: 'Kas oled väsinud lepingute printimisest, skaneerimisest ja postitamisest?',
        description: (
          <p>
            Ütle hüvasti lepingute printimise, skaneerimise ja postitamise tüütustele. Agrello
            muudab kogu sinu lepinguhaldusprotsessi sujuvamaks, võimaldades sul
            <strong className="text-gray-900">
              {' '}
              luua, allkirjastada ja jälgida lepinguid vaid mõne klikiga.
            </strong>
          </p>
        ),
        overlay: 'Koge digitaalse lepinguhalduse lihtsust ja tõhusust Agrelloga',
        cta: 'Funktsionaalsus',
      },
      latestPosts: {
        overline: 'MEIE BLOGI',
        headline: 'Viimased blogipostitused',
        description:
          'Tööriistad ja strateegiad, mida kaasaegsed meeskonnad vajavad ettevõtte kasvatamiseks.',
        viewAllText: 'Vaata kõiki postitusi',
      },
      pricing: {
        overline: 'HINNAD',
        headline: 'Plaanid igaühele sobivalt',
        description: 'Vali tellimispakett, mis vastab sinu vajadustele',
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
            ctaHref: '/et/kontakt',
          },
        ],
        contactCta: {
          headline: 'Ei leidnud sobivat?',
          description: 'Võta meie meeskonnaga ühendust ja arutame edasi.',
          buttonText: 'Võta ühendust',
          buttonHref: '/et/kontakt',
        },
      },
      faq: {
        overline: 'TUGI',
        headline: 'KKK',
        description:
          'Kõik, mida pead teadma toote ja arvelduse kohta. Ei leia vastust? Võta meiega ühendust.',
        imageOverlay: 'Uurime, kuidas muuta sinu e-allkirjastamise protsessid kiiremaks',
        ctaText: 'Võta ühendust',
        items: [
          {
            question: 'Mis on hind?',
            answer:
              '19.90 EUR kuus ühe kasutaja kohta ja 99 EUR kuus 10 kasutaja kohta. Soovi korral saad lisada rohkem kasutajaid ja saadaval on ka aastapaketid.',
          },
          {
            question: 'Kas Agrello pakub tasuta prooviperioodi?',
            answer:
              'Jah! Agrellol on 14-päevane tasuta prooviperiood, mille jooksul saad testida Agrello funktsioone, luua oma dokumente, malle ja proovida hulgitöötlust.',
          },
          {
            question: 'Kes peaks kaaluma Agrello kasutamist?',
            answer:
              'Agrellost saavad kasu ettevõtted, kes tegelevad regulaarselt suure hulga lepingutega või kellel on pidev voog standardiseeritud lepinguid, eriti kui nad võitlevad olemasolevate käsitsi tööriistadega nagu Word, Excel ja e-post.',
          },
          {
            question: 'Millist probleemi Agrello peamiselt lahendab?',
            answer:
              'Agrello lahendab ebaefektiivse käsitsi lepingute loomise probleemi. See aitab ettevõtetel vähendada lepingute koostamiseks, kinnitamiseks ja allkirjastamiseks kuluvat aega.',
          },
          {
            question: 'Kuidas Agrello ettevõtteid aitab?',
            answer:
              'Agrello parandab tootlikkust, vähendades lepingute loomiseks vajalikku käsitsi tööd. See tagab õigusliku kindluse ja vastavuse, vähendab tööriistade väsimust ja minimeerib töövoo katkestusi.',
          },
          {
            question: 'Mis eristab Agrellot teistest lepinguhalduse tööriistadest?',
            answer:
              'Agrello hulgiloomise tööriist on unikaalne, võimaldades luua sadu lepinguid ühest mallist ja Exceli tabelist. Lisaks toetab Agrello hulgiallkirjastamist ja hulgiallalaadimist.',
          },
          {
            question: 'Milliseid integratsioone Agrello pakub?',
            answer:
              'Agrello integreerub teiste tööriistadega Zapieri kaudu, võimaldades juurdepääsu tuhandetele rakendustele nagu Sharepoint, Google Drive, Hubspot ja Bamboo HR. Saadaval on ka avalik API.',
          },
          {
            question: 'Kuidas Agrello lepinguhaldust toetab?',
            answer:
              'Agrello pakub meeskonnaülest tööruumi, kus lepinguid saab korraldada juurdepääsukontrolliga kaustadesse. Kasutajad saavad määrata ka lepingu uuendamise ja aegumise kuupäevi.',
          },
          {
            question: 'Kuidas Agrello allkirjastamisprotsessi lihtsustab?',
            answer:
              'Agrelloga allkirjastamine on sujuv. See on sama lihtne kui mõned klikid. Ettevõtted saavad kohandada allkirjastamiskutseid oma logode ja tekstidega ning meeldetuletusi saab saata allkirjastajatele.',
          },
          {
            question: 'Milliseid funktsioone pakub Agrello lepingute koostamiseks?',
            answer:
              'Agrello pakub tööriistade komplekti, mis sisaldab sisseehitatud Wordi redaktorit lepingute koostamiseks, kohandatavaid malle ja hulgiloomise tööriistu.',
          },
          {
            question: 'Mis on Agrello ja kellele see on mõeldud?',
            answer:
              'Agrello on lepingute koostamise ja allkirjastamise tööriist, mis on loodud ettevõtetele, kes soovivad standardiseeritud dokumentide loomist, haldamist ja allkirjastamist sujuvamaks muuta.',
          },
        ],
      },
      featuresTabs: {
        overline: 'PLATVORMI VÕIMALUSED',
        headline: 'Tee e-allkirjastamine ja lepinguhaldus lihtsamaks',
        description:
          'Agrello muudab iga sammu sujuvamaks — mustandid, allkirjastamine, hoiustamine ja jälgimine.',
        tabs: [
          {
            id: 'automation',
            label: 'Automatiseerimine',
            content: {
              overline: 'VÕIMALUSED',
              headline: 'Unusta käsitsi andmesisestus ja vead',
              description: (
                <p>
                  Agrelloga saad luua lepinguid Microsoft Wordi mallide abil. Vaja luua mitu
                  lepingut korraga? <br />
                  <br />
                  Lihtsalt <strong>kasuta andmeid Exceli tabelist</strong> ja lase Agrellol ülejäänu
                  teha.
                </p>
              ),
              imageOverlay: 'Loo mitu lepingut korraga kasutades Exceli ja Wordi malle',
              primaryCta: 'Loe lähemalt',
              secondaryCta: 'Alusta kohe',
            },
          },
          {
            id: 'management',
            label: 'Lepinguhaldus',
            content: {
              overline: 'HALDUS',
              headline: 'Hoia kõik lepingud ühes kohas',
              description: (
                <p>
                  Lõpeta otsimine e-kirjadest ja jagatud ketastelt. Agrello pakub{' '}
                  <strong>tsentraalset varamut</strong> kõigile sinu lepingutele.
                  <br />
                  <br />
                  Jälgi staatust, sea meeldetuletusi ja leia dokumente hetkega.
                </p>
              ),
              imageOverlay: 'Tsentraalne töölaud täieliku ülevaate saamiseks',
              primaryCta: 'Tutvu haldusega',
            },
          },
          {
            id: 'signing',
            label: 'Turvaline e-allkirjastamine',
            content: {
              overline: 'E-ALLKIRJASTAMINE',
              headline: 'Juriidiliselt siduvad allkirjad, lihtsalt',
              description: (
                <p>
                  Kogu allkirju kellelt tahes, kus tahes. Agrello toetab{' '}
                  <strong>eIDAS-le vastavaid kvalifitseeritud e-allkirju</strong> (QES) ja
                  täiustatud e-allkirju (AdES).
                </p>
              ),
              imageOverlay: 'eIDAS-le vastavad allkirjad meelerahu tagamiseks',
              primaryCta: 'Alusta allkirjastamist',
            },
          },
        ],
      },
    },
    lv: {
      hero: {
        overline: 'Droša e-parakstīšanas un līgumu pārvaldības platforma',
        headline: (
          <>
            Samaziniet līgumu parakstīšanas laiku par{' '}
            <span className="text-brand-primary">60% ar Agrello</span>
          </>
        ),
        description: 'Veidojiet, e-parakstiet un izsekojiet līgumus ātrāk un drošāk.',
        cta: 'Izmēģiniet bez maksas',
        trust:
          '14 dienu bezmaksas izmēģinājums. Kredītkarte nav nepieciešama. Pilna funkcionalitāte.',
      },
      twoCol: {
        overline: 'JAUNĀS PAAUDZES E-PARAKSTĪŠANA UN LĪGUMU PĀRVALDĪBA',
        headline: 'Vai esat noguruši no līgumu drukāšanas, skenēšanas un sūtīšanas pa pastu?',
        description: (
          <p>
            Atvadieties no līgumu drukāšanas, skenēšanas un sūtīšanas grūtībām. Agrello vienkāršo
            visu jūsu līgumu procesu, ļaujot jums
            <strong className="text-gray-900">
              {' '}
              izveidot, parakstīt un izsekot līgumus ar dažiem klikšķiem.
            </strong>
          </p>
        ),
        overlay: 'Izbaudiet digitālās līgumu pārvaldības vienkāršību un efektivitāti ar Agrello',
        cta: 'Funkcijas',
      },
      latestPosts: {
        overline: 'MŪSU BLOGS',
        headline: 'Jaunākie bloga ieraksti',
        description: 'Rīki un stratēģijas, kas mūsdienu komandām nepieciešamas uzņēmuma izaugsmei.',
        viewAllText: 'Skatīt visus ierakstus',
      },
      pricing: {
        overline: 'CENAS',
        headline: 'Plāni, kas piemēroti visiem',
        description: 'Izvēlieties abonementu, kas atbilst jūsu vajadzībām',
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
            ctaHref: '/lv/kontakti',
          },
        ],
        contactCta: {
          headline: 'Neatradāt vajadzīgo?',
          description: 'Sazinieties ar mūsu komandu, un mēs varam apspriest tālāk.',
          buttonText: 'Sazināties',
          buttonHref: '/lv/kontakti',
        },
      },
      faq: {
        overline: 'ATBALSTS',
        headline: 'BUJ',
        description:
          'Viss, kas jums jāzina par produktu un norēķiniem. Nevarat atrast atbildi? Sazinieties ar mūsu komandu.',
        imageOverlay: 'Noskaidrosim, kā padarīt jūsu e-parakstīšanas procesus ātrākus',
        ctaText: 'Sazināties',
        items: [
          {
            question: 'Kāda ir cena?',
            answer:
              '19.90 EUR mēnesī vienam lietotājam un 99 EUR mēnesī 10 lietotājiem. Varat pievienot vairāk lietotāju, ja vēlaties, un ir pieejamas arī gada paketes.',
          },
          {
            question: 'Vai Agrello piedāvā bezmaksas izmēģinājumu?',
            answer:
              'Jā! Agrello piedāvā 14 dienu bezmaksas izmēģinājumu, kurā varat izmēģināt Agrello funkcijas, izveidot savus dokumentus, veidnes un izmēģināt masveida izveidi.',
          },
          {
            question: 'Kam vajadzētu apsvērt Agrello izmantošanu?',
            answer:
              'Uzņēmumi, kas regulāri apstrādā lielu līgumu apjomu vai kuriem ir pastāvīga standartizētu līgumu plūsma, var gūt labumu no Agrello, īpaši ja tie cīnās ar esošajiem manuālajiem rīkiem.',
          },
          {
            question: 'Kādu problēmu Agrello galvenokārt risina?',
            answer:
              'Agrello risina neefektīvas manuālas līgumu izveides problēmu. Tas palīdz uzņēmumiem samazināt laiku, kas nepieciešams līgumu sagatavošanai, apstiprināšanai un parakstīšanai.',
          },
          {
            question: 'Kā Agrello nāk par labu uzņēmumiem?',
            answer:
              'Agrello uzlabo produktivitāti, samazinot manuālo darbu līgumu izveidē. Tas nodrošina juridisko noteiktību un atbilstību, samazina rīku nogurumu un minimizē darbplūsmas traucējumus.',
          },
          {
            question: 'Kas atšķir Agrello no citiem līgumu pārvaldības rīkiem?',
            answer:
              'Agrello masveida izveides rīks ir unikāls, ļaujot izveidot simtiem līgumu no vienas veidnes un Excel tabulas. Turklāt Agrello atbalsta masveida parakstīšanu un masveida lejupielādi.',
          },
          {
            question: 'Kādas integrācijas piedāvā Agrello?',
            answer:
              'Agrello integrējas ar citiem rīkiem caur Zapier, nodrošinot piekļuvi tūkstošiem lietojumprogrammu, piemēram, Sharepoint, Google Drive, Hubspot un Bamboo HR. Pieejams arī publisks API.',
          },
          {
            question: 'Kā Agrello atbalsta līgumu pārvaldību?',
            answer:
              'Agrello nodrošina komandas mēroga darba telpu, kur līgumus var organizēt piekļuves kontrolētās mapēs. Lietotāji var arī iestatīt galvenos datumus līgumu atjaunošanai un derīguma termiņam.',
          },
          {
            question: 'Kā Agrello vienkāršo parakstīšanas procesu?',
            answer:
              'Parakstīšana ar Agrello ir bez berzes. Tas ir tikpat vienkārši kā daži klikšķi. Uzņēmumi var pielāgot parakstu ielūgumus ar saviem logotipiem un tekstu.',
          },
          {
            question: 'Kādas funkcijas Agrello piedāvā līgumu sagatavošanai?',
            answer:
              'Agrello piedāvā rīku komplektu, kas ietver iebūvētu Word redaktoru līgumu sagatavošanai, pielāgojamas veidnes un masveida izveides rīkus.',
          },
          {
            question: 'Kas ir Agrello un kam tas ir paredzēts?',
            answer:
              'Agrello ir līgumu sagatavošanas un parakstīšanas rīks, kas izstrādāts uzņēmumiem, kuri vēlas racionalizēt standartizētu dokumentu izveidi, pārvaldību un parakstīšanu.',
          },
        ],
      },
      featuresTabs: {
        overline: 'PLATFORMAS FUNKCIJAS',
        headline: 'Padariet e-parakstīšanu un līgumu pārvaldību vienkāršāku',
        description:
          'Agrello vienkāršo katru soli — melnrakstu, parakstīšanu, glabāšanu un izsekošanu.',
        tabs: [
          {
            id: 'automation',
            label: 'Automatizācija',
            content: {
              overline: 'FUNKCIJAS',
              headline: 'Atvadieties no manuālas datu ievades un kļūdām',
              description: (
                <p>
                  Ar Agrello varat izveidot līgumus, izmantojot Microsoft Word veidnes. Nepieciešams
                  ģenerēt vairākus līgumus vienlaikus? <br />
                  <br />
                  Vienkārši <strong>izmantojiet datus no Excel izklājlapas</strong>, un ļaujiet
                  Agrello paveikt pārējo.
                </p>
              ),
              imageOverlay:
                'Izveidojiet vairākus līgumus vienlaikus, izmantojot Excel un Word veidnes',
              primaryCta: 'Uzzināt vairāk',
              secondaryCta: 'Sākt darbu',
            },
          },
          {
            id: 'management',
            label: 'Līgumu pārvaldība',
            content: {
              overline: 'PĀRVALDĪBA',
              headline: 'Glabājiet visus līgumus vienuviet',
              description: (
                <p>
                  Pārtrauciet meklēšanu e-pasta virknēs un koplietošanas diskos. Agrello nodrošina{' '}
                  <strong>centralizētu krātuvi</strong> visiem jūsu līgumiem.
                  <br />
                  <br />
                  Izsekojiet statusu, iestatiet atgādinājumus un atrodiet jebkuru dokumentu
                  nekavējoties.
                </p>
              ),
              imageOverlay: 'Centralizēts panelis pilnīgai redzamībai',
              primaryCta: 'Izpētīt pārvaldību',
            },
          },
          {
            id: 'signing',
            label: 'Droša e-parakstīšana',
            content: {
              overline: 'E-PARAKSTĪŠANA',
              headline: 'Juridiski saistoši paraksti, vienkāršoti',
              description: (
                <p>
                  Savāciet parakstus no jebkura, jebkur, jebkurā ierīcē. Agrello atbalsta{' '}
                  <strong>eIDAS atbilstošus kvalificētus elektroniskos parakstus</strong> (QES) un
                  uzlabotus elektroniskos parakstus (AdES).
                </p>
              ),
              imageOverlay: 'eIDAS atbilstoši paraksti jūsu mierīgumam',
              primaryCta: 'Sākt parakstīšanu',
            },
          },
        ],
      },
    },
    uk: {
      hero: {
        overline: 'Безпечна платформа е-підписів та управління контрактами',
        headline: (
          <>
            Скоротіть час підписання контрактів на{' '}
            <span className="text-brand-primary">60% з Agrello</span>
          </>
        ),
        description: 'Створюйте, е-підписуйте та відстежуйте контракти швидше і безпечніше.',
        cta: 'Спробувати безкоштовно',
        trust: '14-денний безкоштовний період. Кредитна картка не потрібна. Повний функціонал.',
      },
      twoCol: {
        overline: 'Е-ПІДПИСАННЯ ТА УПРАВЛІННЯ КОНТРАКТАМИ НОВОГО ПОКОЛІННЯ',
        headline: 'Втомилися витрачати час на друк, сканування та відправку контрактів?',
        description: (
          <p>
            Попрощайтеся з клопотами друку, сканування та відправки контрактів. Agrello спрощує весь
            процес роботи з контрактами, дозволяючи вам
            <strong className="text-gray-900">
              {' '}
              створювати, підписувати та відстежувати угоди в кілька кліків.
            </strong>
          </p>
        ),
        overlay: 'Відчуйте простоту та ефективність цифрового управління контрактами з Agrello',
        cta: 'Функції',
      },
      latestPosts: {
        overline: 'НАШ БЛОГ',
        headline: 'Останні публікації блогу',
        description:
          'Інструменти та стратегії, які потрібні сучасним командам для розвитку компаній.',
        viewAllText: 'Переглянути всі публікації',
      },
      pricing: {
        overline: 'ЦІНИ',
        headline: 'Плани для кожного',
        description: 'Оберіть підписку, яка відповідає вашим потребам',
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
            ctaHref: '/uk/kontakt',
          },
        ],
        contactCta: {
          headline: 'Не знайшли потрібне?',
          description: "Зв'яжіться з нашою командою, і ми обговоримо далі.",
          buttonText: "Зв'язатися",
          buttonHref: '/uk/kontakt',
        },
      },
      faq: {
        overline: 'ПІДТРИМКА',
        headline: 'FAQ',
        description:
          'Все, що вам потрібно знати про продукт та оплату. Не можете знайти відповідь? Зверніться до нашої команди.',
        imageOverlay: 'Дізнаймося, як зробити ваші процеси е-підписання швидшими',
        ctaText: "Зв'язатися",
        items: [
          {
            question: 'Яка ціна?',
            answer:
              '19.90 EUR на місяць за одного користувача та 99 EUR на місяць за 10 користувачів. Ви можете додати більше користувачів за бажанням, також доступні річні пакети.',
          },
          {
            question: 'Чи пропонує Agrello безкоштовний пробний період?',
            answer:
              'Так! Agrello має безкоштовний 14-денний пробний період, протягом якого ви можете протестувати функції Agrello, створити власні документи, шаблони та випробувати масове створення.',
          },
          {
            question: 'Кому варто розглянути використання Agrello?',
            answer:
              'Компанії, які регулярно обробляють великий обсяг контрактів або мають постійний потік стандартизованих контрактів, можуть отримати вигоду від Agrello, особливо якщо вони борються з існуючими ручними інструментами.',
          },
          {
            question: 'Яку проблему в основному вирішує Agrello?',
            answer:
              'Agrello вирішує проблему неефективного ручного створення контрактів. Це допомагає компаніям скоротити час на підготовку, затвердження та підписання контрактів.',
          },
          {
            question: 'Як Agrello приносить користь бізнесу?',
            answer:
              'Agrello покращує продуктивність, зменшуючи ручну роботу, необхідну для створення контрактів. Він забезпечує юридичну визначеність та відповідність, зменшує втому від інструментів та мінімізує порушення робочого процесу.',
          },
          {
            question: 'Що відрізняє Agrello від інших інструментів управління контрактами?',
            answer:
              'Інструмент масового створення Agrello унікальний, дозволяючи створювати сотні контрактів з одного шаблону та таблиці Excel. Крім того, Agrello підтримує масове підписання та масове завантаження.',
          },
          {
            question: 'Які інтеграції пропонує Agrello?',
            answer:
              'Agrello інтегрується з іншими інструментами через Zapier, надаючи доступ до тисяч додатків, таких як Sharepoint, Google Drive, Hubspot та Bamboo HR. Також доступний публічний API.',
          },
          {
            question: 'Як Agrello підтримує управління контрактами?',
            answer:
              'Agrello надає командний робочий простір, де контракти можна організувати в папки з контролем доступу. Користувачі також можуть встановлювати ключові дати для поновлення та закінчення терміну дії контрактів.',
          },
          {
            question: 'Як Agrello спрощує процес підписання?',
            answer:
              'Підписання з Agrello безперешкодне. Це так само просто, як кілька кліків. Компанії можуть налаштовувати запрошення на підпис зі своїми логотипами та текстом.',
          },
          {
            question: 'Які функції пропонує Agrello для підготовки контрактів?',
            answer:
              'Agrello пропонує набір інструментів, який включає вбудований редактор Word для підготовки контрактів, налаштовувані шаблони та інструменти масового створення.',
          },
          {
            question: 'Що таке Agrello і для кого він призначений?',
            answer:
              'Agrello - це інструмент підготовки та підписання контрактів, розроблений для компаній, які хочуть оптимізувати створення, управління та підписання стандартизованих документів.',
          },
        ],
      },
      featuresTabs: {
        overline: 'ФУНКЦІЇ ПЛАТФОРМИ',
        headline: 'Зробіть е-підписання та управління контрактами простішим',
        description:
          'Agrello спрощує кожен крок — чернетка, підписання, зберігання та відстеження.',
        tabs: [
          {
            id: 'automation',
            label: 'Автоматизація',
            content: {
              overline: 'ФУНКЦІЇ',
              headline: 'Попрощайтеся з ручним введенням даних та помилками',
              description: (
                <p>
                  З Agrello ви можете створювати контракти за допомогою шаблонів Microsoft Word.
                  Потрібно створити кілька контрактів одночасно? <br />
                  <br />
                  Просто <strong>використайте дані з таблиці Excel</strong>, і дозвольте Agrello
                  зробити решту.
                </p>
              ),
              imageOverlay:
                'Створюйте кілька контрактів одночасно за допомогою шаблонів Excel та Word',
              primaryCta: 'Дізнатись більше',
              secondaryCta: 'Почати',
            },
          },
          {
            id: 'management',
            label: 'Управління контрактами',
            content: {
              overline: 'УПРАВЛІННЯ',
              headline: 'Зберігайте всі угоди в одному місці',
              description: (
                <p>
                  Припиніть шукати в ланцюжках електронної пошти та спільних дисках. Agrello надає{' '}
                  <strong>централізоване сховище</strong> для всіх ваших контрактів.
                  <br />
                  <br />
                  Відстежуйте статус, встановлюйте нагадування та знаходьте будь-який документ
                  миттєво.
                </p>
              ),
              imageOverlay: 'Централізована панель для повної видимості',
              primaryCta: 'Дослідити управління',
            },
          },
          {
            id: 'signing',
            label: 'Безпечне е-підписання',
            content: {
              overline: 'Е-ПІДПИСАННЯ',
              headline: "Юридично обов'язкові підписи, спрощено",
              description: (
                <p>
                  Збирайте підписи від будь-кого, будь-де, на будь-якому пристрої. Agrello підтримує{' '}
                  <strong>кваліфіковані електронні підписи відповідно до eIDAS</strong> (QES) та
                  вдосконалені електронні підписи (AdES).
                </p>
              ),
              imageOverlay: 'Підписи відповідно до eIDAS для вашого спокою',
              primaryCta: 'Почати підписання',
            },
          },
        ],
      },
    },
  }

  const t = dictionary[lang] || dictionary.en

  // Fetch actual blog posts - fallback to 'en' for lv/uk since content only supports et/en
  const blogLang = lang === 'et' || lang === 'en' ? lang : 'en'
  const rawPosts = await getBlogPosts(blogLang)
  const blogPosts = mapBlogPostsToLatestPosts(rawPosts, lang, 3)

  // Prepare tabs data with icons
  const featuresTabsData = t.featuresTabs.tabs.map((tab, index) => ({
    ...tab,
    icon:
      index === 0 ? (
        <Zap className="w-4 h-4" />
      ) : index === 1 ? (
        <FileText className="w-4 h-4" />
      ) : (
        <PenTool className="w-4 h-4" />
      ),
    content: {
      ...tab.content,
      imageSrc:
        index === 0
          ? '/images/features/automation.webp'
          : '/images/sections/macbook-screenshot.webp',
      imageAlt: tab.label,
      primaryCta: tab.content.primaryCta ? { text: tab.content.primaryCta, href: '#' } : undefined,
      secondaryCta: tab.content.secondaryCta
        ? { text: tab.content.secondaryCta, href: '#' }
        : undefined,
    },
  }))

  return (
    <main>
      <BigHero
        overline={t.hero.overline}
        headline={t.hero.headline}
        description={t.hero.description}
        ctaText={t.hero.cta}
        trustText={t.hero.trust}
      />
      <TwoColumnSection
        overline={t.twoCol.overline}
        headline={t.twoCol.headline}
        description={t.twoCol.description}
        imageSrc="/images/sections/macbook-screenshot.webp"
        imageAlt="Agrello Dashboard"
        overlayText={t.twoCol.overlay}
        ctaText={t.twoCol.cta}
        ctaHref={`/${lang}/features`}
        imagePosition="right"
      />
      <CustomersSection locale={lang} />
      <FeaturesTabs
        overline={t.featuresTabs.overline}
        headline={t.featuresTabs.headline}
        description={t.featuresTabs.description}
        tabs={featuresTabsData}
      />
      <SmartenStory locale={lang} />
      <WorkshopSection locale={lang} />
      <Pricing
        overline={t.pricing.overline}
        headline={t.pricing.headline}
        description={t.pricing.description}
        plans={t.pricing.plans}
        contactCta={t.pricing.contactCta}
      />
      <FAQ
        overline={t.faq.overline}
        headline={t.faq.headline}
        description={t.faq.description}
        items={t.faq.items}
        imageSrc="/images/sections/faq-illustration.webp"
        imageAlt="FAQ illustration"
        imageOverlay={t.faq.imageOverlay}
        ctaText={t.faq.ctaText}
        ctaHref={`/${lang}/contact`}
      />
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
