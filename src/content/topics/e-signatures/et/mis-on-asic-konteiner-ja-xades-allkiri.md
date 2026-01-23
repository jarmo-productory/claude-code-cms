---
title: 'Mis on ASiC konteiner ja XAdES e-allkiri?'
slug: 'mis-on-asic-konteiner-ja-xades-allkiri'
author: 'jarmo-tuisk'
rank: 40
summary: 'Saa teada, kuidas ASiC-konteinerid ja XAdES e-allkirjad töötavad koos, et pakkuda turvalist, nõuetele vastavat ja pikaajalist digiallkirjastamist, mis on tunnustatud kogu ELis.'
image: '/assets/Signing.webp'
seo_title: 'Mis on ASiC konteiner ja XAdES e-allkiri? | Agrello'
seo_desc: 'Loe, mis on ASiC-konteinerid ja XAdES e-allkirjad, millised on nende eelised ja kuidas need töötavad koos, et tagada eIDAS-nõuetele vastav turvaline digiallkirjastamine.'
date: '2024-06-10'
faq_schema:
  - question: 'Mis vahe on ASiCil ja XAdESil?'
    answer: 'ASiC on konteineri vorming dokumentide ja allkirjade ühendamiseks. XAdES on XML-põhine allkirja vorming. ASiC-konteinerid sisaldavad tihti XAdES-allkirju, seega need täiendavad teineteist.'
  - question: 'Kas ASiC-konteinerid on õiguslikult kehtivad?'
    answer: 'Jah, ASiC-konteinerid on ELis eIDAS-määruse alusel tunnustatud kui kehtiv formaat e-allkirjadele.'
  - question: 'Kas ma saan ASiC-konteinerit avada ilma eritarkvarata?'
    answer: 'Kuna ASiC-failid on tegelikult ZIP-arhiivid, saad faililaiendi .zip-iks muuta ja sisu lahti pakkida. Allkirjade korrektseks valideerimiseks on siiski vaja spetsiaalset tarkvara.'
  - question: 'Kas ASiC-konteinerid võivad sisaldada mitut allkirja?'
    answer: 'Jah, ASiC-E (Extended) konteinerid on loodud just mitme dokumendi ja mitme allkirja hoidmiseks, mis teeb need ideaalseks keerukate allkirjastamisprotsesside jaoks.'
  - question: 'Millised riigid tunnustavad ASiC- ja XAdES-vorminguid?'
    answer: 'Mõlemad vormingud on tunnustatud kogu Euroopa Liidus eIDAS-määruse alusel. Neid kasutatakse laialdaselt arenenud digiallkirja taristuga riikides nagu Eesti, Läti ja Leedu.'
---

Digitaalses maailmas on dokumentide autentsuse ja terviklikkuse tagamine ülioluline. Kuigi paljud tunnevad digiallkirju, on tehnoloogiad nende taga, nagu ASiC ja XAdES, vähem tuntud. Teeme selgeks, mis need on ja miks need on turvalise e-allkirjastamise jaoks olulised.

---

Enne kui süveneme ASiC-konteineritesse ja XAdES-vormingusse, tuletame meelde, mis on digiallkiri. See on krüptograafiline meetod, mida kasutatakse digitaalse dokumendi autentsuse ja terviklikkuse kontrollimiseks. Mõtle sellest kui käsitsi antud allkirja digitaalsest vastest, kuid palju kõrgema turvalisusega.

## Kuidas digiallkirjad töötavad?

Digiallkirjad põhinevad avaliku võtme krüptograafial (PKI), mis kasutab matemaatiliselt seotud võtmepaari: privaatvõti ja avalik võti.

Allkirjastaja kasutab oma privaatvõtit andmete krüpteerimiseks, luues unikaalse allkirja. Igaüks, kellel on Sinu avalik võti, saab selle abil allkirja kontrollida. Kui kontroll ebaõnnestub, viitab see probleemile kas allkirjas või dokumendis endas.

## Mis on ASiC (Associated Signature Container)?

ASiC ehk seotud allkirjakonteiner on standardne failivorming, mis ühendab ühe või mitu dokumenti koos nende e-allkirjadega ühte ZIP-arhiivi. See Euroopa Telekommunikatsiooni Standardite Instituudi (ETSI) loodud formaat tagab, et allkirjastatud dokumendid ja nende allkirjad püsivad koos, tehes nende haldamise ja kontrollimise lihtsaks.

**Oluline teada:** ASiC on üks eIDAS-määrusega heaks kiidetud vormingutest täiustatud ja kvalifitseeritud e-allkirjade jaoks Euroopa Liidus.

ASiC-konteineri sees on tavaliselt:

- Juurkaust, mis sisaldab allkirjastatud faile (dokumendid, pildid jne).
- "META-INF" kaust, kus hoitakse metaandmeid, sealhulgas digiallkirja faile.

Agrello kasutab ASiC-konteinereid, et siduda allkirjastatud dokumendid eraldiseisvate digiallkirjadega, kasutades selleks peamiselt XAdES-vormingut.

### ASiC-S vs. ASiC-E

Standardil on kaks peamist tüüpi:

- **ASiC-S (Simple):** Ühendab ühe faili ühe või mitme allkirjaga, mis asuvad ühes allkirjafailis.
- **ASiC-E (Extended):** Toetab mitme faili ühendamist mitme allkirjaga, mis võivad asuda eraldi failides. See on ideaalne keerukateks juhtudeks, kus on mitu dokumenti ja allkirjastajat.

### Millised on ASiC-konteinerite eelised?

- **Lihtne jagamine:** Dokumentide ja allkirjade koondamine ühte paketti teeb jagamise ja hoiustamise lihtsaks.
- **Terviklikkus:** Tagab, et valideerimiseks kasutatakse õiget allkirja ja hoiab ära dokumentide eraldamise allkirjadest.
- **Audit ja vastavus:** ASiC pakub turvalist viisi dokumendigruppide hetkeseisu salvestamiseks, mis on kasulik auditite ja vastavuse tagamiseks.

## Mis on XAdES (XML Advanced Electronic Signature)?

XAdES on XML-põhine täiustatud e-allkirja vorming. See on põhilise XML-DSig standardi laiendus, mis muudab allkirja sobivaks täiustatud ja kvalifitseeritud e-allkirjadele, mis peavad kehtima pikka aega vastavalt Euroopa määrustele nagu eIDAS.

XAdES täiustab tavalist digiallkirja, lisades sellele kvalifitseerivaid omadusi nagu ajatemplid ja sertifikaadi kehtivusandmed, mis suurendavad selle õiguslikku kaalu ja pikaajalist kontrollitavust.

### XAdES allkirjatasemed

XAdES on saadaval mitmel tasemel, millest igaüks pakub järjest rohkem turvalisust:

- **XAdES-BES:** Põhitase, mis vastab täiustatud e-allkirja miinimumnõuetele.
- **XAdES-T (Ajatempel):** Lisab ajatempli, et tõestada allkirja olemasolu kindlal ajahetkel.
- **XAdES-C (Täielik):** Sisaldab viiteid kontrollimisandmetele (sertifikaadid ja tühistusnimekirjad).
- **XAdES-X (Laiendatud):** Lisab viidetele ajatemplid, et kaitsta sertifikaatide tulevaste kompromiteerimiste eest.
- **XAdES-XL (Laiendatud pikaajaline):** Salvestab tegelikud kontrollimisandmed (sertifikaadid jne) otse allkirja sisse.
- **XAdES-A (Arhiivi):** Võimaldab perioodilist ajatembeldamist, et säilitada allkirja kehtivus väga pikkade perioodide jooksul (nt arhiveerimiseks).

## ASiC vs. XAdES: Kuidas nad on seotud?

On oluline mõista, et ASiC ja XAdES ei ole konkureerivad, vaid teineteist täiendavad tehnoloogiad. ASiC on **konteiner**, mida kasutatakse pakendamiseks, samas kui XAdES on **allkirja vorming**.

ASiC-konteiner võib hoida eri tüüpi allkirju ja XAdES on üks levinumaid, eriti Euroopa standardite kontekstis. Kui kasutad Agrello platvormi, siis Sinu dokumentidele loodud ASiC-E konteinerid kasutavad XAdES-allkirju. See võimas kombinatsioon annab Sulle ASiC-i organiseerimisvõimalused ning XAdES-i kõrge turvalisuse ja pikaajalise kehtivuse.

## Kas e-allkirjad on õiguslikult siduvad?

Jah. E-allkirjad on õiguslikult tunnustatud ja siduvad paljudes maailma riikides. Määrused nagu eIDAS Euroopa Liidus ja E-Sign Act Ameerika Ühendriikides on loonud selge õigusliku raamistiku nende kasutamiseks. Väga turvalisi digiallkirju, nagu XAdES, peetakse sageli võrdväärseks traditsiooniliste käsitsi antud allkirjadega.

---

## Korduma kippuvad küsimused

### Mis vahe on ASiCil ja XAdESil?

ASiC on konteinervorming dokumentide ja allkirjade kokku pakendamiseks. XAdES on XML-põhine allkirjavorming. ASiC-konteinerid võivad sisaldada XAdES-allkirju, mis teeb need üksteist täiendavaks.

### Kas ASiC-konteinerid on õiguslikult kehtivad?

Jah, ASiC-konteinerid on ELis eIDAS-määruse alusel tunnustatud kui kehtiv formaat elektroonilistele allkirjadele.

### Kas ma saan ASiC-konteinerit avada ilma eritarkvarata?

Kuna ASiC-failid on ZIP-arhiivid, saate laiendi .zip-iks ümber nimetada ja sisu lahti pakkida. Siiski vajate spetsiaalset tarkvara, et allkirju korrektselt valideerida.

### Kas ASiC-konteinerid võivad sisaldada mitut allkirja?

Jah, ASiC-E (Laiendatud) konteinerid on loodud mitme dokumendi ja mitme allkirja hoidmiseks, mis teeb need sobivaks keerukate allkirjastamisvoogude jaoks.

### Millised riigid tunnustavad ASiC- ja XAdES-vorminguid?

Mõlemad vormingud on tunnustatud kogu Euroopa Liidus eIDAS-määruse alusel ja neid kasutatakse laialdaselt arenenud digitaalallkirja infrastruktuuriga riikides nagu Eesti, Läti ja Leedu.
