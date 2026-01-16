# Integration Approach Recommendation

**Date:** 2026-01-16
**Sprint:** 07 - Webflow Content Integration
**Decision:** CSV Import vs Webflow API

---

## Executive Summary

After researching both approaches, I recommend **starting with CSV import** for Sprint 07, with optional API integration as a Phase 2 enhancement.

**Reasoning:**
1. Faster implementation (4.5h vs 7h)
2. Simpler with fewer dependencies
3. Perfect for one-time migration scenario
4. No API authentication complexity
5. Easier to debug and validate

---

## Comparison Matrix

| Criteria | CSV Import | Webflow API | Winner |
|----------|-----------|-------------|--------|
| **Implementation Time** | 4.5 hours | 7 hours | CSV |
| **Complexity** | Low-Medium | Medium-High | CSV |
| **Dependencies** | 2 packages | 2 packages | Tie |
| **Authentication** | None | API token required | CSV |
| **Automation** | Manual export | Fully automated | API |
| **Rate Limits** | None | 60 req/min | CSV |
| **Network Required** | Images only | All requests | CSV |
| **Error Handling** | Simple | Complex (retries, throttling) | CSV |
| **Ongoing Sync** | Not possible | Yes | API |
| **One-Time Migration** | Perfect fit | Overengineered | CSV |
| **Data Freshness** | Static snapshot | Real-time | API |
| **Cost** | Free | May require plan upgrade | CSV |

---

## Recommended Implementation Strategy

### Phase 1: CSV Import (Sprint 07)
**Goal:** Get Webflow content into Next.js site quickly

**Deliverables:**
1. CSV import script (`scripts/import-webflow-csv.ts`)
2. Image download utility
3. HTML → Markdown converter
4. Frontmatter generator
5. Output to `src/content/blog-import/` for review
6. Documentation for running import

**Timeline:** 1 day implementation + 0.5 day testing

### Phase 2: API Integration (Future Sprint - Optional)
**Goal:** Enable ongoing content sync from Webflow

**Deliverables:**
1. API authentication setup
2. Collection fetching with pagination
3. Rate limiting and retry logic
4. Incremental sync (fetch only new/updated posts)
5. Scheduled cron job or manual command

**Timeline:** 1.5 days implementation + 0.5 day testing

**Trigger:** Only needed if content continues to be published in Webflow after migration

---

## Sprint 07 Scope Recommendation

### In Scope
- [x] CSV import script
- [x] Download images from URLs
- [x] Convert HTML to Markdown
- [x] Generate proper frontmatter matching our schema
- [x] Handle multi-language content (EN, ET, LV, UK)
- [x] Output to temporary import folder
- [x] Error handling for missing fields
- [x] Documentation and usage guide

### Out of Scope (Future Enhancements)
- [ ] Webflow API authentication
- [ ] Real-time sync from Webflow
- [ ] Incremental updates
- [ ] Image alt text fetching (CSV doesn't include it)
- [ ] Advanced rich text conversion (custom embeds)

---

## Technical Decisions

### 1. Output Directory Structure
```
src/content/blog-import/
├── article-1-en.md
├── article-1-et.md
├── article-2-en.md
└── article-2-et.md

public/images/blog-import/
├── article-1.jpg
├── article-2.jpg
└── article-3.avif
```

**Rationale:**
- Separate `blog-import/` folder allows review before production
- Easy to move to `blog/` when validated
- Image folder matches content folder naming

### 2. HTML to Markdown Conversion
**Tool:** `turndown` npm package

**Configuration:**
```typescript
const turndownService = new TurndownService({
  headingStyle: 'atx',           // Use # instead of underlines
  codeBlockStyle: 'fenced',      // Use ``` instead of indentation
  bulletListMarker: '-',         // Use - for lists
  emDelimiter: '*'               // Use * for emphasis
})
```

**Rationale:**
- Industry-standard converter
- Configurable output style
- Handles most HTML elements correctly
- Active maintenance

### 3. Frontmatter Schema Mapping

| Webflow Field | Target Frontmatter | Transform |
|---------------|-------------------|-----------|
| Name | title | Direct copy |
| Slug | slug | Direct copy |
| Published | date | Format to YYYY-MM-DD |
| Post Body | content | HTML → Markdown |
| Featured Image | image | Download + local path |
| Author | author | Direct copy or lookup |
| Tags | tags | Split CSV string → array |
| _draft_ | Skip file | Filter out drafts |
| _archived_ | Skip file | Filter out archived |

**Additional fields:**
- `lang` - Set from script argument (en, et, lv, uk)
- `description` - Use title as fallback (can edit manually)
- `category` - Default to "news" (can edit manually)
- `featured` - Default to false (can edit manually)

### 4. Error Handling Strategy

**Image Download Failures:**
```typescript
try {
  imagePath = await downloadImage(url, slug)
} catch (error) {
  console.error(`Failed to download ${url}:`, error)
  imagePath = '/images/blog/placeholder.jpg' // Fallback
}
```

**Missing Required Fields:**
```typescript
if (!row.Name || !row.Slug) {
  console.warn(`Skipping row: missing name or slug`)
  continue
}
```

**Invalid Dates:**
```typescript
const date = row.Published
  ? new Date(row.Published).toISOString().split('T')[0]
  : new Date().toISOString().split('T')[0] // Fallback to today
```

---

## Migration Workflow

### Step-by-Step Process

**1. Export from Webflow (Manual)**
- Open Webflow Designer
- Go to CMS → Blog Posts collection
- Click "..." → Export items
- Save as `webflow-blog-en.csv`, `webflow-blog-et.csv`, etc.

**2. Run Import Script**
```bash
# Install dependencies
npm install csv-parse turndown

# Run import for each language
npm run import-webflow ./webflow-blog-en.csv en
npm run import-webflow ./webflow-blog-et.csv et
```

**3. Review Generated Files**
- Check `src/content/blog-import/` for markdown files
- Check `public/images/blog-import/` for images
- Validate frontmatter matches schema
- Test one article in dev environment

**4. Fix Issues (If Any)**
- Edit markdown files manually
- Re-download failed images
- Adjust frontmatter values

**5. Move to Production**
```bash
# Move markdown files
mv src/content/blog-import/*.md src/content/blog/

# Move images
mv public/images/blog-import/* public/images/blog/

# Update image paths in markdown
# (or use script to find/replace paths)
```

**6. Commit & Deploy**
```bash
git add .
git commit -m "feat: import blog posts from Webflow"
git push
```

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Rich text doesn't convert cleanly | Medium | Medium | Manual review + edit after import |
| Image download fails | Medium | Low | Fallback to placeholder, retry manually |
| CSV format changes | Low | Low | Flexible parsing logic |
| Missing frontmatter data | Low | Medium | Sensible defaults, manual edit |
| Large file count (>100 posts) | Low | Medium | Batch processing, progress logging |
| Duplicate content (re-runs) | Medium | High | Clear `blog-import/` folder before re-run |

---

## Success Criteria

Sprint 07 is successful when:

1. **Script Works:**
   - [ ] Parses CSV without errors
   - [ ] Downloads all images successfully
   - [ ] Generates valid markdown files
   - [ ] Creates proper frontmatter

2. **Content Quality:**
   - [ ] At least 3 sample posts imported
   - [ ] Formatting preserved (headings, lists, bold, italic)
   - [ ] Images display correctly in Next.js dev server
   - [ ] Frontmatter matches our schema

3. **Documentation:**
   - [ ] README with usage instructions
   - [ ] Error handling documented
   - [ ] Example CSV provided

4. **Validation:**
   - [ ] Posts visible on blog listing page
   - [ ] Individual post pages render correctly
   - [ ] Images load without errors
   - [ ] Multilingual posts work (EN, ET)

---

## Future Enhancements (Out of Scope)

### If Content Continues in Webflow
1. **API Sync Script:**
   - Fetch new posts since last sync
   - Compare by date/slug
   - Update existing posts if modified

2. **Scheduled Sync:**
   - Cron job or GitHub Actions
   - Run weekly to pull new content
   - Auto-commit to repo

3. **Image Alt Text:**
   - Use API to fetch alt text separately
   - Backfill existing imports

### If Migrating Away from Webflow
1. **Content Editing in GitHub:**
   - Move to 100% markdown workflow
   - No need for API integration

2. **CMS Alternative:**
   - Netlify CMS, Decap CMS, or similar
   - Edit markdown files via GUI

---

## Decision: Approved for Sprint 07

**Approach:** CSV Import
**Estimated Time:** 1 day implementation + 0.5 day testing + 0.5 day buffer = 2 days
**Risk Level:** Low
**Complexity:** Low-Medium

**Next Steps:**
1. Create sprint plan with implementation checklist
2. Wait for owner approval
3. Implement CSV import script
4. Test with sample Webflow data
5. Document usage

---

## Questions for Owner

Before starting implementation:

1. **Content Source:** Do you have access to export CSV from Webflow CMS?
2. **Language Priority:** Which languages should we prioritize? (EN first?)
3. **Post Count:** Approximately how many blog posts exist?
4. **Content Updates:** Will new posts continue to be published in Webflow after migration?
5. **Image Storage:** Are we okay storing images in `public/images/blog/`?
6. **Review Process:** Should imported posts go to staging folder first or directly to `blog/`?

---

*Ready to create sprint plan upon approval.*
