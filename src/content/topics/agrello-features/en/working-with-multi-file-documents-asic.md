---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Yes, using ASIC container format you can bundle multiple files (contracts,
      attachments, PDFs, images, Excel files) and sign them all together with one signature
      workflow.
    question: Can I sign multiple files at once in Agrello?
  - answer: ASIC containers support any file type - PDF, Word, Excel, images, ZIP archives,
      technical drawings - making them ideal for complex projects with multiple deliverables.
    question: What file types can I include in ASIC containers?
  - answer: Signers receive access to all files in the container, can review each document
      individually, and sign the entire package with one signature action.
    question: How do signers view multi-file ASIC documents?
image: ../../../assets/docs.webp
publish_date: '2025-01-17'
rank: 30
seo_desc: Learn to create multi-file ASIC containers bundling contracts, attachments,
  and documents with a single qualified electronic signature.
seo_title: ASIC Multi-File Documents Guide | Bundle Multiple Files
slug: working-with-multi-file-documents-asic
sub_topic: documents
summary: Create and manage multi-file document packages using ASIC containers. Learn
  how to bundle contracts with attachments, technical specifications, and supporting
  documents into a single signed package.
title: 'Multi-File Documents: Working with ASIC Containers'
updated_date: '2025-01-17'
---

ASIC containers let you bundle multiple files together and sign them all with a single signature set. One contract, three appendices, two technical drawings—all in one package, all signed at once.

## What Multi-File Documents Solve

Traditional signing handles one file at a time. If your contract includes attachments, you either combine everything into one PDF (losing original formats) or manage separate signing workflows for each file.

**ASIC containers work differently.** You package multiple files together—any file type—and signers review and sign the complete set with one action.

This matters for complex agreements. A construction contract includes the main agreement, architectural drawings (CAD files), material specifications (Excel), and project timeline (PDF). With ASIC, all files sign together. No file gets missed. No version confusion.

![ASIC Container Format](../../../assets/downloaded/documents/what-is-asic-and-xades-signature.webp)

## Creating Multi-File Documents

**Start with format selection.** During document preparation, choose ASIC or EDOC as your output format. PDF does not support multiple files.

**Upload your files.** Add all documents to the container:

- Main contract (PDF, Word, or any format)
- Appendices and exhibits
- Supporting documents (spreadsheets, images, technical files)
- ZIP archives (if you need to package related items)

**No file type restrictions.** ASIC accepts PDFs, Word documents, Excel spreadsheets, images, CAD drawings, ZIP files—anything your agreement needs.

![Document Preparation Workflow](../../../assets/downloaded/getting-started/document-preparation-workflow-in-agrello.webp)

**Set up signing.** Add signers, configure signature order, and send invitations. Signers see all files in one interface.

Multi-file containers help organizations prevent missing attachment errors and ensure all related documents remain together throughout the signing process.

## How ASIC Containers Work

**Container structure:** ASIC uses a ZIP-like archive format. Your files stay in their original formats. Signatures store separately in a META-INF folder.

```
document.asice (ZIP archive)
├── contract.pdf
├── specifications.docx
├── budget.xlsx
├── drawings.zip
└── META-INF/
    ├── manifest.xml
    └── signatures.xml
```

**All-or-nothing signing:** One signature covers the entire container. You cannot selectively sign individual files within the package. This ensures all parties sign the complete agreement.

**File integrity:** The signature validation checks the entire container. If anyone modifies any file after signing, the signature becomes invalid.

## Signer Experience

Signers receive one email invitation. They open the signing interface and see a list of all files in the container.

**Reviewing files:** Signers can open and review each file individually. The interface shows file names, types, and sizes. Signers check each document before signing.

**Single signing action:** After reviewing all files, signers sign once. That signature applies to the entire package—all files together.

**Receiving signed documents:** Once complete, all signers receive the fully signed ASIC container with all files and signatures included.

## Common Use Cases

**Contracts with attachments:** Employment agreements include the main contract, NDA, employee handbook, and benefits enrollment forms. Sign everything together—employee reviews all documents in one session.

**Project documentation:** Construction projects bundle proposals, technical specifications, architectural drawings, material lists, and project schedules. All stakeholders sign the complete package.

**Compliance packages:** HR policies include the main policy document, acknowledgment forms, training materials, and compliance certifications. Employees sign once, confirming receipt of everything.

**Real estate transactions:** Purchase agreements come with property disclosures, inspection reports, title documents, and mortgage terms. Buyers and sellers sign the complete transaction package.

**Vendor agreements:** Service contracts attach statements of work, pricing schedules, SLA documents, and data processing agreements. Both parties sign one comprehensive package.

## Technical Requirements

**QES only:** ASIC containers require Qualified Electronic Signatures. Simple or Advanced signatures are not available. This automatic enforcement ensures highest security.

**Compatible viewers:** Signed ASIC containers require ASIC-compatible software (like DigiDoc) to open. Standard PDF readers cannot view ASIC files.

**Fillable fields:** You can use {{curly_brackets}} fields across all files in the container. Signers fill in data that populates throughout the document package.

**File size limits:** No specific limit on number of files. Practical limits depend on total container size and platform constraints.

**Signature validation:** ASIC viewers validate signatures and show all files with signature status. The validation confirms that no files have been modified since signing.

## Benefits of Multi-File Signing

**No missing attachments:** All files package together. Nothing gets forgotten. Signers cannot sign the main contract without seeing the appendices.

**Original file formats:** Files stay in their native formats. CAD files remain CAD. Spreadsheets remain spreadsheets. No conversion to PDF required.

**Single workflow:** One signing process for multiple files. Reduces coordination effort and speeds up complex agreements.

**Stronger compliance:** Courts and regulators see complete agreement packages with unified signatures.

## When Not to Use Multi-File Containers

**Simple agreements:** Single-file contracts work better with PDF format. More universal compatibility.

**Need visual signatures:** ASIC does not support signature boxes inside documents. Use PDF if visual signatures are required.

**Recipients lack compatible viewers:** If signers cannot install ASIC viewer software, PDF provides better accessibility.

**Non-EU signers without QES:** ASIC requires QES methods (Smart-ID, Mobile-ID, eID cards). If signers do not have access to these methods, use PDF format instead.
