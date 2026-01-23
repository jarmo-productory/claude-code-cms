---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Navigē uz savu sagatavi, noklikšķini 'Lejupielādēt veidlapu rezultātus kā CSV' un saņem
      izklājlapu ar vienu rindu par parakstītu dokumentu un kolonnām katram aizpildāmam laukam.
    question: Kā eksportēt veidlapu datus no Agrello sagatavēm?
  - answer: CSV eksporti iekļauj visas aizpildāmo lauku atbildes, parakstītāja e-pastu, pabeigšanas
      datumu, dokumenta nosaukumu un visus pielāgotos laukus, ko esi definējis savā sagatavē.
    question: Kādi dati ir iekļauti CSV eksportā?
  - answer: Jā, izmanto Agrello API vai Zapier integrāciju, lai automātiski eksportētu veidlapu
      datus un importētu CRM, HRIS vai analītikas rīkos, kad dokumenti tiek parakstīti.
    question: Vai varu automatizēt CSV eksporta un importa darba plūsmas?
image: ../../../assets/docs.webp
publish_date: '2025-01-17'
rank: 40
seo_desc: Eksportē e-paraksta veidlapu atbildes uz CSV. Integrējies ar Salesforce, HubSpot,
  BambooHR un biznesa inteliģences rīkiem.
seo_title: Eksportē sagataves veidlapu datus uz CSV | CRM un HRIS integrācija
slug: malli-formas-datu-eksports-csv
sub_topic: templates
summary: Eksportē aizpildāmo lauku atbildes no sagatavēm CSV formātā bezvainīgai
  integrācijai ar CRM, HRIS un analītikas platformām. Izslēdz manuālu datu ievadi
  un automatizē turpmākās darba plūsmas.
title: 'CSV eksports: sagataves veidlapu datu integrēšana ar biznesa sistēmām'
updated_date: '2025-01-17'
---

Datu vākšana caur e-paraksta dokumentiem ir puse vērtības. Īstā efektivitāte nāk no tā, ka šie dati automātiski nonāk tavās biznesa sistēmās. CSV eksports to padara iespējamu.

## Kāpēc CSV eksports ir svarīgs

Tradicionālās dokumentu darba plūsmas zaudē datus. Kāds paraksta darba līgumu. Personāls manuāli ieraksta viņu vārdu, sākuma datumu, algu un nodaļu HRIS. **50 jaunie darbinieki nozīmē 50 manuālas ievades** ar drukas kļūdām garantētām.

**CSV eksports izslēdz pārrakstīšanu.** Tava sagatave vāc datus caur aizpildāmiem laukiem. Tu lejupielādē atbildes kā izklājlapu. Tu importē šo izklājlapu savā CRM, HRIS vai analītikas platformā. Nulle manuālās ievades.

## Kā darbojas CSV eksports

**Izveido sagataves ar aizpildāmiem laukiem.** Izmanto {{curly_brackets}} sintaksi savās sagatavēs:

- `{{employee_name}}`
- `{{start_date}}`
- `{{department}}`
- `{{salary}}`
- `{{emergency_contact}}`

![Sagatave ar mainīgajiem](../../../assets/downloaded/templates/template-with-variables.webp)

**Parakstītāji aizpilda informāciju.** Kad kāds paraksta tavu dokumentu, viņi ievada datus šajos laukos pirms parakstīšanas.

**Sistēma fiksē atbildes.** Katra {{field}} vērtība tiek glabāta tavā Agrello darba telpā ar parakstīto dokumentu.

**Eksportē uz CSV.** Navigē uz savu sagatavi. Noklikšķini "Lejupielādēt veidlapu rezultātus kā CSV." Saņem izklājlapu failu.

**Importē biznesa sistēmās.** Augšupielādē CSV uz Salesforce, HubSpot, BambooHR, Excel vai jebkuru sistēmu, kas pieņem CSV importus.

## Veidlapu datu eksportēšana

**Piekļūsti savai sagatavei.** Atrodi sagatavi savā Agrello darba telpā, kas vākusi datus, kuri tev nepieciešami.

**Lejupielādē CSV.** Noklikšķini "Lejupielādēt veidlapu rezultātus kā CSV" vai līdzīgu eksporta opciju.

**Saņem failu.** Tava pārlūkprogramma lejupielādē .csv failu ar visām veidlapu atbildēm.

**Atļaujas prasība:** Tikai lietotāji ar redaktora lomu var lejupielādēt CSV eksportus. Tas aizsargā sensitīvus datus no neatļautas piekļuves.

## CSV faila struktūra

CSV satur vienu rindu par parakstītu dokumentu un vienu kolonnu par aizpildāmu lauku.

![CSV datu struktūra](../../../assets/downloaded/templates/csv-with-contcs.webp)

**Kolonnu galvenes** atbilst taviem {{field_names}}:

```
employee_name, start_date, department, salary, emergency_contact, signer_email, completion_date
```

**Datu rindas** rāda atbildes:

```
John Smith, 2025-02-01, Engineering, 95000, jane.smith@example.com, john@company.com, 2025-01-17
Sarah Jones, 2025-02-15, Marketing, 85000, mike.jones@example.com, sarah@company.com, 2025-01-18
```

**Automātiskie lauki iekļauti:**

- Parakstītāja e-pasta adrese
- Dokumenta pabeigšanas datums
- Dokumenta nosaukums
- Iesniegšanas laika zīmogs

**Tikai parakstītie dokumenti tiek eksportēti.** Dokumenti melnraksta vai parakstīšanas stāvokļos neparādās CSV - tikai pilnīgi pabeigtās vienošanās.

## Pilnīgs piemērs: Personāla jaunpienācēju HRIS integrācija

Šis piemērs demonstrē pilnu CSV eksporta darba plūsmu no sagataves izveides līdz HRIS integrācijai.

**Sagataves iestatīšana**

Izveido darba līguma sagatavi ar šiem aizpildāmiem laukiem:

- `{{employee_name}}` - Pilns vārds
- `{{start_date}}` - Darba sākuma datums
- `{{position}}` - Amata nosaukums
- `{{department}}` - Nodaļa
- `{{salary}}` - Gada kompensācija
- `{{manager}}` - Ziņo
- `{{emergency_contact}}` - Ārkārtas kontaktinformācija

**Manuālā darba plūsma (vecais veids):**

1. Nosūti darba līgumu
2. Darbinieks paraksta
3. Personāls lejupielādē parakstītu dokumentu
4. Personāls atver HRIS sistēmu
5. Personāls manuāli ieraksta visus darbinieku datus sistēmā
6. Personāls izveido e-pasta konta pieteikumu
7. Personāls izveido iekārtu pasūtījumu

**Automatizētā darba plūsma (ar CSV eksportu):**

1. Darbinieks paraksta līgumu un aizpilda visus sagataves laukus
2. Eksportē CSV no Agrello (noklikšķini "Lejupielādēt veidlapu rezultātus kā CSV")
3. Importē CSV uz HRIS (BambooHR, Workday, ADP)
4. Kartē CSV kolonnas uz HRIS laukiem importa laikā
5. HRIS automātiski izveido darbinieka ierakstu
6. HRIS aktivizē e-pasta konta izveidi caur integrāciju
7. HRIS aktivizē iekārtu pasūtījumu caur darba plūsmu

**CSV kartēšana HRIS importam:**

- `employee_name` → Pilna vārda lauks
- `start_date` → Sākuma datuma lauks
- `position` → Amata nosaukuma lauks
- `department` → Nodaļas lauks
- `salary` → Kompensācijas lauks
- `manager` → Ziņo lauks
- `emergency_contact` → Ārkārtas kontakta lauks

**Ietaupītais laiks:** 40 minūtes par darbinieku. Ar 50 jauniem darbiniekiem tas ir 33 stundas manuālas datu ievades izslēgtas - plus nulle drukas kļūdas.

![Excel un Word darba plūsma](../../../assets/downloaded/getting-started/create-contracts-easily-using-word-templates-and-excel-data.webp)

**Šī pati darba plūsma attiecas uz citām biznesa sistēmām:** CRM platformas (Salesforce, HubSpot) potenciālo klientu fiksēšanai, analītikas rīki (Excel, Tableau) ziņošanai vai jebkura sistēma, kas pieņem CSV importus.

## Uzlabota integrācija: API un Zapier

**API integrācija:** Izstrādātāji var izmantot Agrello API, lai automātiski eksportētu CSV datus, kad dokumenti sasniedz "Parakstīts" statusu. Tas ļauj reāllaika datu plūsmu biznesa sistēmās.

**Zapier darba plūsmas:**

1. Aktivizētājs: Jauns parakstīts dokuments Agrello
2. Darbība: Eksportē veidlapu datus
3. Darbība: Izveido/atjauno CRM ierakstu
4. Darbība: Nosūti Slack paziņojumu komandai

**Bez koda automatizācija** padara integrāciju pieejamu ne-tehniskām komandām.

## Labākās prakses

**Standartizē lauku nosaukumus.** Izmanto konsekvēntus {{field}} nosaukumus visās sagatavēs. `{{company_name}}` visur, nevis dažreiz `{{company}}` vai `{{company_legal_name}}`.

**Dokumentē savu shēmu.** Uzturi izklājlapu, kas uzskaita visus lauku nosaukumus un to nozīmes. Tas palīdz komandas biedriem izveidot saderīgas sagataves.

**Testē importus pirms palaišanas.** Izveido testa dokumentus ar parauga datiem. Eksportē CSV. Importē uz savu mērķa sistēmu. Verificē, ka visi lauki kartē pareizi.

**Plāno regulārus eksportus.** Negaidi līdz gada beigām, lai eksportētu datus. Iknedēļas vai ikmēneša eksporti novērš atpalikumu un nodrošina savlaicīgu datu pieejamību.

**Attīri savus datus.** Pārskatiet CSV eksportus pirms importēšanas, lai fiksētu drukas kļūdas, formatēšanas problēmas vai nepilnīgas atbildes.

**Validē pēc importa.** Pēc importēšanas uz CRM/HRIS punktveida pārbaudiet ierakstus, lai nodrošinātu, ka dati pareizi pārsūtīti.

**Arhivē CSV eksportus.** Glabā CSV eksportu kopijas revīzijas pierakstiem un rezerves kopiju nolūkiem.

## Bieži sastopamās problēmas

**Trūkstoši dati CSV:** Lauks bija izvēles un parakstītājs to atstāja tukšu. CSV rāda tukšu šūnu. Tavam importa procesam vajadzētu apstrādāt tukšas vērtības graciozi.

**Datuma formāta neatbilstības:** Parakstītāji ievada datumus dažādos formātos (MM/DD/YYYY vs. DD/MM/YYYY). Standartizē datuma ievadi ar skaidrām lauku etiķetēm vai izmanto datuma izvēles laukus.

**Speciālās rakstzīmes pārtrauc importu:** Komati teksta laukos var pārraut CSV struktūru. Pārliecinies, ka tavs eksports izmanto pareizu CSV citēšanu. Agrello to apstrādā automātiski.

**Dublēti importi:** To paša CSV importēšana divreiz izveido dublētus ierakstus. Izmanto unikālus identifikatorus (e-pasta adreses), lai atklātu un sapludinātu dublētus.

## Kad izmantot CSV eksportu

**Liela apjoma standartizētas darba plūsmas:** Jaunpienācēju iekļaušana, potenciālo klientu fiksēšana, pasākumu reģistrācija - jebkurš scenārijs ar atkārtotu datu vākšanu.

**Regulāras ziņošanas vajadzības:** Iknedēļas metrikas, ikmēneša atbilstības izsekošana, ceturkšņa analīze.

**Starpplatformu datu plūsma:** Datu pārvietošana no līgumiem uz CRM, HRIS, grāmatvedību vai analītikas rīkiem.

**Revīzijas prasības:** Ierakstu uzturēšana par to, kas parakstīja ko un kad, eksportējams atbilstības pārskatam.
