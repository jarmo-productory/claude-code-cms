'use client'

import { WorkshopCTA } from './WorkshopCTA'

interface WorkshopSectionProps {
  locale: string
  className?: string
}

const translations = {
  en: {
    overline: 'FAST TRACK ONBOARDING',
    headline: 'Book your free e-signing workshop!',
    description:
      'In our workshop you can find out how to implement Agrello in your company without sacrificing your entire IT budget.',
    benefits: [
      'Free practical workshop to explore e-signing and contract automation solutions.',
      'Step-by-step guidance on setting up the platform.',
      'Tips on how to seamlessly integrate Agrello into existing processes.',
      'Opportunity to ask questions and get advice from experts.',
    ],
    primaryCta: 'Book a free workshop',
    secondaryCta: 'Try on your own',
  },
  et: {
    overline: 'KIIRE KASUTUSELEVÕTT',
    headline: 'Broneeri tasuta e-allkirjastamise töötuba!',
    description:
      'Meie töötoas saad teada, kuidas Agrellot oma ettevõttes juurutada ilma kogu IT-eelarvet kulutamata.',
    benefits: [
      'Tasuta praktiline töötuba e-allkirjastamise ja lepingute automatiseerimise lahenduste tutvustamiseks.',
      'Samm-sammult juhised platvormi seadistamiseks.',
      'Näpunäited Agrello sujuvaks integreerimiseks olemasolevatesse protsessidesse.',
      'Võimalus esitada küsimusi ja saada ekspertidelt nõu.',
    ],
    primaryCta: 'Broneeri tasuta töötuba',
    secondaryCta: 'Proovi iseseisvalt',
  },
  lv: {
    overline: 'ĀTRĀ IEVIEŠANA',
    headline: 'Rezervējiet bezmaksas e-parakstīšanas darbnīcu!',
    description:
      'Mūsu darbnīcā jūs varat uzzināt, kā ieviest Agrello savā uzņēmumā, neupurējot visu IT budžetu.',
    benefits: [
      'Bezmaksas praktiska darbnīca e-parakstīšanas un līgumu automatizācijas risinājumu izpētei.',
      'Soli pa solim norādījumi platformas iestatīšanai.',
      'Padomi, kā vienmērīgi integrēt Agrello esošajos procesos.',
      'Iespēja uzdot jautājumus un saņemt ekspertu padomus.',
    ],
    primaryCta: 'Rezervēt bezmaksas darbnīcu',
    secondaryCta: 'Izmēģināt pašam',
  },
  uk: {
    overline: 'ШВИДКЕ ВПРОВАДЖЕННЯ',
    headline: 'Забронюйте безкоштовний воркшоп з е-підписання!',
    description:
      'На нашому воркшопі ви дізнаєтесь, як впровадити Agrello у вашій компанії, не витрачаючи весь IT-бюджет.',
    benefits: [
      'Безкоштовний практичний воркшоп для вивчення рішень е-підписання та автоматизації контрактів.',
      'Покрокові інструкції з налаштування платформи.',
      'Поради щодо безперешкодної інтеграції Agrello в існуючі процеси.',
      'Можливість задавати питання та отримувати поради від експертів.',
    ],
    primaryCta: 'Забронювати безкоштовний воркшоп',
    secondaryCta: 'Спробувати самостійно',
  },
}

export function WorkshopSection({ locale, className }: WorkshopSectionProps) {
  const lang =
    locale === 'et' || locale === 'en' || locale === 'lv' || locale === 'uk' ? locale : 'en'
  const t = translations[lang]

  return (
    <WorkshopCTA
      overline={t.overline}
      headline={t.headline}
      description={t.description}
      benefits={t.benefits}
      primaryCtaText={t.primaryCta}
      primaryCtaHref={`/${lang}/contact`}
      secondaryCtaText={t.secondaryCta}
      secondaryCtaHref="https://docs.agrello.io/app/login?open_tab=sign_up"
      imageSrc="/images/team/harry.webp"
      imageAlt="Harry Käsk - Agrello Expert"
      className={className}
    />
  )
}
