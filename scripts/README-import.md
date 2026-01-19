# Webflow CSV Import Guide

This guide explains how to import blog articles from Webflow CMS into the Next.js site using the CSV export method.

## Overview

The import script:
- Parses Webflow CSV export (all locales in single file)
- Downloads images from Webflow CDN
- Converts HTML content to Markdown
- Generates frontmatter-based markdown files
- Organizes content by locale in staging folder

## Prerequisites

1. **Install dependencies** (first time only):
```bash
npm install
```

2. **Export CSV from Webflow**:
   - Log in to Webflow
   - Go to CMS → Blog Posts collection
   - Click "..." menu → Export items
   - Save as `articles.csv`

## Usage

### Basic Import (All Locales)

```bash
npm run import-webflow ./path/to/articles.csv
```

This will import all articles in all locales (en, et, lv).

### Import Specific Locale

```bash
# English only
npm run import-webflow ./articles.csv --locale=en

# Multiple locales
npm run import-webflow ./articles.csv --locale=en,et
```

### Test with Limited Articles

```bash
# Import only first 5 articles
npm run import-webflow ./articles.csv --limit=5

# Import 10 English articles
npm run import-webflow ./articles.csv --locale=en --limit=10
```

## Example Workflow

### Step 1: Test with Sample

```bash
# Import 3 articles from each locale for testing
npm run import-webflow ./docs/webflow-migration/articles.csv --limit=10
```

### Step 2: Review Output

```bash
# Check imported markdown files
ls -la src/content/blog-import/en/
ls -la src/content/blog-import/et/
ls -la src/content/blog-import/lv/

# Check downloaded images
ls -la public/images/blog-import/

# View sample article
cat src/content/blog-import/en/10-reasons-to-choose-agrello.md
```

### Step 3: Test in Dev Server

```bash
# Start development server
npm run dev

# Visit articles (if blog routes exist)
# http://localhost:3000/en/blog/article-slug
```

### Step 4: Import Full Dataset

Once satisfied with test results:

```bash
# Clear previous test import
rm -rf src/content/blog-import/*
rm -rf public/images/blog-import/*

# Import everything
npm run import-webflow ./docs/webflow-migration/articles.csv
```

### Step 5: Move to Production

After manual review:

```bash
# Move content
mv src/content/blog-import/en/* src/content/blog/en/
mv src/content/blog-import/et/* src/content/blog/et/
mv src/content/blog-import/lv/* src/content/blog/lv/

# Move images
mv public/images/blog-import/* public/images/blog/

# Clean up staging folders
rm -rf src/content/blog-import
rm -rf public/images/blog-import
```

## Output Structure

### Staging Folder

All imports go to staging folder first for review:

```
src/content/blog-import/
├── en/
│   ├── article-slug-1.md
│   ├── article-slug-2.md
│   └── ...
├── et/
│   └── ...
└── lv/
    └── ...

public/images/blog-import/
├── image-hash-1.png
├── image-hash-2.jpg
└── ...
```

### Markdown File Format

Each article is converted to markdown with YAML frontmatter:

```markdown
---
title: "Article Title"
slug: "article-slug"
metaTitle: "SEO Title"
description: "Meta description"
keyword: "main keyword"
image: "/images/blog-import/main-image.png"
thumbnail: "/images/blog-import/thumbnail.png"
lang: "en"
topic: "Category"
subTopic: "Subcategory"
date: "2024-01-15"
excerpt: "Article summary"
readingTime: "5"
author: "author-slug"
supportOnly: false
featured: false
keywordCluster: "cluster name"
tags:
  - tag1
  - tag2
categories:
  - category1
---

Article content in markdown format...
```

## Frontmatter Field Mapping

| CSV Column | Frontmatter Field | Notes |
|------------|-------------------|-------|
| Name | title | Direct copy |
| Slug | slug | Direct copy |
| Meta Title | metaTitle | SEO title |
| Meta Description | description | SEO description |
| Keyword | keyword | Main keyword |
| Main Image (1200x630) | image | Downloaded → local path |
| Thumbnail image (520x273) | thumbnail | Downloaded → local path |
| Locale | lang | en, et, or lv |
| Topic | topic | Category |
| Sub-topic | subTopic | Subcategory |
| Publish date | date | YYYY-MM-DD format |
| Post Summary | excerpt | Article summary |
| Reading time | readingTime | Reading time in minutes |
| Post Body | *content* | HTML → Markdown |
| Author | author | Author slug |
| Support only | supportOnly | Boolean |
| Featured on category page | featured | Boolean |
| Keyword cluster | keywordCluster | Cluster name |
| Tag | tags | Split by `;` → array |
| Categories | categories | Split by `;` → array |

## Features

### Image Handling

1. **Featured Images**: Main image and thumbnail are downloaded from CSV columns
2. **Inline Images**: All `<img>` tags in HTML are detected and images downloaded
3. **Deduplication**: Same image used multiple times is downloaded only once
4. **CDN URLs**: Only Webflow CDN URLs are processed (`cdn.prod.website-files.com`, `uploads-ssl.webflow.com`)

### HTML to Markdown Conversion

- Headers, lists, bold, italic preserved
- Links converted to markdown links
- YouTube embeds detected and preserved
- Complex HTML gracefully degraded

### Filtering

Automatically filters out:
- Archived articles (`Archived: true`)
- Draft articles (`Draft: true`)
- Articles with missing Name or Slug

### Error Handling

- Image download failures: Logs warning, continues import
- HTML conversion failures: Keeps raw HTML, logs warning
- Missing fields: Uses sensible defaults
- Date parsing errors: Uses current date

## Troubleshooting

### "CSV file not found"

Check that the path to CSV file is correct:

```bash
ls -la ./docs/webflow-migration/articles.csv
```

### "No articles imported"

Possible reasons:
- All articles are archived or draft
- Locale filter doesn't match any articles
- CSV format is different than expected

Check CSV structure:
```bash
head -n 1 ./articles.csv
```

### "Image download failed"

- Check internet connection
- Webflow CDN might be slow or rate-limited
- Re-run import to retry failed images

### "HTML conversion issues"

Some complex Webflow widgets might not convert perfectly to markdown. Review output and manually fix if needed.

## Re-running Import

To re-import (e.g., after fixing issues):

```bash
# Clear staging folder
rm -rf src/content/blog-import/*
rm -rf public/images/blog-import/*

# Run import again
npm run import-webflow ./articles.csv
```

## Performance

- ~274 articles import in approximately 5-10 minutes
- Depends on:
  - Network speed (image downloads)
  - Number of inline images per article
  - CSV parsing and HTML conversion

## Support

If you encounter issues:

1. Check console output for specific errors
2. Review sample imported articles
3. Check image downloads in `public/images/blog-import/`
4. Test with `--limit=1` to debug single article

## Next Steps

After successful import:

1. ✅ Review imported markdown files
2. ✅ Test articles in dev server
3. ✅ Verify images display correctly
4. ✅ Check frontmatter accuracy
5. ✅ Create blog listing pages (if needed)
6. ✅ Move to production folders
7. ✅ Commit changes to git

---

**Script Location**: `scripts/import-webflow-csv.ts`
**Documentation**: This file
**Sprint**: Sprint 07 - Webflow Content Integration
