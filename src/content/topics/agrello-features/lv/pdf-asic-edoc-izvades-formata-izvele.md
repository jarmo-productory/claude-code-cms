---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: PDF izveido vienu failu ar iebūvētiem parakstiem (PAdES), kamēr ASIC izveido
      konteineru ar atsevišķiem paraksta failiem (XAdES), kas var saturēt vairākus dokumentus
      un atbalsta tikai kvalificētus elektroniskos parakstus.
    question: Kāda ir atšķirība starp PDF un ASIC formātiem?
  - answer:
      Izmanto ASIC, kad nepieciešami kvalificēti elektroniskie paraksti (QES), vēlies parakstīt
      vairākus failus kopā vai prasa ilgtermiņa paraksta validāciju arhivēšanas
      nolūkiem.
    question: Kad man vajadzētu izmantot ASIC formātu nevis PDF?
  - answer: EDOC ir Latvijas nacionālais e-paraksta formāts, funkcionāli līdzīgs ASIC,
      bet īpaši izstrādāts Latvijas regulējošai atbilstībai un valdības dokumentu
      darba plūsmām.
    question: Kas ir EDOC formāts?
image: ../../../assets/edoc.webp
publish_date: '2025-01-17'
rank: 20
seo_desc: Izvēlies starp PDF (PAdES), ASIC (XAdES) un EDOC formātiem. Salīdzini funkcijas,
  paraksta līmeņus un atbilstības prasības.
seo_title: PDF vs ASIC vs EDOC formāta ceļvedis | E-paraksta salīdzinājums
slug: pdf-asic-edoc-izvades-formata-izvele
sub_topic: documents
summary: Salīdzini PDF (PAdES), ASIC (XAdES) un EDOC paraksta formātus, lai izvēlētos
  labāko opciju saviem dokumentiem, pamatojoties uz lietošanas gadījumu, paraksta prasībām un reģionālās
  atbilstības vajadzībām.
title: 'PDF vs ASIC vs EDOC: pareizā e-paraksta formāta izvēle'
updated_date: '2025-01-17'
---

Agrello atbalsta trīs e-paraksta izvades formātus: PDF (PAdES), ASIC (XAdES) un EDOC. Katrs formāts kalpo dažādām vajadzībām. Izvēlies, pamatojoties uz savām paraksta prasībām, faila struktūru un reģionālo atbilstību.

## Formāta pārskats

![Izvēlies dokumenta izvades formātu](../../../assets/downloaded/documents/choose-whether-your-document-should-be-formatted-as-a-pdf-or.webp)

**PDF (PAdES)** ievieto parakstus tieši tavā PDF failā. Parakstītais dokuments izskatās kā regulārs PDF ar paraksta kastītēm, kas redzamas iekšpusē. Ikviens ar PDF lasītāju var to atvērt.

**ASIC (XAdES)** izveido konteineru - līdzīgi ZIP arhīvam - kas satur tavus failus un glabā parakstus atsevišķi. **ASIC automātiski piespieļ kvalificētus elektroniskos parakstus (QES)** un atbalsta vairākus failu tipus.

**EDOC** darbojas kā ASIC, bet atbilst Latvijas specifiskajām regulējošām prasībām. Izmanto to Latvijas valdības iesniegumiem un institucionāliem līgumiem.

## PDF (PAdES) formāts

PDF formāts ievieto parakstus, izmantojot PAdES (PDF Advanced Electronic Signatures) standartu. Paraksti parādās kā vizuālas kastītes tavā dokumentā.

**Iespējas:**

- Viens PDF fails ar iebūvētiem parakstiem
- Vizuālas paraksta kastītes, kas rāda parakstītāja detaļas
- Atbalsta visus paraksta līmeņus: SES, AES, QES
- Aizpildāmi lauki ar {{curly_brackets}} sintaksi
- PDF teksta lauki datu vākšanai
- Universālā saderība - jebkurš PDF lasītājs darbojas

**Labākais:**

- Viena faila līgumiem un vienošanās
- Dokumentiem, kas prasa redzamas paraksta kastītes
- Situācijām, kas prasa paraksta elastību (dažādi parakstītāji izmanto dažādas metodes)
- Saņēmējiem bez specializētas programmatūras

**PDF paliek plaši vēlamais** standarta līgumiem tā universālās saderības dēļ visās platformās un ierīcēs.

![Validē PDF parakstus](../../../assets/downloaded/documents/validate-pdf-signatures.webp)

**Ierobežojumi:**

- Paraksta tikai vienu PDF failu par dokumentu
- Nevar parakstīt citus failu tipus (Word, Excel, attēlus)
- Nav automātiskas QES piespiedšanas - parakstītāji izvēlas savu metodi

## ASIC (XAdES) formāts

ASIC izveido konteinera failu (ASiC-E formāts), izmantojot XAdES (XML Advanced Electronic Signatures). Faili un paraksti paliek atsevišķi konteinera iekšpusē.

**Iespējas:**

- Vairāki faili vienā konteinerā (jebkurš faila tips)
- Tikai QES piespiedšana - nav zemāku drošības līmeņu
- Aizpildāmi {{curly_brackets}} lauki visos failos
- Ilgtermiņa arhivēšana ar XAdES-A standartu
- ES eIDAS saderīgs
- Paraksti glabājas META-INF mapē

**Labākais:**

- Līgumiem ar pielikumiem (galvenā vienošanās + eksponāti + pielikumi)
- Ne-PDF failiem (ZIP arhīvi, attēli, izklājlapas, tehniskie rasējumi)
- Obligātām QES prasībām
- Ilgtermiņa dokumentu glabāšanai (desmitgadēm derīgums)
- Paraksta metodes kļūdu novēršanai

**Ierobežojumi:**

- Prasa ASIC saderīgu skatītāju (ne standarta PDF lasītājus)
- Nav vizuālu parakstu dokumentu iekšpusē
- Tikai QES - nevar izmantot vienkāršus vai uzlabotus parakstus
- Nav PDF teksta lauku (tikai {{curly_brackets}})

![Sertifikāta detaļas](../../../assets/downloaded/documents/show-certificate.webp)

## EDOC formāts

EDOC ("Electronically Certified Document") ir Latvijas nacionālais e-paraksta formāts. Būvēts uz to pašu ASiC-E + XAdES tehnoloģiju kā ASIC.

![EDOC formāts](../../../assets/downloaded/documents/e-signature-edoc-format-signing-digitally.webp)

**Kas padara EDOC atšķirīgu:**

- Uzlabota validācija Latvijas regulējošai atbilstībai
- Obligāts Latvijas valdības iesniegumiem
- Papildu ilgtermiņa validācijas funkcijas
- Kvalificēti laika zīmogi un sertifikātu atsaukšanas pārbaudes

**Kad izmantot:**

- Dokumentu iesniegšanai Latvijas valdības pakalpojumiem
- Biznesa līgumiem, kas prasa Latvijas juridisko atbilstību
- Oficiāliem dokumentiem Latvijas iestādēm

**Tehniskās iespējas:** Tāpat kā ASIC (vairāki faili, tikai QES, jebkurš faila tips, XAdES paraksti).

## Pareizā formāta izvēle

**Izvēlies PDF, kad:**

- Tev ir viens fails, ko parakstīt
- Nepieciešamas vizuālas paraksta kastītes dokumenta iekšpusē
- Saņēmējiem nepieciešama universālā saderība
- Vēlies paraksta elastību (ļauj dažādas metodes dažādiem parakstītājiem)
- Strādā ar standarta līgumiem, vienošanās vai veidlapām

**Izvēlies ASIC, kad:**

- Tavi kontrahenti ir Igaunijas uzņēmumi vai publiskā sektora iestādes
- Nepieciešams parakstīt vairākus failus kopā
- Paraksti ne-PDF failu tipus
- QES ir obligāts visiem parakstītājiem
- Ilgtermiņa arhivēšana ir svarīga
- ES atbilstība ir kritiska
- Vēlies novērst lietotājus izvēlēties nepareizas paraksta metodes

**Izvēlies EDOC, kad:**

- Iesniedz Latvijas valdībai vai iestādēm
- Tavam biznesam ir Latvijas regulējošas saistības
- Nepieciešama uzlabota validācija Latvijas juridiskajā sistēmā

## Paraksta metodes saderība

**PDF atbalsta visus līmeņus:**

- Vienkāršs elektroniskais paraksts (SES) - Agrello e-Sign (zīmēts/rakstīts)
- Uzlabots elektroniskais paraksts (AES) - eParaksts mobile
- Kvalificēts elektroniskais paraksts (QES) - Smart-ID, Mobile-ID, eID kartes

**ASIC atbalsta tikai QES:**

- Smart-ID
- Mobile-ID
- eID kartes (Igaunijas, Beļģijas, Somijas utt.)
- eParaksts (Latvijas eID)

**EDOC atbalsta tikai QES:**

Tāpat kā ASIC - Smart-ID, Mobile-ID, eID kartes, eParaksts.

**Jauktie scenāriji:** Ja dažiem parakstītājiem nepieciešams PDF (vizuālie paraksti) un citiem nepieciešams ASIC (vairāki faili), izveido atsevišķus dokumentus katram formātam. Tu nevari jaukt formātus vienā dokumenta izvadē.

## Kāpēc formāta izvēle ir svarīga

**Juridiskais derīgums:** Visi trīs formāti izveido juridiski saistošus parakstus. Izvēlies, pamatojoties uz savas nozares prasībām un reģionālajiem noteikumiem.

**Darba plūsmas efektivitāte:** Pareizais formāts samazina kļūdas un paātrina parakstīšanu.

**Ilgtermiņa atbilstība:** ASIC un EDOC sniedz stiprākas arhivēšanas garantijas ar XAdES-A validāciju, uzturot paraksta derīgumu desmitgadēm pat pēc sertifikātu termiņa beigām.
