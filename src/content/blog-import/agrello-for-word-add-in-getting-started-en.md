---
title: 'Agrello for Word Add-in - Getting Started Guide'
slug: 'agrello-for-word-add-in-getting-started'
metaTitle: 'Agrello for Word Add-in - Simplify Electronic Signatures in Microsoft Word'
description: 'Discover how to use the Agrello for Word Add-in for seamless electronic signatures. Step-by-step guide for setup and sending your first signed document directly from Microsoft Word.'
keyword: 'Agrello Word Add-in, electronic signatures, Word e-signatures, Agrello API credentials, send documents for signing, digital signatures in Microsoft Word'
image: './images/673b0a484aa5405d9b1068ed_stock_11_docs.webp'
lang: 'en'
date: '2024-11-18'
excerpt: 'The Agrello for Word Add-in simplifies the process of sending documents for electronic signatures directly from Microsoft Word. This step-by-step tutorial will guide you through setting up the add-in and using it to send your first document for signing'
readingTime: '3'
author: 'jarmo-tuisk'
supportOnly: true
featured: false
categories:
  - features
---

# Agrello for Word Add-in - Getting Started Guide

Welcome to the Agrello for Word Add-in! This guide will help you install, configure, and use the add-in to send documents for electronic signature directly from Microsoft Word.

## Installation

### System Requirements

- **Microsoft Word**: 2016 or later (including Microsoft 365)
- **Operating System**: Windows or macOS
- **Agrello Account**: Required for full functionality (free registration available)

### Installing the Add-in

1.  **From AppSource**:
    - Open Microsoft Word
    - Go to **Insert** > **Get Add-ins** (or **Add-ins** depending on your Word version)
    - Search for "Agrello" in the Office Store
    - Click **Add** to install the Agrello for Word Add-in
2.  **After Installation**:
    - The Agrello button will appear in the **Home** tab ribbon
    - Click the **Agrello** button to open the add-in task pane

## Initial Setup

### Step 1: Get Your Agrello API Credentials

Before you can use the add-in, you need API credentials from your Agrello workspace:

1.  Log in to your Agrello account at [https://docs.agrello.io](https://docs.agrello.io/)
2.  Navigate to **Workspace** > **API credentials**
3.  Generate or copy your **Client ID** and **Client Secret**
4.  Keep these credentials safe - you'll need them in the next step

**Don't have an Agrello account?**

- Register for free at [https://docs.agrello.io](https://docs.agrello.io/)

### Step 2: Configure the Add-in

1.  Open the Agrello add-in in Word (click the **Agrello** button in the Home tab)
2.  Click the **Settings** tab in the add-in task pane
3.  Enter your **Client ID** and **Client Secret** from Step 1
4.  Click **Sign In**

Once signed in, you'll see your workspace name displayed in the Settings tab.

## Sending Documents for Signing

### Step 1: Prepare Your Document

1.  Create or open the Word document you want to send for signing
2.  Make sure your document is complete and ready for signatures

### Step 2: Open the Agrello Add-in

1.  Click the **Agrello** button in the Home tab ribbon
2.  The add-in task pane will open on the right side

### Step 3: Configure Document Settings

In the **Main** tab of the add-in:

1.  **Document Name**:
    - The name is automatically filled with your Word document's name
    - You can edit this name if needed
2.  **Choose Folder**:
    - Select the Agrello folder where you want to store the document
    - Click the **Refresh** button to update the folder list
3.  **Add Signers**:
    - Click **Add Signer** to add each person who needs to sign
    - Enter their name and email address
    - Add as many signers as needed
    - Drag to reorder signers if signing order matters
    - Remove signers by clicking the **X** button next to their name
4.  **Output Format**:
    - **ASiC**: EU-compliant format with advanced security features
    - **eDoc**: Regional standard format
    - **PDF**: Standard PDF format for wider compatibility
5.  **Send Options**:
    - **Send for signing immediately**: Document will be sent to signers right away
    - **Save as draft**: Document will be saved in Agrello for review before sending

### Step 4: Send Your Document

1.  Review all settings to ensure they're correct
2.  Click **Send Document** (or **Prepare Document** if saving as draft)
3.  Wait for the confirmation message
4.  Your document is now in Agrello and ready for signing!

### Step 5: Track Progress

- Log in to your Agrello account to monitor signing progress
- You'll receive email notifications when signers complete their actions

## Troubleshooting

### Cannot Sign In

**Problem**: Error message when trying to sign in with credentials

**Solutions**:

- Verify your Client ID and Client Secret are correct (copy-paste to avoid typos)
- Ensure you have an active internet connection
- Check that your Agrello account is active and not expired
- Try regenerating your API credentials in the Agrello workspace settings

### Cannot Load Folders

**Problem**: Folder list is empty or won't load

**Solutions**:

- Click the **Refresh** button next to the folder dropdown
- Sign out and sign in again
- Verify you have at least one folder in your Agrello workspace
- Check your internet connection

### Document Upload Fails

**Problem**: Error when trying to send document for signing

**Solutions**:

- Ensure your document is saved (not unsaved changes)
- Check that you have sufficient permissions in the selected Agrello folder
- Verify all required fields are filled (document name, folder, at least one signer)
- Try with a smaller document to rule out file size issues
- Save your document locally and try again

### Add-in Doesn't Load

**Problem**: Agrello button appears but nothing happens when clicked

**Solutions**:

- Close and reopen Word
- Check your internet connection
- Clear your Office cache:
  - Windows: Delete contents of `%LOCALAPPDATA%\Microsoft\Office\16.0\Wef\`
  - Mac: Delete contents of `~/Library/Containers/com.microsoft.Word/Data/Documents/wef/`
- Reinstall the add-in from AppSource

### Credentials Not Saved

**Problem**: Need to re-enter credentials every time

**Solutions**:

- Ensure your Office settings allow roaming settings
- Sign in again and wait for the confirmation message
- Check that you're signed in to your Microsoft account in Word

## Frequently Asked Questions

### Do I need an Agrello account to use this add-in?

Yes, you need an active Agrello account to send documents for signing. You can register for free at [https://docs.agrello.io](https://docs.agrello.io/).

### What document formats are supported?

The add-in works with all standard Word documents (.docx files). The document is sent to Agrello as a Word file and converted to your chosen output format (ASiC, eDoc, or PDF) after signing.

### How many signers can I add?

You can add as many signers as your Agrello subscription allows. There is no technical limit in the add-in itself.

### Is my document data secure?

Yes, all communication is encrypted using HTTPS and OAuth 2.0. Agrello is compliant with GDPR and eIDAS regulations. Your documents are securely stored in your Agrello workspace.

### Can I use this add-in offline?

No, an internet connection is required to authenticate and upload documents to Agrello.

### Which Office versions are supported?

The add-in supports:

- Word on Windows (Microsoft 365, Word 2016 or later)
- Word on Mac (Microsoft 365, Word 2016 or later)
- Word on the web (browser-based)
- Word on iPad

### Does this add-in work with Word Online?

Yes, the add-in is compatible with Word Online (Word for the web) in supported browsers (Edge, Chrome, Safari).

### Can I edit my document after sending it for signing?

No, once sent to Agrello, the document is locked for signing. If you need to make changes, you should save it as a draft first, then make edits in your Agrello workspace before sending.

### Where can I find my API credentials?

Log in to your Agrello workspace at [https://docs.agrello.io](https://docs.agrello.io/), then navigate to **Workspace** > **API credentials** to find or generate your Client ID and Client Secret.

### How do I update my credentials?

1.  Open the add-in and go to the **Settings** tab
2.  Enter your new Client ID and Client Secret
3.  Click **Sign In** to save the new credentials

### Can I set default preferences?

Yes, in the **Settings** tab under **Advanced Options**, you can set:

- Default output format (ASiC, eDoc, or PDF)
- Default send status (immediate or draft)

### What should I do if I see an error message?

1.  Note the exact error message
2.  Check the [Troubleshooting](file:///Users/jarmotuisk/Projects/agrello-word-addon/Documentation/support/getting-started.md#troubleshooting) section above
3.  Try the **Show debug info** button in Settings to view detailed logs
4.  Contact support with the error details if the issue persists

‍
