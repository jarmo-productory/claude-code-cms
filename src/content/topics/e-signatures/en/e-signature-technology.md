---
title: 'E-Signature Technology Explained: Levels vs. Formats'
slug: 'e-signature-technology'
author: 'jarmo-tuisk'
rank: 20
summary: 'A detailed guide to e-signature technology. Learn the difference between legal levels (AdES, QES) and technical formats (PAdES, XAdES, ASiC) as defined by eIDAS.'
image: '/assets/esignature.webp'
seo_title: 'E-Signature Technology Explained: Levels and Formats | Agrello'
seo_desc: 'Understand the key differences between legal e-signature levels (AdES, QES) and technical formats (PAdES, XAdES, ASiC) under the eIDAS regulation to choose the right standard.'
date: '2024-05-21'
---

When you start using electronic signatures, you'll often encounter a host of acronyms like QES, PAdES, AdES, and ASiC. While they might seem confusingly similar, they refer to two distinct concepts: the signature's **legal level** and its **technical format**.

Understanding this difference is key to choosing the right signature for your needs, and it's a core topic in our **[Ultimate Guide to Electronic Signatures](https://www.agrello.io/topics/e-signatures)**. Let's break it down.

## Signature Levels (The Legal Weight)

The "level" of a signature refers to its legal classification under the EU's eIDAS regulation. This determines how much legal weight it carries in a dispute. Think of it as the difference between a casual IOU and a notarized legal document.

### Simple Electronic Signature (SES)

A Simple Electronic Signature is the most basic level. The eIDAS regulation defines it as "data in electronic form which is attached to or logically associated with other data in electronic form and which is used by the signatory to sign." This broad definition covers many common electronic actions, like ticking an "I agree" box or typing your name in a signature block. While legally recognized, it offers the least legal certainty as it doesn't have strict requirements for verifying the signer's identity.

### Advanced Electronic Signature (AdES)

An AdES is the most common type of secure signature used for business contracts. To qualify as "Advanced," it must meet specific criteria:

- It is uniquely linked to the signer.
- It is capable of identifying the signer.
- It is created using signature creation data that the signer can, with a high level of confidence, use under their sole control.
- It is linked to the data signed in such a way that any subsequent change in the data is detectable.

### Qualified Electronic Signature (QES)

A QES is the highest and most secure level of electronic signature. It is an AdES that has been created by a **qualified signature creation device (QSCD)** and is based on a **qualified certificate** for electronic signatures.

Crucially, a QES has the **same legal effect as a handwritten signature** across every EU member state. This makes it the gold standard for high-value transactions, government documents, and any situation requiring the utmost legal certainty.

## Signature Formats (The Technical Container)

The "format" refers to the technical standard used to package the signature and the document together. It's the digital 'envelope' that holds everything in a structured, verifiable way. The format you use typically depends on the type of document you are signing.

### PAdES (PDF Advanced Electronic Signatures)

As the name suggests, [PAdES](https://agrello.io/posts/what-is-pades-signature) is the standard for signing PDF documents. It embeds the signature data directly within the PDF file itself. Because PDFs are so common in business, PAdES is one of the most widely used formats.

### XAdES (XML Advanced Electronic Signatures)

[XAdES](https://agrello.io/posts/what-is-asic-container-and-xades-signature) is used for signing XML documents. XML is often used for exchanging structured data between different systems, such as in banking, procurement, or other machine-to-machine communications. XAdES allows a signature to be applied to parts of an XML document or the entire thing.

### CAdES (CMS Advanced Electronic Signatures)

CAdES is a versatile standard for signing any kind of binary data, not just specific document types. It is based on Cryptographic Message Syntax and is often used for signing software, emails, or other non-document files. While you may not encounter it directly when signing contracts, it is used by some national identity schemes, like Ukraine's Diia.

### ASiC (Associated Signature Containers)

[ASiC](https://agrello.io/posts/what-is-asic-container-and-xades-signature) is a highly versatile format that acts as a digital container. It can bundle one or more documents together with their associated electronic signatures into a single zip file. This is extremely useful for complex transactions that might involve multiple documents—for example, a primary contract with several signed appendices. It keeps everything neatly and securely packaged together.

## Real-World Examples on the Agrello Platform

To make these concepts clearer, here’s how different signature methods available on the Agrello platform map to these levels and formats:

- **Agrello's Own Signature**: This is a **Simple Electronic Signature (SES)** packaged in the **PAdES** format. While it offers a complete audit trail, its legal standing is the most basic level under eIDAS, suitable for everyday agreements where strong identity verification is not a primary concern.
- **BankID (Sweden)**: This method provides an **Advanced Electronic Signature (AdES)** in the **PAdES** format. It offers a higher level of signer identity verification than an SES.
- **Diia (Ukraine)**: The Ukrainian digital signature, Diia, is an **Advanced Electronic Signature (AdES)**. Its native format is **CAdES**, which Agrello embeds into a PDF container for ease of use and interoperability.
- **Mobile-ID, Smart-ID, ID-card (Baltics)**: These methods all produce **Qualified Electronic Signatures (QES)**, the highest legal level available. The technical format is typically **ASiC (with XAdES inside)**.
- **eParaksts (Latvia)**: As a QES, it usually uses the ASiC format, but can also be requested as an **EDOC** file, which is another type of XAdES-based container.

![Agrello Signing Options](../../../assets/agrello_signing_options.webp)

## Conclusion: Level + Format = A Secure Signature

A secure electronic signature is the combination of both a legal **level** (like SES, AdES, or QES) and a technical **format** (like PAdES or ASiC).

By choosing a platform like Agrello that supports all of these standards, you ensure your signed documents are not only secure and easy to manage but also legally robust and interoperable across Europe.

When you're ready to put this into practice, **<a href="https://docs.agrello.io/?utm_source=agrello_blog&utm_medium=content_marketing&utm_campaign=e-signatures_pillar&utm_content=e-signature-technology-cta" target="_blank" rel="noopener noreferrer">explore Agrello's powerful and user-friendly platform</a>**.
