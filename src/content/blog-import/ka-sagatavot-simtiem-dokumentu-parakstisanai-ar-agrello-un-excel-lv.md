---
title: 'Kā sagatavot simtiem dokumentu parakstīšanai ar Agrello un Excel?'
slug: 'ka-sagatavot-simtiem-dokumentu-parakstisanai-ar-agrello-un-excel'
metaTitle: 'Vairāku dokumentu sagatavošana parakstīšanai ar Agrello un Excel'
description: 'Vienkārši pārvaldiet simtiem dokumentu parakstīšanai ar Agrello un Microsoft Excel. Uzziniet, kā ātri izveidot, rediģēt un parakstīt dokumentus lielapjomā ar Agrello.'
keyword: 'Lielapjoma izveide, dokumentu sagatavošana, digitālā parakstīšana, e-parakstīšana'
image: './images/672347f9548c7cae5dc3de12_62ea59e0156de80b82b4ef61_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel.png'
thumbnail: './images/672347f9548c7cae5dc3de0f_62ea59e0156de80b82b4ef61_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel.png'
lang: 'lv'
date: '2022-08-03'
excerpt: 'Dažkārt nonākam situācijās, kad nepieciešams ātri izveidot desmitiem vai simtiem dokumentu parakstīšanai ar vienu un to pašu veidni. Vai tas būtu iekšējo darba noteikumu atjaunošana, izmaiņu veikšana klientu līgumos vai abonēšanas līgumu parakstīšana.'
readingTime: '16'
author: 'jarmo-tuisk'
supportOnly: false
featured: false
categories:
  - e-paraksts
---

Dažkārt mēs nonākam situācijās, kad nepieciešams ātri izveidot desmitiem vai simtiem dokumentu, kas jāparaksta pēc vienas un tās pašas veidnes. Vai nu tas ir iekšējo darba noteikumu atjaunošana, izmaiņu veikšana klientu līgumos vai abonēšanas līgumu parakstīšana. Šādos gadījumos Agrello savienošana ar Excel failu Microsoft OneDrive mākoņa mapē, izmantojot Zapier, ievērojami paātrina dokumentu apstrādi.

‍

## Kas ir Agrello un kas ir Zapier?

‍

Agrello ir elektroniskā paraksta pakalpojums, kas ļauj ērti un ātri nosūtīt dokumentus parakstīšanai, izmantojot drošu tiešsaistes vidi. Dokuments tiek augšupielādēts Agrello mākoņa pakalpojumā, un parakstītājs saņem e-pasta uzaicinājumu parakstīt. Jūs varat parakstīt, izmantojot Mobile-ID, Smart-ID un Agrello pašu digitālo parakstu.

Zapier ir tīmekļa pakalpojums, kas ļauj savienot dažādus tīmeklī bāzētus rīkus un automatizēt biznesa procesus bez programmētāja palīdzības. Zapier var savienot vairāk nekā 5000 dažādas tīmekļa lietotnes.

Agrello savienojums ar Zapier tika pabeigts 2022. gada sākumā, un tas jau ir izmantots vairāk nekā tūkstoš dokumentu izveidošanai.

Excel un Agrello sasaistīšana ietaupa daudzas stundas, kas citādi tiktu pavadītas, veidojot un izplatot katru dokumentu atsevišķi. Turklāt var izvairīties no manuālu kļūdu riska, un, kad savienojums ir izveidots, Excel var jebkurā laikā papildināt ar jauniem datiem, automātiski veidojot jaunus dokumentus, kas tiek parakstīti Agrello.

‍

## Piemērs: Kā var automatizēt iekšējo noteikumu parakstīšanu?

‍

Lai labāk izprastu, kā darbojas Excel savienojums ar Zapier, izskatīsim piemēru, kur izmaiņas iekšējos noteikumos tiek nosūtītas darbiniekiem parakstīšanai.

‍

### Process sastāv no trim soļiem:

1.  Dokumenta veidnes un Excel izklājlapas sagatavošana.
2.  Dokumenta veidnes izveidošana Agrello
3.  Excel un Agrello savienošana Zapier

‍

### Sagatavošana

‍

Vispirms jāsagatavo iekšējo noteikumu dokumenta veidne Microsoft Word, un tur jāatzīmē lauki, kas ir specifiski katram darbiniekam.

‍

![docx fails](./images/672347f8548c7cae5dc3dd46_62ea584f31321e071433a60d_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-1.png)

‍

Dinamiski aizpildāmie lauki Word jāievada figūriekavās, piemēram **{{darbinieka\_vards}}**. Lai izvairītos no kļūdām, iekavās ietvertajā tekstā nedrīkst izmantot pieturzīmes vai atstarpes.

Pēc tam mēs sagatavojam Excel failu ar visu darbinieku sarakstu un datiem, kas jāiekļauj dokumentā. Katram darbiniekam jāizveido atsevišķa rinda un katram dinamiskajam laukam - atsevišķa kolonna.

‍

![SCV dokuments](./images/672347f8548c7cae5dc3dd2b_62ea58618685a93edf83710d_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-2.png)

Tabulā jābūt darbinieka e-pasta adresei, uz kuru jānosūta uzaicinājums parakstīt.

Mēs arī iesakām izmantot tā saukto kontroles kolonnu (piemēram, **"Nosūtīt parakstīšanai"**), ar kuru jūs varat norādīt Excel, vai šī rinda jānosūta uz Agrello vai nē.

Excel fails jāsaglabā jūsu uzņēmuma **OneDrive** direktorijā, jo tikai tur **Zapier** var piekļūt failam.

‍

![saglabāt tabulu](./images/672347f8548c7cae5dc3dd34_62ea5870dbd8d569c259c1b8_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-3.png)

### Dokumenta veidnes izveidošana Agrello

‍

Agrello varat viegli izveidot dokumenta veidni. Jums jāizvēlas opcija **"Veidne"** izvēlnē **"Izveidot jaunu"** un pēc tam vienkārši jāaugšupielādē sagatavotais Word fails.

‍

![izveidot jaunu veidni](./images/672347f6548c7cae5dc3dd16_62ea588209333f92a8be6efd_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-4.png)

Ikviens var patstāvīgi un bez maksas izveidot Agrello kontu. Ar bezmaksas kontu jūs varat izveidot trīs dokumentus mēnesī. Tātad, lielāku apjomu automatizēšanai ir nepieciešams maksas konts.

‍

## Iestatīšana Zapier

‍

Ikviens var arī izveidot bezmaksas Zapier kontu. Kad konts ir izveidots, jāizveido pirmais savienojums ("Zap"). Darbvirsmas ekrānā tam ir ātra veidlapa.

Meklēšanas lodziņā kreisajā pusē ierakstiet Excel un labajā pusē - Agrello.

‍

![jauns zap ar Agrello](./images/672347f8548c7cae5dc3dd28_62ea5896131e42b03916bf4e_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-5.png)

Nākamajā rindā laukā **"Kad tas notiek..."** ierakstiet **Atjaunināta** rinda un laukā **"Tad dari šo!"** ierakstiet **Izveidot jaunu dokumentu no veidnes** un pēc tam noklikšķiniet uz pogas **"Izmēģināt"**.

‍

![izveidot jaunu veidni ar zapier un Agrello](./images/672347f8548c7cae5dc3dd31_62ea58a71bd1f5577c7b40e2_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-6.png)

Pēc tam jums jāpasaka Zapier, kuru Office 360 kontu izmantot (**"Izvēlēties kontu"**) un kuru failu tur meklēt (**Iestatīt triggerus**).

‍

![izveidot jaunu dokumentu no veidnes Agrello](./images/672347f8548c7cae5dc3dd37_62ea58b7af5592f0980fb546_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-7.png)

Pievienojiet jaunu kontu vai izvēlieties esošo, nospiediet **"Turpināt"** un pēc tam izvēlieties failu.

‍

![izvēlēties .xlsx](./images/672347f8548c7cae5dc3dd2e_62ea58c6e93adc768c53c0d1_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-8.png)

Visbeidzot, izvēlieties **"Triggera"** kolonnu. Šī ir kolonna, kurā, mainoties saturam, tiek aktivizēts konkrēts triggeris un Agrello tiek izveidots līgums. Šim nolūkam mēs izvēlamies C kolonnu **"Nosūtīt parakstīšanai"**.

‍

## Kā darbojas "Triggera" kolonna?

‍

Kad mēs iestatījām Excel savienojumu, mēs norādījām **"Nosūtīt parakstīšanai"** kā C triggera kolonnu. Tas nozīmē, ka Zapier izveidos jaunu līgumu Agrello, kad jūs kaut ko ierakstīsiet šajā kolonnā.

Šādā veidā mēs varam Excel pārbaudīt, kuru dokumentu nosūtīt uz Agrello. Viss, kas jums jādara, ir ierakstīt, piemēram, **"Jā"** pēc noteiktas rindas, un tad Zapier zina, ka tas var paņemt šo rindu un izveidot dokumentu Agrello.

‍

![triggera kolonna](./images/672347f7548c7cae5dc3dd22_62ea58d97b23f0c2f8205cbb_create-hundreds-of-documents-to-be-signed-with-agrello-and-excel-9.png)

Visbeidzot, jūs nospiežat Tālāk un pārbaudāt savu triggeri.

‍

\---

‍

Nākamais solis ir iestatīt Agrello savienojumu Zapier. Tāpat kā ar **Excel** un **OneDrive**, vispirms jāpie
