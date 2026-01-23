---
title: 'Allkirjasta oma dokumendid turvaliselt PAdES allkirjaga'
slug: 'allkirjasta-oma-dokumendid-turvaliselt-pades-allkirjaga'
metaTitle: 'Turvaline PDF-dokumentide digitaalne allkirjastamine'
description: 'Loe lähemalt, kuidas kiirelt ja turvaliselt allkirjastada kõik oma PDF-dokumendid, kasutades rahvusvaheliselt tunnustatud PAdES digitaalset allkirja. '
keyword: 'Digitaalne allkiri, PDF-allkiri, digiallkirjastamine, PAdES'
image: './images/643d0525a1df6b6ec852feaa_pades-illustration.png'
thumbnail: './images/643d0525a1df6b6ec852feaa_pades-illustration.png'
lang: 'et'
topic: 'e-allkirjad'
date: '2023-04-17'
excerpt: 'Digiajastul on elektrooniliste allkirjade kasutamine muutunud üha populaarsemaks. Siiski on koos digitaalsete allkirjade kasutamise kasvuga tekkinud mure nende usaldusväärsuse ja turvalisuse pärast. Nende murede lahendamiseks on välja töötatud erinevad allkirja vormingud, millest üks on PAdES (PDF elektroonilised allkirjad). Selles blogipostituses arutleme selle üle, mis on PAdES allkiri ja mis on selle eelised.'
readingTime: '5'
author: 'paula-sepp'
supportOnly: false
featured: false
tags:
  - eesti
categories:
  - elektrooniline-allkiri
  - allkirjastamine
---

PAdES (PDF elektrooniline allkiri) on allkirja vorming, mida kasutatakse PDF-dokumentide allkirjastamiseks. See põhineb PAdES-standardil, mille töötas välja Euroopa Telekommunikatsiooni Standardite Instituut (ETSI), et pakkuda turvalist ja usaldusväärset viisi elektrooniliste dokumentide allkirjastamiseks.

## PAdES allkirjaformaadi eelised

- **Pikaajaline kehtivus.** PAdES allkirjad kehtivad pikaajaliselt, tagades kindlustunde, et dokumendile lisatud digiallkirjad jäävad kehtivaks ja kontrollitavaks ka mitme aasta pärast.
- **Dokumendi terviklikkus.**  PAdES allkirjad tagavad ka selle, et dokumenti ei oleks pärast allkirjastamist muudetud. Dokumendis tehtud muudatused pärast allkirjastamist tühistavad juba antud digiallkirjade kehtivuse.
- **Ühilduvus**. PAdES allkirjad ühilduvad erinevate allkirja vormingutega ja neid saab kasutada erinevates rakendustes. See tähendab, et ühte dokumenti on võimalik samaaegselt erinevate osapoolte poolt allkirjastada nii PAdES allkirjaga kui ka kvalifitseeritud allkirjaga kasutades Mobiil-ID, Smart-ID või ID-kaardi lahendust. Küll aga jääb dokument sellisel juhul PDF-formaati, mitte ASiC konteineriks.

PAdES allkirjad on usaldusväärne ja turvaline viis PDF-dokumentide allkirjastamiseks, pakkudes pikaajalist kehtivust, dokumendi terviklikkust ja ühilduvust. PAdES allkiri sobib olukordades, kus dokumendi autentsus ja terviklikkus on oluline.

## Millistes riikides saab PAdES allkirja kasutada?

PAdES on allkirja vorming, mida kasutatakse üle maailma ning selle kasutamine ei piirdu ühegi konkreetse riigiga. Siiski võib PAdES-e ja elektrooniliste allkirjade üldist kasutuselevõttu riigiti erinevalt reguleerida, sõltuvalt kohalikest seadustest ja määrustest.

**Euroopas** on PAdES allkirjade kasutamine laialt levinud tänu eIDAS-ile (elektroonilise identifitseerimise, autentimise ja usaldusteenuste) määrusele, mis pakub elektrooniliste allkirjade ja usaldusteenuste jaoks õiguslikku raamistikku. EIDAS määrus on rakendatud kõigis 27 Euroopa Liidu liikmesriigis ning ka Islandil, Liechtensteinis ja Norras, mis on osa Euroopa Majanduspiirkonnast (EMP).

**Ameerika Ühendriikides** reguleerivad elektrooniliste allkirjade kasutamist _Electronic Signatures in Global and National Commerce Act (ESIGN)_ ja _Uniform Electronic Transactions Act (UETA)_. Kuigi need seadused ei määratle konkreetseid allkirjade formaate, annavad need õigusliku raamistiku elektrooniliste allkirjade kasutamiseks erinevates tehingutes.

**Aasias** kogub elektrooniliste allkirjade kasutamine samuti hoogu, kus riigid nagu Singapur, Lõuna-Korea ja Jaapan rakendavad nende kasutamise toetamiseks seadusi ja regulatsioone.

Kokkuvõttes, kuigi PAdES-allkirjade kasutamine ei ole piiratud konkreetse riigiga, võib nende kasutuselevõtt erineda sõltuvalt kohalikest seadustest ja regulatsioonidest. Siiski, arvestades digitaalsete tehnoloogiate kasvavat tähtsust ja vajadust turvaliste ja usaldusväärsete digitaalse allkirjastamise viiside järele, on PAdES ja muude elektrooniliste allkirjade formaatide kasutamine jätkuvalt globaalsel tasemel suurenev trend.

## Kuidas valideerida PAdES allkirja kehtivust?

Eestis oleme harjunud DigiDoc rakendusest kontrollima kvalifitseeritud allkirjade kehtivust ning see on meie kõikide jaoks lihtne ja harjumuspärane. Nüüd kui dokument on allkirjastatud PAdES allkirjaga, siis võib tekkida küsimus, kuidas selliste allkirjade kehtivust valideerida. Kui sul on arvutis näiteks Adobe Acrobat Reader, siis on kõige lihtsam PAdES digiallkirja kehtivust sealt kontrollida.

1.  Ava dokument Adobe Acrobat Readeris.
2.  Kliki allkirja paneelil või otsi dokumendilt allkirjaväli ja kliki sellele. Avaneb dialoog, milles on detailne informatsioon elektroonilise PAdES allkirja kohta: allkirjastaja nimi, allkirja andmise aeg ja allkirja staatus.
3.  Allkirja staatus võib olla kas “_valid_” ja “_verified_” ehk kehtiv või “_invalid_” ja “_not verified”_ ehk kehtetu.
4.  Ka allkirja sertifikaadi kohta on täpsem info olemas.

![allkirja sertifikaadi](./images/643e5303e57f71e642550ce8_Frame%201.png)

Adobe readeris PDF-allkirja valideerimine

‍

Järgides neid samme on võimalik PAdES allkirja kehtivust Adobe Acrobat Readeris kontrollida. Ka kõik Agrello platvormil PDF-dokumentidele antud digitaalsed allkirjad on kontrollimisel kehtivad ja rohelised.

‍

‍
