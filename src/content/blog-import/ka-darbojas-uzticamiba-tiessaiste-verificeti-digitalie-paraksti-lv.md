---
title: 'Kā darbojas uzticamība tiešsaistē - verificēti digitālie paraksti'
slug: 'ka-darbojas-uzticamiba-tiessaiste-verificeti-digitalie-paraksti'
metaTitle: 'Kā darbojas uzticamība tiešsaistē ar verificētiem digitālajiem parakstiem'
description: 'Uzziniet, kā darbojas uzticamība tiešsaistē ar verificētiem digitālajiem parakstiem. Atklājiet, kā digitālie paraksti pievieno drošību un palielina uzticību tiešsaistes darījumiem.'
keyword: 'uzticamība, tiešsaiste, digitāls, paraksti, verifikācija'
image: './images/672347fc67117ad6823e3b1d_610c36acf526d07661274aad_agrello_trusted_e_signatures_for_small_businesses_34.jpeg'
thumbnail: './images/672347fc67117ad6823e3b0f_610c36ade45a1682aa9e04cf_agrello_trusted_e_signatures_for_small_businesses_34_thumbnail.jpeg'
lang: 'lv'
date: '2021-02-25'
excerpt: 'Iepriekšējais raksts izskaidroja juridiski derīgas un pierādāmas piekrišanas mehānismus elektroniskā veidā. Tomēr iepriekšējā rakstā izskaidrotās metodes prasa rūpību no pusēm, lai nodrošinātu, ka piekrišana ir juridiski pamatota un reprezentējama. Šis raksts izskaidro tehnoloģiskās metodes, kas pēc noklusējuma nodrošina uzticamību. Man uzreiz jāpiemin, ka šis raksts nav paredzēts kā dziļi tehnoloģisks, tāpēc dažu terminu lietojums zinātniskā kontekstā var būt apstrīdams.'
readingTime: '8'
author: 'hando-rand'
supportOnly: false
featured: false
categories:
  - e-paraksts
---

## Asimetriskā kriptogrāfija digitālajai parakstīšanai

Uzticama piekrišanas svarīgākie elementi ir pierādāms apliecinājums par to, kas tika parakstīts un kurš bija parakstīšanas darbības autors. Pastāv sistēmas, kas ir veidotas, lai sniegtu nešaubīgu informāciju tieši par to. Mērķis ir tāds, ka gadījumā, ja paraksts tiek apstrīdēts tiesā, vienai pusei vairs nav jāsniedz papildu pierādījumi par piekrišanu, bet pretējai pusei ir jāpierāda, ka viņa nav devusi piekrišanu apstrīdētajai vienošanai.

Šīs sistēmas ir iespējamas, pateicoties ļoti gudrai matemātikai. Joma, kas izmanto to kiberdrošībā un kiberuzticamībā, tiek saukta par kriptogrāfiju. Lai radītu uzticamību tiešsaistē, dominējošā kriptogrāfijas metode ir asimetriskā kriptogrāfija jeb publiskās atslēgas kriptogrāfija. Šīs metodes ieviešanā var izmantot ļoti atšķirīgu matemātiku (piemēram, RSA, ECDSA), bet asimetriskā kriptogrāfija ir padarījusi iespējamu digitālo parakstīšanu un drošu interneta lietošanu.

Kas ir asimetriskā kriptogrāfija? Lai gan šīs tēmas detaļas prasa plašāku skaidrojumu nekā tikai emuāra ieraksts, ideja ir vienkārša. Domāju, ka būtu interesantāk to izskaidrot ārpus IKT konteksta.

Iedomājieties, ka jums ir dārgumu lāde. Jums ir divas atslēgas šai lādei, bet tiklīdz jūs aizslēdzat lādi ar vienu no atslēgām, jums būs nepieciešama otra, lai to atslēgtu. Šī situācija paver jaunas iespējas. Lūk, piemērs:

Jūs varat ielikt lādē ziņojumu, piemēram, "Sveiki, es esmu Hando" un tad aizslēgt to ar vienu no atslēgām. Pēc tam jūs varat nosūtīt lādi kopā ar otru atslēgu savam draugam. Kad jūsu draugs atslēgs šo lādi un izlasīs ziņojumu, viņš var būt pārliecināts, ka tā tika atvērta ar jūsu atslēgu, tātad ziņojums nāca no jums. Tas ir līdzīgi digitālajā parakstīšanā, kur jūs kopīgojat aizslēgtu ziņojumu kopā ar atslēgu, kuru var izmantot, lai atslēgtu ziņojumu, pārliecinoties, ka to sūtījāt tieši jūs. Tehnoloģiskos terminos viena atslēga, kas tiek kopīgota, tiek saukta par publisko atslēgu, bet otra, kas netiek kopīgota, ir privātā atslēga. Šis ir ļoti vispārīgs ilustrējums tam, kā darbojas publiskās atslēgas infrastruktūra (PKI).

Tieši tā darbojas arī droša digitālā paraksta izveide ar [Agrello](http://agrello.id/). Tomēr ir vēl kaut kas vairāk, jo jūsu draugam kaut kā jābūt pārliecinātam, ka kopīgotā publiskā atslēga patiešām ir jūsu publiskā atslēga.

## Identitātes pārbaude

Kā sasaistīt publisko atslēgu ar jūsu reālo personību? Šī saikne tiek veidota, izmantojot līdzīgas digitālās parakstīšanas tehnoloģijas. Tiklīdz tiek ģenerēta publiskā atslēga (tas notiek vienlaicīgi ar privātās atslēgas ģenerēšanu), organizācija, kas pārbauda jūsu reālo personisko identitāti (fiziski birojā vai izmantojot tiešsaistes rīkus), izveido tā saukto publisko sertifikātu. Sertifikāts ir informācijas pakete, kas ietver publisko atslēgu un personisko informāciju, piemēram, vārdu, dzimšanas datumu un parasti ID dokumenta numuru vai personas kodu. Lai uzticētos sertifikāta derīgumam, organizācija, kas veikusi identitātes pārbaudi, paraksta to ar organizācijas paraksta privāto atslēgu, kas atbilst publiski pieejamai organizācijas publiskajai atslēgai (pēdējā tiek saukta par saknes sertifikātu). Organizācija, kas paraksta sertifikātu, tiek saukta par sertifikācijas iestādi (CA), kas parasti darbojas arī kā uzticamības pakalpojumu sniedzējs (TSP), kurš ir atbildīgs par faktisko personu pārbaudes procesu. TSP var būt arī atsevišķa vienība, kas sadarbojas ar CA.

Tas aptver uzticamības ķēdi. Kad jūs kaut ko parakstāt ar PKI, tas, kam nepieciešams jūsu paraksts, saņem visu nepieciešamo informāciju, lai validētu parakstu kopā ar pašu parakstu. Tas ir dokumenta jaucējkods, jaucēšanas un parakstīšanas algoritmu atsauces, jūsu publiskais sertifikāts ar publisko atslēgu un informācija par sertifikāta izdevēju (TSP, CA). Saknes sertifikātu, lai pārbaudītu jūsu sertifikāta derīgumu, parasti var atrast tiešsaistē.

Patīkamākais ir tas, ka tiklīdz saknes sertifikāts ir pieejams tiešsaistē, parakstiem un personiskajiem publiskajiem sertifikātiem vispār nav jābūt uzglabātiem tiešsaistē, jo ar pieejamu saknes sertifikātu paraksta derīgumu var izsekot līdz pat saknes sertifikātam pilnībā bezsaistē un teorētiski pat ar manuāliem aprēķiniem. Tomēr PKI paraksta derīguma manuāla aprēķināšana lielākoties ir nevajadzīgs varoņdarbs, jo jaucēšanas un parakstīšanas algoritmiem ir jābūt standartizētiem, un paraksta validācijas programmatūra ir pieejama no vairākiem avotiem tiešsaistē.

## Privātās atslēgas aizsardzība

Lai noslēgtu uzticamības loku, ir vēl viena lieta, kas to visu satur kopā. Tā ir jūsu privātās atslēgas drošība, kas tiek izmantota parakstīšanai. Nav viena vienīga standarta veida, kā nodrošināt privāto atslēgu. Tomēr joprojām pastāv daži standarta risinājumi. Visizplatītākā metode ir fiziska mikroshēma, kas pieder parakstīšanas sertifikāta īpašniekam. Parasti tā ir iestrādāta plastikāta kartē, piemēram, ID kartē vairākās Eiropas valstīs. Igaunijā mikroshēma ir iestrādāta arī mobilo operatoru izsniegtajās SIM kartēs, ko sauc par Mobilo-ID. Mikroshēma var būt iestrādāta arī USB zibatmiņā vai ierīcē. Pašlaik [vienai trešdaļai pārdoto viedtālruņu](https://www.counterpointresearch.com/one-third-global-smartphones-sold-2019-embedded-hardware-security-apple-leads-42-market-share/) ir iestrādāta mikroshēma vai aparatūras drošības modulis (HSM).

Nesen sāka parādīties jauns interesantu privātās atslēgas aizsardzības tehnoloģiju vilnis. Igaunijas uzņēmums Cybernetica ir izstrādājis jaunu servera atbalstītu parakstīšanas tehnoloģijas formu, kas pašlaik tiek izmantota visās Baltijas valstīs Smart ID produktā parakstīšanai un pieteikšanās bankās un citiem e-pakalpojumiem. Tas izmanto metodi, kurā privātā atslēga tiek kopīgota starp serveri un ierīci. Tas sniedz priekšrocību, ka ierīcē nav nepieciešama droša mikroshēma vai HSM, bet tā vietā paļaujas uz servera drošību, kas vēlams izmanto pats savu HSM. Šī metode izmanto ārkārtīgi sarežģītu matemātiku un to papildina vairāki papildu komponenti, piemēram, sinhronizācija un klonu atklāšana.

Smart ID ir mainījis dzīvi Baltijas valstīs. Mēs Agrello vēlamies veicināt un izplatīt šādas tehnoloģijas visā pasaulē. Apskatiet mūsu parakstīšanas risinājumus ar dažādām iespējām drošības nodrošināšanai vietnē [www.agrello.id](http://www.agrello.id/).

‍

Ceru, ka esmu labi aprakstījis, kā darbojas pārbaudīta digitālā parakstīšana. Aprakstot šo tēmu, es izmantoju ES [eIDAS](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.257.01.0073.01.ENG) regulas 26. panta vadlīnijas, kas nosaka prasības uzlabotiem elektroniskajiem parakstiem, kuras ievēro visas akreditētās ES sertifikācijas iestādes:

_"Uzlabotam elektroniskajam parakstam ir jāatbilst šādām prasībām:_

_(a) tas ir unikāli saistīts ar parakstītāju;_

_(b) ar to var identificēt parakstītāju;_

_(c) tas ir radīts, izmantojot elektroniskā paraksta radīšanas datus, kurus parakstītājs var ar augstu ticamības līmeni izmantot savā ekskluzīvā kontrolē; un_

_(d) tas ir saistīts ar datiem, kas ar to parakstīti, tādā veidā, ka jebkādas turpmākas izmaiņas datos ir atklājamas."_

‍
