---
title: 'How trust works online - verified digital signatures'
slug: 'how-trust-works-online-verified-digital-signatures'
metaTitle: 'How Trust Works Online with Verified Digital Signatures'
description: 'Learn how trust works online with verified digital signatures. Discover how digital signatures add security and increase trust in online transactions.'
keyword: 'trust, online, digital, signatures, verification'
image: './images/610c36acf526d07661274aad_agrello_trusted_e_signatures_for_small_businesses_34.jpg'
thumbnail: './images/610c36ade45a1682aa9e04cf_agrello_trusted_e_signatures_for_small_businesses_34_thumbnail.jpg'
lang: 'en'
date: '2021-02-25'
excerpt: 'The last article explained the mechanics of legally valid and provable consent by electronic means. However, the methods explained in the previous article require diligence from the parties to make sure that the consent is legally solid and representable. Current article explains technological methods, that assure trust by default. I must mention right away, this article is not meant to be deeply technological, thus some use of terminology can be arguable in scientific context.'
readingTime: '8'
author: 'hando-rand'
supportOnly: false
featured: false
categories:
  - digital-identity
  - electronic-signature
  - general
---

## Asymmetric cryptography for digital signing

The most important elements of trustworthy consent are representable proof of what was signed and who was behind the signature action. There are systems out there which are built to provide rock-solid information about just that. The intent there is that when a signature is challenged in court, then one party does not have to provide extra proof of consent anymore but the opposite side has to prove that he or she did not give consent to the challenged agreement.

This systems are enabled by some very clever mathematics. The field that harnesses this in cyber-trust and cyber-security is called cryptography. To create trust online, the most dominant cryptographic method is asymmetric cryptography or public-key cryptography. The implementations of this method can use very different mathematics (e.g RSA, ECDSA) but asymmetric cryptography has enabled digital signing and secure use of the internet.

What is asymmetric cryptography? While the details of this need further explaining than just a blog post, the idea is simple. I think it would be more fun explaining it out of ICT context.

Imagine that you have a treasure chest. You have two keys to the chest, but once you lock the chest with one of the keys, you would need the other one to unlock it. This situation opens up new possibilities. Here is an example:

You can put a message in the chest like “Hi, I am Hando” and then lock it with one of the keys. Then you can send the chest with the other key to your friend. Once your friend unlocks this chest and reads the message, then he can be sure that it was opened with your key, therefore the message came from you.  It is similar in digital signing, whereby you share a locked message together with the key which can be used to unlock the message making sure it was you sending the message. In technological terms one key that is shared is called a public key and the other one that is not shared is a private key. This is a very general illustration of how public key infrastructure (PKI) works.

This is also how creating a secure digital signature with [Agrello](http://agrello.id/) works. However, there is more to that because your friend should somehow also be sure that the public key that is shared is actually your public key.

## Identity Verification

How to link a public key to your real self? That link is created by also using similar digital signing technologies. Once the public key is generated (happens simultaneously with private key generation), then an organization that verifies your real personal identity (physically in an office or by online tools), creates something called a public certificate. Certificate is a package of information that includes the public key and personal details like name, birth date and usually an ID document number or personal identity number. To trust that the certificate is valid, the organization that has done the identity verification signs it with the organization’s signature private key that matches with a publicly available public key of the organization (the latter is called a root certificate). The organization that signs the certificate is called a certificate authority (CA), which usually also acts as a trust service provider (TSP), who is behind actual person verification process. TSP can also be a separate entity that collaborates with the CA.

This covers the chain of trust. Once you sign something by PKI, the one who needs the signature by you, receives all information needed to validate the signature together with the signature. This is the hash of the document, hashing and signature algorithm references, your public certificate with the public key and information about the issuer of the certificate (TSP, CA). The root certificate to check the validity of your certificate can usually be found online.

The nice thing is that once the root certificate is online, then the signatures and personal public certificates do not have to be stored online at all, because with the root certificate at hand, the validity of the signature can be traced back to the root certificate completely offline and theoretically even by manual calculations. Though, manually calculating a PKI signature validity is mostly an unnecessary feat, as the hashing and signing algorithms are supposed to be standard and the software for signature validation is obtainable from several sources online.

## Private key protection

To close the loop of trust, there is still one more thing that holds it all together. The security of your private key, that is used for signing. There is no single standard way of securing the private key. However, there still are some standard solutions. The most prevalent method is a physical chip that is possessed by the owner of the signing certificate. Commonly it is embedded into a plastic card, and ID card for example in several countries around Europe. In Estonia, the chip is also embedded into mobile SIM-cards, issued by mobile carriers, which is called the Mobile-ID. The chip can also be embedded in a USB-stick or into a device. Currently [one third of smartphones](https://www.counterpointresearch.com/one-third-global-smartphones-sold-2019-embedded-hardware-security-apple-leads-42-market-share/) sold have the chip or hardware security module (HSM) embedded.

Recently a new wave of interesting private key protection technology has started to appear. Estonian Cybernetica has developed a new form of server supported signature technology, which is currently in use all over the Baltic nations in the Smart ID product for signing and logging into banks and other  
e-services. This harnesses a method of sharing the private key between a server and the device. This brings with it the benefit of not needing a secure chip or HSM in the device, but instead relying on the security of the server, which preferably uses an HSM by itself. This method uses extremely complex mathematics and is complemented by several extra components like syncing and clone detection.

Smart ID has been a life-changer in the the Baltics. We in Agrello wish to promote and spread such technologies globally. Check out our signature solutions with different options to assure security at [www.agrello.id](http://www.agrello.id/).

‍

I hope I have well covered how verified digital signing works. While going through the topic I used the guidance of Article 26 of the EU [eIDAS](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.257.01.0073.01.ENG) regulation which stipulate the requirements for advanced electronic signatures followed by all accredited EU certificate authorities:

_”An advanced electronic signature shall meet the following requirements:_

_(a) it is uniquely linked to the signatory;_

_(b) it is capable of identifying the signatory;_

_(c) it is created using electronic signature creation data that the signatory can, with a high level of confidence, use under his sole control; and_

_(d) it is linked to the data signed therewith in such a way that any subsequent change in the data is detectable.”_

‍
