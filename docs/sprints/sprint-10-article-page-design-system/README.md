# Sprint 10: Article Page Design System

**Status:** Phase 1 - Research (Awaiting Approval)
**Created:** 2026-01-23

---

## Overview

This sprint focuses on creating a comprehensive design system for blog and support article pages, enhancing readability, visual hierarchy, and brand consistency across all content types.

**Goal:** Define and implement a polished, professional article reading experience that makes Agrello content stand out.

---

## Sprint Structure

### Phase 1: Research ✅ (Current)

- [x] Analyze current implementation
- [x] Document findings
- [x] Create design specification
- [ ] **Owner approval required**

### Phase 2: Design Refinement (After Approval)

- Define complete typography system
- Specify all layout rules
- Design component variants
- Document mobile specifications

### Phase 3: Implementation

- Update ArticleDetailPage component
- Enhance Tailwind prose configuration
- Create new content components
- Implement responsive design

### Phase 4-6: Test, Deploy, Document

- Test across all article types
- Run qa-validator
- Deploy to production

---

## Key Documents

1. **[sprint-plan.md](./sprint-plan.md)** - Complete sprint plan with checklist
2. **[research/current-state-analysis.md](./research/current-state-analysis.md)** - Analysis of existing implementation
3. **[research/design-specification.md](./research/design-specification.md)** - Detailed design system spec (needs approval)

---

## Design Highlights

### Typography

- Display font: Outfit (headings)
- Body font: Inter (content)
- Article title: 48px → 32px (desktop → mobile)
- Body text: 18px with 1.75 line height
- 7-level scale for all content types

### Layout

- Max content width: 720px (optimal reading)
- Consistent spacing: 8px base unit
- Responsive breakpoints
- Breakout zones for wide content

### Components

- Enhanced blockquotes with brand accent
- Callout boxes (info, warning, success, error)
- Code blocks with copy button
- Image captions with figcaption
- Professional table styling

### Colors

- Brand tokens throughout
- WCAG AA compliant contrast
- Consistent link states
- Subtle backgrounds for code/callouts

---

## What's Changing

### Before (Current)

- Basic prose styling
- Fixed 768px container
- Simple back link
- Minimal blockquote/code styling
- No callouts or special components
- Basic mobile responsive

### After (Planned)

- Refined typography scale
- Optimized 720px reading width
- Enhanced content components
- Callout boxes for emphasis
- Better code block treatment
- Professional table styling
- Polished mobile experience

---

## Owner Decisions Needed

**Priority Questions:**

1. **Content Density:** Airy, Balanced ✓, or Compact?
2. **Code Blocks:** Basic, Enhanced ✓, or Advanced?
3. **Callout Variants:** Which types to implement?
4. **Image Captions:** None, Simple ✓, or Rich?
5. **Related Content:** End-of-article suggestions?

**See design-specification.md section 10 for details.**

---

## Timeline

- **Phase 1 (Research):** 2 hours ✅
- **Phase 2 (Design):** 4 hours
- **Phase 3 (Implementation):** 6 hours
- **Phase 4-6 (Test/Deploy):** 3 hours
- **Buffer:** 3 hours
- **Total:** ~18 hours (2-3 days)

---

## Impact

**Benefits:**

- Improved readability and user engagement
- Consistent brand experience
- Better mobile reading experience
- Professional content presentation
- Easier content authoring (new components)

**Files Affected:**

- `src/components/content/ArticleDetailPage.tsx`
- `src/app/globals.css` (prose styles)
- `src/components/content/` (new components)
- Possibly new UI components

---

## Next Steps

1. **Owner:** Review design specification
2. **Owner:** Answer decision questions
3. **Owner:** Approve sprint to proceed to Phase 2
4. **Sprint Manager:** Wait for approval phrase ("approved", "proceed", "go ahead")

---

## Notes

- NO implementation code will be written until owner approves
- Design spec is comprehensive but flexible
- Can adjust priorities based on feedback
- Mobile-first approach throughout

---

_Sprint initialized 2026-01-23 by Sprint Manager_
