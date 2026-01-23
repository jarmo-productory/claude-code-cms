---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: PDF creates a single file with embedded signatures (PAdES), while ASIC creates
      a container with separate signature files (XAdES) that can hold multiple documents
      and supports only Qualified Electronic Signatures.
    question: What's the difference between PDF and ASIC formats?
  - answer: Use ASIC when you need Qualified Electronic Signatures (QES), want to sign
      multiple files together, or require long-term signature validation for archival
      purposes.
    question: When should I use ASIC format instead of PDF?
  - answer: EDOC is Latvia's national e-signature format, functionally similar to ASIC
      but specifically designed for Latvian regulatory compliance and government document
      workflows.
    question: What is EDOC format?
image: ../../../assets/edoc.webp
publish_date: '2025-01-17'
rank: 20
seo_desc: Choose between PDF (PAdES), ASIC (XAdES), and EDOC formats. Compare features,
  signature levels, and compliance requirements.
seo_title: PDF vs ASIC vs EDOC Format Guide | E-Signature Comparison
slug: pdf-asic-edoc-choosing-output-format
sub_topic: documents
summary: Compare PDF (PAdES), ASIC (XAdES), and EDOC signature formats to choose the
  best option for your documents based on use case, signature requirements, and regional
  compliance needs.
title: 'PDF vs ASIC vs EDOC: Choosing the Right E-Signature Format'
updated_date: '2025-01-17'
---

Agrello supports three e-signature output formats: PDF (PAdES), ASIC (XAdES), and EDOC. Each format serves different needs. Choose based on your signature requirements, file structure, and regional compliance.

## Format Overview

![Choose Document Output Format](../../../assets/downloaded/documents/choose-whether-your-document-should-be-formatted-as-a-pdf-or.webp)

**PDF (PAdES)** embeds signatures directly into your PDF file. The signed document looks like a regular PDF with signature boxes visible inside. Anyone with a PDF reader can open it.

**ASIC (XAdES)** creates a container—like a ZIP archive—that holds your files and stores signatures separately. **ASIC enforces Qualified Electronic Signatures (QES)** automatically and supports multiple file types.

**EDOC** works like ASIC but meets Latvia's specific regulatory requirements. Use it for Latvian government submissions and institutional contracts.

## PDF (PAdES) Format

PDF format embeds signatures using the PAdES (PDF Advanced Electronic Signatures) standard. Signatures appear as visual boxes within your document.

**Capabilities:**

- Single PDF file with embedded signatures
- Visual signature boxes showing signer details
- Supports all signature levels: SES, AES, QES
- Fillable fields with {{curly_brackets}} syntax
- PDF text fields for data collection
- Universal compatibility—any PDF reader works

**Best for:**

- Single-file contracts and agreements
- Documents needing visible signature boxes
- Situations requiring signature flexibility (different signers use different methods)
- Recipients without specialized software

**PDF remains widely preferred** for standard contracts due to its universal compatibility across all platforms and devices.

![Validate PDF Signatures](../../../assets/downloaded/documents/validate-pdf-signatures.webp)

**Limitations:**

- Only signs one PDF file per document
- Cannot sign other file types (Word, Excel, images)
- No automatic QES enforcement—signers choose their method

## ASIC (XAdES) Format

ASIC creates a container file (ASiC-E format) using XAdES (XML Advanced Electronic Signatures). Files and signatures stay separate inside the container.

**Capabilities:**

- Multiple files in one container (any file type)
- QES-only enforcement—no lower security levels
- Fillable {{curly_brackets}} fields across all files
- Long-term archival with XAdES-A standard
- EU eIDAS compliant
- Signatures stored in META-INF folder

**Best for:**

- Contracts with attachments (main agreement + exhibits + appendices)
- Non-PDF files (ZIP archives, images, spreadsheets, technical drawings)
- Mandatory QES requirements
- Long-term document storage (decades of validity)
- Preventing signature method errors

**Limitations:**

- Requires ASIC-compatible viewer (not standard PDF readers)
- No visual signatures inside documents
- QES only—cannot use Simple or Advanced signatures
- No PDF text fields (only {{curly_brackets}})

![Certificate Details](../../../assets/downloaded/documents/show-certificate.webp)

## EDOC Format

EDOC ("Electronically Certified Document") is Latvia's national e-signature format. Built on the same ASiC-E + XAdES technology as ASIC.

![EDOC Format](../../../assets/downloaded/documents/e-signature-edoc-format-signing-digitally.webp)

**What makes EDOC different:**

- Enhanced validation for Latvian regulatory compliance
- Mandatory for Latvian government submissions
- Additional long-term validation features
- Qualified timestamps and certificate revocation checks

**When to use:**

- Submitting documents to Latvian government services
- Business contracts requiring Latvian legal compliance
- Official paperwork for Latvian institutions

**Technical capabilities:** Same as ASIC (multi-file, QES-only, any file type, XAdES signatures).

## Choosing the Right Format

**Choose PDF when:**

- You have a single file to sign
- You need visual signature boxes inside the document
- Recipients need universal compatibility
- You want signature flexibility (allow different methods for different signers)
- You're working with standard contracts, agreements, or forms

**Choose ASIC when:**

- Your counterparties are Estonian companies or public sector institutions
- You need to sign multiple files together
- You're signing non-PDF file types
- QES is mandatory for all signers
- Long-term archival is important
- EU compliance is critical
- You want to prevent users from choosing wrong signature methods

**Choose EDOC when:**

- You're submitting to Latvian government or institutions
- Your business has Latvian regulatory obligations
- You need enhanced validation for Latvian legal framework

## Signature Method Compatibility

**PDF supports all levels:**

- Simple Electronic Signature (SES)—Agrello e-Sign (drawn/typed)
- Advanced Electronic Signature (AES)—eParaksts mobile
- Qualified Electronic Signature (QES)—Smart-ID, Mobile-ID, eID cards

**ASIC supports QES only:**

- Smart-ID
- Mobile-ID
- eID cards (Estonian, Belgian, Finnish, etc.)
- eParaksts (Latvian eID)

**EDOC supports QES only:**

Same as ASIC—Smart-ID, Mobile-ID, eID cards, eParaksts.

**Mixed scenarios:** If some signers need PDF (visual signatures) and others need ASIC (multi-file), create separate documents for each format. You cannot mix formats in a single document output.

## Why Format Choice Matters

**Legal validity:** All three formats create legally binding signatures. Choose based on your industry requirements and regional regulations.

**Workflow efficiency:** The right format reduces errors and speeds up signing.

**Long-term compliance:** ASIC and EDOC provide stronger archival guarantees with XAdES-A validation, maintaining signature validity for decades even after certificates expire.
