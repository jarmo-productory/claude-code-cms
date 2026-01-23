---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Jah, kasutades ASIC konteineri formaati saad kimbuta mitu faili (lepingud, manused, PDF-id, pildid, Exceli failid) ja allkirjastada need kõik koos ühe allkirja töövooguga.
    question: Kas saan Agrellos mitut faili korraga allkirjastada?
  - answer: ASIC konteinerid toetavad iga failitüüpi - PDF, Word, Excel, pildid, ZIP arhiivid, tehnilised joonised - muutes need ideaalseks keerukatele projektidele mitme tulemiga.
    question: Milliseid failitüüpe saan ASIC konteineritesse lisada?
  - answer: Allkirjastajad saavad juurdepääsu kõigile failidele konteineris, saavad vaadata iga dokumenti individuaalselt ja allkirjastada kogu paketi ühe allkirja tegevusega.
    question: Kuidas allkirjastajad mitme failiga ASIC dokumente vaatavad?
image: ../../../assets/docs.webp
publish_date: '2025-01-17'
rank: 30
seo_desc: Õpi looma mitme failiga ASIC konteinereid, mis kimbutavad lepinguid, manuseid ja dokumente ühe kvalifitseeritud elektroonilise allkirjaga.
seo_title: ASIC mitme failiga dokumentide juhend | Kimbuta mitut faili
slug: mitme-failiga-dokumentide-kasutamine-asic
sub_topic: documents
summary: Loo ja halda mitme failiga dokumentide pakette kasutades ASIC konteinereid. Õpi, kuidas kimbuta lepinguid manustega, tehniliste spetsifikatsioonidega ja toetavate dokumentidega ühte allkirjastatud paketti.
title: 'Mitme failiga dokumendid: ASIC konteineritega töötamine'
updated_date: '2025-01-17'
---

ASIC konteinerid lasevad sul mitu faili koos kimbuta ja allkirjastada need kõik ühe allkirja kogumiga. Üks leping, kolm lisalepingut, kaks tehnilist joonist - kõik ühes paketis, kõik korraga allkirjastatud.

## Mida mitme failiga dokumendid lahendavad

Traditsiooniline allkirjastamine käsitseb ühte faili korraga. Kui su lepingul on manused, siis kas ühendad kõik ühte PDF-i (kaotades originaalformaadid) või haldad eraldi allkirjastamise töövoogusid iga faili jaoks.

**ASIC konteinerid töötavad teisiti.** Sa pakendad mitu faili koos - iga failitüüp - ja allkirjastajad vaatavad ja allkirjastavad täieliku komplekti ühe tegevusega.

See loeb keerukate kokkulepete jaoks. Ehitusleping sisaldab põhilepingu, arhitektuurseid jooniseid (CAD failid), materjali spetsifikatsioone (Excel) ja projekti ajajoont (PDF). ASIC-iga allkirjastavad kõik failid koos. Ühtegi faili ei jäeta vahele. Versioonide segadust pole.

![ASIC konteineri formaat](../../../assets/downloaded/documents/what-is-asic-and-xades-signature.webp)

## Mitme failiga dokumentide loomine

**Alusta formaadi valikust.** Dokumendi ettevalmistamise ajal vali ASIC või EDOC oma väljundi formaadiks. PDF ei toeta mitut faili.

**Lae oma failid üles.** Lisa kõik dokumendid konteinerisse:

- Põhileping (PDF, Word või mis tahes formaat)
- Lisalepingud ja näited
- Toetavad dokumendid (tabelarvutused, pildid, tehnilised failid)
- ZIP arhiivid (kui pead pakendama seotud esemeid)

**Failitüübi piiranguid pole.** ASIC aktsepteerib PDF-e, Wordi dokumente, Exceli tabelarvutusi, pilte, CAD jooniseid, ZIP faile - kõike, mida su kokkulepe vajab.

![Dokumendi ettevalmistuse töövoog](../../../assets/downloaded/getting-started/document-preparation-workflow-in-agrello.webp)

**Seadista allkirjastamine.** Lisa allkirjastajad, seadista allkirjastamise järjekord ja saada kutsed. Allkirjastajad näevad kõiki faile ühes liideses.

Mitme failiga konteinerid aitavad organisatsioonidel vältida puuduvate manuste vigu ja tagada, et kõik seotud dokumendid jäävad koos läbi allkirjastamise protsessi.

## Kuidas ASIC konteinerid töötavad

**Konteineri struktuur:** ASIC kasutab ZIP-taol ist arhiivi formaati. Sinu failid jäävad oma originaalformaatidesse. Allkirjad salvestatakse eraldi META-INF kaustas.

```
dokument.asice (ZIP arhiiv)
├── leping.pdf
├── spetsifikatsioonid.docx
├── eelarve.xlsx
├── joonised.zip
└── META-INF/
    ├── manifest.xml
    └── signatures.xml
```

**Kõik-või-mitte allkirjastamine:** Üks allkiri katab kogu konteineri. Sa ei saa selektiivselt allkirjastada individuaalseid faile paketi sees. See tagab, et kõik pooled allkirjastavad täieliku kokkuleppe.

**Faili terviklikkus:** Allkirja valideerimine kontrollib kogu konteinerit. Kui keegi muudab ükskõik millist faili pärast allkirjastamist, muutub allkiri kehtetuks.

## Allkirjastaja kogemus

Allkirjastajad saavad ühe e-posti kutse. Nad avavad allkirjastamise liidese ja näevad loetelu kõigist failidest konteineris.

**Failide ülevaatus:** Allkirjastajad saavad avada ja vaadata iga faili individuaalselt. Liides näitab failide nimesid, tüüpe ja suurusi. Allkirjastajad kontrollivad iga dokumenti enne allkirjastamist.

**Üks allkirjastamise tegevus:** Pärast kõigi failide ülevaatust allkirjastavad allkirjastajad üks kord. See allkiri kehtib kogu paketile - kõigile failidele koos.

**Allkirjastatud dokumentide vastuvõtmine:** Kui lõpetatud, saavad kõik allkirjastajad täielikult allkirjastatud ASIC konteineri kõigi failide ja allkirjadega kaasatud.

## Tavalised kasutuskohad

**Lepingud manustega:** Töölepingud sisaldavad põhilepingu, NDA, töötaja käsiraamatut ja soodustuste registreerimise vorme. Allkirjasta kõik koos - töötaja vaatab kõik dokumendid ühe seansiga üle.

**Projekti dokumentatsioon:** Ehitusprojektid kimbutavad ettepanekuid, tehnilisi spetsifikatsioone, arhitektuurseid jooniseid, materjalide loendit ja projekti graafikuid. Kõik sidusrühmad allkirjastavad täieliku paketi.

**Vastavuse paketid:** HR poliitikad sisaldavad põhipoliitika dokumenti, kinnituste vorme, koolitusmaterjale ja vastavuse sertifikaate. Töötajad allkirjastavad üks kord, kinnitades kõige vastuvõtmist.

**Kinnisvara tehingud:** Ostulepingud tulevad kinnisvara avaldustega, inspekteerimise aruannetega, tiitli dokumentidega ja hüpoteegi tingimustega. Ostjad ja müüjad allkirjastavad täieliku tehingu paketi.

**Tarnija lepingud:** Teenuselepingud manustavad tööavaldusi, hinnakiristu kke, SLA dokumente ja andmete töötlemise kokkuleppeid. Mõlemad pooled allkirjastavad ühe põhjaliku paketi.

## Tehnilised nõuded

**Ainult QES:** ASIC konteinerid nõuavad kvalifitseeritud elektroonilisi allkirju. Lihtsad või täiustatud allkirjad ei ole saadaval. See automaatne jõustamine tagab kõrgeima turvalisuse.

**Ühilduvad vaatajad:** Allkirjastatud ASIC konteinerid vajavad ASIC-ühilduvat tarkvara (nagu DigiDoc) avamiseks. Standardsed PDF lugejad ei saa ASIC faile vaadata.

**Täidetavad väljad:** Saad kasutada {{looksulgude}} välju üle kõigi failide konteineris. Allkirjastajad täidavad andmeid, mis täidavad läbi dokumendi paketi.

**Faili suuruse piirangud:** Failide arvu konkreetset piirangut pole. Praktilised piirangud sõltuvad kogukonteineri suurusest ja platvormi piirangutest.

**Allkirja valideerimine:** ASIC vaatajad valideerivad allkirjad ja näitavad kõiki faile allkirja staatusega. Valideerimine kinnitab, et ühtegi faili ei ole muudetud pärast allkirjastamist.

## Mitme failiga allkirjastamise eelised

**Puuduvaid manuseid pole:** Kõik failid pakendavad koos. Midagi ei unustata. Allkirjastajad ei saa allkirjastada põhilepingut nägemata lisalepinguid.

**Originaalformaadid:** Failid jäävad oma loomulikesse formaatidesse. CAD failid jäävad CAD-ks. Tabelarvutused jäävad tabelarvutusteks. PDF-i teisendamist pole vaja.

**Üks töövoog:** Üks allkirjastamise protsess mitmele failile. Vähendab koordineerimise jõupingutusi ja kiirendab keerukaid kokkuleppeid.

**Tugevam vastavus:** Kohtud ja regulaatorid näevad täielikke kokkuleppe pakette ühtlustatud allkirjadega.

## Millal mitte kasutada mitme failiga konteinereid

**Lihtsad kokkulepped:** Ühe failiga lepingud töötavad paremini PDF formaadiga. Rohkem universaalset ühilduvust.

**Vaja visuaalseid allkirju:** ASIC ei toeta allkirjakaste dokumentide sees. Kasuta PDF-i, kui visuaalsed allkirjad on nõutud.

**Saajatel puuduvad ühilduvad vaatajad:** Kui allkirjastajad ei saa ASIC vaataja tarkvara paigaldada, pakub PDF paremat kättesaadavust.

**Mitte-ELi allkirjastajad ilma QES-ita:** ASIC nõuab QES meetodeid (Smart-ID, Mobile-ID, eID kaardid). Kui allkirjastajatel pole nendele meetoditele juurdepääsu, kasuta PDF formaati.
