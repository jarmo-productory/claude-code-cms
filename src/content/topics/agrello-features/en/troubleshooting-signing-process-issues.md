---
title: 'Troubleshooting E-Signature Issues: Solutions and Best Practices'
slug: 'troubleshooting-signing-process-issues'
author: 'jarmo-tuisk'
sub_topic: 'signing-process'
rank: 50
summary: 'Resolve common signing process issues including email delivery problems, signature method failures, non-responsive signers, and document corrections after sending.'
image: '../../../assets/esignature.webp'
seo_title: 'Troubleshoot E-Signature Issues | Common Problems & Solutions'
seo_desc: 'Fix common e-signature issues: email delivery, authentication failures, unresponsive signers, and document corrections. Expert troubleshooting guide.'
date: '2025-01-17'
publish_date: '2025-01-17'
updated_date: '2025-01-17'
faq_schema:
  - question: "What should I do if a signer didn't receive the signing invitation?"
    answer: "Check their spam folder, verify the email address is correct, and resend the invitation via the document's signer dropdown menu. Add Agrello to safe senders list to prevent future filtering."
  - question: 'Can I make changes to a document after sending it for signing?'
    answer: "Minor changes (adding signers) can be made during 'In Signing'. Major content changes require voiding the document, making corrections, and resending a new version."
  - question: "What if a signer can't complete Smart-ID or Mobile-ID authentication?"
    answer: 'Verify they have the app installed and activated, check network connectivity, confirm correct PIN entry, and consider offering alternative signature methods if authentication persists to fail.'
---

Signing doesn't always go smoothly. Invitations vanish. Signers can't authenticate. Documents need corrections after sending. Here's how to resolve common issues.

## Email Delivery Problems

The most common issue: signer says they never received the invitation.

**Check spam folders first:** Email filters often catch e-signature invitations. Ask signer to search spam/junk for emails from Agrello.

**Verify email address:** Look for typos in the signer's email. One wrong character sends to the wrong person or nowhere. Common mistakes: .con instead of .com, transposed letters.

**Resend invitation:** Open the document. Find the signer in the "Who needs to sign" section. Click the dropdown menu next to their name. Select "Resend invitation."

**Add to safe senders:** Have signers add Agrello's sending address to their contacts or safe senders list. Prevents future filtering.

**Try alternate email:** If corporate email blocks external senders, try the signer's personal email. Some organizations have strict email security that blocks automated signing systems.

**Wait for delivery:** Email sometimes delays. If sent 5 minutes ago and signer doesn't see it, wait 15-20 minutes before troubleshooting further.

## Signature Authentication Failures

Signers trying to use Smart-ID or Mobile-ID sometimes encounter authentication problems.

**Smart-ID issues:**

- **App not installed:** Signer needs Smart-ID app on their phone. Send them download links for iOS/Android.
- **Account not activated:** App installed but account not fully activated. They need to complete activation process with their bank or ID provider.
- **Wrong PIN entered:** Three failed PIN attempts may lock the app. They need to reset PIN through app settings.
- **Network problems:** Authentication requires internet connection. Check they have Wi-Fi or cellular data active.

**Mobile-ID issues:**

- **SIM not enabled:** Mobile-ID requires SIM card activation. Not all mobile operators support it. Check if their carrier offers Mobile-ID.
- **Signal problems:** Authentication sends SMS. Poor cell signal delays or blocks the message.
- **Wrong phone number:** Mobile-ID tied to specific phone number. Verify the number in signer invitation matches their actual Mobile-ID phone.

**Alternative methods:** If qualified signature keeps failing, check if document settings allow simpler signature methods. Agrello signature (draw/type) works without authentication infrastructure.

**Browser compatibility:** Old browsers sometimes cause signing interface problems. Recommend updated Chrome, Firefox, Safari, or Edge.

## Non-Responsive Signers

Document sits "In Signing" for days or weeks. Signer hasn't acted.

**Send reminders:** Use the "Resend invitation" dropdown for individual reminders. Or select multiple documents in Kanban view and click "Remind to sign" for bulk reminders.

**Contact outside Agrello:** Email or call the signer directly. Some people ignore automated emails but respond to personal outreach.

**Set deadlines:** Your invitation email should mention when signing is needed. "Please sign by Friday" creates urgency.

**Escalate:** If employee isn't signing, contact their manager. If vendor isn't signing, contact their account rep.

**Add alternate signer:** If original signer is unavailable (on leave, left company), add their replacement while document is In Signing. New signer receives invitation immediately.

**Void and re-route:** If original signer definitely cannot sign, void the document. Create new version with correct signer. Send again.

## Making Changes After Sending

Realized you sent to wrong person? Spotted an error in the document? Your options depend on what needs changing.

### Minor Changes: Adding Signers

**Problem:** Sent document but forgot to include someone who needs to sign.

**Solution:** While document is In Signing, click "Add signer." Enter their email. They receive invitation immediately. Existing signatures stay valid.

This works anytime before final signature completes.

### Major Changes: Content Errors

**Problem:** Document has wrong date, incorrect terms, or needs substantial edits.

**Solution:** Void and resend.

1. Open the document
2. Click void button
3. Confirm voiding (invalidates any signatures collected)
4. Create new document with corrections
5. Prepare for signing with correct details
6. Send to signers with explanation

**No undo button exists.** Once sent, you cannot unsend. Voiding is the only path for content changes.

### Wrong Person Signed

**Problem:** Invited wrong email. Wrong person signed the document.

**Solution:** Void immediately. Create corrected version with correct signer. Send again. Contact all parties explaining the error.

**Legal note:** Invalid signatures create compliance issues. Fix immediately.

## Voiding Workflow

Voiding invalidates all signatures collected and marks the document as void.

**When to void:**

- Content error discovered after sending
- Wrong signer added
- Terms need substantial changes
- Signer signed twice by mistake

**How to void:**

1. Open document detail view
2. Find void button (location varies by interface)
3. Click and confirm voiding
4. Document status changes to "Voided"
5. All collected signatures become invalid

**Cannot un-void:** Permanent action. Voided documents stay voided. Audit trail preserves void action and timestamp.

**After voiding:** Create new corrected document. Prepare and send to signers. New document starts fresh lifecycle.

## Sequential Signing Blocks

Problem: Document uses sequential signing. Signer 1 hasn't signed. Signer 2 cannot proceed.

**Focus on blocker:** Send targeted reminder to Signer 1. They're holding up the entire process.

**Escalate to manager:** If Signer 1 doesn't respond, contact their supervisor. Explain the delay impacts business operations.

**Remove blocker if unavailable:** If Signer 1 is on extended leave or left the company, void the document. Remove them from signing order. Add replacement. Resend.

**Consider parallel signing:** If sequential order isn't legally required, void and resend with parallel signing. All signers receive invitations simultaneously. First to sign proceeds.

## Bulk Creation Errors

Created 50 employment contracts from Excel. Ten have wrong data or wrong signers.

**Fix individually:** Open each error document. Correct signer email or revert to Draft to fix content. Resend individually.

**Void error batch:** Select all errored documents. Bulk void them. Fix Excel data. Re-run bulk creation. 40 correct documents proceed normally.

**Mixed approach:** Fix simple errors (typo in email) individually. Void complex errors (wrong employee data throughout) and recreate.

## Using Audit Trails for Diagnosis

Every action records in audit trail. Use this for troubleshooting.

**View audit trail:** Open document. Click "View Document Audit Trail." See complete history with timestamps and IP addresses.

**What audit trails show:**

- When document was sent
- When invitations were delivered (or bounced)
- When signers accessed document
- Authentication attempts (successful or failed)
- Signature completions
- All reminder sends

**Diagnosing issues:** Signer claims they never received invitation. Audit trail shows email bounced due to invalid address. This confirms typo in email.

**Support tickets:** If escalating to Agrello support, include audit trail screenshot. Shows exactly what happened.

## When to Contact Support

**Technical failures:** Authentication systems down. Documents won't send despite correct configuration. Interface errors preventing normal operation.

**Account issues:** Subscription problems. Access revoked unexpectedly. Permissions not working correctly.

**What to provide:**

- Document ID or link
- Screenshots of error messages
- Description of steps taken
- Expected behavior vs. actual behavior
- Audit trail screenshot

**Self-service first:** Most issues resolve through troubleshooting steps above. Contact support for true technical failures or account problems.

## Prevention Strategies

**Test before important sends:** Send document to yourself or colleague first. Verify signature fields positioned correctly. Ensure invitation email looks right. Fix issues before sending to actual signers.

**Double-check emails:** Verify every email address before clicking "Send for Signing." One typo delays the entire process.

**Set clear expectations:** Custom invitation message should explain what's being signed, why it matters, and when signature is needed.

**Identify backups:** Before sending critical documents, identify alternate signers. If primary signer becomes unavailable, you know who replaces them.

**Monitor actively:** Check progress daily on urgent documents. Weekly on routine documents. Catch stuck documents early.

**Standard reminder schedule:** Establish team norms. "First reminder after 3 days, escalate after 1 week." Consistency prevents documents languishing in signing.

## Common Pitfalls

**Assuming signer received invitation:** Always confirm receipt. Don't wait days before checking.

**Not explaining signature method requirements:** If document requires QES, warn signers in invitation. They need Smart-ID or Mobile-ID ready.

**Forgetting about time zones:** Signer in different time zone receives invitation at 2 AM their time. They might not see it immediately.

**Sending to outdated contact list:** Employee left months ago. Their email bounces. Keep signer lists current.

**No follow-up process:** Sent 20 contracts. Didn't set reminders. 15 sit unsigned because no one followed up.

**Voiding too quickly:** Signer takes 2 days to sign. You void thinking they didn't get it. They finally sign and discover document voided. Communication before voiding prevents this.
