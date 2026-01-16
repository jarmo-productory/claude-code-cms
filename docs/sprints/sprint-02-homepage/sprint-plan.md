# Sprint 02: Homepage & i18n

## Goal
Build the complete homepage with all sections and implement multilingual support (EN, ET, LV, UK).

## Status: IN PROGRESS

**Started:** 2026-01-16
**Note:** Additional homepage sections still needed.

## Success Criteria

- [x] Homepage hero section with responsive design
- [x] Features/value proposition sections
- [x] Customer logos section
- [x] Feature tabs with interactive content
- [x] Latest blog posts section (connected to real content)
- [x] Navigation with language switcher
- [x] Footer with translations
- [x] i18n support for EN, ET, LV, UK locales
- [x] All sections have translations for 4 languages

## Deliverables

| Deliverable | Status | Location |
|-------------|--------|----------|
| BigHero section | Done | `src/components/sections/BigHero.tsx` |
| TwoColumnSection | Done | `src/components/sections/TwoColumnSection.tsx` |
| CustomerLogos section | Done | `src/components/sections/CustomerLogos.tsx` |
| FeaturesTabs section | Done | `src/components/sections/FeaturesTabs.tsx` |
| LatestPosts section | Done | `src/components/sections/LatestPosts.tsx` |
| Navigation | Done | `src/components/layout/Navigation.tsx` |
| Footer | Done | `src/components/layout/Footer.tsx` |
| Locale routing | Done | `src/app/[locale]/` |
| Homepage translations | Done | `src/app/[locale]/page.tsx` |

## What Was Built

### Section Components (`src/components/sections/`)

| Component | Description |
|-----------|-------------|
| `BigHero` | Main hero with headline, CTA, trust text, hero image |
| `TwoColumnSection` | Text + image layout, reversible |
| `CustomerLogos` | Logo cloud with company names |
| `FeaturesTabs` | Tabbed feature showcase with images |
| `LatestPosts` | Blog post grid, fetches real content |

### Layout Components (`src/components/layout/`)

| Component | Features |
|-----------|----------|
| `Navigation` | Sticky header, dropdown menus, language switcher, mobile menu |
| `Footer` | Multi-column layout, social links, legal links |

### i18n Implementation

- **Routing:** File-based (`/en/`, `/et/`, `/lv/`, `/uk/`)
- **Context:** `LanguageProvider` in `src/context/LanguageContext.tsx`
- **Pattern:** Dictionary objects in components/pages
- **Supported locales:** English, Estonian, Latvian, Ukrainian

### Homepage Content (all 4 languages)

- Hero section (headline, subtitle, CTA)
- Two-column value proposition
- Customer logos with headline
- Feature tabs (Automation, Contract Management, E-signing)
- Latest blog posts (fetched from markdown)

## Technical Notes

1. Blog posts fetched server-side via `getBlogPosts()` from `src/lib/content.ts`
2. LV/UK locales fall back to EN blog content (content only has et/en)
3. Navigation detects locale from URL path
4. All section components accept translation props

## Remaining Work (Homepage Sections)

Based on production agrello.io analysis, these sections still need to be built:

| Section | Priority | Description |
|---------|----------|-------------|
| Testimonial/Case Study | High | Individual customer quote with headshot, company, role |
| Workshop CTA | High | Lead gen section - benefits list, expert photo, dual CTAs |
| Pricing Section | High | 3-tier cards (Starter €19.90, Team €99, Custom) |
| FAQ Section | Medium | Accordion with 10+ Q&A pairs |

### Section Details

**1. Testimonial/Case Study**
- Quote: "Smarten saved a week's worth of manual work"
- Attribution: HR Director name + photo
- Layout: Image-left, quote-right with "Learn more" link

**2. Workshop CTA**
- Headline: "Book your free e-signing workshop!"
- 4 benefit bullets
- Expert headshot on right
- Dual CTAs: Primary + Secondary buttons

**3. Pricing Section**
- Starter: €19.90/user/month
- Team: €99/month (up to 5 users)
- Custom: Contact sales
- Feature comparison per tier

**4. FAQ Section**
- Expandable accordion format
- Topics: pricing, trials, features, integrations, security
- Approximately 10-12 questions

---

## Future Sprints (not homepage)

- [ ] Pricing page (Sprint 03)
- [ ] Features page (Sprint 03)
- [ ] About page (Sprint 03)
- [ ] Analytics (Sprint 03)
- [ ] Contact page (Sprint 04)
- [ ] Blog listing page styling (Sprint 04)
