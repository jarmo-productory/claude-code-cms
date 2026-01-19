# Sprint 08: Blog Content SEO Optimization

**Created:** 2026-01-19
**Status:** Phase 1 - RESEARCH
**Approach:** Data-driven content migration based on Google Search Console performance

---

## Goal

Expand SEO footprint by analyzing Google Search Console data and strategically migrating high-performing blog content from the staging area (`blog-import/`) to production (`blog/`), targeting local keywords in Estonia, Latvia, and UK markets.

---

## Business Context

**Primary Objective:** SEO footprint expansion through data-driven content selection

**Target Markets:**
- Estonia (et)
- Latvia (lv)
- UK (en)

**Strategic Principle:** Blog is dedicated to high-quality content targeting longer user engagement. We will only publish content that demonstrates real search performance or has clear optimization potential.

**Data Source:** Google Search Console (primary) - provides keyword rankings, CTR, impressions, and country-specific data. GA4 is NOT the primary source as it lacks proper conversion tracking setup.

---

## Current Situation

**Content Status:**
- **Staging:** ~274 articles imported from Webflow in `src/content/blog-import/`
  - Estonian (et): ~84 articles
  - English (en): ~137 articles
  - Latvian (lv): ~53 articles
- **Production:** Only 2 starter articles in `src/content/blog/`
- **No published blog content** from the import yet

**Technical Setup:**
- Blog infrastructure exists and works (`/[locale]/blog`, `/[locale]/blog/[slug]`)
- Content loader supports both `blog/` and `blog-import/` folders
- Images downloaded to `public/images/blog-content/`

**Analytics Status:**
- GA4 lacks proper conversion tracking
- Google Search Console is primary data source
- Need 12-month historical data for analysis

---

## Success Criteria

- [ ] Google Search Console data obtained and analyzed (12-month period)
- [ ] Content categorization complete (winners, potential, long-tail, drop)
- [ ] At least 10 "winner" articles migrated to production
- [ ] At least 5 "potential" articles optimized and migrated
- [ ] SEO metadata validated on all migrated content
- [ ] Production blog shows measurable improvement in GSC metrics
- [ ] Documentation created for ongoing content migration workflow

---

## Data Requirements (BLOCKING Phase 2)

Before Phase 2 planning can be finalized, the owner must provide:

### Required Data Files

1. **Google Search Console Export - Performance by Page**
   - Period: Last 12 months
   - Path: Performance → Pages tab → Export CSV
   - Columns needed:
     - Page URL
     - Clicks
     - Impressions
     - CTR
     - Average Position
     - Countries (if available)

2. **Optional: Country-Specific Data**
   - GSC filtered by country (Estonia, Latvia, UK)
   - Same 12-month period
   - Export format: CSV

3. **Current Blog Inventory**
   - List of URLs currently live in production (if any)
   - Existing blog content structure

### Data Access Instructions for Owner

```
Google Search Console:
1. Go to search.google.com/search-console
2. Select property (agrello.io or agrello.ee)
3. Go to "Performance" in left sidebar
4. Click "Pages" tab
5. Set date range to "Last 12 months"
6. Click Export (top right) → Download CSV
7. Save as: gsc-performance-pages-12m.csv

Optional - Country Filter:
1. In Performance view, click "+ NEW"
2. Select "Country" filter
3. Add filter for Estonia, Latvia, UK separately
4. Export each as: gsc-{country}-12m.csv
```

---

## Content Categorization Strategy

Based on GSC data, articles will be sorted into 4 buckets:

### 1. WINNERS (Priority 1 - Immediate Migration)
**Criteria:**
- Average position: 1-10 (first page)
- Clicks: High volume (>50/month or top 20% of dataset)
- Action: Migrate to production immediately

**Why:** Already performing well, proven to attract traffic

### 2. POTENTIAL (Priority 2 - Optimize + Migrate)
**Criteria:**
- Average position: 11-30 (page 2-3)
- Impressions: High (showing in search results often)
- Low CTR: Not getting clicks despite visibility
- Action: Optimize metadata (title, description), then migrate

**Why:** Low-hanging fruit - already indexed, needs better presentation

### 3. LONG-TAIL (Priority 3 - Selective Migration)
**Criteria:**
- Average position: 1-10 (ranking well)
- Low volume: <20 clicks/month
- Action: Migrate for coverage if niche-relevant

**Why:** May attract qualified leads even with low volume

### 4. DROP (No Migration)
**Criteria:**
- Average position: >30 (page 4+)
- Low impressions: Not showing in search
- Action: Do not migrate to production

**Why:** Not performing, unlikely to improve without major rework

---

## Deliverables

| Deliverable | Description | Output Path |
|-------------|-------------|-------------|
| Data Analysis Report | GSC data analysis with content recommendations | `docs/sprints/sprint-08-.../research/gsc-analysis.md` |
| Content Inventory | Spreadsheet mapping articles to categories | `docs/sprints/sprint-08-.../research/content-inventory.csv` |
| Migration Script | Automated tool to move articles between folders | `scripts/migrate-blog-content.ts` |
| SEO Audit Script | Validate metadata completeness on migrated content | `scripts/audit-blog-seo.ts` |
| Migration Docs | Workflow for future content migrations | `docs/sprints/sprint-08-.../research/migration-workflow.md` |
| Performance Baseline | Pre-migration GSC metrics snapshot | `docs/sprints/sprint-08-.../research/baseline-metrics.md` |

---

## Implementation Checklist

### Phase 1: Research & Data Collection ⏳
- [ ] Owner provides GSC performance data (12 months)
- [ ] Owner provides country-specific data (optional)
- [ ] Analyze GSC data structure
- [ ] Count articles per category (winners/potential/long-tail/drop)
- [ ] Document current blog folder structure
- [ ] Identify any technical SEO issues in existing content
- [ ] Document findings in research folder

### Phase 2: Planning (BLOCKED until data provided)
- [ ] Finalize categorization thresholds based on actual data
- [ ] Create prioritized migration list
- [ ] Define metadata optimization strategy
- [ ] Plan migration automation approach
- [ ] Update sprint plan with specific article counts
- [ ] **Owner approval required** ⏸️

### Phase 3: Setup & Tooling (After Approval)
- [ ] Create migration script (`scripts/migrate-blog-content.ts`)
- [ ] Create SEO audit script (`scripts/audit-blog-seo.ts`)
- [ ] Create content inventory spreadsheet
- [ ] Test scripts on 2-3 sample articles

### Phase 4: Winners Migration
- [ ] Run SEO audit on winner articles
- [ ] Fix any metadata issues
- [ ] Migrate winner articles to production
- [ ] Verify images display correctly
- [ ] Test blog listing and individual pages
- [ ] Verify correct locale routing

### Phase 5: Potential Articles Optimization
- [ ] Identify optimization needs per article
- [ ] Improve meta titles (increase CTR)
- [ ] Improve meta descriptions (increase CTR)
- [ ] Verify keyword placement in frontmatter
- [ ] Migrate optimized articles
- [ ] Test in production

### Phase 6: Long-Tail Migration (Selective)
- [ ] Review long-tail articles for niche relevance
- [ ] Select articles worth migrating
- [ ] Migrate selected articles
- [ ] Document rationale for selections

### Phase 7: Testing & Validation
- [ ] Test blog listing page (all locales)
- [ ] Test individual article pages
- [ ] Verify image loading
- [ ] Check internal links
- [ ] Test related posts feature
- [ ] Lighthouse SEO audit
- [ ] Verify sitemap generation

### Phase 8: Documentation
- [ ] Document migration workflow
- [ ] Create ongoing content review process
- [ ] Document GSC monitoring approach
- [ ] Create runbook for future migrations

### Phase 9: Cleanup
- [ ] Remove debug code
- [ ] Clean up unused imports
- [ ] Archive unused scripts
- [ ] Update package.json scripts

### Phase 10: Validation
- [ ] Run qa-validator checks
- [ ] Test production build
- [ ] Verify no broken links
- [ ] Check Lighthouse scores (>90 for SEO)
- [ ] Document baseline metrics for future comparison

---

## Technical Approach

### Migration Script Architecture

```typescript
// scripts/migrate-blog-content.ts
interface MigrationConfig {
  category: 'winner' | 'potential' | 'long-tail'
  slugs: string[]  // List of articles to migrate
  locale: 'en' | 'et' | 'lv'
  optimize?: boolean  // Run SEO optimization
}

// Usage:
// npm run migrate-blog -- --category=winner --locale=en
// npm run migrate-blog -- --slugs=article-1,article-2 --optimize
```

**Migration Process:**
1. Read article from `blog-import/`
2. Validate frontmatter schema
3. Check for required fields (title, description, date, slug)
4. Optionally optimize metadata
5. Move markdown file to `blog/`
6. Update image references if needed
7. Log migration to tracking file
8. Generate migration report

### SEO Audit Script

```typescript
// scripts/audit-blog-seo.ts

interface SEOIssue {
  file: string
  severity: 'error' | 'warning'
  issue: string
  field: string
}

// Checks:
// - Required frontmatter fields present
// - Meta title length (50-60 chars ideal)
// - Meta description length (150-160 chars ideal)
// - Image paths valid
// - Date format correct
// - Slug matches filename
// - Keywords present
// - Tags and categories defined
```

**Audit Levels:**
- **ERROR:** Blocks migration (missing required fields)
- **WARNING:** Should be fixed but doesn't block (suboptimal lengths)

### Content Inventory Structure

```csv
slug,locale,title,current_folder,gsc_position,gsc_clicks,gsc_impressions,gsc_ctr,category,migration_status,notes
article-1,en,"Title",blog-import,5,120,1500,8.0%,winner,pending,"High performer"
article-2,et,"Title",blog-import,15,20,800,2.5%,potential,pending,"Optimize title"
```

**Columns:**
- GSC metrics (position, clicks, impressions, CTR)
- Categorization (winner/potential/long-tail/drop)
- Migration tracking (pending/migrated/skipped)
- Notes for manual decisions

---

## GSC Data Analysis Methodology

### Metric Definitions

**Position:** Average ranking in search results
- 1-10: First page (highly visible)
- 11-20: Second page (some visibility)
- 21-30: Third page (low visibility)
- 30+: Page 4+ (essentially invisible)

**Clicks:** Actual traffic received
- High volume = Working content
- Low volume despite good position = CTR problem

**Impressions:** How often page showed in search results
- High impressions + low clicks = CTR optimization opportunity
- Low impressions = Not ranking for valuable terms

**CTR (Click-Through Rate):** Clicks / Impressions
- Benchmark: 3-5% is average for organic results
- <2% = Poor title/description
- >5% = Good metadata

### Country-Specific Analysis

If country data available:
1. Compare performance across Estonia, Latvia, UK
2. Prioritize content performing well in target markets
3. Identify localization opportunities

### Threshold Calibration (After Data Received)

Initial thresholds (may adjust based on actual data distribution):

```
WINNER:
- Position ≤ 10 AND
- Clicks ≥ 50/month OR in top 20% of dataset

POTENTIAL:
- Position 11-30 AND
- Impressions ≥ 500/month AND
- CTR < 3%

LONG-TAIL:
- Position ≤ 10 AND
- Clicks < 50/month AND
- Niche-relevant content

DROP:
- Position > 30 OR
- Impressions < 100/month
```

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| GSC data unavailable or incomplete | High | Work with owner to export data; use alternative metrics if needed |
| Too many "winner" articles to migrate at once | Medium | Batch migration in groups of 10-15 |
| Metadata missing or poor quality | Medium | SEO audit script catches issues; manual review required |
| Image references break during migration | Low | Validation script checks image paths |
| Duplicate content between staging and production | Medium | Migration script checks for existing files |
| Performance degradation with more content | Low | Monitor build times; optimize if needed |

---

## Out of Scope (Future Sprints)

- Automated GSC API integration for ongoing monitoring
- Content refresh/update strategy for existing posts
- New content creation (vs. migration)
- Advanced keyword research for new topics
- Link building strategy
- Technical SEO site-wide improvements (structured data, etc.)
- Image optimization (WebP conversion, lazy loading)
- Blog category/tag taxonomy redesign

---

## Testing Strategy

### Pre-Migration Testing
- [ ] Verify blog listing page shows all locales correctly
- [ ] Test individual article rendering
- [ ] Check image loading from `blog-import/`

### Post-Migration Testing
- [ ] Verify migrated articles appear in listings
- [ ] Test article detail pages
- [ ] Check image paths resolve correctly
- [ ] Verify related posts work
- [ ] Test locale switching
- [ ] Validate sitemap includes new URLs
- [ ] Run Lighthouse audit

### SEO Validation
- [ ] Meta titles present and optimal length
- [ ] Meta descriptions present and optimal length
- [ ] Open Graph images set
- [ ] Canonical URLs correct
- [ ] Language alternates configured
- [ ] No broken internal links

---

## Timeline Estimate

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| **Phase 1: Research** | Data analysis, categorization | 3 hours |
| **Phase 2: Planning** | Finalize approach, get approval | 1 hour |
| **Phase 3: Setup** | Build migration & audit scripts | 3 hours |
| **Phase 4: Winners** | Migrate high-performers | 2 hours |
| **Phase 5: Potential** | Optimize & migrate | 4 hours |
| **Phase 6: Long-Tail** | Selective migration | 2 hours |
| **Phase 7: Testing** | Validation & QA | 2 hours |
| **Phase 8: Documentation** | Workflow docs | 1 hour |
| **Phase 9: Cleanup** | Code cleanup | 1 hour |
| **Phase 10: Validation** | QA checks | 1 hour |
| **Total** | | **20 hours (2.5 days)** |
| **Buffer** | Edge cases, optimization | 0.5 day |
| **Grand Total** | | **3 days** |

**Note:** Timeline begins after GSC data is provided by owner.

---

## Dependencies

**Blocking:**
- Google Search Console data export (owner responsibility)
- Sprint 07 completion (Webflow import must be done)

**Non-blocking:**
- GA4 setup (nice-to-have, not required)
- Country-specific GSC data (optional enhancement)

---

## Metrics for Success

### Baseline Metrics (Before Migration)
- Number of indexed blog pages in GSC
- Total clicks to blog section (12-month)
- Total impressions (12-month)
- Average position for blog URLs
- Number of keywords ranking top 10

### Target Metrics (After Sprint)
- +15-30 indexed blog pages (depending on winner count)
- Foundation for ongoing SEO monitoring
- Established workflow for data-driven content decisions
- SEO audit passing for all migrated content

**Long-term Goal:** Track improvement in GSC metrics over 3-6 months post-migration.

---

## Owner Questions (Phase 1 Checklist)

Before moving to Phase 2, we need answers to:

1. ✅ **GSC Access:** Can you access Google Search Console for agrello.io/agrello.ee?
2. ⏳ **Data Export:** Can you export 12-month performance data (instructions above)?
3. ⏳ **Country Data:** Can GSC be filtered by country (Estonia, Latvia, UK)?
4. ⏳ **Current Traffic:** What's the approximate monthly blog traffic today?
5. ⏳ **Priority Markets:** Should we prioritize one locale over others (en/et/lv)?
6. ⏳ **Content Approval:** Should all migrated content be reviewed before going live?
7. ⏳ **Drop Content:** What should we do with low-performing content in `blog-import/`?

---

## Current Phase: 1 (RESEARCH)

**Status:** WAITING FOR DATA

**Next Actions:**
1. Owner exports GSC performance data (12 months)
2. Owner provides country-specific data (optional)
3. Analyze data and categorize content
4. Count articles per category
5. Finalize Phase 2 plan with actual numbers
6. Request owner approval to proceed

**Data Delivery:**
Please place GSC export files in:
- `/Users/jarmotuisk/Projects/agrello/agrello-web/docs/sprints/sprint-08-blog-seo-optimization/data/`

Expected files:
- `gsc-performance-pages-12m.csv`
- `gsc-estonia-12m.csv` (optional)
- `gsc-latvia-12m.csv` (optional)
- `gsc-uk-12m.csv` (optional)

---

## Approval

- [ ] Owner reviewed sprint plan
- [ ] Owner confirmed data-driven approach
- [ ] Owner provided GSC data
- [ ] Owner approved implementation start

**Approval Status:** ⏸️ PENDING DATA

---

*Phase 1: Research - In Progress (Waiting for GSC data)*
