# Sprint 07: Webflow Content Integration

**Created:** 2026-01-16
**Status:** Phase 1 - RESEARCH COMPLETE
**Approach:** CSV Import (API integration deferred to future sprint)

---

## Goal

Import blog articles from Webflow CMS into the Next.js site using CSV export, including downloading all associated images and converting rich text HTML to markdown format.

---

## Research Summary

**Phase 1 Complete:** Investigated two approaches:

1. **Webflow API** - Direct API integration for automated sync
   - Pros: Real-time, automated, supports pagination
   - Cons: Complex (7h), rate limits, API token management
   - Use case: Ongoing content sync

2. **CSV Import** - Manual export from Webflow, scripted import
   - Pros: Simple (4.5h), no auth, no rate limits, perfect for migration
   - Cons: Manual export step, no automation
   - Use case: One-time migration

**Decision:** CSV Import for Sprint 07 (API can be added later if needed)

See detailed research:
- `/docs/sprints/sprint-07-webflow-content-integration/research/webflow-api-research.md`
- `/docs/sprints/sprint-07-webflow-content-integration/research/csv-import-research.md`
- `/docs/sprints/sprint-07-webflow-content-integration/research/recommendation.md`

---

## Success Criteria

- [x] Research both integration approaches (COMPLETE)
- [ ] CSV import script successfully parses Webflow export
- [ ] All images download from Webflow CDN URLs
- [ ] HTML content converts to clean markdown
- [ ] Frontmatter matches our blog post schema
- [ ] At least 3 sample posts imported and displayed correctly
- [ ] Documentation provided for running the import

---

## Deliverables

| Deliverable | Description | Output Path |
|-------------|-------------|-------------|
| Import Script | TypeScript script to parse CSV and generate markdown | `scripts/import-webflow-csv.ts` |
| Image Downloader | Downloads images from Webflow CDN URLs | (included in script) |
| HTML Converter | Converts Webflow rich text to markdown | (uses `turndown` package) |
| Content Output | Imported blog posts (markdown + frontmatter) | `src/content/blog-import/` |
| Image Output | Downloaded blog images | `public/images/blog-import/` |
| Usage Docs | Instructions for running import | `scripts/README-import.md` |
| Example CSV | Sample CSV structure for reference | `scripts/example-webflow-export.csv` |

---

## Implementation Checklist

### Phase 1: Research ✅
- [x] Research Webflow API capabilities
- [x] Research Webflow CSV export format
- [x] Evaluate both approaches
- [x] Make recommendation
- [x] Document findings

### Phase 2: Planning (Current)
- [x] Create sprint plan
- [ ] **Owner approval required** ⚠️
- [ ] Define exact CSV field mappings
- [ ] Confirm output directory structure

### Phase 3: Setup
- [ ] Install dependencies (`csv-parse`, `turndown`)
- [ ] Create script file structure
- [ ] Create output directories
- [ ] Add npm script command

### Phase 4: Core Implementation
- [ ] CSV parsing logic
- [ ] Image download function with error handling
- [ ] HTML to Markdown converter setup
- [ ] Frontmatter generator
- [ ] Main import orchestration function

### Phase 5: Multi-Language Support
- [ ] Language parameter handling (en, et, lv, uk)
- [ ] Language-specific filename generation
- [ ] Locale validation

### Phase 6: Error Handling
- [ ] Image download retry logic
- [ ] Missing field handling (fallbacks)
- [ ] Invalid date handling
- [ ] Skip archived/draft posts
- [ ] Progress logging

### Phase 7: Testing
- [ ] Create sample CSV with test data
- [ ] Test import with 3+ sample posts
- [ ] Verify markdown output quality
- [ ] Test in Next.js dev server
- [ ] Verify images display correctly
- [ ] Test multi-language posts

### Phase 8: Documentation
- [ ] Write usage instructions
- [ ] Document CSV format requirements
- [ ] Add troubleshooting guide
- [ ] Create example CSV
- [ ] Document npm command usage

### Phase 9: Cleanup
- [ ] Remove debug logging
- [ ] Add TypeScript types
- [ ] Code review and refactoring
- [ ] Update package.json scripts

### Phase 10: Validation
- [ ] Run qa-validator checks
- [ ] Test production build
- [ ] Verify no broken imports
- [ ] Check lighthouse scores

---

## Technical Approach

### Dependencies
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

### Script Architecture
```
scripts/
├── import-webflow-csv.ts      # Main import script
├── README-import.md           # Usage documentation
└── example-webflow-export.csv # Sample CSV structure
```

### Data Flow
```
Webflow Export CSV
       ↓
Parse CSV (csv-parse)
       ↓
For each row:
  ├─→ Download image (fetch)
  ├─→ Convert HTML to Markdown (turndown)
  └─→ Generate frontmatter + content
       ↓
Write to file system:
  ├─→ src/content/blog-import/{slug}-{lang}.md
  └─→ public/images/blog-import/{slug}.{ext}
```

### Frontmatter Mapping (Based on Actual CSV Analysis)

**Source:** `Agrello Web Master - Articles (1).csv`
**Total:** 274 articles | **en:** 137 | **et:** 84 | **lv:** 53

| CSV Column | Frontmatter Field | Transform |
|------------|-------------------|-----------|
| Name | title | Direct copy |
| Slug | slug | Direct copy |
| Meta Title | metaTitle | Direct copy (SEO) |
| Meta Description | description | Direct copy |
| Keyword | keyword | Direct copy |
| Main Image (1200x630) | image | Download CDN → local path |
| Thumbnail image (520x273) | thumbnail | Download CDN → local path |
| Locale | lang | Direct (en, et, lv) |
| Topic | topic | Direct copy |
| Sub-topic | subTopic | Direct copy |
| Publish date | date | Parse JS date → YYYY-MM-DD |
| Post Summary | excerpt | Direct copy |
| Reading time | readingTime | Direct copy |
| Post Body | *content* | HTML → Markdown |
| Author | author | Direct copy (slug: paula-sepp) |
| Support only | supportOnly | Boolean |
| Featured on category page | featured | Boolean |
| Keyword cluster | keywordCluster | Direct copy |
| Tag | tags | Split by `;` → array |
| Categories | categories | Split by `;` → array |

**Skipped:** Collection ID, Item ID, Created On, Updated On, Published On
**Filtered out:** Archived=true, Draft=true

### Multi-Language Structure

**Important:** All languages are in the SAME Webflow collection, separated by `Locale` field.

- Single CSV export contains all 274 articles (3 locales)
- Script groups by `Locale` field (en, et, lv)
- Each article generates `{slug}.md` in locale folder: `content/blog/{locale}/{slug}.md`
- Images downloaded once per unique URL (shared across locales)

### Image Handling

Images are hosted on Webflow CDN:
- `cdn.prod.website-files.com/...`
- `uploads-ssl.webflow.com/...`

**Two types of images to handle:**

#### 1. Featured Images (CSV columns)
- `Main Image (1200x630)` → frontmatter `image`
- `Thumbnail image (520x273)` → frontmatter `thumbnail`

**Strategy:**
1. Extract URL from CSV column
2. Download to `public/images/blog-import/{filename}`
3. Reference in frontmatter as `/images/blog-import/{filename}`

#### 2. Inline Images (inside Post Body HTML)
- Images embedded in article content: `<img src="https://cdn...">`
- Must be extracted, downloaded, and URLs replaced

**Strategy:**
1. Scan Post Body HTML for all `<img src="...">` tags
2. Download each image to `public/images/blog-import/`
3. Replace CDN URLs with local paths in HTML
4. Then convert HTML → Markdown

```typescript
// Example: Inline image extraction
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
for (const match of postBody.matchAll(imgRegex)) {
  const cdnUrl = match[1];
  const localPath = await downloadImage(cdnUrl);
  postBody = postBody.replace(cdnUrl, localPath);
}
```

#### Deduplication
- Track downloaded URLs to avoid re-downloading
- Same image used in multiple articles → download once
- Use URL hash or filename as unique key

---

## File Structure After Import

**Staging folder** - content requires manual review before publishing.

```
src/content/blog-import/          ← STAGING (not live)
├── en/
│   ├── 10-reasons-to-choose-agrello-as-a-contract-management-solution.md
│   ├── 3-success-stories-how-to-get-contracts-signed-faster.md
│   └── ... (137 files)
├── et/
│   ├── 10-pohjust-miks-valida-agrello-oma-lepingute-digitaalseks-haldamiseks.md
│   └── ... (84 files)
└── lv/
    └── ... (53 files)

public/images/blog-import/        ← STAGING images
├── 62ecea1458b878e98e3b...jpg
├── 63490211cca3e6cc28af...jpg
└── ... (unique images from CDN)
```

### Publishing Workflow

After review, move approved content to production:
```bash
# Move all approved articles
mv src/content/blog-import/* src/content/blog/

# Move images
mv public/images/blog-import/* public/images/blog/
```

---

## Usage Example

```bash
# Step 1: Export from Webflow (single CSV with all locales)
# CMS → Blog Posts → ... → Export items → Save as webflow-blog.csv

# Step 2: Run import script (processes all locales automatically)
npm install  # Install dependencies (first time only)
npm run import-webflow ./webflow-blog.csv

# Optional: Filter to specific locale(s)
npm run import-webflow ./webflow-blog.csv --locale=en
npm run import-webflow ./webflow-blog.csv --locale=en,et

# Step 3: Review staging output
ls -la src/content/blog-import/en/
ls -la src/content/blog-import/et/
ls -la src/content/blog-import/lv/
ls -la public/images/blog-import/

# Step 4: Preview articles (optional - build preview page)
npm run dev
# Review markdown files manually or via preview tool

# Step 5: Publish approved content (manual step)
mv src/content/blog-import/en/* src/content/blog/en/
mv src/content/blog-import/et/* src/content/blog/et/
mv src/content/blog-import/lv/* src/content/blog/lv/
mv public/images/blog-import/* public/images/blog/
```

---

## Error Handling Strategy

| Error Type | Handling |
|------------|----------|
| Image download fails | Log warning, use placeholder image |
| Missing required field (Name/Slug) | Skip row, log warning |
| Invalid date format | Use current date as fallback |
| HTML conversion fails | Keep as raw HTML, log warning |
| File write fails | Throw error and stop (prevents partial import) |
| Duplicate slugs | Append `-2`, `-3` to filename |

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Complex rich text doesn't convert cleanly | Medium | Manual review after import, document known issues |
| Large number of posts (>100) | Low | Batch processing with progress logs |
| Webflow CSV format changes | Low | Flexible field mapping, validate columns |
| Network failures during image download | Medium | Retry logic, resume capability |
| Duplicate content on re-runs | Medium | Clear output directory before import |

---

## Out of Scope (Future Enhancements)

- Webflow API integration for automated sync
- Incremental updates (only fetch new posts)
- Image alt text fetching (CSV doesn't include it)
- Custom embed handling (YouTube, Twitter, etc.)
- Scheduled/automated imports via cron
- Image optimization during download

---

## Testing Checklist

### Unit Tests (Manual)
- [ ] Parse sample CSV with 3 rows
- [ ] Download 1 test image
- [ ] Convert sample HTML to markdown
- [ ] Generate frontmatter for 1 post

### Integration Tests
- [ ] Import 5 posts (mixed EN/ET)
- [ ] Verify all images downloaded
- [ ] Check markdown syntax validity
- [ ] Validate frontmatter YAML

### End-to-End Tests
- [ ] Import full CSV export
- [ ] View posts in Next.js dev server
- [ ] Test blog listing page
- [ ] Test individual post pages
- [ ] Verify images render correctly
- [ ] Check multi-language switching

---

## Approval Requirements

**Phase 2 → 3 Gate:** Owner must approve this sprint plan

**Approval confirms:**
1. CSV import approach is acceptable (vs API integration)
2. Output directory structure is correct
3. Frontmatter schema mapping is accurate
4. Error handling strategy is sufficient
5. Testing scope is adequate

**Owner Questions:**
1. Do you have access to export CSV from Webflow CMS?
2. Which languages should we prioritize for testing?
3. Approximately how many blog posts need to be imported?
4. Should imported posts go to temporary folder first for review?
5. Are there any custom Webflow fields we need to handle?

---

## Timeline Estimate

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| Setup | Dependencies, file structure | 30 min |
| Core Implementation | CSV parsing, image download, markdown conversion | 2 hours |
| Multi-language | Language handling | 30 min |
| Error Handling | Retries, fallbacks, logging | 1 hour |
| Testing | Sample imports, validation | 1 hour |
| Documentation | Usage guide, examples | 1 hour |
| **Total** | | **6 hours (1 day)** |
| Buffer | Testing & fixes | 0.5 day |
| **Grand Total** | | **1.5 days** |

---

## Current Phase: 2 (PLAN)

**Status:** Waiting for owner approval

**Next Actions:**
1. Owner reviews this plan
2. Owner confirms CSV export capability
3. Owner approves with "approved", "proceed", or "go ahead"
4. Sprint transitions to Phase 3 (DEVELOP)

**Blocked:** Cannot proceed to implementation without approval ⚠️

---

## Approval

- [ ] Owner reviewed sprint plan
- [ ] Owner confirmed CSV import approach
- [ ] Owner approved implementation start

**Approval Status:** PENDING

---

*Sprint Plan Ready for Review - Awaiting Approval*
