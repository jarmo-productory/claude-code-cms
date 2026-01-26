# Current State Analysis - Blog Content & Infrastructure

**Date:** 2026-01-19  
**Sprint:** 08 - Blog SEO Optimization  
**Phase:** 1 - Research

---

## Content Inventory

### Staging Area (`src/content/blog-import/`)

**Total Articles Imported:** ~274 (from Sprint 07 Webflow migration)

**Breakdown by Locale:**

- English (en): ~137 articles
- Estonian (et): ~84 articles
- Latvian (lv): ~53 articles

**Sample Article Structure:**  
\`\`\`markdown

x

![](./images/image-1768819826443.png) \*\*Sample Files:\*\* - \`/src/content/blog-import/10-pohjust-miks-valida-agrello-oma-lepingute-digitaalseks-haldamiseks-et.md\` - \`/src/content/blog-import/5-head-nippi-kuidas-lepinguid-nutikamalt-allkirjastada-et.md\` - \`/src/content/blog-import/3-veiksmes-stasti-ka-parakstit-ligumus-atrak-lv.md\` ### Production Area (\`src/content/blog/\`) \*\*Published Articles:\*\* 2 starter articles only - \`getting-started-en.md\` - \`getting-started-et.md\` \*\*Observation:\*\* No imported content has been migrated to production yet. --- ## Technical Infrastructure ### Blog Pages \*\*List Page:\*\* \`/src/app/\[locale\]/blog/page.tsx\` - Fetches posts via \`getBlogPosts(locale)\` - Displays title, date, description - Links to individual posts - Currently functional but showing only 2 starter posts \*\*Detail Page:\*\* \`/src/app/\[locale\]/blog/\[slug\]/page.tsx\` - Fetches single post via \`getBlogPost(slug, locale)\` - Renders markdown content as HTML - Includes related posts - SEO metadata generation ### Content Loader (\`src/lib/content.ts\`) \*\*Key Functions:\*\* - \`getBlogPosts(lang)\` - Fetches all posts for a locale, sorted by date - \`getBlogPost(slug, lang)\` - Fetches single post - \`getRelatedPosts()\` - Finds related content by tags - \`markdownToHtml()\` - Converts markdown to HTML with GFM support \*\*Image Path Handling:\*\* - Transforms \`./images/file.png\` → \`/images/blog-content/file.png\` - Applies to both markdown images and HTML \`<img>\` tags - Frontmatter images also transformed \*\*Current Limitation:\*\* - Only reads from \`src/content/blog/\` directory - Does NOT read from \`src/content/blog-import/\` unless explicitly configured ### Image Storage \*\*Location:\*\* \`/public/images/blog-content/\` - Contains images downloaded during Webflow import (Sprint 07) - Mapped from Webflow CDN URLs - Accessible via \`/images/blog-content/\` path --- ## Frontmatter Schema ### Current Fields Available (from Webflow Import) | Field | Type | Purpose | Required | |-------|------|---------|----------| | \`title\` | string | Article title | Yes | | \`slug\` | string | URL slug | Yes | | \`metaTitle\` | string | SEO title tag | No (falls back to title) | | \`description\` | string | Meta description | Yes | | \`keyword\` | string | Primary keyword(s) | No | | \`image\` | string | Featured image | Yes | | \`thumbnail\` | string | Thumbnail image | No | | \`lang\` | 'en'\\|'et'\\|'lv' | Locale | Yes | | \`date\` | string | Publish date (YYYY-MM-DD) | Yes | | \`excerpt\` | string | Short summary | No | | \`readingTime\` | string | Minutes to read | No | | \`author\` | string | Author slug | Yes | | \`supportOnly\` | boolean | Internal content flag | No | | \`featured\` | boolean | Show on category page | No | | \`tags\` | string\[\] | Content tags | No (empty array ok) | | \`categories\` | string\[\] | Content categories | No (empty array ok) | | \`keywordCluster\` | string | Keyword grouping | No | ### SEO-Relevant Fields \*\*Critical for SEO:\*\* - \`title\` - Appears in search results - \`description\` - Meta description (impacts CTR) - \`metaTitle\` - Overrides title in \`<title>\` tag - \`keyword\` - Primary target keyword - \`image\` - Open Graph image \*\*Nice to Have:\*\* - \`tags\` - Internal taxonomy - \`categories\` - Content organization - \`keywordCluster\` - For content strategy --- ## SEO Considerations ### Current SEO Setup \*\*Positive:\*\* - Next.js 15 with App Router (server-side rendering) - Metadata API for dynamic SEO tags - Locale-based routing (\`/en/blog\`, \`/et/blog\`) - Image optimization potential - Clean URL structure \*\*Missing/Unknown:\*\* - Sitemap generation for blog posts - Structured data (Article schema) - Canonical URLs - Language alternates (hreflang) - Open Graph tags implementation ### Content Quality Issues (Observed) From sample article review: - Some content has YouTube embed placeholders: \`\[YouTube Video\](https://www.youtube.com/...)\` - Possible formatting artifacts from HTML→Markdown conversion - Image alt text may be missing (not in CSV export) - Some articles reference old platform features \*\*Action Required:\*\* - Manual spot-check of top-performing articles before migration - Fix critical content issues on winner articles --- ## Migration Path Analysis ### Current Workflow (Manual) To publish an article today: \`\`\`bash # Manual process mv src/content/blog-import/article-name.md src/content/blog/ # Article immediately appears on blog listing

**Issues with Manual Approach:**

- No validation of frontmatter
- No SEO quality check
- No tracking of what's been migrated
- Risk of breaking image paths
- No optimization before publishing

### Proposed Workflow (Automated)

```bash
# Data-driven migration
npm run migrate-blog -- --category=winner --locale=en

# Or specific articles
npm run migrate-blog -- --slugs=article-1,article-2 --optimize
```

**Benefits:**

- Validates frontmatter schema
- Audits SEO metadata quality
- Optionally optimizes titles/descriptions
- Logs migration for tracking
- Can rollback if needed

---

## Data Needs for Phase 2

### Required from Owner

1.  **Google Search Console Export**
    - Performance → Pages → Last 12 months
    - Must include: URL, Clicks, Impressions, CTR, Position
    - Preferred format: CSV

2.  **Country Breakdown (Optional)**
    - Separate exports for Estonia, Latvia, UK
    - Same metrics

3.  **Current Production URLs**
    - List of any blog content already live
    - To avoid duplicate migration

### Questions for Owner

1.  Should all locales be treated equally, or prioritize one?
2.  Any sensitive/outdated content that should NOT be migrated?
3.  Who should review content before it goes live?
4.  Are there specific keywords/topics we should prioritize?

---

## Technical Risks

| Risk                                            | Likelihood | Impact | Mitigation                               |
| ----------------------------------------------- | ---------- | ------ | ---------------------------------------- |
| Webflow import had errors                       | Medium     | High   | Audit random sample of 10 articles       |
| Images missing or broken                        | Low        | Medium | Validate image paths in migration script |
| Markdown formatting issues                      | Medium     | Low    | Visual spot-check before migration       |
| Duplicate content (same slug different locales) | Low        | Medium | Filename convention: `{slug}-{lang}.md`  |
| Old content references outdated features        | Medium     | Low    | Manual review of high-traffic articles   |

---

## Next Steps (Phase 1)

1.  ✅ Document current state (this file)
2.  ⏳ Receive GSC data from owner
3.  ⏳ Analyze GSC data structure
4.  ⏳ Build content inventory spreadsheet
5.  ⏳ Categorize articles (winner/potential/long-tail/drop)
6.  ⏳ Count articles per category
7.  ⏳ Document findings and recommendations
8.  ⏳ Update sprint plan with actual numbers
9.  ⏳ Request Phase 2 approval

---

## File Structure After Sprint

**Goal State:**

```plaintext
src/content/
├── blog/                     ← PRODUCTION (live on site)
│   ├── getting-started-en.md
│   ├── getting-started-et.md
│   ├── winner-article-1-en.md
│   ├── winner-article-2-et.md
│   └── ... (10-30 more articles)
└── blog-import/              ← STAGING (archive)
    ├── article-not-migrated-en.md
    └── ... (remaining articles)
```

**Images stay in same location:**

```plaintext
public/images/blog-content/   ← Shared by both folders
├── image1.png
└── image2.jpg
```

---

_Research document - Will be updated as data becomes available_
