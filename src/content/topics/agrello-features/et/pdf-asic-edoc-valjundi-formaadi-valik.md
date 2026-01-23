---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: PDF loob ühe faili manustatud allkirjadega (PAdES), samal ajal kui ASIC loob konteineri eraldatud allkirja failidega (XAdES), mis võib hoida mitut dokumenti ja toetab ainult kvalifitseeritud elektroonilisi allkirju.
    question: Mis vahe on PDF ja ASIC formaatidel?
  - answer: Kasuta ASIC-i, kui vajad kvalifitseeritud elektroonilisi allkirju (QES), tahad allkirjastada mitut faili koos või nõuad pikaajalise allkirja valideerimist arhiveerimise eesmärkidel.
    question: Millal peaksin kasutama ASIC formaati PDF asemel?
  - answer: EDOC on Läti riiklik e-allkirja formaat, funktsionaalselt sarnane ASIC-ga, kuid spetsiaalselt disainitud Läti regulatiivse vastavuse ja valitsuse dokumendi töövoogude jaoks.
    question: Mis on EDOC formaat?
image: ../../../assets/edoc.webp
publish_date: '2025-01-17'
rank: 20
seo_desc: Vali PDF (PAdES), ASIC (XAdES) ja EDOC formaatide vahel. Võrdle funktsioone, allkirjatasemeid ja vastavuse nõudeid.
seo_title: PDF vs ASIC vs EDOC formaadi juhend | E-allkirja võrdlus
slug: pdf-asic-edoc-valjundi-formaadi-valik
sub_topic: documents
summary: Võrdle PDF (PAdES), ASIC (XAdES) ja EDOC allkirja formaate, et valida parim valik oma dokumentidele kasutuskoha, allkirja nõuete ja regionaalse vastavuse põhjal.
title: 'PDF vs ASIC vs EDOC: õige e-allkirja formaadi valimine'
updated_date: '2025-01-17'
---

Agrello toetab kolme e-allkirja väljundi formaati: PDF (PAdES), ASIC (XAdES) ja EDOC. Iga formaat teenindab erinevaid vajadusi. Vali oma allkirja nõuete, failide struktuuri ja regionaalse vastavuse põhjal.

## Formaatide ülevaade

![Vali dokumendi väljundi formaat](../../../assets/downloaded/documents/choose-whether-your-document-should-be-formatted-as-a-pdf-or.webp)

**PDF (PAdES)** manustab allkirjad otse sinu PDF faili. Allkirjastatud dokument näeb välja nagu tavaline PDF allkirjakastidega sees. Keegi PDF lugejaga saab seda avada.

**ASIC (XAdES)** loob konteineri - nagu ZIP arhiiv - mis hoiab sinu faile ja salvestab allkirjad eraldi. **ASIC jõustab kvalifitseeritud elektroonilised allkirjad (QES)** automaatselt ja toetab mitut failitüüpi.

**EDOC** töötab nagu ASIC, aga vastab Läti konkreetsetele regulatiivsetele nõuetele. Kasuta seda Läti valitsuse esitluste ja institutsionaalsete lepingute jaoks.

## PDF (PAdES) formaat

PDF formaat manustab allkirjad kasutades PAdES (PDF Advanced Electronic Signatures) standardit. Allkirjad ilmuvad visuaalsete kastidena sinu dokumendis.

**Võimalused:**

- Üks PDF fail manustatud allkirjadega
- Visuaalsed allkirjakastid, mis näitavad allkirjastaja detaile
- Toetab kõiki allkirjatasemeid: SES, AES, QES
- Täidetavad väljad {{looksulgude}} süntaksiga
- PDF tekstiväljad andmete kogumiseks
- Universaalne ühilduvus - iga PDF lugeja töötab

**Parim:**

- Ühe faili lepingud ja kokkulepped
- Dokumendid, mis vajavad nähtavaid allkirjakaste
- Olukorrad, mis nõuavad allkirja paindlikkust (erinevad allkirjastajad kasutavad erinevaid meetodeid)
- Saajad ilma spetsialiseeritud tarkvarata

**PDF jääb laialdaselt eelistatuks** standardsetele lepingutele universaalse ühilduvuse tõttu üle kõigi platvormide ja seadmete.

![Valideeri PDF allkirjad](../../../assets/downloaded/documents/validate-pdf-signatures.webp)

**Piirangud:**

- Allkirjastab ainult ühe PDF faili dokumendi kohta
- Ei saa allkirjastada teisi failitüüpe (Word, Excel, pildid)
- Automaatset QES jõustamist pole - allkirjastajad valivad oma meetodi

## ASIC (XAdES) formaat

ASIC loob konteineri faili (ASiC-E formaat) kasutades XAdES-i (XML Advanced Electronic Signatures). Failid ja allkirjad jäävad konteineris eraldi.

**Võimalused:**

- Mitu faili ühes konteineris (iga failitüüp)
- Ainult QES jõustamine - madalamaid turvatasemeid pole
- Täidetavad {{looksulgud}} väljad üle kõigi failide
- Pikaajaline arhiveerimine XAdES-A standardiga
- ELi eIDAS ühilduv
- Allkirjad salvestatud META-INF kaustas

**Parim:**

- Lepingud manustega (põhikokkulepe + lisad + täiendused)
- Mitte-PDF failid (ZIP arhiivid, pildid, tabelarvutused, tehnilised joonised)
- Kohustuslikud QES nõuded
- Pikaajali ne dokumendi salvestamine (aastakümned kehtivust)
- Allkirjameetodi vigade vältim ine

**Piirangud:**

- Vajab ASIC-ühilduvat vaatajat (mitte standardsed PDF lugejad)
- Visuaalseid allkirju dokumentide sees pole
- Ainult QES - ei saa kasutada lihtsaid või täiustatud allkirju
- PDF tekstivälju pole (ainult {{looksulud}})

![Sertifikaadi detailid](../../../assets/downloaded/documents/show-certificate.webp)

## EDOC formaat

EDOC ("Electronically Certified Document") on Läti riiklik e-allkirja formaat. Ehitatud samale ASiC-E + XAdES tehnoloogiale nagu ASIC.

![EDOC formaat](../../../assets/downloaded/documents/e-signature-edoc-format-signing-digitally.webp)

**Mis teeb EDOC-i teistsuguseks:**

- Täiustatud valideerimine Läti regulatiivse vastavuse jaoks
- Kohustuslik Läti valitsuse esitlustele
- Täiendavad pikaajalise valideerimise funktsioonid
- Kvalifitseeritud ajatemplid ja sertifikaadi tühistamise kontrollid

**Millal kasutada:**

- Dokumentide esitamine Läti valitsuse teenustele
- Ärilepingud, mis nõuavad Läti õiguslikku vastavust
- Ametlik paberimajandus Läti institutsioonidele

**Tehnilised võimalused:** Sama mis ASIC (mitme faili, ainult QES, iga failitüüp, XAdES allkirjad).

## Õige formaadi valimine

**Vali PDF, kui:**

- Sul on üks fail allkirjastamiseks
- Vajad visuaalseid allkirjakaste dokumendi sees
- Saajad vajavad universaalset ühilduvust
- Tahad allkirja paindlikkust (luba erinevaid meetodeid erinevatele allkirjastajatele)
- Töötad standardsete lepingute, kokkulepete või vormidega

**Vali ASIC, kui:**

- Sinu vastaspool on Eesti ettevõtted või avaliku sektori institutsioonid
- Pead allkirjastama mitut faili koos
- Allkirjastad mitte-PDF failitüüpe
- QES on kohustuslik kõigile allkirjastajatele
- Pikaajaline arhiveerimine on oluline
- ELi vastavus on kriiti line
- Tahad vältida kasutajate vale allkirjameetodi valimist

**Vali EDOC, kui:**

- Esitad Läti valitsusele või institutsioonidele
- Sinu ettevõttel on Läti regulatiivsed kohustused
- Vajad täiustatud valideerimist Läti õigusraamistiku jaoks

## Allkirjameetodi ühilduvus

**PDF toetab kõiki tasemeid:**

- Lihtne elektrooniline allkiri (SES) - Agrello e-Sign (joonistatud/kirjutatud)
- Täiustatud elektrooniline allkiri (AES) - eParaksts mobile
- Kvalifitseeritud elektrooniline allkiri (QES) - Smart-ID, Mobile-ID, eID kaardid

**ASIC toetab ainult QES-i:**

- Smart-ID
- Mobile-ID
- eID kaardid (Eesti, Belgia, Soome jne)
- eParaksts (Läti eID)

**EDOC toetab ainult QES-i:**

Sama kui ASIC - Smart-ID, Mobile-ID, eID kaardid, eParaksts.

**Segatud stsenaariumid:** Kui mõned allkirjastajad vajavad PDF-i (visuaalsed allkirjad) ja teised ASIC-i (mitme faili), loo eraldi dokumendid iga formaadi jaoks. Sa ei saa formaate segada ühe dokumendi väljundis.

## Miks formaadi valik loeb

**Õiguslik kehtivus:** Kõik kolm formaati loovad õiguslikult siduvaid allkirju. Vali oma tööstusharu nõuete ja regionaalsete regulatsioonide põhjal.

**Töövoo efektiivsus:** Õige formaat vähendab vigu ja kiirendab allkirjastamist.

**Pikaajaline vastavus:** ASIC ja EDOC pakuvad tugevamaid arhiveerimise garantiisid XAdES-A valideerimisega, säilitades allkirja kehtivuse aastakümneid isegi pärast sertifikaatide aegumist.
