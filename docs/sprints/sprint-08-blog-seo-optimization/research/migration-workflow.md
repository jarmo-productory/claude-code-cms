# Blog Content Migration Workflow

**Purpose:** Standardized process for moving blog articles from staging to production based on SEO performance data.

**Owner:** Sprint 08 - Blog SEO Optimization
**Date:** 2026-01-19

---

## Overview

This workflow ensures only high-quality, SEO-performing content is published to production, maintaining the blog's strategic focus on valuable long-form content.

---

## Principles

1. **Data-Driven:** Decisions based on Google Search Console metrics
2. **Quality Over Quantity:** Better to publish 20 great articles than 100 mediocre ones
3. **Continuous Optimization:** Improve metadata before publishing
4. **Trackable:** Every migration is logged for future analysis
5. **Reversible:** Can move content back to staging if needed

---

## Workflow Steps

### Step 1: Data Collection (Monthly/Quarterly)

**Frequency:** Every 3 months or before major content pushes

**Process:**

1. Export GSC performance data (12-month period)
   - Go to GSC → Performance → Pages
   - Export CSV
2. Save to `docs/sprints/sprint-XX/data/gsc-export-YYYY-MM-DD.csv`
3. Optional: Export country-specific data for target markets

**Deliverable:** Raw CSV file with performance metrics

---

### Step 2: Data Analysis

**Tool:** Spreadsheet or custom analysis script

**Process:**

1. Import GSC data to spreadsheet
2. Match URLs to article slugs in `blog-import/`
3. Calculate performance scores:
   - High clicks + good position = Winner
   - High impressions + poor CTR = Potential
   - Good position + low volume = Long-tail
   - Poor position + low impressions = Drop
4. Sort articles by category and priority

**Deliverable:** Content inventory spreadsheet with categorization

**Columns:**

```
slug | locale | title | folder | position | clicks | impressions | ctr | category | status | notes
```

---

### Step 3: SEO Audit

**Tool:** `npm run audit-blog-seo`

**Process:**

1. Run audit on target articles:
   ```bash
   npm run audit-blog-seo -- --category=winner
   ```
2. Review audit report for issues:
   - Missing required fields
   - Suboptimal meta title length
   - Suboptimal description length
   - Missing keywords
   - Broken image paths
3. Fix critical issues (ERRORS)
4. Note warnings for optimization

**Deliverable:** SEO audit report with pass/fail per article

**Criteria:**

- ✅ PASS: All required fields present, optimal lengths
- ⚠️ WARNING: Some optimizations recommended
- ❌ FAIL: Missing required fields, blocks migration

---

### Step 4: Optimization (For "Potential" Category)

**Goal:** Improve CTR for articles that rank but don't get clicks

**Process:**

1. **Meta Title Optimization**
   - Current: "10 reasons to choose Agrello"
   - Optimized: "10 Reasons to Choose Agrello for Contract Management"
   - Rules:
     - Include target keyword
     - 50-60 characters ideal
     - Front-load important terms
     - Add emotional trigger or number

2. **Meta Description Optimization**
   - Current: "Agrello offers many benefits..."
   - Optimized: "Discover why Agrello is the best contract management platform for your business. Streamline workflows, save time, and increase efficiency. Learn more."
   - Rules:
     - 150-160 characters ideal
     - Include target keyword
     - Include call-to-action
     - Answer "what's in it for me?"

3. **Keyword Validation**
   - Ensure primary keyword in:
     - Meta title
     - Meta description
     - First paragraph of content
     - At least one H2 heading

**Tools:**

- Manual editing in markdown frontmatter
- Optional: AI assistance for rewriting

**Deliverable:** Updated markdown files with optimized metadata

---

### Step 5: Migration

**Tool:** `npm run migrate-blog`

**Process:**

**For Winner Articles (no optimization needed):**

```bash
npm run migrate-blog -- --category=winner --locale=en
```

**For Potential Articles (with optimization):**

```bash
npm run migrate-blog -- --slugs=article-1,article-2 --optimize
```

**For Selective Long-tail:**

```bash
npm run migrate-blog -- --slugs=specific-article --locale=et
```

**What the script does:**

1. Validates source file exists in `blog-import/`
2. Runs SEO audit
3. Checks for duplicates in `blog/`
4. Copies file from `blog-import/` to `blog/`
5. Verifies image paths
6. Updates migration log
7. Outputs summary report

**Deliverable:** Migrated markdown files in `src/content/blog/`

---

### Step 6: Testing

**Process:**

1. Start dev server:
   ```bash
   npm run dev
   ```
2. Navigate to blog listing: `http://localhost:3000/en/blog`
3. Verify migrated articles appear
4. Click through to individual articles
5. Check:
   - Images load correctly
   - Formatting looks good
   - Related posts work
   - No console errors
6. Test all locales (en, et, lv)
7. Test on mobile viewport

**Deliverable:** Validated articles displaying correctly

---

### Step 7: Production Deployment

**Process:**

1. Commit changes:
   ```bash
   git add src/content/blog/
   git commit -m "chore: migrate 15 winner blog articles based on GSC data"
   ```
2. Run QA validator:
   ```bash
   # Will be invoked automatically per sprint process
   ```
3. Push to production:
   ```bash
   git push origin master
   ```
4. Verify on production site
5. Check GSC indexing status (may take 1-2 weeks)

**Deliverable:** Content live on production site

---

### Step 8: Tracking & Monitoring

**Setup:** Create tracking spreadsheet

**Columns:**

```
migration_date | slug | locale | category | pre_clicks | pre_position | notes
```

**Process:**

1. Record baseline metrics before migration
2. Wait 4-6 weeks for GSC to show results
3. Export new GSC data
4. Compare pre/post metrics:
   - Did clicks increase?
   - Did position improve?
   - Did impressions grow?
5. Document learnings

**Frequency:** Monthly check-ins for 3 months post-migration

**Deliverable:** Performance comparison report

---

## Migration Script Details

### Script: `scripts/migrate-blog-content.ts`

**Usage:**

```bash
# Migrate by category
npm run migrate-blog -- --category=winner --locale=en

# Migrate specific articles
npm run migrate-blog -- --slugs=article-1,article-2,article-3

# Migrate with optimization flag
npm run migrate-blog -- --category=potential --optimize

# Dry run (preview only)
npm run migrate-blog -- --category=winner --dry-run
```

**Options:**

- `--category`: Filter by category (winner, potential, long-tail)
- `--locale`: Filter by language (en, et, lv)
- `--slugs`: Comma-separated list of specific articles
- `--optimize`: Run metadata optimization before migration
- `--dry-run`: Show what would be migrated without actually moving files
- `--force`: Overwrite if file exists in destination

**Output:**

```
✅ Migrated: article-1-en.md (winner)
✅ Migrated: article-2-en.md (winner)
⚠️  Skipped: article-3-en.md (already exists)
❌ Failed: article-4-en.md (missing required field: description)

Summary:
- Migrated: 2
- Skipped: 1
- Failed: 1
```

**Log File:** `docs/sprints/sprint-XX/migration-log.csv`

---

## SEO Audit Script Details

### Script: `scripts/audit-blog-seo.ts`

**Usage:**

```bash
# Audit all articles in staging
npm run audit-blog-seo

# Audit specific folder
npm run audit-blog-seo -- --folder=blog-import

# Audit specific locale
npm run audit-blog-seo -- --locale=en

# Audit specific articles
npm run audit-blog-seo -- --slugs=article-1,article-2

# Output JSON format
npm run audit-blog-seo -- --format=json
```

**Checks:**

**ERRORS (blocks migration):**

- ❌ Missing required field: `title`
- ❌ Missing required field: `slug`
- ❌ Missing required field: `description`
- ❌ Missing required field: `date`
- ❌ Missing required field: `lang`
- ❌ Invalid date format
- ❌ Image path doesn't exist

**WARNINGS (should fix):**

- ⚠️ Meta title too short (<40 chars)
- ⚠️ Meta title too long (>70 chars)
- ⚠️ Description too short (<120 chars)
- ⚠️ Description too long (>170 chars)
- ⚠️ Missing keywords field
- ⚠️ Tags array empty
- ⚠️ No featured image

**Output:**

```
Auditing 137 articles in blog-import/en/...

✅ article-1-en.md (PASS)
⚠️  article-2-en.md (2 warnings)
    - Meta title too short: 35 chars (recommend 50-60)
    - Missing keywords field
❌ article-3-en.md (FAILED)
    - Missing required field: description

Summary:
- Passed: 120
- Warnings: 15
- Failed: 2
```

---

## Decision Matrix

Use this matrix to decide what to do with each article:

| GSC Metrics                               | Category  | Action                 | Priority |
| ----------------------------------------- | --------- | ---------------------- | -------- |
| Position 1-10, Clicks >50                 | Winner    | Migrate immediately    | 1        |
| Position 11-30, Impressions >500, CTR <3% | Potential | Optimize → Migrate     | 2        |
| Position 1-10, Clicks <50, Niche-relevant | Long-tail | Selective migrate      | 3        |
| Position >30, Impressions <100            | Drop      | Do not migrate         | N/A      |
| No GSC data                               | Unknown   | Manual review required | ?        |

**Special Cases:**

- **Seasonal content:** Migrate before relevant season
- **Product updates:** Update content before migration
- **Outdated features:** Archive or rewrite
- **Duplicate topics:** Choose best-performing version

---

## Rollback Process

If an article needs to be unpublished:

```bash
# Move back to staging
mv src/content/blog/article-name-en.md src/content/blog-import/

# Or delete entirely
rm src/content/blog/article-name-en.md

# Commit
git add src/content/blog/
git commit -m "chore: unpublish article-name (reason)"
git push
```

**When to rollback:**

- Content factually incorrect
- Legal/compliance issue
- Receives negative feedback
- Cannibalizes better-performing content
- No longer aligned with brand messaging

---

## Best Practices

### Content Selection

- ✅ Start with clear winners (high traffic)
- ✅ Optimize "potential" articles before publishing
- ✅ Be selective with long-tail content
- ❌ Don't migrate everything "just because"
- ❌ Don't publish content you wouldn't link to

### Metadata Optimization

- ✅ Include target keyword in title
- ✅ Use numbers in titles when possible ("10 Ways...")
- ✅ Front-load important words in title
- ✅ Write descriptions that entice clicks
- ✅ Test different titles if CTR is low
- ❌ Don't keyword-stuff
- ❌ Don't use clickbait that doesn't match content

### Testing

- ✅ Test on dev before committing
- ✅ Check all locales
- ✅ Verify images load
- ✅ Test on mobile
- ❌ Don't skip validation steps
- ❌ Don't deploy without QA check

### Monitoring

- ✅ Track baseline metrics before migration
- ✅ Check GSC monthly for changes
- ✅ Document what works/doesn't work
- ✅ Iterate on metadata if CTR is low
- ❌ Don't "set and forget"
- ❌ Don't panic if results take time (4-6 weeks)

---

## Troubleshooting

### Issue: Article doesn't appear on blog listing

**Possible causes:**

- File not in correct folder (`blog/` vs `blog-import/`)
- Incorrect locale in frontmatter
- Missing required fields
- Build cache issue

**Solutions:**

1. Verify file location: `ls src/content/blog/article-name-en.md`
2. Check frontmatter `lang` field matches locale folder
3. Run SEO audit to check for missing fields
4. Clear Next.js cache: `rm -rf .next && npm run dev`

---

### Issue: Images not loading

**Possible causes:**

- Image path still using `./images/` relative path
- Image file doesn't exist in `public/images/blog-content/`
- Incorrect image filename

**Solutions:**

1. Check frontmatter image path: should be `/images/blog-content/file.png`
2. Verify image exists: `ls public/images/blog-content/file.png`
3. Check content HTML for relative paths (should be transformed)
4. Re-run migration script with image validation

---

### Issue: Migration script fails

**Possible causes:**

- Source file doesn't exist
- Destination file already exists
- Permission issues
- Validation errors

**Solutions:**

1. Check error message for specific issue
2. Verify source file: `ls src/content/blog-import/article-name.md`
3. Use `--dry-run` flag to preview migration
4. Use `--force` flag to overwrite existing files (caution)
5. Run SEO audit first to catch validation errors

---

### Issue: GSC shows old URL instead of new one

**Cause:** Google hasn't re-crawled and re-indexed the page yet

**Solutions:**

1. Wait 1-2 weeks for natural re-crawling
2. Request indexing via GSC:
   - Go to GSC → URL Inspection
   - Enter new URL
   - Click "Request Indexing"
3. Submit sitemap if not already done
4. Check for 301 redirects if URL structure changed

---

## Future Enhancements

**Potential additions to workflow:**

1. **Automated GSC Sync**
   - Script to pull GSC data via API
   - Auto-update content inventory
   - Email alerts for ranking changes

2. **A/B Testing**
   - Test different titles/descriptions
   - Track which versions perform better
   - Iterate on metadata

3. **Content Refresh**
   - Identify stale content (>2 years old)
   - Update statistics and facts
   - Re-optimize for current keywords

4. **Internal Linking**
   - Auto-suggest related articles
   - Add contextual links to high-authority pages
   - Build topic clusters

5. **Structured Data**
   - Add Article schema to blog posts
   - Include author information
   - Add breadcrumbs

---

## Checklist: Before Migration

Use this checklist before running migration script:

- [ ] GSC data exported and analyzed
- [ ] Content inventory spreadsheet created
- [ ] Articles categorized (winner/potential/long-tail/drop)
- [ ] SEO audit run on target articles
- [ ] Critical errors fixed
- [ ] Metadata optimized (for "potential" articles)
- [ ] Dev environment tested
- [ ] Migration script dry-run executed
- [ ] QA validator ready to run
- [ ] Owner approval received (for first batch)

---

## Checklist: After Migration

- [ ] Articles appear on blog listing page
- [ ] Individual article pages render correctly
- [ ] Images load properly
- [ ] Related posts display
- [ ] No console errors
- [ ] Mobile display tested
- [ ] All locales tested
- [ ] QA validator passed
- [ ] Changes committed and pushed
- [ ] Production site verified
- [ ] Migration logged in tracking spreadsheet
- [ ] Baseline metrics recorded for monitoring

---

_Living document - Update as workflow evolves_
