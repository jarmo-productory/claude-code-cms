---
title: 'E-allkirja tehnoloogia: mis vahe on allkirja tasemel ja formaadil?'
slug: 'e-allkirja-tehnoloogia'
author: 'jarmo-tuisk'
rank: 20
summary: 'Põhjalik ülevaade e-allkirja tehnoloogiast. Selgitame lahti juriidiliste tasemete (AdES, QES) ja tehniliste vormingute (PAdES, XAdES, ASiC) erinevused vastavalt eIDAS määrusele.'
image: '/assets/esignature.webp'
seo_title: 'E-allkirja tehnoloogia: allkirja tasemed vs formaadid | Agrello'
seo_desc: 'Saa aru peamistest erinevustest e-allkirja juriidiliste tasemete (AdES, QES) ja tehniliste vormingute (PAdES, XAdES, ASiC) vahel, et valida oma vajadustele sobivaim lahendus.'
date: '2024-05-21'
---

Kui puutud kokku e-allkirjadega, kohtad tõenäoliselt lühendeid nagu QES, PAdES ja ASiC. Kuigi need tunduvad sarnased, tähistavad need kahte eri asja: allkirja **õiguslikku taset** ja selle **tehnilist vormingut**.

Nende erinevuse mõistmine on oluline, et valida oma vajadustele sobivaim allkiri. Teeme selle selgeks.

## Allkirja tasemed (õiguslik kaal)

Allkirja "tase" näitab selle õiguslikku kaalu ELi eIDAS määruse järgi. See määrab, kui tugev on allkiri juriidilises vaidluses. Mõtle sellele kui erinevusele tavalise kviitungi ja notariaalselt kinnitatud dokumendi vahel.

### Lihtne elektrooniline allkiri (SES)

Lihtne elektrooniline allkiri on kõige põhilisem tase. eIDAS määruse järgi on see "elektroonilisel kujul olevad andmed, mis on lisatud või loogiliselt seotud teiste elektrooniliste andmetega ja mida allkirjastaja kasutab allkirjastamiseks". See hõlmab näiteks nupu „Nõustun” märkimist või oma nime trükkimist allkirjaploki alla. Kuigi see on õiguslikult tunnustatud, annab see kõige vähem õiguskindlust, sest isikusamasuse tuvastamise nõuded on leebed.

### Täiustatud elektrooniline allkiri (AdES)

AdES on levinud turvaline allkirjatüüp ärilepingutes. Et allkiri oleks "täiustatud", peab see vastama kindlatele kriteeriumitele:

- See on seotud ainult allkirjastajaga.
- See võimaldab allkirjastajat tuvastada.
- See on loodud vahenditega, mida allkirjastaja saab turvaliselt ise kontrollida.
- See on seotud allkirjastatud andmetega nii, et iga hilisem muudatus on tuvastatav.

### Kvalifitseeritud elektrooniline allkiri (QES)

QES on kõrgeima ja kõige turvalisema tasemega e-allkiri. See on täiustatud allkiri (AdES), mis on lisaks loodud **kvalifitseeritud allkirja andmise seadmega (QSCD)** ja põhineb **kvalifitseeritud sertifikaadil**.

Oluline on teada, et QES on **õiguslikult võrdne käsitsi antud allkirjaga** igas ELi liikmesriigis. See teeb sellest parima valiku suure väärtusega tehingute, riiklike dokumentide ja muude olukordade jaoks, kus on vaja maksimaalset õiguskindlust.

## Allkirja vormingud (tehniline pakend)

"Vorming" on tehniline standard, mida kasutatakse allkirja ja dokumendi ühendamiseks. See on justkui digitaalne ümbrik, mis hoiab kõike koos struktuurselt ja kontrollitavalt. Vormingu valik sõltub tavaliselt allkirjastatava dokumendi tüübist.

### PAdES (PDF-idele)

Nagu nimi viitab, on [PAdES](https://agrello.io/posts/mis-on-pades-allkiri) standard PDF-dokumentide allkirjastamiseks. See lisab allkirja andmed otse PDF-faili. Kuna PDF on äris laialt levinud, on ka PAdES üks enimkasutatavaid vorminguid.

### XAdES (XML-idele)

[XAdES](https://agrello.io/posts/mis-on-asic-konteiner-ja-xades-allkiri)-i kasutatakse XML-dokumentide allkirjastamiseks. XML on levinud struktureeritud andmete vahetamiseks süsteemide vahel, näiteks panganduses või hangetes. XAdES võimaldab allkirjastada nii kogu XML-dokumendi kui ka selle osi.

### CAdES (CMS Advanced Electronic Signatures)

CAdES on universaalne standard suvalise binaarandmete tüübi allkirjastamiseks. See põhineb Cryptographic Message Syntax (CMS) tehnoloogial ning seda kasutatakse sageli tarkvara, meilide või muude mitte-PDF-failide allkirjastamiseks. Mõned riiklikud identiteedilahendused (nt Ukraina Diia) kasutavad CAdES-it.

### ASiC (Konteiner)

[ASiC](https://agrello.io/posts/mis-on-asic-konteiner-ja-xades-allkiri) on mitmekülgne vorming, mis toimib digitaalse konteinerina. See võib ühendada ühe või mitu dokumenti koos allkirjadega ühte ZIP-faili. See on eriti kasulik keeruliste tehingute puhul, kus on mitu dokumenti, näiteks leping koos allkirjastatud lisadega. ASiC hoiab kõik turvaliselt ja korrektselt koos.

## Praktilised näited Agrello platvormil

Alljärgnevalt, kuidas Agrello platvormil kasutatavad allkirjastamisviisid seostuvad tasemete ja vormingutega:

- **Agrello enda allkiri**: **Lihtne elektrooniline allkiri (SES)**, mille tehniline vorming on **PAdES**. Pakub täielikku toimingulogi, kuid on eIDASi järgi kõige põhilisem tase. Sobib igapäevasteks kokkulepeteks, kus tugev isiku tuvastamine pole esmaseks nõudeks.

- **BankID (Rootsi)**: Annab **täiustatud elektroonilise allkirja (AdES)** **PAdES**-vormingus. Pakub kõrgemat kindlust isikusamasuse tuvastamisel kui SES.

- **Diia (Ukraina)**: **Täiustatud elektrooniline allkiri (AdES)**. Algne vorming **CAdES**, mille me pakendame PDF-i sisse, et tagada parem kasutatavus ja koostalitlusvõime.

- **Mobiil-ID, Smart-ID, ID-kaart (Baltikum)**: Annavad **kvalifitseeritud elektroonilise allkirja (QES)**, mis on kõrgeim tase. Tehniline vorming on üldjuhul **ASiC (sees XAdES)**.
  - **eParaksts (Läti)**: QES, mille tavaliseks väljundiks on ASiC; vajadusel saab küsida ka **EDOC** (XAdES-põhine) väljundit.

![Agrello allkirjastamise valikud](../../../assets/agrello_signing_options.webp)

## Kokkuvõte: Tase + vorming = turvaline allkiri

Turvaline e-allkiri on kombinatsioon nii õiguslikust **tasemest** (nt SES, AdES või QES) kui ka tehnilisest **vormingust** (nt PAdES või ASiC).

Valides platvormi nagu Agrello, mis toetab kõiki neid standardeid, tagad, et Sinu allkirjastatud dokumendid pole mitte ainult turvalised ja lihtsalt hallatavad, vaid ka õiguskindlad ja kasutatavad kogu Euroopas.

Kui oled valmis seda praktikas rakendama, **<a href="https://docs.agrello.io/?utm_source=agrello_blog&utm_medium=content_marketing&utm_campaign=e-signatures_pillar&utm_content=e-signature-technology-cta" target="_blank" rel="noopener noreferrer">tule ja proovi Agrello võimekat ja lihtsat platvormi</a>**.
