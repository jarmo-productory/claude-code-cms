# Sprint 10: Article Page Design System

**Created:** 2026-01-23
**Updated:** 2026-01-23
**Status:** Phase 3 - IMPLEMENTATION (Design Approved)

---

## Goal

Define and implement a comprehensive design system for blog and support article pages, creating a visually appealing, readable, and consistent reading experience across all content types (blog posts, support articles, topic articles).

---

## Success Criteria

- [x] Design document approved by owner
- [ ] Typography scale defined for article content
- [ ] Layout specifications documented (max-width, spacing, margins)
- [ ] Component variants created (minimal vs rich article layouts)
- [ ] Prose styling enhanced with brand tokens
- [ ] Article metadata styling defined (author, date, reading time)
- [ ] Image treatment patterns documented (hero, inline, captions)
- [ ] Code block styling defined
- [ ] Table styling specified
- [ ] Callout/blockquote styles created
- [ ] Related content section designed
- [ ] Mobile-responsive design verified
- [ ] Implementation matches design specifications

---

## Deliverables

| Deliverable                | Description                            | Output Path                                        |
| -------------------------- | -------------------------------------- | -------------------------------------------------- |
| Design System Document     | Complete style guide for article pages | `docs/sprints/sprint-10-*/research/design-spec.md` |
| Typography Scale           | Font sizes, weights, line heights      | Design document section                            |
| Layout Specifications      | Container widths, spacing system       | Design document section                            |
| Component Patterns         | Reusable article components            | Design document section                            |
| Enhanced ArticleDetailPage | Updated component with new styles      | `src/components/content/ArticleDetailPage.tsx`     |
| Prose Styles               | Tailwind prose customization           | `src/app/globals.css`                              |
| Example Screenshots        | Visual reference of implemented design | `docs/sprints/sprint-10-*/research/examples/`      |
| Component Library Updates  | New article-specific UI components     | `src/components/content/`                          |

---

## Implementation Checklist

### Phase 1: Research & Analysis ✅ COMPLETE

- [x] Review current ArticleDetailPage implementation
- [x] Analyze existing blog and topic article pages
- [x] Identify design patterns from competitor sites
- [x] Document current typography and spacing
- [x] Review brand tokens and CVI guidelines
- [x] Create initial design specification document
- [x] **Owner approval received** ✅

### Phase 2: Design Specification ✅ COMPLETE

- [x] Define typography scale (H1-H6, body, captions)
- [x] Specify layout containers and max-widths
- [x] Design article header variants
- [x] Design content body styles
- [x] Design image treatment patterns
- [x] Design code block styles
- [x] Design table styles
- [x] Design callout/blockquote patterns
- [x] Design metadata display (author, date, reading time)
- [x] Design related content section
- [x] Create mobile-responsive specifications
- [x] Document all spacing and color tokens
- [x] **Design Specification v3 approved by owner** ✅

### Phase 3: Implementation (IN PROGRESS)

- [ ] Update `ArticleDetailPage.tsx` with new structure
- [ ] Enhance Tailwind prose configuration in `globals.css`
- [ ] Create article-specific components
- [ ] Implement typography scale
- [ ] Implement layout system
- [ ] Implement image treatments
- [ ] Implement code block styles
- [ ] Implement table styles
- [ ] Implement callout/blockquote styles
- [ ] Implement metadata display
- [ ] Implement related content section

### Phase 4: Testing & Validation

- [ ] Test blog article pages
- [ ] Test support article pages
- [ ] Test topic article pages
- [ ] Verify mobile responsiveness
- [ ] Test typography hierarchy
- [ ] Test image loading and display
- [ ] Test code blocks and tables
- [ ] Verify brand consistency
- [ ] Run Lighthouse audit
- [ ] Invoke qa-validator

### Phase 5: Documentation & Cleanup

- [ ] Document design system for future reference
- [ ] Create usage guide for content authors
- [ ] Remove debug code
- [ ] Final code review
- [ ] Update component documentation

### Phase 6: Deploy

- [ ] Final commit with conventional commit format
- [ ] Push to GitHub
- [ ] Invoke qa-validator for production build
- [ ] Deploy to production

---

## Current State Analysis

### Existing Implementation

**File:** `src/components/content/ArticleDetailPage.tsx`

**Current Features:**

- Back link navigation
- Article title (H1)
- Author row with date and reading time
- Optional hero image (16:9 aspect ratio)
- Markdown content rendering with Tailwind prose

**Current Styling:**

- Max-width: 3xl (48rem / 768px)
- Prose: `prose-lg` with custom heading and link colors
- Background: white
- Padding: pt-24 pb-16 px-6

**Used by:**

1. Blog posts (`/[locale]/blog/[slug]/`)
2. Topic articles (`/[locale]/topics/[topic]/[slug]/`)

### Design Opportunities

**Typography:**

- Current prose-lg is good but could be enhanced
- Heading hierarchy needs more distinction
- Need better font weight distribution
- Caption and metadata typography needs definition

**Layout:**

- Content max-width could be optimized for readability
- Spacing between elements needs refinement
- Sidebar opportunities for long-form content
- Related content section missing

**Content Elements:**

- No special treatment for callouts/blockquotes
- Code blocks use default prose styles
- Tables have minimal styling
- Image captions not implemented
- No support for image galleries

**Visual Hierarchy:**

- Article metadata could be more prominent
- Reading progress indicator could enhance UX
- Topic/category badges not displayed
- Author bio section missing

**Responsive Design:**

- Current implementation is basic
- Mobile typography could be optimized
- Image aspect ratios need mobile refinement

---

## Design Goals

### Primary Goals

1. **Readability First**: Optimize typography and spacing for long-form reading
2. **Brand Consistency**: Use Agrello brand tokens throughout
3. **Visual Hierarchy**: Clear distinction between content elements
4. **Mobile Excellence**: Perfect reading experience on all devices
5. **Content Versatility**: Support multiple content types (blog, support, topics)

### Design Principles

1. **Generous Whitespace**: Let content breathe
2. **Typographic Clarity**: Easy to scan, easy to read
3. **Subtle Elegance**: Professional without being boring
4. **Progressive Enhancement**: Basic HTML works, enhanced with CSS
5. **Performance Conscious**: Fast loading, no layout shifts

---

## Research Phase Findings

### Current Article Structure

**Blog Post Example:**

```
/en/blog/how-to-put-your-contracts-on-autopilot
├── Back link
├── Title (H1)
├── Author + Date + Reading Time
├── Hero Image (optional)
└── Article Content (prose)
```

**Topic Article Example:**

```
/en/topics/getting-started/first-steps-in-agrello
├── Back link
├── Title (H1)
├── Author + Date + Reading Time
├── Hero Image (optional)
├── Article Content (prose)
└── FAQ Schema (structured data)
```

### Content Types to Support

**Blog Posts:**

- Long-form articles (1000-3000 words)
- Multiple headings and sections
- Inline images
- Code examples (rarely)
- External links
- Author attribution

**Support Articles:**

- Step-by-step guides (500-1500 words)
- Screenshots and images (frequent)
- Ordered/unordered lists
- Tables (sometimes)
- Code snippets (rarely)
- Last updated date

**Topic Articles:**

- Educational content (800-2000 words)
- Mixed content types
- FAQ sections
- Related article suggestions
- Topic categorization

### Typography Hierarchy Needed

1. **Display (H1)**: Article title - 2.5rem-3rem
2. **Heading 2**: Major sections - 2rem
3. **Heading 3**: Subsections - 1.5rem
4. **Heading 4**: Minor sections - 1.25rem
5. **Body**: Reading content - 1.125rem (18px)
6. **Small**: Metadata, captions - 0.875rem (14px)
7. **Lead**: Article intro (optional) - 1.25rem

### Color Usage

**From Brand Tokens:**

- `brand-dark`: Headings (#0A1E3D)
- `brand-primary`: Links, accents (#4461F2)
- `brand-secondary`: Hover states (#6B7FFF)
- `brand-surface`: Code blocks, callouts (#F8F9FB)
- Text: Gray 800-900 for body

### Inspiration & References

**Design patterns to consider:**

- Medium: Clean typography, generous line height
- Ghost: Minimal design, excellent spacing
- Stripe Blog: Code block treatment, visual hierarchy
- Notion: Callout blocks, inline content
- Linear Blog: Typography scale, subtle accents

---

## Out of Scope (Future Enhancements)

- Dark mode support
- Print stylesheet
- Audio/video embed patterns
- Interactive content components
- Newsletter signup embeds
- Social sharing buttons
- Comment system
- Article versioning UI
- Table of contents (TOC) sidebar
- Reading progress indicator
- Bookmarking functionality
- Estimated time remaining

---

## Dependencies

**No new npm packages expected.**

**Existing tools:**

- Tailwind CSS v4 (prose plugin)
- Brand tokens in `globals.css`
- Lucide React icons
- Next.js Image component

---

## Timeline Estimate

| Phase                | Tasks                                   | Estimated Time |
| -------------------- | --------------------------------------- | -------------- |
| Research & Analysis  | Review, analyze, document current state | 2 hours        |
| Design Specification | Create comprehensive design document    | 4 hours        |
| Owner Review         | Review and feedback                     | -              |
| Implementation       | Update components and styles            | 6 hours        |
| Testing & Validation | Cross-browser, mobile, qa-validator     | 2 hours        |
| Documentation        | Usage guide, design system docs         | 1 hour         |
| **Total**            |                                         | **15 hours**   |
| Buffer               | Revisions and polish                    | 3 hours        |
| **Grand Total**      |                                         | **18 hours**   |

---

## Approval Requirements

**Phase 1 → 2 Gate:** Owner must approve design specification document

**Approval confirms:**

1. Typography scale is appropriate
2. Layout specifications meet requirements
3. Component patterns align with brand
4. Design goals are clear and achievable
5. Implementation approach is sound
6. Timeline is realistic

**Owner Questions:**

1. What content density do you prefer? (airy/balanced/compact)
2. Should we add sidebar components for long articles?
3. Do you want dark mode support in this sprint?
4. Should code blocks have syntax highlighting?
5. Do you want table of contents for long articles?
6. Should we add "related articles" section at the end?
7. Any specific design inspirations you like?

---

## Current Phase: 3 (IMPLEMENTATION)

**Status:** READY TO START

**Completed:**

- ✅ Phase 1: Research analysis
- ✅ Phase 2: Design specification v3
- ✅ Owner approved all design recommendations

**Owner Approved Design Decisions:**

| Question                        | Decision            | Rationale                                |
| ------------------------------- | ------------------- | ---------------------------------------- |
| Q1: Table of Contents placement | Left sidebar        | Better for long articles, easy reference |
| Q2: Article description styling | Gray background box | Visual distinction, improved scanability |
| Q3: Reading progress indicator  | YES - include       | Enhances UX, shows reading depth         |
| Q4: Callout variants            | All four types      | Support diverse content needs            |
| Q5: Related content             | Both articles + CTA | Improve engagement and cross-linking     |
| Q6: Code blocks                 | With copy button    | Improves developer experience            |

**Next Actions:**

1. ✅ Update ArticleDetailPage.tsx with approved designs
2. ✅ Implement left sidebar TOC component
3. ✅ Add reading progress bar
4. ✅ Implement gray description box for article metadata
5. ✅ Create callout block components (all variants)
6. ✅ Implement code blocks with copy button
7. ✅ Add related articles section with CTA
8. ✅ Enhance typography scale in prose configuration
9. ✅ Test across all article types (blog, support, topics)
10. ✅ Run qa-validator checks

---

## Approval

- [x] Owner reviewed sprint plan
- [x] Owner reviewed design specification v3
- [x] Owner approved all design decisions
- [x] Owner approved implementation start

**Approval Status:** ✅ APPROVED - PROCEEDING WITH PHASE 3 IMPLEMENTATION

---

_Phase 3: Implementation - Building Article Page Design System_
