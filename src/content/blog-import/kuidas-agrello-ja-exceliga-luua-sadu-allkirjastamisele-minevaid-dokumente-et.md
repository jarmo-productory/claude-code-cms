---
title: 'Kuidas Agrello ja Exceliga luua sadu allkirjastamisele minevaid dokumente?'
slug: 'kuidas-agrello-ja-exceliga-luua-sadu-allkirjastamisele-minevaid-dokumente'
metaTitle: 'Ühenda Excel Agrelloga ja loo dokumente allkirjastamiseks'
description: 'Läbi Exceli ja Agrello ühenduse saab korraga luua sadu allkirjastamisele minevaid dokumente vaid mõne klikiga'
keyword: 'Excel, Exceli integratsioon, allkirjastamine, digitaalne allkirjastamine, dokumendi ettevalmistamine'
image: './images/62df9361fa43e82c725f380a_62d65e41c383e1655b6a2e3f_kuidas-agrello-zapieri-ja-exceliga-luua-sadu-allkirjastamisele-minevaid-dokumente.png'
thumbnail: './images/62df9361fa43e82c725f380a_62d65e41c383e1655b6a2e3f_kuidas-agrello-zapieri-ja-exceliga-luua-sadu-allkirjastamisele-minevaid-dokumente.png'
lang: 'et'
date: '2022-07-29'
excerpt: 'Mõnikord tuleb meil ette olukordi, kui on vaja kiiresti luua kümneid või sadu allkirjastamisele minevaid dokumente ühe ja sama põhja peale. '
readingTime: '18'
author: 'jarmo-tuisk'
supportOnly: false
featured: false
tags:
  - eesti
categories:
  - allkirjastamine
  - elektrooniline-allkiri
  - zapier
---

Mõnikord tuleb meil ette olukordi, kui on vaja kiiresti luua kümneid või sadu allkirjastamisele minevaid dokumente ühe ja sama põhja peale. Olgu selleks juhuks siis töösisekorraeeskirjade uuendamine, kliendilepingute muudatused või liitumislepingute allkirjastamine. Selliste juhtude puhul kiirendab paberimajandust oluliselt **Agrello** ühendamine Microsoft Onedrive pilvekaustas asuva **Excel** failiga läbi Zapieri.

‍

## Mis on Agrello ja mis on Zapier?

‍

Agrello on e-allkirjastamise teenus, mis võimaldab mugavalt ja kiiresti saata dokumente allkirjastamiseks läbi turvalise veebikeskkonna. Dokument laetakse üles Agrello pilveteenusesse ja allkirjastajale saadetakse kutse allkirjastamiseks emailile. Allkirjastada saab nii Mobiil-ID, Smart-ID kui ka Agrello enda digiallkirjaga.

**Zapier** on veebiteenus, mis võimaldab ilma programmeerija abita ühendada omavahel erinevaid veebipõhiseid tööriistu ning automatiseerida äriprotsesses. Zapieris on võimalik omavahel siduda üle 5000 erinevad veebiäpi.

Agrello Zapieri ühendus sai valmis 2022. aasta alguses ja praeguseks on seda kasutatud juba enam kui tuhande dokumendi loomiseks.

Exceli ja Agrello omavahel ühendamine aitab säästa mitmeid tunde, mis muidu kuluks dokumentide ükshaaval loomisele ja laiali saatmisele. Lisaks saab vältida käsitööga kaasnevate vigade tekkimise ohtu ning kui ühendus on korra loodud, siis saab Excelit alati täiendada uute andmetega, mis automaatselt loovad uusi allkirjastamisele minevaid dokumente Agrellosse.

‍

## Näide: kuidas automatiseerida töösisekorraeeskirjade allkirjastamine?

‍

Selleks, et paremini aru saada, kuidas Exceli ühendamine Zapieriga käib, teeme läbi ühe näite, kus töötajatele saadetakse allkirjastamiseks töösisekorraeeskirjade muudatused.

Protsess koosneb kolmest etapist:

1.  Dokumendipõhja ja Exceli tabeli ettevalmistamine
2.  Agrellos dokumendipõhja loomine
3.  Zapieris Exceli ja Agrello omavahel ühendamine

### Ettevalmistamine

‍

Alustuseks tuleb valmistada ette sisekorraeeskirjade põhi Microsoft Wordis ning seal markeerida väljad, mis on töötajaspetsiifilised.

‍

![.docx document](./images/62df9362fa43e854c55f380d_62d65b38f4f1740619af6229_kuidas-automatiseerida-lepingute-allkirjastamine-1.png)

‍

Dünaamiliselt täidetavad väljad tuleb Wordi sisestada loogeliste sulgudega, näiteks {{tootaja\_nimi}}. Vigade vältimiseks ei tohi sulgudes olevas tekstis kasutada täpitähti ega tühikuid.

Järgmisena valmistame ette Exceli faili, kus on nimekiri kõigist töötajatest ja andmed, mis lähevad dokumenti. Iga töötaja kohta tuleb luua üks eraldi rida ja iga dünaamilise välja kohta üks veerg.

‍

![.xlsx table](./images/62df9362fa43e86a245f380c_62d65b56c383e119106a0e3d_kuidas-automatiseerida-lepingute-allkirjastamine-2.png)

‍

Kindlasti peab tabelis olema töötaja meiliaadress, kuhu saadetakse allkirjastamise kutse.

Lisaks soovitame kasutada nö kontrollveergu (näiteks „Saada allkirjastamisele“), mille abil saab Excelis öelda, kas see rida saata Agrellosse või mitte.

Exceli fail tuleb salvestada oma ettevõtte **Onedrive** kataloogi, sest ainult sealt on Zapieril võimalik failile ligi pääseda.

‍

![save table](./images/62df9362fa43e84ff15f3816_62d65b9f1701304f5cc5c801_kuidas-automatiseerida-lepingute-allkirjastamine-3.png)

‍

### Agrellos dokumendipõhja loomine

‍

Agrellos saab dokumendipõhja luua kerge vaevaga. **Create new** menüüst tuleb valida **Template** ja siis lihtsalt üles laadida eelnevalt ettevalmistatud Wordi fail.

‍

![new document](./images/62df9362fa43e85a285f380b_62d65bb623c6fd5d77d4b1f1_kuidas-automatiseerida-lepingute-allkirjastamine-4.png)

Agrello konto saab igaüks luua ise ja tasuta. Tasuta kontod võimaldavad luua kolm dokumendi kuus, seega automatiseerimiseks suuremate mahtude puhul on vajalik tasulise konto olemasolu.

### Seadistamine Zapieris

‍

Zapieri konto saab igaüks samuti tasuta luua. Kui konto on loodud, tuleb luua esimene ühendus („Zap“). Töölaual on selle jaoks olemas kiire vorm.

Sisesta otsingukasti vasakule poole Excel  ja paremale Agrello.

‍

![new zap](./images/62df9362fa43e840015f380f_62d65cb612a0b826ee64410e_kuidas-automatiseerida-lepingute-allkirjastamine-5.png)

Järgmisel real sisesta kasti „When this happens...“ **Updated row** ja „then do this!“ kasti, **Create New Document From a Template** ning seejärel kliki **Try it** nupule.

![new workflow](./images/62df9362fa43e8bae75f3810_62d65cebfc5ed475e66e9024_kuidas-automatiseerida-lepingute-allkirjastamine-6.png)

Järgmisena tuleb Zapierile öelda, millist Office 360 kontot kasutada („Choose account“) ja millist faili sealt otsida (_Set up trigger_).

‍

![create new document from a template in Agrello](./images/62df9362fa43e874555f380e_62d65d187976e6e9f815665e_kuidas-automatiseerida-lepingute-allkirjastamine-7.png)

Ühenda uus või vali juba eksisteeriv konto ja vajuta **Continue** ning seejärel vali fail.

‍

![choose .xlsx](./images/62df9362fa43e88eed5f3817_62d65d2cf4f1749ccbaf84b8_kuidas-automatiseerida-lepingute-allkirjastamine-8.png)

Lõpetuseks vali Trigger veerg. See on veerg, milles sisu muutumisel aktiveeritakse konkreetne ajend ja luuakse leping Agrellos. Valime selleks veeru C „Saada allkirjastamisele“.

**Kuidas töötab Trigger veerg?**

Kui me seadistasime Exceli ühendust, siis ütlesime, et trigger veerg on C „Saada allkirjastamisele“. See tähendab seda, et Zapier loob uue lepingu Agrellos siis, kui sinna veergu midagi kirjutada.

Sedasi saame kontrollida Excelis, et milline dokument Agrellosse saata. Piisab vaid, kui konkreetse rea taha kirjutada näiteks „Jah“ ja siis Zapier teab, et võib võtta selle rea ja luua dokumendi Agrellosse.

‍

![table structure](./images/62df9362fa43e8b9045f3815_62d65d3cc383e17a576a2872_kuidas-automatiseerida-lepingute-allkirjastamine-9.png)

Lõpetuseks vajuta **Continue** ja siis **Test your trigger**.

Järgmine etapp on seadistada Agrello ühendus Zapieris. Sarnaselt Excelile ja Onedrive’ile tuleb ühendada kõigepealt Agrello konto.

Järgmise sammuna tuleb valida dokumendipõhi (_Template ID_) ja siduda omavahel Exceli väljad ning dokumendipõhja väljad. Valime Töösisekorra näidise põhja, mille olime eelnevalt Agrellosse laadinud. Põhja valikul tuvastab Zapier automaatselt, millised dünaamilised väljad on dokumendis kasutusel.

‍

![create new document from a template in Agrello settings](./images/62df9362fa43e8105c5f3819_62d65d5312a0b872a36445ff_kuidas-automatiseerida-lepingute-allkirjastamine-10.png)

Seejärel saame sisestada dünaamiliselt loodava dokumendi nime (Document name), mis võib olla näiteks töötaja nimi ja staatiline tekst.

‍

![document name](./images/62df9362fa43e880b15f3812_62d65d5f5c4f442c199677ef_kuidas-automatiseerida-lepingute-allkirjastamine-11.png)

Järgmised kaks valikut määravad, mida Agrello peaks ette võtma, kui Zapier ta “välja kutsub”.

- **_Publish Document and send invitation after creation_** määrab ära, kas kutse allkirjastamisele saadetakse koheselt välja (vali väärtus „True“) või jääb dokument _Draftina_ Agrellosse ootele (vali väärtus „False“).

- **_Output type_** määrab, kas allkirjastamiseks valitakse digikonteineri formaat (asice), mis on Eestis tavaline, või PDF-formaat, mida eelistatakse mujal maailmas.

![output type and date](./images/62df9362fa43e80c105f3811_62d65d6e1701306bb6c5d5b9_kuidas-automatiseerida-lepingute-allkirjastamine-12.png)

Seejärel tuleb täita allkirjastajate väljad

![username](./images/62df9362fa43e871295f3814_62d65d7ef4f174cdaaaf87ba_kuidas-automatiseerida-lepingute-allkirjastamine-13.png)

**Username list to invite to sign documents** esimesele väljale peab Excelist valima emaili veerust töötaja meiliaadressi.

Kui on üks valitud, siis saab lisada järgmisele reale järgmise allkirjastaja. Antud näites on see ettevõttepoolne esindaja ja ei muutu – seega lisame selle staatilise tekstina.

![email](./images/62df9362fa43e80df95f3813_62d65d893158a90e3eaa13ed_kuidas-automatiseerida-lepingute-allkirjastamine-14png.png)

Ning lõpetuseks lisame dokumendi dünaamilisele väljale töötaja nime Excelist.

‍

![fields and variable connection](./images/62df9362fa43e8297c5f3818_62d65dbc5c4f4403cc967b9a_kuidas-automatiseerida-lepingute-allkirjastamine-15.png)

Ning seejärel vajutame **Continue** ja edasi **Test zap**. Selle tulemusena tekib uus allkirjastamisele saadetud dokument Agrellos.

![sign document](./images/62df9362fa43e8e3d55f381a_62d65d9bf851775ea4c06b27_kuidas-automatiseerida-lepingute-allkirjastamine-16.png)

Kui kõik töötab, siis tuleb vajutada **Publish zap**.

### **Kokkuvõtteks**

‍

Kui see seadistus on tehtud, siis on ühendus Agrello ja Exceli vahel valmis ja töötab nii kaua, kuniks see Zap on aktiivne. See tähendab seda, et sul on võimalik igal ajal sinna Excelisse uusi ridu lisada, mis automaatselt loovad allkirjastamisele mineva dokumendi Agrellos.

Seda laadi püsivat ühendust on tänaseks kasutanud juba mitmed väikeettevõtted, et säästa paberimajandusele kuluvat aega. Ühest näitest oleme pikemalt kirjutanud siin: [**Kuidas Agrello abiga kiiremini investoritega lepinguid sõlmida.**](https://www.agrello.ee/kuidas-agrello-abiga-kiiremini-investoritega-lepinguid-solmida)

### Head integreerimist!

‍
