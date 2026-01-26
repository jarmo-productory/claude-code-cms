# Sprint 08: Pre-Production Site Audit

**Created:** 2026-01-19
**Updated:** 2026-01-26
**Status:** Phase 1 - RESEARCH
**Scope:** Comprehensive technical SEO and site health audit before production launch

---

## Goal

Conduct a comprehensive pre-production audit of the entire Agrello website to ensure launch readiness across technical SEO, internationalization, performance, content quality, and accessibility.

---

## Business Context

**Primary Objective:** Launch with confidence — zero surprises on day one

**Target Outcome:** A production-ready website that meets all quality gates across:

- Technical SEO (meta tags, structured data, sitemaps)
- Internationalization (hreflang, locale routing)
- Performance (Core Web Vitals, Lighthouse scores)
- Content quality (no placeholders, all links work)
- Mobile & accessibility (responsive, WCAG basics)

**Supported Locales:** Estonian (et), English (en), Latvian (lv)

**Page Types to Audit:**

- Homepage
- Features
- Pricing
- Contact
- Support
- Insights (topics)
- Blog listing + articles

---

## Success Criteria

### Launch Readiness Scorecard

| Category               | Target                         | Priority | Status |
| ---------------------- | ------------------------------ | -------- | ------ |
| Technical SEO          | 100% meta tags present         | Critical | ⏳     |
| i18n Implementation    | hreflang on all pages          | Critical | ⏳     |
| Lighthouse SEO         | ≥90 on all key pages           | Critical | ⏳     |
| Lighthouse Performance | ≥85 average                    | High     | ⏳     |
| Content Completeness   | No placeholders                | Critical | ⏳     |
| Link Validation        | 100% internal links work       | Critical | ⏳     |
| Mobile Responsiveness  | Works on 320px+                | Critical | ⏳     |
| Accessibility          | Lighthouse ≥85                 | Medium   | ⏳     |
| Sitemap & robots.txt   | Generated and valid            | Critical | ⏳     |
| Structured Data        | Organization + Article schemas | High     | ⏳     |

**Go/No-Go Decision:** All "Critical" items must PASS + 80% of "High" items

---

## Audit Phases

### Phase 1: FOUNDATIONAL (Critical - Blocks Launch)

#### 1.1 Technical SEO Foundation

**Meta Tags Validation (ALL pages)**

- [ ] Title tags present (50-60 chars optimal)
- [ ] Meta descriptions present (150-160 chars optimal)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Viewport meta tag

**Pages to Audit:**

| Page                  | ET  | EN  | LV  |
| --------------------- | --- | --- | --- |
| Homepage              | ⬜  | ⬜  | ⬜  |
| Features              | ⬜  | ⬜  | ⬜  |
| Pricing               | ⬜  | ⬜  | ⬜  |
| Contact               | ⬜  | ⬜  | ⬜  |
| Support               | ⬜  | ⬜  | ⬜  |
| Insights              | ⬜  | ⬜  | ⬜  |
| Blog listing          | ⬜  | ⬜  | ⬜  |
| Blog article (sample) | ⬜  | ⬜  | ⬜  |

**Tool:** Automated script (`scripts/audit-seo-metadata.ts`)

#### 1.2 Internationalization (i18n)

- [ ] hreflang tags on ALL pages (et, en, lv)
- [ ] x-default fallback configured
- [ ] Language switcher works on all pages
- [ ] Language switcher preserves page context (e.g., /et/pricing → /en/pricing)
- [ ] URL structure correct (/et/, /en/, /lv/)
- [ ] No broken locale redirects
- [ ] Default locale handling verified

**Tool:** Manual testing + grep search for hreflang patterns

#### 1.3 Static Export Validation

- [ ] `npm run build` completes without errors
- [ ] All pages generate in `out/` directory
- [ ] All images resolve correctly
- [ ] No dynamic routes without `generateStaticParams`

**Tool:** Production build test + directory inspection

---

### Phase 2: SEO COMPLETENESS (High Priority)

#### 2.1 Structured Data (Schema.org)

- [ ] **Organization schema** on all pages (name, logo, social profiles)
- [ ] **WebPage schema** with breadcrumbs where applicable
- [ ] **Article schema** on blog posts (headline, author, dates, image)
- [ ] **FAQ schema** on homepage FAQ section

**Tool:** Google Rich Results Test

#### 2.2 Sitemap Generation

**Current Status:** ⬜ To be verified

- [ ] Generate `sitemap.xml` programmatically
- [ ] Include all pages across all 3 locales
- [ ] Use absolute URLs (https://agrello.io/...)
- [ ] Include lastmod dates
- [ ] Place in `/public/sitemap.xml`

#### 2.3 robots.txt Configuration

**Current Status:** ⬜ To be verified

- [ ] Create `/public/robots.txt`
- [ ] Allow all search engines
- [ ] Reference sitemap
- [ ] Block staging/admin paths if any

#### 2.4 Blog Content Migration (GSC-Driven)

**Retained from original Sprint 08 scope**

- [ ] Analyze Google Search Console data (12-month)
- [ ] Categorize content (winners, potential, long-tail, drop)
- [ ] Migrate top 15-20 performers from `blog-import/` to `blog/`
- [ ] Optimize metadata for "potential" articles
- [ ] SEO audit on all migrated content

**Data Status:** GSC data provided in `/docs/sprints/sprint-08-pre-production-audit/data/`

---

### Phase 3: PERFORMANCE (Core Web Vitals)

#### 3.1 Lighthouse Audit

**Target:** ≥90 on Performance, Accessibility, Best Practices, SEO

| Page         | ET  | EN  | LV  |
| ------------ | --- | --- | --- |
| Homepage     | ⬜  | ⬜  | ⬜  |
| Features     | ⬜  | ⬜  | ⬜  |
| Pricing      | ⬜  | ⬜  | ⬜  |
| Contact      | ⬜  | ⬜  | ⬜  |
| Blog listing | ⬜  | ⬜  | ⬜  |
| Blog article | ⬜  | ⬜  | ⬜  |

**Tool:** Lighthouse CLI or Chrome DevTools

#### 3.2 Core Web Vitals

- [ ] **LCP (Largest Contentful Paint):** <2.5s
- [ ] **INP (Interaction to Next Paint):** <200ms
- [ ] **CLS (Cumulative Layout Shift):** <0.1

#### 3.3 Image Optimization

- [ ] All images have width/height attributes
- [ ] WebP/AVIF formats used
- [ ] Lazy loading on below-fold images
- [ ] No oversized images
- [ ] All images have descriptive alt text

#### 3.4 Font Loading

- [ ] No FOIT (Flash of Invisible Text)
- [ ] Font swap configured (`display: 'swap'`)
- [ ] No layout shift from font loading

---

### Phase 4: CONTENT QUALITY

#### 4.1 Unique Metadata

- [ ] Each page has unique title (no duplicates)
- [ ] Each page has unique description (no duplicates)
- [ ] No generic placeholders

#### 4.2 Placeholder Content Check

Search for and remove:

- [ ] "Lorem ipsum"
- [ ] "Coming soon"
- [ ] "TODO"
- [ ] Placeholder images

**Tool:** grep search across content files

#### 4.3 Link Validation

**Internal Links:**

- [ ] All navigation links work
- [ ] Footer links functional
- [ ] CTA buttons point to correct destinations
- [ ] Blog "related posts" links work

**External Links:**

- [ ] Login URL: `https://docs.agrello.io/app/login?open_tab=sign_in`
- [ ] Signup URL: `https://docs.agrello.io/app/login?open_tab=sign_up`
- [ ] Social media links (if any)

**Tool:** Manual testing + optional automated link checker

#### 4.4 Translation Completeness

Verify all 3 locales have:

- [ ] Homepage content
- [ ] Navigation labels
- [ ] Footer content
- [ ] CTA button text
- [ ] Form labels (Contact page)
- [ ] Error messages

---

### Phase 5: MOBILE & ACCESSIBILITY

#### 5.1 Mobile Responsiveness

Test breakpoints:

- [ ] Mobile: 320px, 375px, 414px
- [ ] Tablet: 768px, 1024px
- [ ] Desktop: 1280px, 1920px

Key pages:

- [ ] Homepage (all sections)
- [ ] Navigation (hamburger menu)
- [ ] Pricing tables
- [ ] Contact form
- [ ] Blog listing

**Tool:** Chrome DevTools Device Mode

#### 5.2 Touch Targets

- [ ] All buttons ≥44x44px
- [ ] All links accessible
- [ ] Form inputs adequate size
- [ ] Language switcher tappable

#### 5.3 Color Contrast

- [ ] Body text meets WCAG AA (4.5:1)
- [ ] Large text meets ratio (3:1)
- [ ] Button text readable
- [ ] Link colors distinguishable

**Tool:** Lighthouse accessibility audit

#### 5.4 Keyboard Navigation

- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators visible
- [ ] Logical tab order
- [ ] No keyboard traps

---

### Phase 6: SECURITY & HEADERS (Nice-to-Have)

#### 6.1 HTTPS Enforcement

- [ ] SSL certificate configured on hosting
- [ ] HTTP → HTTPS redirect
- [ ] HSTS header (optional)

#### 6.2 Security Headers

Recommended (configure on hosting):

- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Content-Security-Policy` (optional)

**Tool:** securityheaders.com (after deployment)

---

## Deliverables

| Deliverable              | Description                     | Path                            | Status         |
| ------------------------ | ------------------------------- | ------------------------------- | -------------- |
| Sprint Plan              | This document                   | `sprint-plan.md`                | ✅             |
| SEO Audit Script         | Automated metadata validation   | `scripts/audit-seo-metadata.ts` | ✅             |
| Audit Report             | Master checklist with pass/fail | `audit-report.md`               | ✅             |
| Lighthouse Results       | Scores for all key pages        | `lighthouse-results/`           | ⏳ Post-deploy |
| sitemap.xml              | Generated sitemap               | `out/sitemap.xml`               | ✅             |
| robots.txt               | Search engine directives        | `public/robots.txt`             | ✅             |
| Blog Migration Inventory | GSC-driven article list         | `blog-migration-inventory.csv`  | ⏳ Phase 2     |
| Launch Readiness Report  | Go/no-go decision matrix        | `launch-readiness.md`           | ✅             |

---

## Implementation Checklist

### Phase 1: Setup & Research (Current)

- [x] Restructure sprint plan for comprehensive audit
- [ ] Review existing SEO implementation in codebase
- [ ] Check hreflang, structured data, sitemap status
- [ ] Identify gaps in current technical SEO
- [ ] Document current state findings

### Phase 2: Planning

- [ ] Prioritize findings by impact
- [ ] Estimate effort for fixes
- [ ] **Owner approval required** ⏸️

### Phase 3: Technical SEO Implementation

- [ ] Generate sitemap.xml (if missing)
- [ ] Create robots.txt (if missing)
- [ ] Add missing structured data (JSON-LD)
- [ ] Fix hreflang if incomplete
- [ ] Validate all meta tags

### Phase 4: Blog Migration

- [ ] Analyze GSC data
- [ ] Select top performers
- [ ] Migrate and optimize
- [ ] Validate migrated content

### Phase 5: Performance Optimization

- [ ] Run Lighthouse on all pages
- [ ] Fix performance issues
- [ ] Optimize images if needed
- [ ] Document Core Web Vitals

### Phase 6: Content & Accessibility Audit

- [ ] Check all translations
- [ ] Validate all links
- [ ] Test mobile responsiveness
- [ ] Verify accessibility basics

### Phase 7: Final Validation

- [ ] Production build test
- [ ] Cross-browser testing
- [ ] Generate launch readiness report
- [ ] **Owner sign-off for launch** ⏸️

---

## Tools & Methods

| Check           | Tool          | Command/Method                     |
| --------------- | ------------- | ---------------------------------- |
| Meta tags       | Custom script | `npm run audit:seo`                |
| Lighthouse      | CLI           | `npx lighthouse URL --output=json` |
| hreflang        | grep          | `grep -r "hreflang" src/`          |
| Structured data | Google tool   | Rich Results Test                  |
| Links           | Manual        | Click through all pages            |
| Mobile          | DevTools      | Device Mode testing                |
| Accessibility   | Lighthouse    | Accessibility audit                |
| Build           | npm           | `npm run build`                    |
| GSC data        | Export        | Google Search Console              |

---

## Risks & Mitigations

| Risk                                   | Impact | Mitigation                                       |
| -------------------------------------- | ------ | ------------------------------------------------ |
| Static export doesn't generate sitemap | High   | Create post-build script or manual sitemap       |
| Missing structured data                | Medium | Add JSON-LD to layouts                           |
| Poor Lighthouse scores                 | Medium | Optimize images, defer JS                        |
| hreflang not implemented               | High   | Add to locale layout                             |
| Broken links after locale routing      | High   | Comprehensive link testing                       |
| GSC data unavailable                   | Medium | Prioritize technical audit, defer blog migration |

---

## Data Files (From Original Sprint)

GSC export files in `/docs/sprints/sprint-08-pre-production-audit/data/`:

- `Pages.csv`
- `Queries.csv`
- `Countries.csv`
- `Devices.csv`
- `Chart.csv`

---

## Blog Content Migration Strategy

**Retained from original Sprint 08 - now a subset of comprehensive audit**

### Content Categorization

Based on GSC data, articles sorted into 4 buckets:

| Category      | Criteria                                  | Action                          |
| ------------- | ----------------------------------------- | ------------------------------- |
| **WINNERS**   | Position 1-10, high clicks                | Migrate immediately             |
| **POTENTIAL** | Position 11-30, high impressions, low CTR | Optimize metadata, then migrate |
| **LONG-TAIL** | Position 1-10, low volume                 | Migrate if niche-relevant       |
| **DROP**      | Position >30, low impressions             | Do not migrate                  |

### Migration Process

1. Read article from `blog-import/`
2. Validate frontmatter schema
3. Check required fields (title, description, date, slug)
4. Optionally optimize metadata
5. Move to `blog/`
6. Verify images display correctly
7. Test in all locales

---

## Current Phase: 1 (RESEARCH)

**Status:** IN PROGRESS

**Next Actions:**

1. Review existing codebase for current SEO implementation
2. Check hreflang, structured data, sitemap status
3. Document findings in audit report
4. Present findings for owner approval
5. Proceed to implementation

---

## Approval

- [x] Owner reviewed sprint plan restructure
- [ ] Owner approved comprehensive audit scope
- [ ] Owner approved implementation start
- [ ] Owner sign-off for production launch

**Approval Status:** ⏸️ AWAITING SCOPE APPROVAL

---

_Sprint 08: Pre-Production Audit - Phase 1 Research_
