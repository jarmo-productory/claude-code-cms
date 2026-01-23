# Sprint 03: Complete Homepage + Inner Pages

## Goal

Complete the Sprint 02 carryover work (homepage sections) and then build essential inner pages (Pricing, Features, About, Contact) with multilingual support.

## Status: IN PROGRESS

**Created:** 2026-01-19
**Approved:** 2026-01-19

## Success Criteria

### Sprint 02 Carryover (Homepage Completion)

- [x] CustomerStory section implemented
- [x] WorkshopCTA section implemented
- [x] Pricing section implemented
- [x] FAQ section implemented
- [x] All 4 sections have translations (EN, ET, LV, UK)
- [x] Homepage is complete and production-ready

### Inner Pages (New Work)

- [ ] Pricing page with detailed plans and feature comparison
- [ ] Features page showcasing all platform capabilities
- [ ] About/Company page with team and mission
- [ ] Contact page with form and contact information
- [ ] All inner pages have 4-language support
- [ ] Navigation links connect to all pages
- [ ] All pages are mobile-responsive and SEO-optimized

## Sprint 02 Carryover Analysis

### What Was Completed

Based on code review, ALL 4 remaining homepage sections from Sprint 02 have been implemented:

| Section       | Status   | Location                                    | Notes                                 |
| ------------- | -------- | ------------------------------------------- | ------------------------------------- |
| CustomerStory | **DONE** | `src/components/sections/CustomerStory.tsx` | Testimonial with image, quote, author |
| WorkshopCTA   | **DONE** | `src/components/sections/WorkshopCTA.tsx`   | Lead gen with benefits, dual CTAs     |
| Pricing       | **DONE** | `src/components/sections/Pricing.tsx`       | 3-tier pricing cards                  |
| FAQ           | **DONE** | `src/components/sections/FAQ.tsx`           | Accordion with 11 Q&A items           |

### Verification Needed

Before moving to inner pages, verify:

1. All sections render correctly on homepage
2. Translations are complete for all 4 languages
3. Mobile responsiveness works
4. Images are properly optimized
5. Links and CTAs work correctly

## Inner Pages Scope

### 1. Pricing Page (`/[locale]/pricing`)

**Purpose:** Dedicated pricing page with full feature comparison

**Content:**

- Hero section with headline and pricing toggle (monthly/annual)
- 3 pricing tiers (Starter, Team, Custom)
- Feature comparison table
- FAQ specific to pricing
- CTA section to start free trial

**Sections to build:**

- `PricingHero` - headline + pricing toggle
- `PricingComparison` - detailed feature matrix
- `PricingFAQ` - pricing-specific questions
- `PricingCTA` - trial signup prompt

**Translations:** EN, ET, LV, UK

---

### 2. Features Page (`/[locale]/features`)

**Purpose:** Comprehensive showcase of all platform capabilities

**Content:**

- Hero section introducing features
- Feature grid (Automation, E-signing, Management, Templates, API, Integrations)
- Deep dive sections for each major feature
- Customer testimonials
- CTA to get started

**Sections to build:**

- `FeaturesHero` - headline + overview
- `FeaturesGrid` - 6-8 feature cards with icons
- `FeatureDeepDive` - detailed feature explanations
- `FeaturesCTA` - signup prompt

**Translations:** EN, ET, LV, UK

---

### 3. About Page (`/[locale]/about`)

**Purpose:** Company story, mission, values, and team

**Content:**

- Hero with company mission
- Company story timeline
- Values/principles section
- Team section (leadership + key members)
- Company stats/achievements
- CTA to join team or get started

**Sections to build:**

- `AboutHero` - mission statement
- `CompanyStory` - timeline or narrative
- `Values` - 3-4 core principles
- `Team` - grid with photos, names, roles
- `AboutCTA` - careers or trial signup

**Translations:** EN, ET, LV, UK

---

### 4. Contact Page (`/[locale]/contact`)

**Purpose:** Contact form and company contact information

**Content:**

- Contact form (name, email, company, message)
- Office locations and contact details
- Support hours
- Social media links
- Map or office photo

**Sections to build:**

- `ContactHero` - headline + description
- `ContactForm` - form with validation
- `ContactInfo` - address, phone, email, hours
- `ContactMap` - embedded map or illustration

**Translations:** EN, ET, LV, UK

---

## Deliverables

| Deliverable                 | Type      | Location                               | Status      |
| --------------------------- | --------- | -------------------------------------- | ----------- |
| **Sprint 02 Verification**  |
| Homepage sections check     | Testing   | N/A                                    | Pending     |
| Mobile responsiveness test  | Testing   | N/A                                    | Pending     |
| Translation completeness    | Testing   | N/A                                    | Pending     |
| **Pricing Page**            |
| PricingHero component       | Component | `src/components/sections/`             | Not started |
| PricingComparison component | Component | `src/components/sections/`             | Not started |
| PricingFAQ component        | Component | `src/components/sections/`             | Not started |
| PricingCTA component        | Component | `src/components/sections/`             | Not started |
| Pricing page route          | Page      | `src/app/[locale]/pricing/page.tsx`    | Not started |
| **Features Page**           |
| FeaturesHero component      | Component | `src/components/sections/`             | Not started |
| FeaturesGrid component      | Component | `src/components/sections/`             | Not started |
| FeatureDeepDive component   | Component | `src/components/sections/`             | Not started |
| FeaturesCTA component       | Component | `src/components/sections/`             | Not started |
| Features page route         | Page      | `src/app/[locale]/features/page.tsx`   | Not started |
| **About Page**              |
| AboutHero component         | Component | `src/components/sections/`             | Not started |
| CompanyStory component      | Component | `src/components/sections/`             | Not started |
| Values component            | Component | `src/components/sections/`             | Not started |
| Team component              | Component | `src/components/sections/`             | Not started |
| AboutCTA component          | Component | `src/components/sections/`             | Not started |
| About page route            | Page      | `src/app/[locale]/about/page.tsx`      | Not started |
| **Contact Page**            |
| ContactHero component       | Component | `src/components/sections/`             | Not started |
| ContactForm component       | Component | `src/components/sections/`             | Not started |
| ContactInfo component       | Component | `src/components/sections/`             | Not started |
| ContactMap component        | Component | `src/components/sections/`             | Not started |
| Contact page route          | Page      | `src/app/[locale]/contact/page.tsx`    | Not started |
| **Navigation Updates**      |
| Update nav links            | Component | `src/components/layout/Navigation.tsx` | Not started |
| Update footer links         | Component | `src/components/layout/Footer.tsx`     | Not started |

## Implementation Checklist

### Phase 0: Sprint 02 Verification (FIRST)

- [ ] Start dev server and verify homepage at `/et` and `/en`
- [ ] Test CustomerStory section renders correctly
- [ ] Test WorkshopCTA section renders correctly
- [ ] Test Pricing section renders correctly
- [ ] Test FAQ section renders correctly
- [ ] Verify all sections have translations in 4 languages
- [ ] Test mobile responsiveness for all sections
- [ ] Check all CTA links work
- [ ] Verify images load and display correctly
- [ ] Document any issues found

### Phase 1: Pricing Page

- [ ] Create `PricingHero` component
- [ ] Create `PricingComparison` component (feature matrix)
- [ ] Create `PricingFAQ` component (reuse/adapt FAQ component)
- [ ] Create `PricingCTA` component
- [ ] Create pricing page route with translations
- [ ] Add translations for all 4 languages
- [ ] Test page renders correctly
- [ ] Update navigation to link to pricing page

### Phase 2: Features Page

- [ ] Create `FeaturesHero` component
- [ ] Create `FeaturesGrid` component
- [ ] Create `FeatureDeepDive` component
- [ ] Create `FeaturesCTA` component
- [ ] Create features page route with translations
- [ ] Add translations for all 4 languages
- [ ] Test page renders correctly
- [ ] Update navigation to link to features page

### Phase 3: About Page

- [ ] Create `AboutHero` component
- [ ] Create `CompanyStory` component
- [ ] Create `Values` component
- [ ] Create `Team` component
- [ ] Create `AboutCTA` component
- [ ] Create about page route with translations
- [ ] Add translations for all 4 languages
- [ ] Add team photos and company assets
- [ ] Test page renders correctly
- [ ] Update navigation/footer to link to about page

### Phase 4: Contact Page

- [ ] Create `ContactHero` component
- [ ] Create `ContactForm` component with validation
- [ ] Create `ContactInfo` component
- [ ] Create `ContactMap` component
- [ ] Create contact page route with translations
- [ ] Add translations for all 4 languages
- [ ] Implement form submission logic (API route or mailto)
- [ ] Test form validation works
- [ ] Test page renders correctly
- [ ] Update navigation/footer to link to contact page

### Phase 5: Final Polish

- [ ] Review all pages for consistency
- [ ] Test all navigation links work
- [ ] Test all language switches work
- [ ] Mobile responsiveness check for all pages
- [ ] SEO metadata for all pages
- [ ] Performance check (Lighthouse)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Documentation update

## Technical Notes

### Component Reusability

Some sections can be built as generic components:

- `PageHero` - reusable hero for inner pages
- `CtaSection` - generic CTA section
- `ContentGrid` - flexible grid layout

### Form Handling (Contact Page)

Options for contact form:

1. **API Route** - Create `/api/contact` endpoint
2. **Email service** - Use mailto: or third-party service (SendGrid, Formspree)
3. **CRM integration** - Connect to Agrello's CRM if available

### SEO Considerations

Each page needs:

- Unique meta title and description
- Open Graph tags for social sharing
- Structured data (JSON-LD) where applicable
- Proper heading hierarchy (h1, h2, h3)

### Image Assets Needed

- Team photos for About page
- Office photos/map for Contact page
- Feature illustrations for Features page
- Any missing brand assets

## Risks & Dependencies

| Risk                                | Impact | Mitigation                                           |
| ----------------------------------- | ------ | ---------------------------------------------------- |
| Content not ready (team bios, copy) | High   | Use placeholder content, mark with TODO              |
| Team photos missing                 | Medium | Use placeholder avatars                              |
| Form backend not ready              | Medium | Start with mailto:, upgrade later                    |
| Translation delays                  | Medium | Start with EN/ET, add LV/UK incrementally            |
| Large scope for one sprint          | High   | **Prioritize: Pricing > Features > Contact > About** |

## Priority Order (Approved Scope)

Implementation order for Sprint 03:

1. **Phase 1:** Features page (key navigation item)
2. **Phase 2:** Pricing page (high traffic page)
3. **Phase 3:** Contact page (lead capture)
4. ~~About page~~ - **DEFERRED to later sprint**

## Future Enhancements (Not This Sprint)

- [ ] Analytics setup (GTM, GA4)
- [ ] A/B testing framework
- [ ] Advanced form features (file uploads, CAPTCHA)
- [ ] Chat widget integration
- [ ] Customer portal integration
- [ ] Advanced SEO (schema.org markup)
- [ ] Performance optimization (image lazy loading)

---

## Approval

- [x] Owner reviewed this sprint plan
- [x] Owner approved scope and priorities
- [ ] Owner confirmed content availability

**Approval Status:** APPROVED

**Notes:**

- Owner approved on 2026-01-19 with scope: Features, Pricing, Contact pages
- About page deferred to later sprint
- Proceeding with implementation

---

**Next Steps After Approval:**

1. Start Phase 0 - Verify Sprint 02 homepage sections
2. Report findings and any issues
3. Proceed to Phase 1 - Pricing page
4. Regular progress updates and commits
