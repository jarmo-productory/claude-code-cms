# Phase 3: Implementation Notes

**Date:** 2026-01-19
**Status:** In Progress

## Completed Tasks

### ✅ Phase 2: Planning
- [x] Sprint plan approved by owner (approval phrase: "Proceed")
- [x] CSV location confirmed: `/docs/webflow-migration/Agrello Web Master - Articles (1).csv`
- [x] Article counts verified: 274 total (en: 137, et: 84, lv: 53)

### ✅ Phase 3: Setup
- [x] Updated package.json with dependencies:
  - `csv-parse: ^5.6.0` - CSV parsing
  - `turndown: ^7.2.0` - HTML to Markdown conversion
  - `@types/turndown: ^5.0.5` - TypeScript types
- [x] Added npm script: `npm run import-webflow`
- [x] Created script file: `scripts/import-webflow-csv.ts`
- [x] Created documentation: `scripts/README-import.md`
- [x] Created example CSV: `scripts/example-webflow-export.csv`

## Implementation Details

### Script Architecture

**File:** `scripts/import-webflow-csv.ts` (558 lines)

**Key Components:**

1. **Types** (Lines 28-78)
   - `WebflowArticle`: CSV row structure
   - `BlogFrontmatter`: Output frontmatter structure
   - `ImportOptions`: CLI options
   - `ImportStats`: Import statistics

2. **Configuration** (Lines 83-87)
   - Output: `src/content/blog-import/`
   - Images: `public/images/blog-import/`
   - Downloaded images cache (deduplication)

3. **Utilities** (Lines 92-142)
   - `parseArgs()`: CLI argument parsing
   - `formatDate()`: Date string to YYYY-MM-DD
   - `parseBoolean()`: String to boolean
   - `parseTags()`: Semicolon-separated to array
   - `slugify()`: Text to URL-safe slug

4. **Image Handling** (Lines 147-217)
   - `downloadImage()`: Download from CDN with deduplication
   - `downloadInlineImages()`: Extract and download `<img>` tags
   - Supports both Webflow CDN domains
   - Caches downloaded URLs

5. **HTML to Markdown** (Lines 222-258)
   - `initTurndown()`: Configure TurndownService
   - Custom rule for YouTube embeds
   - `convertHtmlToMarkdown()`: HTML → Markdown

6. **Article Processing** (Lines 263-358)
   - `mapArticleToFrontmatter()`: CSV → frontmatter mapping
   - `processArticle()`: Main processing pipeline
   - `generateMarkdown()`: YAML frontmatter + content

7. **Main Import Logic** (Lines 363-475)
   - `importArticles()`: Orchestrates entire import
   - CSV parsing with validation
   - Filtering (archived, draft, locale)
   - Progress logging
   - Statistics and summary

### CLI Usage

```bash
# Basic import (all locales)
npm run import-webflow ./articles.csv

# Filter by locale
npm run import-webflow ./articles.csv --locale=en
npm run import-webflow ./articles.csv --locale=en,et

# Limit for testing
npm run import-webflow ./articles.csv --limit=5
```

### Output Structure

**Staging Folders:**
```
src/content/blog-import/
├── en/
│   ├── article-slug-1.md
│   └── article-slug-2.md
├── et/
│   └── ...
└── lv/
    └── ...

public/images/blog-import/
├── image-hash-1.png
├── image-hash-2.jpg
└── ...
```

**Markdown Format:**
```markdown
---
title: "Article Title"
slug: "article-slug"
metaTitle: "SEO Title"
description: "Meta description"
image: "/images/blog-import/main.png"
thumbnail: "/images/blog-import/thumb.png"
lang: "en"
date: "2024-01-15"
...
---

Markdown content here...
```

## Features Implemented

### ✅ CSV Parsing
- Uses `csv-parse` library
- Automatic header detection
- Trim whitespace
- Skip empty lines

### ✅ Image Download
- HTTP/HTTPS support
- Deduplication via URL cache
- Preserves original filenames (Webflow hashes)
- Graceful error handling (logs warning, continues)
- Progress tracking

### ✅ Inline Image Processing
- Regex to detect `<img src="...">`
- Only processes Webflow CDN URLs
- Replaces CDN URLs with local paths
- Handles before HTML→Markdown conversion

### ✅ HTML to Markdown
- TurndownService with custom rules
- Preserves: headers, lists, bold, italic, links
- Special handling for YouTube embeds
- Fallback: keeps raw HTML if conversion fails

### ✅ Frontmatter Mapping
- All 20 CSV columns mapped
- Date formatting (ISO 8601)
- Boolean parsing (true/false)
- Array parsing (semicolon-separated)
- Empty fields handled gracefully

### ✅ Multi-Language Support
- Single CSV with all locales
- Automatic locale detection
- Organized by locale folder
- CLI filter: `--locale=en,et,lv`

### ✅ Error Handling
- Missing CSV file: Exit with error
- Image download failure: Log warning, continue
- HTML conversion failure: Keep raw HTML
- Invalid dates: Use current date
- Missing required fields: Skip article
- File write errors: Throw and stop

### ✅ Progress Logging
- CSV reading status
- Articles found/filtered count
- Per-locale processing
- Per-article status (✓/✗)
- Final statistics summary

### ✅ Filtering
- Skip archived articles
- Skip draft articles
- Locale filter
- Required fields check (Name, Slug)
- Limit option for testing

## Documentation

### README-import.md
- Complete usage guide
- Step-by-step workflow
- CLI examples
- Output structure
- Field mapping table
- Troubleshooting guide
- Performance notes

### example-webflow-export.csv
- Reference CSV structure
- Shows all required columns
- Example HTML content
- Example image URLs

## Next Steps

### Phase 4: Testing

Need to:
- [ ] Install dependencies: `npm install`
- [ ] Run test import with limit: `npm run import-webflow ./docs/webflow-migration/Agrello... --limit=5`
- [ ] Review generated markdown files
- [ ] Check image downloads
- [ ] Verify HTML→Markdown conversion quality
- [ ] Test all locales (en, et, lv)

### Phase 5: Full Import

After testing:
- [ ] Clear staging folders
- [ ] Import all 274 articles
- [ ] Review output statistics
- [ ] Check for errors

### Phase 6: Manual Review

- [ ] Spot-check 5-10 articles per locale
- [ ] Verify image display
- [ ] Check frontmatter accuracy
- [ ] Review markdown formatting

## Technical Decisions

### Why staging folder?
- Owner requested manual review before publishing
- Prevents accidental overwrite of existing content
- Easy to re-run import without cleanup

### Why download images?
- Removes dependency on Webflow CDN
- Ensures content ownership
- Faster page loads (own CDN)
- No broken images if Webflow changes URLs

### Why Markdown?
- Already used in project (gray-matter)
- Git-friendly (diff tracking)
- Easy manual editing
- Platform-independent

### Why TypeScript?
- Type safety for CSV parsing
- Better IDE support
- Matches project stack
- Easier maintenance

## Potential Issues & Solutions

| Issue | Solution |
|-------|----------|
| Large CSV file | Stream parsing (future optimization) |
| Network failures | Retry logic (future enhancement) |
| Complex HTML widgets | Manual review after import |
| Duplicate slugs | Currently overwrites (could add counter) |
| Missing author slugs | Keep as-is, map in Next.js |

## Performance Estimates

Based on 274 articles:
- CSV parsing: ~1 second
- Image downloads: ~5-8 minutes (depends on network)
- HTML conversion: ~1-2 minutes
- File writes: ~10 seconds

**Total: ~7-12 minutes for full import**

## Code Quality

- ✅ TypeScript strict types
- ✅ Error handling on all I/O
- ✅ Progress logging
- ✅ Modular functions
- ✅ Clear comments
- ✅ CLI argument validation
- ✅ Graceful degradation

---

**Status:** Setup complete, ready for testing
**Next:** Install dependencies and run test import
