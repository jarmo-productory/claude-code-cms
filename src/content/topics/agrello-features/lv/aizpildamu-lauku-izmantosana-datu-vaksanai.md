---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Aizpildāmi lauki ir dinamiski vietturi (izmantojot {{curly_brackets}} sintaksi
      vai PDF veidlapu laukus), kur parakstītāji ievada informāciju, piemēram, vārdus, datumus vai summas
      pirms parakstīšanas.
    question: Kas ir aizpildāmi lauki Agrello sagatavēs?
  - answer: Jā, visas aizpildāmo lauku atbildes var eksportēt CSV formātā vieglai
      importēšanai CRM, HRIS vai analītikas rīkos, izslēdzot manuālu datu ievadi.
    question: Vai varu eksportēt datus, kas savākti no aizpildāmiem laukiem?
  - answer:
      Agrello atbalsta teksta laukus, datumu laukus, skaitļu laukus, atzīmējamās rūtiņas, nolaižamās izvēlnes
      un vairāku rindu teksta laukus visaptverošai datu vākšanai.
    question: Kāda veida aizpildāmi lauki tiek atbalstīti?
image: ../../../assets/Templates.webp
publish_date: '2025-01-17'
rank: 40
seo_desc:
  Izmanto aizpildāmus laukus, lai vāktu strukturētus datus no parakstītājiem. Eksportē uz CSV
  un integrē ar CRM, HRIS un biznesa sistēmām.
seo_title: Aizpildāmo lauku ceļvedis | Vāc datus no e-paraksta dokumentiem
slug: aizpildamu-lauku-izmantosana-datu-vaksanai
sub_topic: documents
summary: Vāc strukturētus datus no parakstītājiem, izmantojot aizpildāmus laukus sagatavēs.
  Uzzini {{curly_brackets}} sintaksi, PDF veidlapu laukus, CSV eksportu un integrācijas darba plūsmas
  CRM un HRIS sistēmām.
title: 'Aizpildāmi lauki: datu vākšana ar dinamiskiem sagatavēm'
updated_date: '2025-01-17'
---

Aizpildāmi lauki pārvērš tavas sagataves par datu vākšanas rīkiem. Parakstītāji ievada informāciju tieši tavos dokumentos - vārdus, datumus, summas - un tu eksportē šos datus uz izklājlapām vai biznesa sistēmām. Nav nepieciešama manuāla pārrakstīšana.

## Ko dara aizpildāmi lauki

Tradicionālie dokumenti lūdz parakstītājus izdrukāt, aizpildīt ar roku, skenēt un atgriezt. Pēc tam kāds manuāli ieraksta datus tavā CRM vai HRIS.

**Aizpildāmi lauki izslēdz šo procesu.** Tava sagatave ietver vietturus. Parakstītāji tos aizpilda parakstīšanas procesa laikā. Sistēma fiksē šos datus. Tu tos lejupielādē kā CSV un importē tieši savās sistēmās.

Tas ir svarīgi liela apjoma darba plūsmām. Personāla vadības jaunpienācēju iekļaušana vāc darbinieku informāciju no 50 jauniem darbiniekiem mēnesī. Pārdošana fiksē klientu detaļas no 200 konfidencialitātes līgumiem ceturksnī. Pasākumu organizatori vāc dalībnieku datus no simtiem atteikumu.

## Divi aizpildāmo lauku veidi

### {{Curly Brackets}} lauki

Tie darbojas gan PDF, gan ASIC formātos. Pievieno `{{field_name}}` vietturus jebkurā vietā savā sagatavē.

![Sagatave ar mainīgajiem](../../../assets/downloaded/templates/template-with-variables.webp)

**Sintakses noteikumi:**

- Izmanto tikai burtus, ciparus un pasvītrojumus
- Nav atstarpes: `{{first_name}}` nevis `{{first name}}`
- Nav speciālo rakstzīmju: `{{employee_id}}` nevis `{{employee#id}}`
- Reģistrjutīgs: `{{Company_Name}}` un `{{company_name}}` ir dažādi lauki

**Bieži sastopamie piemēri:**

- `{{employee_name}}`
- `{{start_date}}`
- `{{salary}}`
- `{{company_name}}`
- `{{contract_value}}`

![Definē sagataves laukus](../../../assets/downloaded/templates/define-fields.webp)

**Kā tie darbojas:** Kad tu izveido dokumentu no sagataves ar {{fields}}, Agrello atklāj vietturus un pārvērš tos aizpildāmos veidlapu laukos. Parakstītāji redz ievades laukus tur, kur bija vietturi.

### PDF veidlapu lauki

Tie darbojas tikai PDF formātā. Standarta Adobe stila veidlapu lauki ar atzīmējamām rūtiņām, nolaižamām izvēlnēm un teksta laukiem.

![Konfigurē veidlapu laukus](../../../assets/downloaded/templates/configure-fields.webp)

**Iespējas:**

- Teksta ievades lauki
- Vairāku rindu teksta lauki
- Atzīmējamās rūtiņas jā/nē opcijām
- Nolaižamās izvēlnes ar iepriekš definētām izvēlēm
- Datuma izvēlētāji
- Skaitļu lauki ar validāciju

**Ierobežojumi:** Nav atbalstīti ASIC konteineros. Izmanto {{curly_brackets}} vairāku failu dokumentiem.

## Sagatavju izveide ar aizpildāmiem laukiem

**Sāc ar savu dokumentu.** Izveido savu līgumu vai veidlapu Word, Google Docs vai jebkurā teksta redaktorā.

**Pievieno lauku vietturus.** Aizstāj dinamisko saturu ar `{{field_name}}` sintaksi:

```
Šis līgums ir starp {{company_1_name}} un {{company_2_name}}.
Darbinieks {{employee_name}} sāks {{start_date}} ar algu {{salary_amount}}.
```

![PDF dokuments ar mainīgajiem](../../../assets/downloaded/templates/pdf-document-with-variable.webp)

**Augšupielādē uz Agrello.** Sistēma automātiski atklāj visus {{fields}}. Tu redzi lauku sarakstu, ko parakstītāji aizpildīs.

**Konfigurē lauku iestatījumus.** Katram laukam iestati:

- Displeja etiķeti (ko parakstītāji redz)
- Lauka tipu (teksts, datums, skaitlis)
- Obligāts vai izvēles
- Noklusējuma vērtības, ja nepieciešams

**Pievieno paraksta laukus.** Pozicionē paraksta kastītes tur, kur puses paraksta. Konfigurē parakstīšanas secību un metodes.

## Parakstītāja pieredze

Parakstītāji saņem tavu dokumentu ar tukšiem laukiem izceltiem. Viņi aizpilda informāciju pirms parakstīšanas.

**Skaidras lauku etiķetes:** Nevis redzot `{{employee_name}}`, parakstītāji redz "Darbinieka pilns vārds" ar ievades lauku.

**Validācija:** Obligātie lauki jāaizpilda pirms parakstīšanas turpinās. Datuma lauki pieņem tikai derīgus datumus. Skaitļu lauki noraida teksta ievadi.

**Pārskati pirms parakstīšanas:** Pēc visu lauku aizpildīšanas, parakstītāji pārskata pabeigto dokumentu. Viņi redz precīzi, ko paraksta ar viņu datiem aizpildītiem.

## Lauku datu eksportēšana uz CSV

Šeit aizpildāmi lauki sniedz atdevi investīcijām. Visas parakstītāju atbildes tiek eksportētas izklājlapu formātā.

**Eksporta process:**

1. Atver savu sagatavi Agrello
2. Noklikšķini "Lejupielādēt veidlapu rezultātus kā CSV"
3. Sistēma ģenerē izklājlapu ar visiem parakstīto dokumentu datiem
4. Katra rinda ir viens parakstīts dokuments
5. Kolonnas ir tavu lauku nosaukumi

![CSV datu struktūra](../../../assets/downloaded/templates/csv-with-contcs.webp)

**Iekļautie dati:**

- Visas {{field}} vērtības, ko parakstītāji aizpildījuši
- Dokumenta pabeigšanas datums
- Parakstītāju e-pasta adreses
- Dokumenta statuss
- Pielāgotie metadati

**Atļaujas:** Tikai lietotāji ar Redaktora lomu var lejupielādēt CSV eksportus. Tas aizsargā sensitīvus datus.

## Integrācijas darba plūsmas

**Personāla jaunpienācēju iekļaušana:** Jaunie darbinieki aizpilda personīgo informāciju, ārkārtas kontaktus, nodokļu veidlapas. Eksportē uz HRIS. Automatizēta datu vākšana ievērojami paātrina jaunpienācēju iekļaušanas procesu un samazina manuālas datu ievades kļūdas.

**Pārdošanas konveijers:** Perspektīvie klienti paraksta konfidencialitātes līgumus ar uzņēmuma informāciju un projekta detaļām. Eksportē uz CRM. Pārdošanas pārstāvji redz visus potenciālo klientu datus bez manuālas ievades.

**Pasākumu pārvaldība:** Dalībnieki aizpilda reģistrācijas veidlapas un atteikumus. Eksportē uz dalībnieku datubāzi. Pasākumu plānotāji ir pilnīgi dalībnieku ieraksti.

**Atbilstības izsekošana:** Darbinieki apstiprina politikas un aizpilda apmācību apstiprinājumus. Eksportē uz atbilstības paneli. Personāla vadība izseko pabeigšanas rādītājus visā organizācijā.

**Klientu jaunpienācēju iekļaušana:** Jaunie klienti sniedz konta detaļas un pakalpojumu preferences. Eksportē uz klientu datubāzi. Atbalsta komandas ir pilnīgi klientu profili.

## Labākās prakses

**Izmanto aprakstošus lauku nosaukumus:** `{{employee_full_name}}` ir skaidrāks nekā `{{emp_name}}`, pārskatot CSV eksportus.

**Standartizē nosaukumu konvencijas:** Izmanto konsekvētus formātus visās sagatavēs. Vienmēr `{{company_name}}`, nekad mainot starp `{{company}}` vai `{{company_legal_name}}`.

**Grupē saistītos laukus:** Ievieto saistīto informāciju kopā savā sagatavē. Kontaktinformācija vienā sadaļā, līguma noteikumi citā.

**Iestati skaidras lauku etiķetes:** Etiķete, ko parakstītāji redz, skaidri jāizskaidro, ko ievadīt. "Darbinieka sākuma datums (DD/MM/YYYY)" novērš neskaidrības.

**Atzīmē obligātos laukus:** Piespied pabeigt kritisko informāciju. Ļauj izvēles laukiem būt patiešām izvēles.

**Testē savas sagataves:** Nosūti testa dokumentus sev. Aizpildi laukus. Eksportē CSV. Verificē, ka datu struktūra atbilst tavām importēšanas prasībām.

**Dokumentē savu lauku shēmu:** Uzturi sarakstu ar visiem lauku nosaukumiem un to nozīmēm. Tas palīdz komandas locekļiem izveidot konsekvētas sagataves.

## Tehniskās prasības

**Lauku nosaukumu noteikumi:**

- Tikai alfanumeriskie rakstzīmes un pasvītrojumi
- Nav atstarpes vai speciālo rakstzīmju
- Reģistrjutīgs (uzturi konsekventu lielo/mazo burtu lietojumu)

**Formāta atbalsts:**

- {{Curly brackets}}: PDF un ASIC formāti
- PDF veidlapu lauki: Tikai PDF formāts

**CSV eksporta ierobežojumi:**

- Nav rindu ierobežojuma (atbalsta tūkstošiem iesniegumu)
- Visi lauku dati tiek eksportēti, nav saīsinājuma
- UTF-8 kodējums atbalsta starptautiskās rakstzīmes

**Datu drošība:**

- CSV lejupielādes prasa Redaktora lomu
- Revīzijas pieraksts reģistrē visas eksporta darbības
- Datu eksportēšana pa šifrētiem savienojumiem

## Kad izmantot aizpildāmus laukus

**Izmanto aizpildāmus laukus, kad:**

- Tev nepieciešami strukturēti dati no vairākiem parakstītājiem
- Manuālā datu ievade rada šķēršļus
- Tu integrējies ar CRM, HRIS vai analītikas sistēmām
- Tu vāc vienu un to pašu informāciju atkārtoti
- Datu precizitāte ir kritiska

**Izlaid aizpildāmus laukus, kad:**

- Tu paraksti vienkāršus vienreizējus līgumus
- Dokumentiem nav mainīgu datu
- Tev nav nepieciešams iegūt parakstītāju atbildes
