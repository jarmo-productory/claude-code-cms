---
author: jarmo-tuisk
date: '2025-01-17'
faq_schema:
  - answer: Fillable fields are dynamic placeholders (using {{curly_brackets}} syntax
      or PDF form fields) where signers enter information like names, dates, or amounts
      before signing.
    question: What are fillable fields in Agrello templates?
  - answer: Yes, all fillable field responses can be exported to CSV format for easy
      import into CRM, HRIS, or analytics tools, eliminating manual data entry.
    question: Can I export data collected from fillable fields?
  - answer: Agrello supports text fields, date fields, number fields, checkboxes, dropdowns,
      and multi-line text areas for comprehensive data collection.
    question: What types of fillable fields are supported?
image: ../../../assets/Templates.webp
publish_date: '2025-01-17'
rank: 40
seo_desc: Use fillable fields to collect structured data from signers. Export to CSV
  and integrate with CRM, HRIS, and business systems.
seo_title: Fillable Fields Guide | Collect Data from E-Signature Documents
slug: using-fillable-fields-data-collection
sub_topic: documents
summary: Collect structured data from signers using fillable fields in templates.
  Learn {{curly_brackets}} syntax, PDF form fields, CSV export, and integration workflows
  for CRM and HRIS systems.
title: 'Fillable Fields: Collecting Data with Dynamic Templates'
updated_date: '2025-01-17'
---

Fillable fields turn your templates into data collection tools. Signers enter information directly into your documents—names, dates, amounts—and you export that data to spreadsheets or business systems. No manual retyping.

## What Fillable Fields Do

Traditional documents ask signers to print, fill out by hand, scan, and return. Then someone manually types the data into your CRM or HRIS.

**Fillable fields eliminate this process.** Your template includes placeholders. Signers fill them in during the signing process. The system captures that data. You download it as CSV and import directly into your systems.

This matters for high-volume workflows. HR onboarding collects employee information from 50 new hires monthly. Sales captures customer details from 200 NDAs quarterly. Event organizers gather attendee data from hundreds of waivers.

## Two Types of Fillable Fields

### {{Curly Brackets}} Fields

These work in both PDF and ASIC formats. Add `{{field_name}}` placeholders anywhere in your template.

![Template with Variables](../../../assets/downloaded/templates/template-with-variables.webp)

**Syntax rules:**

- Use only letters, numbers, and underscores
- No spaces: `{{first_name}}` not `{{first name}}`
- No special characters: `{{employee_id}}` not `{{employee#id}}`
- Case-sensitive: `{{Company_Name}}` and `{{company_name}}` are different fields

**Common examples:**

- `{{employee_name}}`
- `{{start_date}}`
- `{{salary}}`
- `{{company_name}}`
- `{{contract_value}}`

![Define Template Fields](../../../assets/downloaded/templates/define-fields.webp)

**How they work:** When you create a document from a template with {{fields}}, Agrello detects the placeholders and converts them to fillable form fields. Signers see input boxes where the placeholders were.

### PDF Form Fields

These work only in PDF format. Standard Adobe-style form fields with checkboxes, dropdowns, and text areas.

![Configure Form Fields](../../../assets/downloaded/templates/configure-fields.webp)

**Capabilities:**

- Text input boxes
- Multi-line text areas
- Checkboxes for yes/no options
- Dropdown menus with predefined choices
- Date pickers
- Number fields with validation

**Limitations:** Not supported in ASIC containers. Use {{curly_brackets}} for multi-file documents.

## Creating Templates with Fillable Fields

**Start with your document.** Create your contract or form in Word, Google Docs, or any word processor.

**Add field placeholders.** Replace dynamic content with `{{field_name}}` syntax:

```
This agreement is between {{company_1_name}} and {{company_2_name}}.
Employee {{employee_name}} will start on {{start_date}} with salary {{salary_amount}}.
```

![PDF Document with Variables](../../../assets/downloaded/templates/pdf-document-with-variable.webp)

**Upload to Agrello.** The system detects all {{fields}} automatically. You see a list of fields that signers will fill in.

**Configure field settings.** For each field, set:

- Display label (what signers see)
- Field type (text, date, number)
- Required vs optional
- Default values if needed

**Add signature fields.** Position signature boxes where parties sign. Configure signing order and methods.

## Signer Experience

Signers receive your document with empty fields highlighted. They fill in information before signing.

**Clear field labels:** Instead of seeing `{{employee_name}}`, signers see "Employee Full Name" with an input box.

**Validation:** Required fields must be filled before signing proceeds. Date fields accept only valid dates. Number fields reject text input.

**Review before signing:** After filling all fields, signers review the completed document. They see exactly what they're signing with their data populated.

## Exporting Field Data to CSV

This is where fillable fields deliver ROI. All signer responses export to spreadsheet format.

**Export process:**

1. Open your template in Agrello
2. Click "Download form results as CSV"
3. System generates spreadsheet with all signed document data
4. Each row is one signed document
5. Columns are your field names

![CSV Data Structure](../../../assets/downloaded/templates/csv-with-contcs.webp)

**Data included:**

- All {{field}} values that signers filled in
- Document completion date
- Signer email addresses
- Document status
- Custom metadata

**Permissions:** Only users with Editor role can download CSV exports. This protects sensitive data.

## Integration Workflows

**HR onboarding:** New employees fill in personal information, emergency contacts, tax forms. Export to HRIS. Automated data collection significantly accelerates the onboarding process and reduces manual data entry errors.

**Sales pipeline:** Prospects sign NDAs with company information and project details. Export to CRM. Sales reps see all prospect data without manual entry.

**Event management:** Attendees complete registration forms and waivers. Export to attendee database. Event planners have complete participant records.

**Compliance tracking:** Employees acknowledge policies and complete training confirmations. Export to compliance dashboard. HR tracks completion rates across organization.

**Customer onboarding:** New customers provide account details and service preferences. Export to customer database. Support teams have complete customer profiles.

## Best Practices

**Use descriptive field names:** `{{employee_full_name}}` is clearer than `{{emp_name}}` when reviewing CSV exports.

**Standardize naming conventions:** Use consistent formats across all templates. Always `{{company_name}}`, never varying between `{{company}}` or `{{company_legal_name}}`.

**Group related fields:** Place related information together in your template. Contact information in one section, contract terms in another.

**Set clear field labels:** The label signers see should explain exactly what to enter. "Employee Start Date (MM/DD/YYYY)" prevents confusion.

**Mark required fields:** Force completion of critical information. Let optional fields be truly optional.

**Test your templates:** Send test documents to yourself. Fill in the fields. Export the CSV. Verify the data structure matches your import requirements.

**Document your field schema:** Maintain a list of all field names and their meanings. This helps team members create consistent templates.

## Technical Requirements

**Field naming rules:**

- Alphanumeric characters and underscores only
- No spaces or special characters
- Case-sensitive (maintain consistent capitalization)

**Format support:**

- {{Curly brackets}}: PDF and ASIC formats
- PDF form fields: PDF format only

**CSV export limits:**

- No row limit (supports thousands of submissions)
- All field data exports, no truncation
- UTF-8 encoding supports international characters

**Data security:**

- CSV downloads require Editor role
- Audit trail logs all export actions
- Data exports over encrypted connections

## When to Use Fillable Fields

**Use fillable fields when:**

- You need structured data from multiple signers
- Manual data entry creates bottlenecks
- You're integrating with CRM, HRIS, or analytics systems
- You're collecting the same information repeatedly
- Data accuracy is critical

**Skip fillable fields when:**

- You're signing simple one-off agreements
- Documents have no variable data
- You don't need to extract signer responses
