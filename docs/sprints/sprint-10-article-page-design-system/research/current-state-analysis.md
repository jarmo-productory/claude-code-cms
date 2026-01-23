# Current State Analysis: Article Pages

**Date:** 2026-01-23
**Sprint:** 10 - Article Page Design System
**Phase:** 1 - Research

---

## Overview

This document analyzes the current implementation of article pages across blog, support, and topic sections to establish a baseline for design improvements.

---

## Current Implementation

### Component: ArticleDetailPage

**Location:** `src/components/content/ArticleDetailPage.tsx`

**Purpose:** Shared component for rendering individual articles across blog and topic sections.

### Current Structure

```tsx
<div className="min-h-screen bg-white pt-24 pb-16 px-6">
  <article className="max-w-3xl mx-auto">
    {/* Back Link */}
    <Link href={backHref} className="text-brand-primary...">
      ← {backLabel}
    </Link>

    {/* Header */}
    <header className="mb-12">
      <h1 className="text-4xl md:text-5xl font-display font-bold...">{title}</h1>
      {author && date && <AuthorRow author={author} date={date} readingTime={readingTime} />}
    </header>

    {/* Hero Image (optional) */}
    {image && (
      <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10...">
        <img src={image} alt={title} />
      </div>
    )}

    {/* Article Content */}
    <div
      className="prose prose-lg max-w-none prose-headings:font-display..."
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </article>
</div>
```

### Current Styling Details

**Container:**

- Background: `bg-white`
- Padding top: `pt-24` (96px - below fixed nav)
- Padding bottom: `pb-16` (64px)
- Side padding: `px-6` (24px)
- Min height: `min-h-screen`

**Article Wrapper:**

- Max width: `max-w-3xl` (48rem / 768px)
- Centered: `mx-auto`

**Back Link:**

- Color: `text-brand-primary` (#4461F2)
- Hover: `hover:text-brand-secondary` (#6B7FFF)
- Margin bottom: `mb-8` (32px)
- Arrow: `&larr;` HTML entity

**Title (H1):**

- Font size: `text-4xl` (2.25rem / 36px) on mobile
- Font size: `md:text-5xl` (3rem / 48px) on desktop
- Font family: `font-display` (Outfit)
- Font weight: `font-bold` (700)
- Color: `text-brand-dark` (#0A1E3D)
- Margin bottom: `mb-5` (20px)

**Author Row:**

- Component: `<AuthorRow />`
- Props: author, date, readingTime, locale, size="md"
- Displays: Avatar, author name, publication date, reading time

**Hero Image:**

- Aspect ratio: `aspect-[16/9]`
- Border radius: `rounded-xl` (12px)
- Overflow: `overflow-hidden`
- Margin bottom: `mb-10` (40px)
- Background (while loading): `bg-brand-surface`
- Image fit: `object-cover`

**Prose Content:**

- Base: `prose prose-lg`
- Max width: `max-w-none` (full width within container)
- Headings font: `prose-headings:font-display`
- Headings color: `prose-headings:text-brand-dark`
- Link color: `prose-a:text-brand-primary`
- Link hover: `hover:prose-a:text-brand-secondary`

---

## Usage Patterns

### Blog Posts

**Route:** `/[locale]/blog/[slug]/`

**Example:** `/en/blog/how-to-put-your-contracts-on-autopilot`

**Characteristics:**

- Long-form content (1000-3000 words)
- Marketing-focused messaging
- External links to product features
- Occasional inline images
- Author attribution important
- Featured/unfeatured flag
- Categories and topics
- Reading time displayed

**Frontmatter:**

```yaml
title: 'Article Title'
slug: 'article-slug'
metaTitle: 'SEO Title'
description: 'Meta description'
keyword: 'keywords, comma, separated'
image: './images/filename.webp'
lang: 'en'
topic: 'doc-automation'
date: '2025-06-05'
excerpt: 'Short summary'
readingTime: '10'
author: 'agrello'
supportOnly: false
featured: false
keywordCluster: 'process-automations'
categories:
  - contract-management
```

### Topic Articles (Support)

**Route:** `/[locale]/topics/[topic]/[slug]/`

**Example:** `/en/topics/getting-started/first-steps-in-agrello`

**Characteristics:**

- Educational/instructional content (500-2000 words)
- Step-by-step guides
- Frequent screenshots
- Lists and tables
- FAQ schema included
- "Last updated" date important
- Related articles suggestions

**Frontmatter:**

```yaml
author: 'jarmo-tuisk'
date: '2025-08-19'
image: '/images/support/first-steps-hero.webp'
rank: 1
seo_desc: 'Description for search engines'
seo_title: 'SEO Title'
slug: 'first-steps-in-agrello'
sub_topic: 'getting-started'
summary: 'Article summary'
title: 'Article Title'
```

---

## Content Elements Found in Articles

### Text Elements

- [x] Headings (H2-H4)
- [x] Paragraphs
- [x] Bulleted lists
- [x] Numbered lists
- [x] Bold and italic text
- [x] Inline code
- [ ] Lead paragraph (not styled)
- [ ] Pull quotes (not implemented)
- [ ] Captions (not implemented)

### Media Elements

- [x] Hero image (16:9)
- [x] Inline images
- [ ] Image captions (not implemented)
- [ ] Image galleries (not implemented)
- [ ] Video embeds (not styled)
- [ ] Diagrams (handled as images)

### Interactive Elements

- [x] Links (internal and external)
- [x] Back navigation
- [ ] Table of contents (not implemented)
- [ ] Anchor links (basic support)
- [ ] Collapsible sections (not implemented)

### Code Elements

- [x] Inline code (backticks)
- [x] Code blocks
- [ ] Syntax highlighting (not implemented)
- [ ] Copy button (not implemented)

### Structured Content

- [x] Tables (basic prose styling)
- [x] Blockquotes (basic prose styling)
- [ ] Callouts/alerts (not implemented)
- [ ] Comparison tables (basic table styling)
- [ ] Step indicators (not styled)

### Metadata Elements

- [x] Author information
- [x] Publication date
- [x] Reading time
- [ ] Last updated (shown for topics, not for blog)
- [ ] Categories/tags (data exists, not displayed)
- [ ] Social sharing (not implemented)
- [ ] Print button (not implemented)

---

## Tailwind Prose Default Behavior

**Current configuration:**

```css
prose prose-lg max-w-none
prose-headings:font-display
prose-headings:text-brand-dark
prose-a:text-brand-primary
hover:prose-a:text-brand-secondary
```

**Default prose-lg styles include:**

- Font size: 18px (1.125rem)
- Line height: 1.75 (31.5px)
- Max width: 65ch (overridden by max-w-none)
- H2: 1.5em (27px)
- H3: 1.25em (22.5px)
- H4: 1.125em (20.25px)
- Paragraph spacing: 1.25em
- List spacing: 0.5em
- Code: monospace, gray background
- Blockquote: gray, left border
- Table: bordered, striped rows

---

## Design Gaps

### Typography

1. **No lead paragraph style** - First paragraph could be larger/distinct
2. **Limited heading hierarchy** - Only using font-display, no weight variation
3. **No caption style** - Images lack captions
4. **Metadata typography inconsistent** - Author row vs dates vs reading time

### Layout

1. **Fixed max-width for all content** - Images, tables, code blocks all constrained
2. **No breakout sections** - Can't have wider elements
3. **Uniform spacing** - All elements use same prose spacing
4. **No sidebar support** - Can't add related content or TOC

### Visual Elements

1. **Basic blockquote styling** - Just gray with border
2. **No callout/alert components** - Can't highlight important info
3. **Plain code blocks** - No syntax highlighting or copy button
4. **Minimal table styling** - Basic stripes, no advanced features

### Navigation

1. **Simple back link** - Could be enhanced with breadcrumbs
2. **No article navigation** - Can't go to prev/next in series
3. **No related content** - Missing suggestions at end
4. **No progress indicator** - Don't know position in long articles

### Mobile Experience

1. **Basic responsive scaling** - Just shrinks text sizes
2. **Image treatment** - 16:9 aspect ratio might not be optimal on mobile
3. **Typography could be optimized** - Mobile line heights and spacing
4. **Touch targets** - Links could be more tappable

---

## Competitor Benchmarks

### Medium

**Strengths:**

- Excellent reading typography (21px body, 1.58 line height)
- Generous letter spacing
- Drop caps on first paragraph
- Member highlight feature
- Reading progress bar

### Ghost (Linear Blog, Stripe Blog)

**Strengths:**

- Clean, minimal design
- Code block with syntax highlighting
- Copy code button
- Wide images for screenshots
- Table of contents for long posts
- Featured images with gradients

### Notion Public Pages

**Strengths:**

- Callout blocks with icons and colors
- Toggle/accordion sections
- Inline page embeds
- Breadcrumb navigation
- Last edited timestamp

### Dev.to

**Strengths:**

- Code syntax highlighting
- Series navigation
- Tags prominent
- Reactions/engagement
- Mobile-first design

---

## Recommendations for Design Phase

### High Priority

1. **Typography refinement** - Define complete scale with weights and sizes
2. **Callout components** - Info, warning, success, note variants
3. **Code block enhancement** - Syntax highlighting, copy button
4. **Image captions** - Support for figure with figcaption
5. **Related content section** - Show similar articles at end

### Medium Priority

6. **Breakout sections** - Allow wider content for emphasis
7. **Table improvements** - Better mobile behavior, sorting
8. **Lead paragraph style** - Make intro stand out
9. **Breadcrumb navigation** - Better than simple back link
10. **Last updated indicator** - Show for blog posts too

### Lower Priority

11. **Reading progress indicator** - Subtle bar at top
12. **Table of contents** - For articles >2000 words
13. **Dark mode** - Complete dark theme support
14. **Print stylesheet** - Optimized for printing
15. **Social sharing** - Share buttons (can defer)

---

## Technical Constraints

### Must Preserve

- Server-side rendering (SSR) with Next.js
- Markdown as content source
- Existing frontmatter schemas
- Current routing structure
- SEO metadata generation

### Can Modify

- Tailwind prose configuration
- Component structure
- CSS custom properties
- Layout components
- Image handling

### Cannot Implement Without New Dependencies

- Syntax highlighting (need library like Prism or Shiki)
- Advanced search (would need search index)
- Real-time collaboration (out of scope)

---

## Next Steps for Design Phase

1. **Define typography scale** with all sizes and weights
2. **Specify spacing system** for consistent vertical rhythm
3. **Design component variants** (callouts, code blocks, tables)
4. **Create layout specifications** (breakouts, sidebars)
5. **Document color usage** for all content elements
6. **Design mobile-specific treatments**
7. **Create visual mockups** or detailed descriptions

---

_End of Current State Analysis_
