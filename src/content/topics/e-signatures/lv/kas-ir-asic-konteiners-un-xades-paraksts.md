---
title: 'Kas ir ASiC konteineri un XAdES e-paraksti?'
slug: 'kas-ir-asic-konteiners-un-xades-paraksts'
author: 'jarmo-tuisk'
rank: 40
summary: 'Izprotiet, kā ASiC konteineri un XAdES e-paraksti darbojas kopā, lai nodrošinātu izņēmusi drošus, atbilstošus un ilgtspējīgus digitālos parakstus visā ES.'
image: '/assets/Signing.webp'
seo_title: 'ASiC konteineri un XAdES paraksti izskaidroti | Agrello'
seo_desc: 'Atklājiet drošas digitālās parakstīšanas spēku. Uzziniet, kas ir ASiC konteineri un XAdES e-paraksti, kā tie darbojas kopā un kāpēc tie ir būtiski juridiskai derīgumam saskaņā ar eIDAS.'
date: '2024-06-10'
faq_schema:
  - question: 'Kāda ir atšķirība starp ASiC un XAdES?'
    answer: 'ASiC ir digitāls konteiners, kas apvieno dokumentus un parakstus kopā, kā droša digitāla aploksne. XAdES ir augsti drošs, uz XML balstīts paraksta formāts, kas tiek ievietots šajā konteinerā. Tie ir papildinoši tehnoloģijas, kas darbojas kopā.'
  - question: 'Vai ASiC konteineri ir juridiski derīgi?'
    answer: 'Jā, pilnībā. ASiC ir formāts, kas oficiāli atzīts ES eIDAS regulā, padarot to par juridiski pareizu izvēli uzlabotiem un kvalificētiem elektroniskajiem parakstiem.'
  - question: 'Vai varu atvērt ASiC konteineru bez speciālas programmatūras?'
    answer: 'Tā kā ASiC faili ir balstīti uz ZIP formātu, varat pārdēvēt faila paplašinājumu uz .zip un izvilkt saturu. Tomēr jums būs nepieciešama specializēta programmatūra, piemēram, Agrello platforma, lai pareizi validētu parakstus iekšpusē un apstiprinātu to integritāti.'
  - question: 'Vai ASiC konteineri var saturēt vairākus parakstus?'
    answer: 'Jā. ASiC-E (paplašinātais) formāts ir īpaši izstrādāts, lai saturētu vairākus dokumentus un vairākus parakstus, padarot to ideālu sarežģītiem līgumiem, kuriem nepieciešams parakstīt vairākiem cilvēkiem.'
  - question: 'Kuras valstis atzīst ASiC un XAdES formātus?'
    answer: 'Abi formāti ir standartizēti un atzīti visā Eiropas Savienībā saskaņā ar eIDAS regulu. Tie ir plaši izmantoti valstīs ar attīstītu digitālo infrastruktūru, piemēram, Igaunijā, Latvijā un Lietuvā.'
---

Digitālo līgumu pasaulē uzticība ir viss. Bet ar terminiem kā ASiC un XAdES ir viegli apmaldīties tehniskajā žargonā. Apskatīsim, kas ir šīs tehnoloģijas, kā tās darbojas un kāpēc tās ir drošas, uzticamas elektroniskās parakstīšanas pamats.

---

Pirms iedziļināmies ASiC un XAdES, ātri atsvaidzināsim atmiņu par to, ko dara digitālais paraksts. Digitālais paraksts ir spēcīgs kriptogrāfisks rīks, kas pārbauda dokumenta autentiskumu un integritāti. Tas kalpo kā jūsu digitālais pirkstu nospiedums - daudz drošāks nekā rokraksta paraksts un veidots, lai būtu aizsargāts pret iejaukšanos.

## Kā darbojas digitālie paraksti?

Digitālos parakstus darbina publisko atslēgu kriptogrāfija, sistēma, kas izmanto saskaņotu atslēgu pāri: privāto atslēgu un publisko atslēgu.

Parakstītājs izmanto savu **privāto atslēgu** (ko tur noslēpumā), lai izveidotu parakstu. Ikviens ar atbilstošo **publisko atslēgu** pēc tam var pārbaudīt šo parakstu. Ja pārbaude neizdodas, tas ir skaidrs signāls, ka dokuments ir mainīts vai paraksts nav īsts.

## Kas ir ASiC konteiners?

**Saistītais parakstu konteiners (ASiC)** ir standarta digitāls "iepakojums", kas apvieno vienu vai vairākus dokumentus ar to elektroniskajiem parakstiem vienā, drošā failā (konkrēti, ZIP arhīvā). Šo standartu izstrādāja Eiropas Telekomunikāciju standartu institūts (ETSI), lai nodrošinātu, ka parakstītie dokumenti un to paraksti paliek kopā, padarot tos viegli pārvaldāmus, koplietojamus un validējamus.

**Labi zināt:** ASiC ir oficiāli apstiprināts formāts uzlabotiem un kvalificētiem elektroniskajiem parakstiem saskaņā ar ES [eIDAS regulu](https://eur-lex.europa.eu/eli/reg/2014/910/oj/eng), zelta standartu elektroniskajai identifikācijai un uzticības pakalpojumiem. Pilnā tehniskā specifikācija ir pieejama [ETSI ASiC standartā](https://www.etsi.org/deliver/etsi_ts/102900_102999/102918/01.01.01_60/ts_102918v010101p.pdf).

Agrello mēs izmantojam ASiC konteinerus, lai droši saistītu jūsu dokumentus ar to atdalītajiem digitālajiem parakstiem, kas parasti ir XAdES formātā.

### ASiC-S pret ASiC-E

Standarts piedāvā divus konteineru veidus:

- **ASiC-S (vienkāršs):** Pamata konteiners, kas saista **vienu dokumentu** ar vienu vai vairākiem parakstiem.
- **ASiC-E (paplašināts):** Daudzfunkcionālāks konteiners, kas atbalsta **vairākus dokumentus** un vairākus parakstus. Tas ir ideāls sarežģītiem darba procesiem, kur vairākām pusēm jāparaksta dažādi faili.

## ASiC izmantošanas priekšrocības

ASiC konteineri piedāvā skaidras priekšrocības jūsu dokumentu pārvaldībai:

- **Vienkārši koplietot:** Visa iepakovana vienā failā padara glabāšanu un izplatīšanu bezrūpīgu.
- **Garantēta integritāte:** Konteiners nodrošina, ka pareizais paraksts vienmēr ir saistīts ar savu dokumentu, novēršot jaukšanu vai atdalīšanu.
- **Auditācijai gatavs:** ASiC izveido drošu, laika momentā iegūtu jūsu līgumu momentuzņēmumu, kas ir neatsverams auditācijām, atbilstības pārbaudēm un uzskaites vedam.

## Kas ir XAdES (XML uzlabotie elektroniskie paraksti)?

**XAdES** nozīmē XML uzlabotie elektroniskie paraksti. Tas ir paraksta formāts, nevis konteiners. Konkrēti, tas ir XML-DSig standarta paplašinājumu kopums, kas veidots, lai izveidotu uzlabotus un kvalificētus elektroniskos parakstus, kas paliek derīgi un pārbaudāmi gadiem, pilnībā atbilstot regulām kā eIDAS.

XAdES uzlabo pamata parakstu, pievienojot pierādījumu slāņus, piemēram:

- Laika zīmogus, lai pierādītu, kad dokuments tika parakstīts.
- Sertifikātu validācijas datus, lai apstiprinātu parakstītāja identitāti.
- Citu svarīgu informāciju, kas stiprina tā juridisko statusu.

### XAdES parakstu līmeņi

XAdES nāk vairākos līmeņos, katrs pievienojot vairāk drošības un ilgtermiņa aizsardzības:

- **XAdES-BES (pamata):** Pamata līmenis uzlabotam elektroniskam parakstam.
- **XAdES-T (laika zīmogs):** Pievieno laika zīmogu, lai pierādītu, ka paraksts eksistēja konkrētā laikā.
- **XAdES-C (pilnīgs):** Ietver atsauces uz visiem pārbaudes datiem (piemēram, sertifikātiem).
- **XAdES-X (paplašināts):** Pievieno laika zīmogus pašām atsaucēm, aizsargājot pret nākotnes kompromitācijām.
- **XAdES-XL (paplašināts ilgtermiņa):** Ievieto faktiskos sertifikātus un pārbaudes datus tieši parakstā.
- **XAdES-A (arhīva):** Ļauj periodisku atkārtotu laika zīmogošanu, lai nodrošinātu, ka paraksts paliek derīgs desmitgadēm.

## ASiC un XAdES: spēcīga partnerība

Ir būtiski atcerēties, ka ASiC un XAdES nav konkurenti - tie ir partneri.

- **ASiC ir drošais konteiners.**
- **XAdES ir drošais paraksts konteinera iekšpusē.**

Kad izmantojat Agrello, jūsu dokumentiem ģenerētie ASiC-E konteineri ir parakstīti, izmantojot XAdES formātu. Šī kombinācija sniedz jums ASiC organizatorisko spēku un XAdES augstas drošības, ilgtermiņa derīgumu, nodrošinot risinājumu, kuram varat uzticēties gadiem.

## Vai elektroniskie paraksti ir juridiski saistošs?

Jā. Droši elektroniskie paraksti ir juridiski atzīti un izpildāmi lielākajā daļā pasaules. Ievērojamās regulas kā **eIDAS regula** Eiropas Savienībā un **E-Sign likums** Amerikas Savienotajās Valstīs ir izveidojušas skaidrus juridiskos ietvarus to izmantošanai. Augsti droši digitālie paraksti, piemēram, tie, kas izveidoti ar XAdES ASiC konteinerā, ir plaši uzskatīti par ekvivalentiem tradicionālajiem rokraksta parakstiem tiesā.
