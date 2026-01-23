---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Täidetavad väljad on dünaamilised kohatäitjad (kasutades {{looksulgude}} süntaksit või PDF vormivälju), kus allkirjastajad sisestavad informatsiooni nagu nimed, kuupäevad või summad enne allkirjastamist.
    question: Mis on täidetavad väljad Agrello mallides?
  - answer: Jah, kõiki täidetavate väljade vastuseid saab eksportida CSV formaati lihtsa importimise jaoks CRM-i, HRIS-i või analüütika tööriistadesse, kõrvaldades käsitsi andmesisestuse.
    question: Kas saan eksportida täidetavatest väljadest kogutud andmeid?
  - answer: Agrello toetab tekstivälju, kuupäevavälju, numbrivälju, märkeruute, rippmenüüsid ja mitmerealisi tekstialasid põhjaliku andmete kogumiseks.
    question: Milliseid täidetavate väljade tüüpe toetatakse?
image: ../../../assets/Templates.webp
publish_date: '2025-01-17'
rank: 40
seo_desc: Kasuta täidetavaid välju struktureeritud andmete kogumiseks allkirjastajatelt. Ekspordi CSV-sse ja integreeri CRM, HRIS ja ärisüsteemidega.
seo_title: Täidetavate väljade juhend | Kogu andmeid e-allkirja dokumentidest
slug: taietatavate-valjadega-andmete-kogumine
sub_topic: documents
summary: Kogu struktureeritud andmeid allkirjastajatelt kasutades täidetavaid välju mallides. Õpi {{looksulgude}} süntaksit, PDF vormivälju, CSV eksporti ja integratsioonitöövoogusid CRM ja HRIS süsteemidele.
title: 'Täidetavad väljad: andmete kogumine dünaamiliste mallidega'
updated_date: '2025-01-17'
---

Täidetavad väljad muudavad sinu mallid andmete kogumise tööriistadeks. Allkirjastajad sisestav ad informatsiooni otse sinu dokumentidesse - nimed, kuupäevad, summad - ja sa ekspordid need andmed tabelarvutustesse või ärisüsteemidesse. Käsitsi ümbertippimist pole.

## Mida täidetavad väljad teevad

Traditsioonilised dokumendid paluvad allkirjastajatel trükkida, käsitsi täita, skannida ja tagastada. Seejärel keegi tippib andmed käsitsi sinu CRM-i või HRIS-i.

**Täidetavad väljad kõrvaldavad selle protsessi.** Sinu mall sisaldab kohatäitjaid. Allkirjastajad täidavad need allkirjastamise protsessi ajal. Süsteem jäädvustab need andmed. Sa laed need alla CSV-na ja impordid otse oma süsteemidesse.

See loeb suure mahuga töövoogude jaoks. HR sisseelamine kogub töötaja informatsiooni 50 uuelt töötajalt kuus. Müük jäädvustab kliendi detaile 200 NDA-st kvartalis. Ürituse korraldajad koguvad osalejate andmeid sadade vastutusest vabastamise vormidest.

## Kaks tüüpi täidetavaid välju

### {{Looksulgude}} väljad

Need töötavad nii PDF kui ASIC formaatides. Lisa `{{välja_nimi}}` kohatäitjad kuhugi oma malli.

![Mall muutujatega](../../../assets/downloaded/templates/template-with-variables.webp)

**Süntaksi reeglid:**

- Kasuta ainult tähti, numbreid ja alakriipse
- Tühikuid pole: `{{eesnimi}}` mitte `{{ees nimi}}`
- Erimärke pole: `{{toötaja_id}}` mitte `{{toötaja#id}}`
- Tõstutundlik: `{{Ettevõtte_Nimi}}` ja `{{ettevõtte_nimi}}` on erinevad väljad

**Tavalised näited:**

- `{{toötaja_nimi}}`
- `{{alguskuupäev}}`
- `{{palk}}`
- `{{ettevõtte_nimi}}`
- `{{lepingu_väärtus}}`

![Määratle malli väljad](../../../assets/downloaded/templates/define-fields.webp)

**Kuidas nad töötavad:** Kui lood dokumendi mallist {{väljadega}}, tuvastab Agrello kohatäitjad ja teisendab need täidetavateks vormiväljadeks. Allkirjastajad näevad sisestuska ste, kus kohatäitjad olid.

### PDF vormiv äljad

Need töötavad ainult PDF formaadis. Standardsed Adobe-stiilis vormiväljad märkeruutude, rippmenüüde ja tekstialadega.

![Seadista vormiväljad](../../../assets/downloaded/templates/configure-fields.webp)

**Võimalused:**

- Tekstisisestuse kastid
- Mitmerealised tekstialad
- Märkeruudud jah/ei valikute jaoks
- Rippmenüüd eelnevalt määratletud valikutega
- Kuupäeva valijad
- Numbriväljad valideerimisega

**Piirangud:** ASIC konteinerites ei toetata. Kasuta {{looksulge}} mitme faili dokumentidele.

## Mallide loomine täidetavate väljadega

**Alusta oma dokumendiga.** Loo oma leping või vorm Wordis, Google Docsis või mõnes teises tekstiredaktoris.

**Lisa välja kohatäitjad.** Asenda dünaamiline sisu `{{välja_nimi}}` süntaksiga:

```
See leping on sõlmitud {{ettevõte_1_nimi}} ja {{ettevõte_2_nimi}} vahel.
Töötaja {{toötaja_nimi}} alustaeb {{alguskuupäev}}-l palgaga {{palgasumma}}.
```

![PDF dokument muutujatega](../../../assets/downloaded/templates/pdf-document-with-variable.webp)

**Lae Agrelloe üles.** Süsteem tuvastab kõik {{väljad}} automaatselt. Näed väljad e loetelu, mida allkirjastajad täidavad.

**Seadista välja seaded.** Iga välja jaoks sea:

- Kuvamissildi (mida allkirjastajad näevad)
- Välja tüüp (tekst, kuupäev, number)
- Kohustuslik vs vabatahtlik
- Vaikeväärtused vajadusel

**Lisa allkirja väljad.** Paiguta allkirjakastid, kus pooled allkirjastavad. Seadista allkirjastamise järjekord ja meetodid.

## Allkirjastaja kogemus

Allkirjastajad saavad sinu dokumendi tühjadel väljadel esiletõstetuna. Nad täidavad informatsiooni enne allkirjastamist.

**Selged välja sildid:** Selle asemel et näha `{{toötaja_nimi}}`, näevad allkirjastajad "Töötaja täisnimi" sisestuskastiga.

**Valideerimine:** Kohustuslikud väljad tuleb täita enne allkirjastamise jätkamist. Kuupäeva väljad aktsepteerivad ainult kehtivaid kuupäevi. Numbriväljad lükkavad tekstisisestuse tagasi.

**Ülevaatus enne allkirjastamist:** Pärast kõigi väljade täitmist vaatavad allkirjastajad lõpetatud dokumendi üle. Nad näevad täpselt, mida nad allkirjastavad oma andmetega täidetutt.

## Välja andmete eksportimine CSV-sse

Siin täidetavad väljad toovad ROI. Kõik allkirjastaja vastused ekspordivad tabelarvutuse formaati.

**Ekspordi protsess:**

1. Ava oma mall Agrellos
2. Klõpsa "Laadi vormi tulemused CSV-na alla"
3. Süsteem genereerib tabelarvutuse kõigi allkirjastatud dokumentide andmetega
4. Iga rida on üks allkirjastatud dokument
5. Veerud on sinu väljade nimed

![CSV andmete struktuur](../../../assets/downloaded/templates/csv-with-contcs.webp)

**Kaasatud andmed:**

- Kõik {{välja}} väärtused, mida allkirjastajad täitsid
- Dokumendi lõpetamise kuupäev
- Allkirjastaja e-posti aadressid
- Dokumendi staatus
- Kohandatud metaandmed

**Õigused:** Ainult kasutajad toimetaja rolliga saavad CSV eksporte alla laadida. See kaitseb tundlikke andmeid.

## Integratsioonitöövood

**HR sisseelamine:** Uued töötajad täidavad isiklikku informatsiooni, hädaolukorra kontakte, maksuv orme. Ekspordi HRIS-i. Automatiseeritud andmete kogumine kiirendab oluliselt sisseelamisprotsessi ja vähendab käsitsi andmesisestuse vigu.

**Müügi torujuhe:** Potentsiaalsed kliendid allkirjastavad NDA-sid ettevõtte informatsiooniga ja projekti detailidega. Ekspordi CRM-i. Müügiesindajad näevad kõiki potentsiaalsete klientide andmeid ilma käsitsi sisestuseta.

**Ürituse haldamine:** Osalejad täidavad registreerimise vorme ja vastutusest vabastamisi. Ekspordi osalejate andmebaasi. Ürituse planeerijatel on täielikud osaleja kirjed.

**Vastavuse jälgimine:** Töötajad kinnitavad poliitikaid ja täidavad koolituse kinnitusi. Ekspordi vastavuse armatuurlauda. HR jälgib lõpetamise määra üle organisatsiooni.

**Kliendi sisseelamine:** Uued kliendid annavad konto detaile ja teenuse eelistusi. Ekspordi kliendiandmebaasi. Toe meeskonnal on täielikud kliendi profiilid.

## Parimad tavad

**Kasuta kirjeldavaid väljade nimesid:** `{{toötaja_täisnimi}}` on selgem kui `{{töö_nimi}}` CSV ekspordite ülevaatamisel.

**Standardiseeri nimetamisreeglid:** Kasuta järjepidevaid formaate üle kõigi mallide. Alati `{{ettevõtte_nimi}}`, mitte vahelduvalt `{{ettevõte}}` või `{{ettevõtte_juriidiline_nimi}}`.

**Grupeeri seotud väljad:** Paiguta seotud informatsioon oma mallis koos. Kontaktinformatsioon ühes sektsioonis, lepingu tingimused teises.

**Sea selged välja sildid:** Silt, mida allkirjastajad näevad, peaks selgitama täpselt, mida sisestada. "Töötaja alguskuupäev (PP/KK/AAAA)" takistab segadust.

**Märgi kohustuslikud väljad:** Sunni kriitilise informatsiooni lõpetamist. Lase vabalikke välju olla tõeliselt vabatahtlikud.

**Testi oma malle:** Saada testdokumendid endale. Täida väljad. Ekspordi CSV. Kinnita, et andmete struktuur vastab sinu impordi nõuetele.

**Dokumenteeri oma välja skeem:** Hoia loetelu kõigist väljade nimedest ja nende tähendustest. See aitab meeskonnaliikmetel luua järjepidevaid malle.

## Tehnilised nõuded

**Välja nimetamise reeglid:**

- Ainult tähtnumbrilised tähemärgid ja alakriipsud
- Tühikuid ega erimärke pole
- Tõstutundlik (säilita järjepideva suurtähestuse)

**Formaadi toetus:**

- {{Looksulud}}: PDF ja ASIC formaadid
- PDF vormiväljad: ainult PDF formaat

**CSV ekspordi piirangud:**

- Rea piirangut pole (toetab tuhandeid esitlusi)
- Kõik välja andmed ekspordivad, kärpimist pole
- UTF-8 kodeering toetab rahvusvahelisi tähemärke

**Andmete turvalisus:**

- CSV allalaadimised nõuavad toimetaja rolli
- Auditilogi logib kõik ekspordi tegevused
- Andmete ekspordid krüpteeritud ühenduste üle

## Millal kasutada täidetavaid välju

**Kasuta täidetavaid välju, kui:**

- Vajad struktureeritud andmeid mitmelt allkirjastajalt
- Käsitsi andmesisestus loob kitsaskohti
- Sa integreerid CRM, HRIS või analüütika süsteemidega
- Sa kogud sama informatsiooni korduvalt
- Andmete täpsus on kriitiline

**Jäta täidetavad väljad vahele, kui:**

- Allkirjastad lihtsaid ühekordseid kokkuleppeid
- Dokumentidel pole muutuvaid andmeid
- Sa ei vaja allkirjastaja vastuste eraldamist
