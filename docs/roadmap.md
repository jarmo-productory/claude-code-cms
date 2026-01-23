# Agrello Website Migration Roadmap

Webflow → Next.js migration plan, organized by sprints.

## Current State

- **Production:** [www.agrello.io](http://www.agrello.io) (Webflow)
- **New stack:** Next.js 15 + Tailwind CSS v4
- **Repository:** agrello-web

---

## Sprint Progress

| Sprint | Name                    | Status          | Key Deliverables                            |
| ------ | ----------------------- | --------------- | ------------------------------------------- |
| 01     | Foundation              | **COMPLETE**    | Brand tokens, component library, styleguide |
| 02     | Homepage & i18n         | **IN PROGRESS** | Homepage sections, 4-language support       |
| 03     | Inner Pages & Analytics | PLANNED         | Pricing, Features, About, GTM               |
| 04     | Content Pages           | PLANNED         | Blog system, Help, Legal pages              |
| 05     | Marketing Pages         | PLANNED         | Use cases, comparisons, landing pages       |
| 06     | Launch Prep             | PLANNED         | SEO audit, redirects, DNS cutover           |
| 07     | Webflow Content Import  | **READY**       | Import 274 blog articles from Webflow CSV   |

---

## Completed Sprints

### Sprint 01: Foundation ✅

**Completed:** 2026-01-16

- [x] Brand colors in Tailwind theme
- [x] Typography system (display + body fonts)
- [x] Component library (Button, Card, Badge, Icon, etc.)
- [x] Styleguide page at `/styleguide`
- [x] Public assets (logos, flags, images)

### Sprint 02: Homepage & i18n 🚧

**Status:** IN PROGRESS

**Completed:**

- [x] BigHero section with CTA
- [x] TwoColumnSection (text + image)
- [x] CustomerLogos cloud
- [x] FeaturesTabs with 3 tabs
- [x] LatestPosts (real blog content)
- [x] Navigation with language switcher
- [x] Footer with translations
- [x] i18n: EN, ET, LV, UK locales

**Remaining:**

- [ ] Testimonial/Case Study section
- [ ] Workshop CTA section
- [ ] Pricing section (3-tier)
- [ ] FAQ section (accordion)

---

## Upcoming Sprints

### Sprint 03: Inner Pages & Analytics

**Status:** PLANNED

**Scope:**

- [ ] Pricing page (3-tier layout)
- [ ] Features overview page
- [ ] About/Company page
- [ ] Google Tag Manager setup
- [ ] Event tracking for CTAs

**Pages to build:**

| Page      | Priority | Notes            |
| --------- | -------- | ---------------- |
| /pricing  | High     | Revenue-critical |
| /features | High     | Product showcase |
| /about    | Medium   | Company story    |

### Sprint 04: Content Pages

**Status:** PLANNED

**Scope:**

- [ ] Blog listing page styling
- [ ] Blog post page template
- [ ] Help/Support pages
- [ ] Legal pages (Privacy, Terms)
- [ ] Contact page

### Sprint 05: Marketing Pages

**Status:** PLANNED

**Scope:**

- [ ] Use case pages (by industry/role)
- [ ] Comparison pages (vs competitors)
- [ ] Campaign landing pages
- [ ] Product updates/changelog

### Sprint 06: Launch Prep

**Status:** PLANNED

**Scope:**

- [ ] SEO audit (Lighthouse ≥90)
- [ ] Meta tags and OG images
- [ ] 301 redirects from old URLs
- [ ] Performance optimization
- [ ] DNS cutover plan
- [ ] Launch checklist

### Sprint 07: Webflow Content Import

**Status:** READY FOR APPROVAL

**Goal:** Import all 274 blog articles from Webflow CMS into Next.js

**Scope:**

- [ ] CSV import script (TypeScript)
- [ ] HTML → Markdown conversion
- [ ] Image download from Webflow CDN
- [ ] Frontmatter generation (20 fields mapped)
- [ ] Multi-locale support (en: 137, et: 84, lv: 53)

**Output (staging folder - requires manual review):**

| Locale   | Articles | Output Path                   |
| -------- | -------- | ----------------------------- |
| English  | 137      | `src/content/blog-import/en/` |
| Estonian | 84       | `src/content/blog-import/et/` |
| Latvian  | 53       | `src/content/blog-import/lv/` |

**Dependencies:**

- Requires Sprint 04 (blog templates) for display
- Can run in parallel with other sprints

**Sprint Plan:** `docs/sprints/sprint-07-webflow-content-integration/sprint-plan.md`

---

## Success Criteria (Launch)

- [ ] Lighthouse score ≥90 on all core pages
- [ ] All existing Webflow URLs redirect properly
- [ ] No drop in organic traffic post-launch
- [ ] Faster page load than Webflow version
- [ ] All 4 locales fully translated

---

## Pages Migration Checklist

From current agrello.io:

| Page           | Sprint | Status  |
| -------------- | ------ | ------- |
| Homepage       | 02     | ✅ Done |
| /pricing       | 03     | Planned |
| /features      | 03     | Planned |
| /about         | 03     | Planned |
| /blog          | 04     | Planned |
| /blog/\[slug\] | 04     | Planned |
| /contact       | 04     | Planned |
| /privacy       | 04     | Planned |
| /terms         | 04     | Planned |
| /use-cases/\*  | 05     | Planned |

---

## How to Start Next Sprint

1.  Review this roadmap for next sprint scope
2.  Tell Claude/Gemini: "start sprint 03"
3.  Wait for research and plan phases
4.  Review and approve the sprint plan
5.  Implementation begins after approval

---

_Last updated: 2026-01-16 (Sprint 07 added)_
