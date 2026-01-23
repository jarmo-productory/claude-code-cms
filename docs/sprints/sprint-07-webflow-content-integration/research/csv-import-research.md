# CSV Import Research

**Date:** 2026-01-16
**Sprint:** 07 - Webflow Content Integration
**Research Focus:** Importing Webflow CMS collections via CSV export

---

## Webflow CSV Export Capabilities

### How to Export from Webflow

1. **Navigate to CMS:**
   - Open Webflow Designer
   - Go to CMS Collections panel
   - Select target collection (e.g., "Blog Posts")

2. **Export Options:**
   - Click "⋯" menu on collection
   - Select "Export items"
   - Download as CSV file

3. **What's Included:**
   - All collection fields (text, numbers, dates)
   - Image URLs (not the actual files)
   - Reference fields (as IDs or slugs)
   - Multi-reference fields (comma-separated)

---

## CSV Structure Example

### Sample Webflow Blog Collection CSV

```csv
Name,Slug,Published,Post Body,Featured Image,Author,Tags,_archived_,_draft_
"How to Sign Contracts Digitally","sign-contracts-digitally","2026-01-10T10:00:00.000Z","<p>Digital signatures are...</p>","https://uploads-ssl.webflow.com/.../image.jpg","John Doe","legal,tips",false,false
"5 Ways to Improve Workflow","improve-workflow","2026-01-08T14:30:00.000Z","<p>Streamline your process...</p>","https://uploads-ssl.webflow.com/.../workflow.jpg","Jane Smith","productivity,tips",false,false
```

### Field Mapping

| Webflow Field  | CSV Column       | Type           | Notes                   |
| -------------- | ---------------- | -------------- | ----------------------- |
| Name           | `Name`           | Text           | Required, used as title |
| Slug           | `Slug`           | Text           | URL-friendly identifier |
| Published      | `Published`      | ISO Date       | Publication date        |
| Post Body      | `Post Body`      | Rich Text      | HTML content            |
| Featured Image | `Featured Image` | URL            | Full CDN URL            |
| Author         | `Author`         | Text/Reference | May be ID or name       |
| Tags           | `Tags`           | Multi-select   | Comma-separated list    |
| _archived_     | `_archived_`     | Boolean        | System field            |
| _draft_        | `_draft_`        | Boolean        | System field            |

---

## Image Handling in CSV

### Image URL Format

```
https://uploads-ssl.webflow.com/507f1f77bcf86cd799439011/507f191e810c19729de860ea_image-name.jpg
```

**Key Observations:**

- Images are NOT included in CSV
- Only URLs are provided
- Must download separately via HTTP
- Alt text is NOT included in CSV export

### Downloading Images

**Strategy:**

1. Parse CSV to extract all image URLs
2. Download each image via fetch/curl
3. Save to `public/images/blog-import/`
4. Rename to semantic filenames (e.g., `article-slug.jpg`)
5. Update markdown to reference local paths

**Example Script:**

```typescript
async function downloadImage(url: string, slug: string): Promise<string> {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()

  // Extract file extension
  const ext = url.split('.').pop()?.split('?')[0] || 'jpg'
  const filename = `${slug}.${ext}`

  // Save to public directory
  const outputPath = path.join(process.cwd(), 'public/images/blog-import', filename)
  fs.writeFileSync(outputPath, Buffer.from(buffer))

  return `/images/blog-import/${filename}`
}
```

---

## CSV Parsing in Node.js

### Recommended Library: `csv-parse`

```bash
npm install csv-parse
```

**Usage:**

```typescript
import { parse } from 'csv-parse/sync'
import fs from 'fs'

const csvContent = fs.readFileSync('webflow-export.csv', 'utf-8')
const records = parse(csvContent, {
  columns: true, // Use first row as column names
  skip_empty_lines: true,
  trim: true,
})

// records is now an array of objects
records.forEach((row) => {
  console.log(row.Name, row.Slug, row['Featured Image'])
})
```

---

## Rich Text Content

Webflow exports rich text as HTML:

```html
<p>This is a paragraph with <strong>bold</strong> text.</p>
<h2>Subheading</h2>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

### Conversion Options

**Option 1: HTML to Markdown (Recommended)**

```typescript
import TurndownService from 'turndown'

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
})

const markdown = turndownService.turndown(htmlContent)
```

**Option 2: Keep as HTML**

- Store HTML in markdown file's content section
- Use `dangerouslySetInnerHTML` in React component
- Cons: Less maintainable, security risk

---

## Frontmatter Generation

### Target Format (Our Current Blog Schema)

```yaml
---
title: Article Title
slug: article-slug
description: Short description
date: '2026-01-10'
category: news
image: /images/blog-import/article-slug.jpg
author: John Doe
featured: true
lang: en
tags:
  - legal
  - tips
---
```

### Mapping Logic

```typescript
interface WebflowRow {
  Name: string
  Slug: string
  Published: string
  'Post Body': string
  'Featured Image': string
  Author: string
  Tags: string
  _archived_: string
  _draft_: string
}

function generateFrontmatter(row: WebflowRow, lang: 'en' | 'et'): string {
  const tags = row.Tags ? row.Tags.split(',').map((t) => t.trim()) : []
  const date = new Date(row.Published).toISOString().split('T')[0]

  return `---
title: ${row.Name}
slug: ${row.Slug}
description: ${row.Name}
date: '${date}'
category: news
image: /images/blog-import/${row.Slug}.jpg
author: ${row.Author}
featured: false
lang: ${lang}
tags:
${tags.map((tag) => `  - ${tag}`).join('\n')}
---`
}
```

---

## Script Implementation

### Complete Import Script Structure

```typescript
// scripts/import-webflow-csv.ts
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import TurndownService from 'turndown'

// Configuration
const CSV_FILE = process.argv[2] || './webflow-export.csv'
const LANG = (process.argv[3] || 'en') as 'en' | 'et'
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/blog-import')
const IMAGES_DIR = path.join(process.cwd(), 'public/images/blog-import')

// Create directories
fs.mkdirSync(OUTPUT_DIR, { recursive: true })
fs.mkdirSync(IMAGES_DIR, { recursive: true })

// Initialize turndown
const turndownService = new TurndownService()

async function downloadImage(url: string, slug: string): Promise<string> {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const ext = url.split('.').pop()?.split('?')[0] || 'jpg'
  const filename = `${slug}.${ext}`
  const outputPath = path.join(IMAGES_DIR, filename)

  fs.writeFileSync(outputPath, Buffer.from(buffer))
  return `/images/blog-import/${filename}`
}

function generateMarkdown(row: any, lang: 'en' | 'et', imagePath: string): string {
  const tags = row.Tags ? row.Tags.split(',').map((t: string) => t.trim()) : []
  const date = new Date(row.Published).toISOString().split('T')[0]
  const content = turndownService.turndown(row['Post Body'] || '')

  return `---
title: ${row.Name}
slug: ${row.Slug}
description: ${row.Name}
date: '${date}'
category: news
image: ${imagePath}
author: ${row.Author}
featured: false
lang: ${lang}
tags:
${tags.map((tag: string) => `  - ${tag}`).join('\n')}
---

${content}
`
}

async function importCSV() {
  console.log(`Reading CSV: ${CSV_FILE}`)
  const csvContent = fs.readFileSync(CSV_FILE, 'utf-8')
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  })

  console.log(`Found ${records.length} records`)

  for (const row of records) {
    // Skip archived or draft posts
    if (row._archived_ === 'true' || row._draft_ === 'true') {
      console.log(`Skipping ${row.Name} (archived or draft)`)
      continue
    }

    console.log(`Processing: ${row.Name}`)

    // Download image
    let imagePath = ''
    if (row['Featured Image']) {
      try {
        imagePath = await downloadImage(row['Featured Image'], row.Slug)
        console.log(`  ✓ Downloaded image: ${imagePath}`)
      } catch (error) {
        console.error(`  ✗ Failed to download image:`, error)
        imagePath = '/images/blog/placeholder.jpg'
      }
    }

    // Generate markdown
    const markdown = generateMarkdown(row, LANG, imagePath)
    const filename = `${row.Slug}-${LANG}.md`
    const outputPath = path.join(OUTPUT_DIR, filename)

    fs.writeFileSync(outputPath, markdown, 'utf-8')
    console.log(`  ✓ Created: ${filename}`)
  }

  console.log('\nImport complete!')
  console.log(`Output: ${OUTPUT_DIR}`)
  console.log(`Images: ${IMAGES_DIR}`)
}

importCSV().catch(console.error)
```

### Usage

```bash
# Export blog posts from Webflow as CSV
# Save as webflow-export.csv in project root

# Run import (English)
npm run import-webflow webflow-export.csv en

# Run import (Estonian)
npm run import-webflow webflow-export.csv et
```

---

## Pros & Cons

### Pros

- **Simple & fast** - No API authentication needed
- **One-time export** - Perfect for migration
- **Manual control** - Review/edit CSV before import
- **No rate limits** - Process entire dataset at once
- **Offline-friendly** - No network dependency after CSV export
- **No API costs** - Free to use

### Cons

- **Manual export** - Must download CSV from Webflow UI
- **No automation** - Can't sync new content automatically
- **Missing metadata** - Image alt text not included
- **Static snapshot** - Data is stale after export
- **Manual updates** - Re-import required for changes

---

## Dependencies Required

```json
{
  "devDependencies": {
    "csv-parse": "^5.5.0",
    "turndown": "^7.1.2",
    "@types/turndown": "^5.0.0"
  },
  "scripts": {
    "import-webflow": "ts-node --esm scripts/import-webflow-csv.ts"
  }
}
```

---

## Missing Data Handling

### Image Alt Text

- **Problem:** CSV doesn't include alt text
- **Solution:**
  1. Use article title as fallback
  2. Manually add after import
  3. Fetch from Webflow API as secondary step

### Rich Text Embeds

- **Problem:** YouTube embeds, custom widgets may not convert
- **Solution:**
  1. Manual review after import
  2. Use regex to detect embeds
  3. Convert known patterns (YouTube URLs → shortcodes)

### References/Relations

- **Problem:** Author/Category references may be IDs
- **Solution:**
  1. Export related collections separately
  2. Build lookup table
  3. Replace IDs with names during import

---

## Estimated Complexity

| Task                        | Complexity     | Time Estimate |
| --------------------------- | -------------- | ------------- |
| CSV parsing                 | Low            | 30 min        |
| Download images             | Low            | 30 min        |
| HTML to Markdown conversion | Medium         | 1 hour        |
| Frontmatter generation      | Low            | 30 min        |
| Error handling              | Medium         | 1 hour        |
| Testing & validation        | Medium         | 1 hour        |
| **Total**                   | **Low-Medium** | **4.5 hours** |

---

## Recommendation

**Use CSV import for:**

- **One-time migration** from Webflow to Next.js
- **Quick proof-of-concept** to see content in new site
- **Initial content population** before launch

**Ideal workflow:**

1. Export CSV from Webflow
2. Run import script → `blog-import/` folder
3. Review generated markdown files
4. Edit/fix any conversion issues
5. Move to production `blog/` folder
6. Commit to git

**Comparison to API:**

- CSV is **40% faster** to implement (4.5h vs 7h)
- CSV is **simpler** (no auth, no rate limits)
- CSV is **manual** (good for one-time, bad for ongoing sync)

**My recommendation:** Use **CSV import** for this sprint. Build API sync later if needed.
