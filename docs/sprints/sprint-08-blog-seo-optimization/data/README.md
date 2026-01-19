# GSC Data Folder

This folder is for Google Search Console (GSC) export files needed for Sprint 08.

---

## Required Files

Place the following CSV exports in this folder:

### 1. Main Performance Export (REQUIRED)

**File name:** `gsc-performance-pages-12m.csv`

**How to export:**
1. Go to https://search.google.com/search-console
2. Select property: agrello.io (or agrello.ee)
3. Click "Performance" in left sidebar
4. Click "Pages" tab at top
5. Set date range: "Last 12 months"
6. Click Export button (top right) → "Download CSV"
7. Save to this folder

**Expected columns:**
- Page URL
- Clicks
- Impressions
- CTR (Click-Through Rate)
- Average Position

---

### 2. Country-Specific Exports (OPTIONAL)

If you want country-level analysis, export 3 additional files:

**Estonia:** `gsc-estonia-12m.csv`
1. In Performance view, click "+ NEW" filter
2. Select "Country" → Choose "Estonia"
3. Click "Pages" tab
4. Export CSV

**Latvia:** `gsc-latvia-12m.csv`
- Repeat above steps for Latvia

**UK:** `gsc-uk-12m.csv`
- Repeat above steps for United Kingdom

---

## What Happens Next

Once you place the files here:

1. Sprint manager will analyze the data
2. Articles will be categorized:
   - **Winners:** Position 1-10, high clicks → Migrate first
   - **Potential:** Position 11-30, high impressions → Optimize + migrate
   - **Long-tail:** Position 1-10, low volume → Selective migration
   - **Drop:** Position 30+ → Don't migrate
3. A content inventory spreadsheet will be created
4. Phase 2 planning will be finalized with specific article counts
5. You'll be asked to approve the migration plan

---

## Questions?

If you have trouble accessing GSC or exporting data, let me know. We can:
- Use a shorter time period (6 months instead of 12)
- Focus on specific domains if you have multiple properties
- Work with whatever data is available

---

*Ready for data upload*
