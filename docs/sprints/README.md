# Sprint Documentation

This directory contains sprint planning and execution documentation following the 6-phase development workflow.

## Sprint Status Overview

| Sprint | Name | Status | Completed |
|--------|------|--------|-----------|
| 01 | Foundation (Brand Tokens & Component Library) | **COMPLETE** | 2026-01-16 |
| 02 | Homepage & i18n | **IN PROGRESS** | - |
| 03 | Inner Pages & Analytics | **PLANNED** | - |

---

## Completed Sprints

### Sprint 01: Foundation
**Goal:** Extract Agrello brand identity and establish design system
**Delivered:**
- Brand tokens in Tailwind CSS
- Component library (Button, Card, Badge, etc.)
- Styleguide page
- Public assets (logos, flags, images)

[Full Sprint Plan](sprint-01-foundation/sprint-plan.md)

### Sprint 02: Homepage & i18n
**Goal:** Build complete homepage with multilingual support
**Delivered:**
- 5 homepage sections (BigHero, TwoColumnSection, CustomerLogos, FeaturesTabs, LatestPosts)
- Navigation & Footer with translations
- i18n for EN, ET, LV, UK locales
- Blog content integration

[Full Sprint Plan](sprint-02-homepage/sprint-plan.md)

---

## Next Sprint

### Sprint 03: Inner Pages & Analytics (PLANNED)

**Scope:**
- Pricing page
- Features page
- About/Company page
- Analytics setup (GTM)

**Status:** Not started - awaiting sprint kickoff

---

## Sprint Workflow

Each sprint follows this 6-phase process:

### Phase 1: RESEARCH
- Explore codebase and requirements
- Document findings
- **Gate:** Auto-transition when research documented

### Phase 2: PLAN
- Create sprint plan with checklist
- Define success criteria
- **Gate:** HARD - Requires owner approval ("approved")

### Phase 3: DEVELOP
- Implement checklist items
- Commit frequently
- **Gate:** Auto when checklist complete

### Phase 4: TEST & VALIDATE
- Verify all features work
- Run qa-validator checks
- **Gate:** HARD - Requires qa-validator pass

### Phase 5: CLEANUP
- Remove debug code
- Update documentation
- **Gate:** Auto when cleanup complete

### Phase 6: DEPLOY
- Final commit and push
- **Gate:** HARD - Requires qa-validator pass

---

## How to Start a New Sprint

1. **Check this README** for next sprint number
2. **Trigger sprint-manager** with: "start sprint [name]"
3. **Sprint-manager conducts research** (Phase 1)
4. **Sprint-manager writes plan** (Phase 2)
5. **STOP - Wait for owner approval**
6. **Owner types "approved"** to unblock Phase 3
7. **Implementation proceeds** with tracking

---

## Directory Structure

```
docs/sprints/
├── README.md                    # This file
├── sprint-01-foundation/
│   ├── sprint-plan.md          # Sprint 01 plan (COMPLETE)
│   └── research/               # Research documents
├── sprint-02-homepage/
│   └── sprint-plan.md          # Sprint 02 plan (COMPLETE)
└── sprint-03-inner-pages/      # (To be created)
    └── sprint-plan.md
```

---

**Last Updated:** 2026-01-16
