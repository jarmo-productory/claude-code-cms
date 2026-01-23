---
title: 'What Are ASiC Containers and XAdES E-Signatures?'
slug: 'what-is-asic-container-and-xades-signature'
author: 'jarmo-tuisk'
rank: 40
summary: 'Understand how ASiC containers and XAdES e-signatures team up to provide exceptionally secure, compliant, and long-lasting digital signatures across the EU.'
image: '/assets/Signing.webp'
seo_title: 'ASiC Containers & XAdES Signatures Explained | Agrello'
seo_desc: 'Unlock the power of secure digital signing. Learn what ASiC containers and XAdES e-signatures are, how they work together, and why they are vital for legal validity under eIDAS.'
date: '2024-06-10'
faq_schema:
  - question: 'What is the difference between ASiC and XAdES?'
    answer: 'ASiC is a digital container that bundles documents and signatures together, like a secure digital envelope. XAdES is the highly secure, XML-based signature format placed inside that container. They are complementary technologies that work together.'
  - question: 'Are ASiC containers legally valid?'
    answer: "Yes, absolutely. ASiC is a format officially recognized under the EU's eIDAS regulation, making it a legally sound choice for advanced and qualified electronic signatures."
  - question: 'Can I open an ASiC container without special software?'
    answer: "Because ASiC files are based on the ZIP format, you can rename the file extension to .zip and extract the contents. However, you will need specialized software like Agrello's platform to properly validate the signatures inside and confirm their integrity."
  - question: 'Can ASiC containers hold multiple signatures?'
    answer: 'Yes. The ASiC-E (Extended) format is specifically designed to hold multiple documents and multiple signatures, making it perfect for complex agreements that require several people to sign.'
  - question: 'Which countries recognize ASiC and XAdES formats?'
    answer: 'Both formats are standardized and recognized across the entire European Union under the eIDAS regulation. They are widely used in countries with advanced digital infrastructures, such as Estonia, Latvia, and Lithuania.'
---

In the world of digital agreements, trust is everything. But with terms like ASiC and XAdES, it's easy to get lost in technical jargon. Let's break down what these technologies are, how they work, and why they are the bedrock of secure, trustworthy electronic signing.

---

Before diving into ASiC and XAdES, let's quickly refresh our memory on what a digital signature does. A digital signature is a powerful cryptographic tool that verifies the authenticity and integrity of a document. It serves as your digital fingerprint—far more secure than a handwritten signature and designed to be tamper-proof.

## How do digital signatures work?

Digital signatures are powered by public key cryptography, a system using a matched pair of keys: a private key and a public key.

The signer uses their **private key** (kept secret) to create the signature. Anyone with the corresponding **public key** can then verify that signature. If the verification fails, it's a clear sign that the document has been altered or the signature is not genuine.

## What is an ASiC Container?

An **Associated Signature Container (ASiC)** is a standard digital "package" that bundles one or more documents with their electronic signatures into a single, secure file (specifically, a ZIP archive). This standard was developed by the European Telecommunications Standards Institute (ETSI) to ensure signed documents and their signatures stay together, making them simple to manage, share, and validate.

**Good to know:** ASiC is an officially approved format for advanced and qualified electronic signatures under the EU's [eIDAS regulation](https://eur-lex.europa.eu/eli/reg/2014/910/oj/eng), the gold standard for electronic identification and trust services. The full technical specification is available in the [ETSI ASiC standard](https://www.etsi.org/deliver/etsi_ts/102900_102999/102918/01.01.01_60/ts_102918v010101p.pdf).

At Agrello, we use ASiC containers to link your documents securely with their detached digital signatures, which are typically in the XAdES format.

### ASiC-S vs. ASiC-E

The standard offers two container types:

- **ASiC-S (Simple):** A basic container that associates a **single document** with one or more signatures.
- **ASiC-E (Extended):** A more versatile container that supports **multiple documents** and multiple signatures. This is ideal for complex workflows where several parties need to sign various files.

## The Benefits of Using ASiC

ASiC containers offer clear advantages for managing your documents:

- **Simple to Share:** Bundling everything into one file makes storage and distribution effortless.
- **Guaranteed Integrity:** The container ensures the correct signature is always tied to its document, preventing mix-ups or separation.
- **Audit-Ready:** ASiC creates a secure, point-in-time snapshot of your agreements, which is invaluable for audits, compliance checks, and record-keeping.

## What is XAdES (XML Advanced Electronic Signature)?

**XAdES** stands for XML Advanced Electronic Signature. It's a signature format, not a container. Specifically, it's a set of extensions to the standard XML-DSig format, designed to create advanced and qualified electronic signatures that remain valid and verifiable for years to come, in full compliance with regulations like eIDAS.

XAdES enhances a basic signature by adding layers of proof, such as:

- Timestamps to prove when a document was signed.
- Certificate validation data to confirm the signer's identity.
- Other vital information that strengthens its legal standing.

### XAdES Signature Levels

XAdES comes in several levels, each adding more security and long-term protection:

- **XAdES-BES (Basic):** The foundational level for an advanced electronic signature.
- **XAdES-T (Timestamp):** Adds a timestamp to prove the signature existed at a specific time.
- **XAdES-C (Complete):** Includes references to all verification data (like certificates).
- **XAdES-X (Extended):** Adds timestamps to the references themselves, protecting against future compromises.
- **XAdES-XL (Extended Long-Term):** Embeds the actual certificates and verification data directly into the signature.
- **XAdES-A (Archival):** Allows for periodic re-timestamping to ensure the signature remains valid for decades.

## ASiC and XAdES: A Powerful Partnership

It's crucial to remember that ASiC and XAdES are not competitors—they are partners.

- **ASiC is the secure container.**
- **XAdES is the secure signature inside the container.**

When you use Agrello, the ASiC-E containers generated for your documents are signed using the XAdES format. This combination gives you the organizational power of ASiC and the high-security, long-term validity of XAdES, providing a solution you can trust for years to come.

## Are Electronic Signatures Legally Binding?

Yes. Secure electronic signatures are legally recognized and enforceable in most parts of the world. Landmark regulations like the **eIDAS Regulation** in the European Union and the **E-Sign Act** in the United States have established clear legal frameworks for their use. Highly secure digital signatures, like those created with XAdES in an ASiC container, are widely considered equivalent to traditional handwritten signatures in a court of law.
