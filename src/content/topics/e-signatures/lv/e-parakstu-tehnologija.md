---
title: 'Elektronisko parakstu tehnoloģija: līmeņi pret formātiem'
slug: 'e-parakstu-tehnologija'
author: 'jarmo-tuisk'
rank: 20
summary: 'Detalizēts ceļvedis elektronisko parakstu tehnoloģijā. Uzziniet atšķirību starp juridiskajiem līmeņiem (AdES, QES) un tehniskajiem formātiem (PAdES, XAdES, ASiC) kā noteikts eIDAS regulā.'
image: '/assets/esignature.webp'
seo_title: 'Elektronisko parakstu tehnoloģija: līmeņi un formāti | Agrello'
seo_desc: 'Izprotiet galvenās atšķirības starp juridiskajiem e-parakstu līmeņiem (AdES, QES) un tehniskajiem formātiem (PAdES, XAdES, ASiC) saskaņā ar eIDAS regulu, lai izvēlētos pareizo standartu.'
date: '2024-05-21'
---

Kad sākat izmantot elektroniskos parakstus, bieži saskaraties ar dažādiem saīsinājumiem kā QES, PAdES, AdES un ASiC. Lai gan tie var šķist mulsinoši līdzīgi, tie attiecas uz divām atšķirīgām koncepcijām: paraksta **juridisko līmeni** un tā **tehnisko formātu**.

Šīs atšķirības izpratne ir atslēga pareizā paraksta izvēlei jūsu vajadzībām, un tā ir būtiska tēma mūsu **[Pilnīgajā elektronisko parakstu ceļvedī](https://agrello.io/topics/e-paraksti)**. Apskatīsim to sīkāk.

## 1. daļa: Parakstu līmeņi (juridiskā nozīme)

Paraksta "līmenis" attiecas uz tā juridisko klasifikāciju saskaņā ar ES eIDAS regulu. Tas nosaka, cik lielu juridisko nozīmi tam ir strīda gadījumā. Domājiet par to kā par atšķirību starp neformālu parāda apliecinājumu un notariāli apstiprinātu juridisko dokumentu.

### Vienkāršais elektroniskais paraksts (SES)

Vienkāršais elektroniskais paraksts ir pamata līmenis. eIDAS definē to kā "datus elektroniskā formā, kas ir pievienoti vai loģiski saistīti ar citiem elektroniskiem datiem un kurus parakstītājs izmanto parakstīšanai". Tas ietver, piemēram, ķeksīša atzīmēšanu pie "Es piekrītu" vai vārda ievadi paraksta laukā. Lai gan tas ir juridiski atzīts, tas nodrošina viszemāko juridisko pārliecību, jo identitātes pārbaudes prasības ir minimālas.

### Uzlabotais elektroniskais paraksts (AdES)

AdES ir biežāk lietotais drošā paraksta veids uzņēmējdarbības līgumiem. Lai kvalificētos kā "uzlabots", tam jāatbilst specifiskiem kritērijiem:

- Tas ir unikāli saistīts ar parakstītāju.
- Tas ir spējīgs identificēt parakstītāju.
- Tas ir izveidots, izmantojot paraksta izveides datus, kurus parakstītājs ar augstu pārliecības līmeni var izmantot tikai savā kontrolē.
- Tas ir saistīts ar parakstītajiem datiem tādā veidā, ka jebkuras turpmākas datu izmaiņas ir konstatējamas.

### Kvalificētais elektroniskais paraksts (QES)

QES ir augstākais un drošākais elektroniskā paraksta līmenis. Tas ir AdES, kas izveidots ar **kvalificētu paraksta izveides ierīci (QSCD)** un balstīts uz **kvalificētu sertifikātu** elektroniskajiem parakstiem.

Būtiski, ka QES ir **tāda pati juridiskā ietekme kā rokraksta parakstam** visās ES dalībvalstīs. Tas padara to par zelta standartu augstu vērtību darījumiem, valdības dokumentiem un jebkurā situācijā, kur nepieciešama maksimāla juridiskā drošība.

## 2. daļa: Parakstu formāti (tehniskais konteiners)

"Formāts" attiecas uz tehnisko standartu, kas tiek izmantots, lai iepakotu parakstu un dokumentu kopā. Tas ir digitālais "aploksnes", kas tur visu strukturētā, pārbaudāmā veidā. Formāts, ko izmantojat, parasti ir atkarīgs no dokumenta veida, kuru parakstāt.

### PAdES (PDF uzlabotie elektroniskie paraksti)

Kā norāda nosaukums, [PAdES](https://agrello.io/posts/kas-ir-pades-paraksts) ir standarts PDF dokumentu parakstīšanai. Tas ievieto paraksta datus tieši PDF failā. Tā kā PDF ir tik izplatīti uzņēmējdarbībā, PAdES ir viens no visplašāk izmantotajiem formātiem.

### XAdES (XML uzlabotie elektroniskie paraksti)

[XAdES](https://agrello.io/posts/kas-ir-asic-konteiners-un-xades-paraksts) tiek izmantots XML dokumentu parakstīšanai. XML bieži tiek izmantots strukturētu datu apmaiņai starp dažādām sistēmām, piemēram, banku sistēmās, iepirkumos vai citos mašīna-mašīna saziņas gadījumos. XAdES ļauj parakstīt XML dokumenta daļas vai visu dokumentu.

### CAdES (CMS uzlabotie elektroniskie paraksti)

CAdES ir daudzpusīgs standarts jebkāda veida bināro datu parakstīšanai. Tas balstās uz Cryptographic Message Syntax (CMS) un bieži tiek izmantots programmatūras, e-pastu vai citu ne-PDF failu parakstīšanai. Dažas nacionālās identitātes shēmas (piemēram, Ukrainas Diia) izmanto CAdES.

### ASiC (saistītie parakstu konteineri)

[ASiC](https://agrello.io/posts/kas-ir-asic-konteiners-un-xades-paraksts) ir ļoti daudzfunkcionāls formāts, kas darbojas kā digitāls konteiners. Tas var apvienot vienu vai vairākus dokumentus kopā ar to saistītajiem elektroniskajiem parakstiem vienā zip failā. Tas ir ļoti noderīgi sarežģītiem darījumiem, kuros var būt iesaistīti vairāki dokumenti - piemēram, galvenais līgums ar vairākiem parakstītiem pielikumiem. Tas uztur visu sakārtoti un droši iepakotu kopā.

## Praktiski piemēri Agrello platformā

Šādi dažādi Agrello platformā pieejamie parakstīšanas veidi atbilst līmeņiem un formātiem:

- **Agrello vietējais paraksts**: **Vienkāršais elektroniskais paraksts (SES)** **PAdES** formātā. Nodrošina pilnu audita pierakstu, taču eIDAS izpratnē ir pamata līmenis. Piemērots ikdienas vienošanām, kur nav nepieciešama stingra identitātes pārbaude.

- **BankID (Zviedrija)**: Nodrošina **Uzlaboto elektronisko parakstu (AdES)** **PAdES** formātā. Piedāvā augstāku parakstītāja identitātes pārbaudes līmeni nekā SES.

- **Diia (Ukraina)**: **Uzlabotais elektroniskais paraksts (AdES)**. Dzimtais formāts ir **CAdES**, ko mēs iekļaujam PDF konteinerā lietojamības un savietojamības uzlabošanai.

- **Mobile-ID, Smart-ID, ID-kartes paraksts (Baltija)**: Visi nodrošina **Kvalificēto elektronisko parakstu (QES)**, kas ir augstākais līmenis. Tehniskais formāts parasti ir **ASiC (ar XAdES iekšpusē)**.
  - **eParaksts (Latvija)**: QES ar tipisku ASiC izvadi; pēc pieprasījuma iespējams arī **EDOC** (XAdES bāzēts) izvads.

![Agrello parakstīšanas iespējas](../../../assets/agrello_signing_options.webp)

## Secinājums: līmenis + formāts = drošs paraksts

Drošs elektroniskais paraksts ir gan juridiskā **līmeņa** (piemēram, SES, AdES vai QES), gan tehniskā **formāta** (piemēram, PAdES vai ASiC) kombinācija.

Izvēloties platformu kā Agrello, kas atbalsta visus šos standartus, jūs nodrošināt, ka jūsu parakstītie dokumenti ir ne tikai droši un viegli pārvaldāmi, bet arī juridiski stabili un savietojami visā Eiropā.

Kad būsiet gatavi to ieviest praksē, **<a href="https://docs.agrello.io/?utm_source=agrello_blog&utm_medium=content_marketing&utm_campaign=e-signatures_pillar&utm_content=e-signature-technology-cta" target="_blank" rel="noopener noreferrer">izpētiet Agrello spēcīgo un lietotājam draudzīgo platformu</a>**.
