---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Mine oma malli, klõpsa 'Laadi vormi tulemused CSV-na alla' ja saad tabelifaili, kus iga rida on allkirjastatud dokument ja iga veerg täidetav väli.
    question: Kuidas eksportida vormiandmeid Agrello mallidest?
  - answer: CSV eksport sisaldab kõiki täidetavate väljade vastuseid, allkirjastaja e-posti, lõpetamise kuupäeva, dokumendi nime ja kõiki kohandatud välju, mis oled määratlenud omas mallis.
    question: Milliseid andmeid CSV eksport sisaldab?
  - answer: Jah, kasuta Agrello API-d või Zapier integratsiooni, et automaatselt eksportida vormiandmeid ja importida CRM-i, HRIS-i või analüütika tööriistadesse iga kord, kui dokumendid on allkirjastatud.
    question: Kas saan automatiseerida CSV ekspordi ja impordi töövoogusid?
image: ../../../assets/docs.webp
publish_date: '2025-01-17'
rank: 40
seo_desc: Ekspordi e-allkirja vormi vastused CSV-sse. Integreeri Salesforce, HubSpot, BambooHR ja ärianalüütika tööriistadega.
seo_title: Ekspordi malli vormiandmed CSV-sse | CRM ja HRIS integratsioon
slug: malli-vormiandmete-eksport-csv
sub_topic: templates
summary: Ekspordi täidetavate väljade vastused mallidest CSV formaati sujuvaks integratsiooniks CRM, HRIS ja analüütika platvormidega. Kõrvalda käsitsi andmesisestus ja automatiseeri järgnevad töövood.
title: 'CSV eksport: malli vormiandmete integreerimine ärisüsteemidega'
updated_date: '2025-01-17'
---

Andmete kogumine e-allkirja dokumentide kaudu on pool väärtusest. Tegelik efektiivsus tuleb sellest, et need andmed jõuavad automaatselt sinu ärisüsteemidesse. CSV eksport teeb selle võimalikuks.

## Miks CSV eksport on oluline

Traditsioonilised dokumendi töövood kaotavad andmeid. Keegi allkirjastab töölepingu. HR kirjutab käsitsi nende nime, alguskuupäeva, palga ja osakonna HRIS-i. **50 uut töötajat tähendab 50 käsitsi sisestust** trükivigu garanteeritud.

**CSV eksport kõrvaldab ümbertippimise.** Sinu mall kogub andmeid täidetavate väljade kaudu. Laad vastused alla tabelina. Impordid selle tabeli oma CRM-i, HRIS-i või analüütika platvormi. Null käsitsi sisestust.

## Kuidas CSV eksport töötab

**Loo mallid täidetavate väljadega.** Kasuta {{looksulge}} süntaksit oma mallides:

- `{{töötaja_nimi}}`
- `{{alguskuupäev}}`
- `{{osakond}}`
- `{{palk}}`
- `{{hädaolukorra_kontakt}}`

![Mall muutujatega](../../../assets/downloaded/templates/template-with-variables.webp)

**Allkirjastajad täidavad infot.** Kui keegi allkirjastab sinu dokumendi, sisestavad nad andmeid nendesse väljadesse enne allkirjastamist.

**Süsteem jäädvustab vastused.** Iga {{välja}} väärtus salvestatakse sinu Agrello tööruumis koos allkirjastatud dokumendiga.

**Ekspordi CSV-sse.** Mine oma malli juurde. Klõpsa "Laadi vormi tulemused CSV-na alla." Saad tabelifaili.

**Impordi ärisüsteemidesse.** Lae CSV üles Salesforce'i, HubSpoti, BambooHR-i, Excelisse või mis tahes süsteemi, mis aktsepteerib CSV importe.

## Vormiandmete eksportimine

**Pääse ligi oma mallile.** Leia mall oma Agrello tööruumis, mis kogus andmed, mida vajad.

**Laadi CSV alla.** Klõpsa "Laadi vormi tulemused CSV-na alla" või sarnane ekspordi valik.

**Saad faili.** Sinu brauser laadib alla .csv faili kõigi vormi vastustega.

**Õiguse nõue:** Ainult kasutajad Toimetaja rolliga saavad CSV eksporte alla laadida. See kaitseb tundlikke andmeid volitamata juurdepääsu eest.

## CSV faili struktuur

CSV sisaldab ühte rida allkirjastatud dokumendi kohta ja ühte veergu täidetava välja kohta.

![CSV andmete struktuur](../../../assets/downloaded/templates/csv-with-contcs.webp)

**Veeru päised** vastavad sinu {{välja_nimedele}}:

```
töötaja_nimi, alguskuupäev, osakond, palk, hädaolukorra_kontakt, allkirjastaja_email, lõpetamise_kuupäev
```

**Andmeread** näitavad vastuseid:

```
Jaan Tamm, 2025-02-01, Inseneeria, 95000, mari.tamm@example.com, jaan@ettevõte.ee, 2025-01-17
Kadi Kask, 2025-02-15, Turundus, 85000, toomas.kask@example.com, kadi@ettevõte.ee, 2025-01-18
```

**Automaatsed väljad kaasatud:**

- Allkirjastaja e-posti aadress
- Dokumendi lõpetamise kuupäev
- Dokumendi nimi
- Esitamise ajatempel

**Ainult allkirjastatud dokumendid eksportitakse.** Dokumendid, mis on Mustandi või Allkirjastamisel staatuses, ei ilmu CSV-s - ainult täielikult lõpetatud kokkulepped.

## Täielik näide: HR onboarding integratsioon

See näide demonstreerib täielikku CSV ekspordi töövoogu malli loomisest kuni HRIS integratsioonini.

**Malli seadistus**

Loo töölepingu mall järgmiste täidetavate väljadega:

- `{{töötaja_nimi}}` - Täisnimi
- `{{alguskuupäev}}` - Töö alguskuupäev
- `{{amet}}` - Ametikoht
- `{{osakond}}` - Osakond
- `{{palk}}` - Aastapalk
- `{{juht}}` - Aruandlus
- `{{hädaolukorra_kontakt}}` - Hädaolukorra kontaktinfo

**Käsitsi töövoog (vana viis):**

1. Saada tööleping
2. Töötaja allkirjastab
3. HR laadib allkirjastatud dokumendi alla
4. HR avab HRIS süsteemi
5. HR tippib käsitsi kõik töötaja andmed süsteemi
6. HR loob e-posti konto päringu
7. HR loob seadmete tellimuse

**Automatiseeritud töövoog (CSV ekspordiga):**

1. Töötaja allkirjastab lepingu ja täidab kõik malli väljad
2. Ekspordi CSV Agrellost (klõpsa "Laadi vormi tulemused CSV-na alla")
3. Impordi CSV HRIS-i (BambooHR, Workday, ADP)
4. Vastenda CSV veerud HRIS väljadega importimise ajal
5. HRIS loob automaatselt töötaja kirje
6. HRIS käivitab e-posti konto loomise integratsiooni kaudu
7. HRIS käivitab seadmete tellimuse töövoo kaudu

**CSV vastendamine HRIS impordiks:**

- `töötaja_nimi` → Täisnimi väli
- `alguskuupäev` → Alguskuupäev väli
- `amet` → Ametikoht väli
- `osakond` → Osakond väli
- `palk` → Hüvitis väli
- `juht` → Aruandlus väli
- `hädaolukorra_kontakt` → Hädaolukorra kontakt väli

**Säästetud aeg:** 40 minutit töötaja kohta. 50 uue tööjõuga on see 33 tundi käsitsi andmesisestust kõrvaldatud - pluss null trükivigu.

![Exceli ja Wordi töövoog](../../../assets/downloaded/getting-started/create-contracts-easily-using-word-templates-and-excel-data.webp)

**See sama töövoog kehtib teistele ärisüsteemidele:** CRM platvormid (Salesforce, HubSpot) potentsiaalsete klientide jäädvustamiseks, analüütika tööriistad (Excel, Tableau) aruandluseks või ükskõik milline süsteem, mis aktsepteerib CSV importe.

## Täpsem integratsioon: API ja Zapier

**API integratsioon:** Arendajad saavad kasutada Agrello API-d, et automaatselt eksportida CSV andmeid, kui dokumendid jõuavad "Allkirjastatud" staatusesse. See võimaldab reaalajas andmevoogu ärisüsteemidesse.

**Zapieri töövood:**

1. Päästik: Uus allkirjastatud dokument Agrellos
2. Tegevus: Ekspordi vormiandmed
3. Tegevus: Loo/uuenda CRM kirjet
4. Tegevus: Saada Slacki teade meeskonnale

**Koodita automatiseerimine** teeb integratsiooni kättesaadavaks mitte-tehnilistele meeskondadele.

## Parimad tavad

**Standardiseeri väljanimesid.** Kasuta järjepidevat {{välja}} nimetamist kõigis mallides. `{{ettevõtte_nimi}}` igal pool, mitte mõnikord `{{ettevõte}}` või `{{ettevõtte_juriidiline_nimi}}`.

**Dokumenteeri oma skeemi.** Hoia tabelit, mis loetleb kõik väljanimesid ja nende tähendusi. See aitab meeskonnaliikmetel luua ühilduvaid malle.

**Testi importe enne käivitamist.** Loo testdokumendid näidisandmetega. Ekspordi CSV. Impordi oma sihtsüsteemi. Kinnita, et kõik väljad vastavad õigesti.

**Ajasta regulaarsed ekspordid.** Ära oota aasta lõpuni andmete eksportimiseks. Iganädalased või igakuised ekspordid takistavad mahajäämust ja tagavad õigeaegse andmete kättesaadavuse.

**Puhasta oma andmed.** Vaata CSV ekspordid üle enne importimist, et tabada trükivigu, vorminduse probleeme või puudulikke vastuseid.

**Valideeri pärast importi.** Pärast CRM/HRIS-i importimist kontrolli kirjeid punktikontrolli, et tagada andmete õige ülekandumine.

**Arhiveeri CSV ekspordid.** Hoia koopiaid eksporditud CSV-dest auditilogi ja varukoopiate eesmärkidel.

## Tavalised probleemid

**Puuduvad andmed CSV-s:** Väli oli vabatahtlik ja allkirjastaja jättis tühjaks. CSV näitab tühja lahtrit. Sinu impordi protsess peaks käsitsema tühje väärtusi graatsiliselt.

**Kuupäeva formaadi sobitamatus:** Allkirjastajad sisestavad kuupäevi erinevates formaatides (PP/KK/AAAA vs KK/PP/AAAA). Standardiseeri kuupäeva sisestust selgete välja siltidega või kasuta kuupäeva valija välju.

**Erimärgid rikuvad importi:** Komad tekstiväljade sisaldavad võivad rikkuda CSV struktuuri. Veendu, et su eksport kasutab õiget CSV tsiteerimist. Agrello käsitseb seda automaatselt.

**Duplikaatimised:** Sama CSV kahekordne importimine loob duplikaatkirjed. Kasuta unikaalseid identifikaatoreid (e-posti aadressid), et avastada ja liita duplikaadid.

## Millal kasutada CSV eksporti

**Suur maht standardiseeritud töövoogudeks:** Onboarding, potentsiaalsete klientide jäädvustamine, sündmuste registreerimine - iga stsenaarium korduvate andmete kogumisega.

**Regulaarsed aruandlusvajadused:** Iganädalased mõõdikud, igakuine vastavuse jälgimine, kvartaalne analüüs.

**Platvormi-ülene andmevoog:** Andmete liigutamine lepingutest CRM-i, HRIS-i, raamatupidamisse või analüütika tööriistadesse.

**Auditi nõuded:** Kirjete hoidmine, kes allkirjastas mida ja millal, eksporditav vastavuse ülevaatuseks.
