# Article Page Design Specification

**Sprint:** 10 - Article Page Design System
**Status:** DRAFT v3 - Awaiting Owner Approval
**Created:** 2026-01-23
**Updated:** 2026-01-23 (Split hero, TOC sidebar, readability features)

---

## Overview

This document defines the complete design system for blog/support/topic article pages. It covers the **full page** — split hero, TOC sidebar, content, and footer.

**Design Philosophy:**

1. **Split Hero** - Text left, image right (matches current Webflow)
2. **TOC Sidebar** - Always-visible navigation for long-form readability
3. **Readability First** - Optimal typography, spacing, visual rhythm
4. **Brand Consistency** - Agrello tokens throughout
5. **Responsive** - Split on desktop, stacked on mobile

---

## 1. Page Structure (Full Page)

The article page has **4 zones** with a **two-column content area**:

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [Nav]  Features  Pricing  Resources  Contact     Flags  Login  CTA     │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ZONE 1: HERO (Split Layout — 40% text / 60% image)                    │
│  ┌────────────────────────┬─────────────────────────────────────────┐   │
│  │                        │                                         │   │
│  │  (←) Back              │                                         │   │
│  │                        │                                         │   │
│  │  Category / Sub / 5min │          HERO IMAGE                     │   │
│  │                        │          (REQUIRED)                     │   │
│  │  Article Title         │          natural aspect                 │   │
│  │  Goes Here             │          rounded-xl                     │   │
│  │                        │                                         │   │
│  │  December 8, 2025      │                                         │   │
│  │                        │                                         │   │
│  │  [avatar] Jarmo Tuisk  │                                         │   │
│  │           Agrello      │                                         │   │
│  │                        │                                         │   │
│  └────────────────────────┴─────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ZONE 2: CONTENT AREA (TOC sidebar + Article body)                      │
│  ┌──────────────────┬───────────────────────────────────────────────┐   │
│  │                  │                                               │   │
│  │  TOC SIDEBAR     │  ┌─────────────────────────────────────────┐  │   │
│  │  (sticky)        │  │  Description / Excerpt box (gray bg)    │  │   │
│  │                  │  └─────────────────────────────────────────┘  │   │
│  │  ▌Your Home      │                                               │   │
│  │   Screen         │  Body text starts here...                     │   │
│  │                  │                                               │   │
│  │  Upload First    │  ## Your Home Screen                          │   │
│  │  Document        │                                               │   │
│  │                  │  When you first log in, you'll see...         │   │
│  │  Send for        │                                               │   │
│  │  Signing         │  [inline image + caption]                     │   │
│  │                  │                                               │   │
│  │  ─────────       │  ## Upload First Document                     │   │
│  │                  │                                               │   │
│  │                  │  Click the upload button to...                │   │
│  │                  │                                               │   │
│  └──────────────────┴───────────────────────────────────────────────┘   │
│      ~220px                        ~720px                                │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ZONE 3: ARTICLE FOOTER                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │   Related Articles (3-column grid)           + CTA               │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [Footer]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

### Key Layout Widths

| Zone            | Max Width | Purpose                                 |
| --------------- | --------- | --------------------------------------- |
| Page container  | 1280px    | Overall max width                       |
| Hero section    | 1280px    | Split: ~40% text / ~60% image           |
| Content wrapper | ~1000px   | TOC (220px) + gap (60px) + body (720px) |
| TOC sidebar     | 220px     | Sticky navigation                       |
| Article body    | 720px     | Optimal reading width                   |
| Article footer  | 1000px    | Related articles grid                   |

---

## 2. Hero Section (Split Layout)

Based on the current Webflow design: **metadata + title on LEFT, hero image on RIGHT**.

### 2.1 Hero Components (all required)

```
Hero Section (flex row, items-center)
├── LEFT COLUMN (~40%)
│   ├── Back Button (← circle with border)
│   ├── Breadcrumb (Category / Subcategory / Reading time)
│   ├── Title (H1)
│   ├── Date
│   └── Author (avatar + name + company)
│
└── RIGHT COLUMN (~60%)
    └── Hero Image (REQUIRED, rounded-xl, natural aspect)
```

### 2.2 Hero Specification

```tsx
<section className="py-8 md:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
      {/* LEFT COLUMN: Meta + Title (~40%) */}
      <div className="lg:w-[40%] flex flex-col">
        {/* Back button (circle) */}
        <a
          href={backHref}
          className="
          w-10 h-10 rounded-full border border-gray-200
          inline-flex items-center justify-center
          text-gray-500 hover:text-brand-primary hover:border-brand-primary
          transition-colors mb-6
        "
        >
          <Icon name="arrow-left" size="sm" />
        </a>

        {/* Breadcrumb: Category / Subcategory / Reading time */}
        <div
          className="
          inline-flex items-center gap-2 mb-4
          text-sm text-gray-600
          bg-gray-50 rounded-full px-4 py-1.5 w-fit
        "
        >
          <span className="font-medium">{category}</span>
          {subcategory && (
            <>
              <span className="text-gray-300">/</span>
              <span>{subcategory}</span>
            </>
          )}
          <span className="text-gray-400 ml-1">{readingTime} min</span>
        </div>

        {/* Title */}
        <h1
          className="
          text-3xl sm:text-4xl lg:text-[2.75rem]
          font-display font-bold text-brand-dark
          leading-[1.15] tracking-tight
          mb-5
        "
        >
          {title}
        </h1>

        {/* Date */}
        <time className="text-sm text-gray-500 mb-4">{formattedDate}</time>

        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold text-brand-dark">{author.name}</div>
            <div className="text-xs text-gray-500">Agrello</div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Hero Image (~60%) — REQUIRED */}
      <div className="lg:w-[60%]">
        <div className="rounded-xl overflow-hidden bg-brand-surface">
          <img src={image} alt={title} className="w-full h-auto object-cover" loading="eager" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### 2.3 Hero Properties

| Property     | Value                     | Rationale                      |
| ------------ | ------------------------- | ------------------------------ |
| Layout       | **Split: 40/60**          | Matches current Webflow design |
| Image        | **REQUIRED**              | All articles have images       |
| Image aspect | Natural (no forced ratio) | Let image dictate proportions  |
| Image radius | rounded-xl (12px)         | Matches screenshot             |
| Back button  | Circle with gray border   | Subtle, recognizable           |
| Breadcrumb   | Pill-shaped, gray bg      | Category / Sub / reading time  |
| Title size   | 2.75rem (44px) desktop    | Fits well in 40% column        |
| Author       | Avatar + name + company   | Personal, trustworthy          |
| Background   | White                     | Clean, image provides color    |

### 2.4 Hero Mobile Behavior (<1024px)

On mobile/tablet the hero **stacks vertically**:

1. Back button
2. Breadcrumb pill
3. Title
4. Date + Author
5. Hero image (full width below)

```tsx
{/* Mobile: stacked, Desktop: side-by-side */}
<div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
```

---

## 3. Table of Contents (TOC Sidebar)

The TOC is a **critical readability feature** — it stays visible while scrolling and shows the reader their position in the article.

### 3.1 TOC Behavior

| Property        | Value                              |
| --------------- | ---------------------------------- |
| Position        | Left sidebar, sticky               |
| Width           | 220px                              |
| Visibility      | Desktop only (lg:block, hidden)    |
| Sticky offset   | top: 100px (below nav)             |
| Active item     | Left border (brand-primary, 2px)   |
| Inactive items  | Left border transparent, gray text |
| Items source    | Auto-generated from H2 headings    |
| Click behavior  | Smooth scroll to section           |
| Active tracking | Intersection Observer              |

### 3.2 TOC Specification

```tsx
<aside
  className="
  hidden lg:block
  w-[220px] flex-shrink-0
  self-start sticky top-24
  max-h-[calc(100vh-120px)] overflow-y-auto
"
>
  <nav aria-label="Table of Contents">
    <ul className="space-y-0.5">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => smoothScrollTo(e, heading.id)}
            className={cn(
              'block py-2 pl-4 text-sm border-l-2 transition-colors',
              activeId === heading.id
                ? 'border-brand-dark text-brand-dark font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>

  {/* Optional: divider below TOC */}
  <div className="mt-8 border-t border-gray-100" />
</aside>
```

### 3.3 Active Section Detection

```tsx
// Track which section is currently visible
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    },
    { rootMargin: '-100px 0px -66%' }
  )

  headings.forEach((heading) => {
    const el = document.getElementById(heading.id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [headings])
```

### 3.4 TOC + Content Layout

```tsx
<div className="max-w-[1000px] mx-auto px-6 md:px-8 py-12 md:py-16">
  <div className="flex gap-12 lg:gap-16">
    {/* TOC Sidebar (desktop only) */}
    <TableOfContents headings={headings} activeId={activeId} />

    {/* Article Body */}
    <article className="flex-1 max-w-3xl">
      {/* Description box */}
      {/* Prose content */}
    </article>
  </div>
</div>
```

### 3.5 TOC Mobile Behavior

On mobile/tablet (<1024px):

- TOC sidebar is **hidden**
- Optional future: collapsible accordion at top of content area
- The description box serves as the primary orientation element

---

## 4. Readability Enhancements

Beyond TOC, these features improve the reading experience:

### 4.1 Description/Excerpt Box

A highlighted summary box at the **top of the content area** (visible in Webflow screenshot). Gives readers a quick overview before diving in.

```tsx
<div
  className="
  mb-8 p-5 md:p-6
  bg-gray-50 rounded-lg
  text-base text-gray-700 leading-relaxed
  font-medium
"
>
  {description}
</div>
```

### 4.2 Reading Progress Bar

A thin progress indicator fixed at the top of the viewport:

```tsx
<div
  className="fixed top-0 left-0 z-50 h-[3px] bg-brand-primary transition-all duration-100"
  style={{ width: `${scrollProgress}%` }}
  role="progressbar"
  aria-valuenow={scrollProgress}
  aria-label="Reading progress"
/>
```

### 4.3 Heading Anchors

Each H2/H3 gets a hover-visible anchor link (#) for easy section sharing:

```tsx
<h2 id={slug} className="group relative scroll-mt-24">
  {text}
  <a
    href={`#${slug}`}
    className="
      absolute -left-6 top-1/2 -translate-y-1/2
      opacity-0 group-hover:opacity-100
      text-gray-300 hover:text-brand-primary
      transition-opacity text-lg
    "
    aria-label={`Link to ${text}`}
  >
    #
  </a>
</h2>
```

### 4.4 Smooth Typography Rhythm

| Element     | Spacing Above | Spacing Below | Rationale                     |
| ----------- | ------------- | ------------- | ----------------------------- |
| H2          | 3rem (48px)   | 0.75rem       | Clear section breaks          |
| H3          | 2rem (32px)   | 0.5rem        | Sub-section breaks            |
| Paragraphs  | —             | 1.5rem        | Comfortable reading flow      |
| Images      | 2.5rem        | 2.5rem        | Breathing room around visuals |
| Blockquotes | 2rem          | 2rem          | Stand out from body text      |
| Lists       | 1.25rem       | 1.25rem       | Consistent with paragraphs    |

### 4.5 Content Width for Readability

- Body text at **720px** = ~65-75 characters per line (optimal)
- TOC at **220px** provides useful context without crowding
- Total content area ~1000px fits comfortably on 1280px+ screens

---

## 5. Typography System

### 5.1 Font Families

**Display Font:** Montserrat (font-display)

- Used for: All headings, titles
- Weights: 600 (semibold), 700 (bold)

**Body Font:** Montserrat (font-sans)

- Used for: Body text, UI elements
- Weights: 400 (regular), 500 (medium), 600 (semibold)

### 5.2 Typography Scale

#### Desktop (>=1024px)

| Element         | Size           | Weight  | Line Height | Usage                   |
| --------------- | -------------- | ------- | ----------- | ----------------------- |
| Hero Title (H1) | 2.75rem/44px   | 700     | 1.15        | Article title (in hero) |
| Heading 2       | 1.75rem/28px   | 600     | 1.3         | Major sections          |
| Heading 3       | 1.375rem/22px  | 600     | 1.4         | Subsections             |
| Description     | 1rem/16px      | 500     | 1.6         | Excerpt box             |
| Body            | 1.0625rem/17px | 400     | 1.75        | Main content            |
| Body Small      | 0.9375rem/15px | 400     | 1.6         | Captions, callouts      |
| Metadata        | 0.875rem/14px  | 500     | 1.5         | Dates, breadcrumb       |
| TOC items       | 0.875rem/14px  | 400/500 | 1.5         | Sidebar navigation      |

#### Mobile (<1024px)

| Element         | Size         | Weight | Line Height | Usage          |
| --------------- | ------------ | ------ | ----------- | -------------- |
| Hero Title (H1) | 2rem/32px    | 700    | 1.2         | Article title  |
| Heading 2       | 1.5rem/24px  | 600    | 1.3         | Major sections |
| Heading 3       | 1.25rem/20px | 600    | 1.4         | Subsections    |
| Body            | 1rem/16px    | 400    | 1.75        | Main content   |

---

## 6. Color System

### 6.1 Text Colors

| Element         | Tailwind Class       | Usage                |
| --------------- | -------------------- | -------------------- |
| Title, headings | text-brand-dark      | Primary content      |
| Body text       | text-gray-800        | Readable, not harsh  |
| Metadata, dates | text-gray-500        | De-emphasized        |
| TOC active      | text-brand-dark      | Current section      |
| TOC inactive    | text-gray-500        | Other sections       |
| Links           | text-brand-primary   | Actionable           |
| Links hover     | text-brand-secondary | Interactive feedback |
| Captions        | text-gray-500        | Supporting info      |

### 6.2 Background Colors

| Element           | Tailwind Class   | Usage                    |
| ----------------- | ---------------- | ------------------------ |
| Page              | bg-white         | Clean reading surface    |
| Breadcrumb pill   | bg-gray-50       | Subtle container         |
| Description box   | bg-gray-50       | Highlighted summary      |
| Code blocks       | bg-brand-surface | Differentiated from body |
| Blockquotes       | bg-gray-50       | Subtle emphasis          |
| Callout (info)    | bg-blue-50       | Blue tone                |
| Callout (warning) | bg-amber-50      | Amber tone               |

### 6.3 Border Colors

| Element       | Tailwind Class       | Usage                   |
| ------------- | -------------------- | ----------------------- |
| Back button   | border-gray-200      | Subtle circle           |
| TOC active    | border-brand-dark    | Current indicator (2px) |
| Blockquote    | border-brand-primary | Left accent (4px)       |
| Inline images | border-gray-200      | Subtle frame            |
| Dividers      | border-gray-100      | Very light              |

---

## 7. Content Components

### 7.1 Description/Excerpt Box

Appears at the top of the content area. Provides article summary.

```tsx
<div className="mb-8 p-5 md:p-6 bg-gray-50 rounded-lg">
  <p className="text-base text-gray-700 leading-relaxed font-medium mb-0">{description}</p>
</div>
```

### 7.2 Inline Images

```tsx
<figure className="my-10">
  <img src={src} alt={alt} className="w-full rounded-lg border border-gray-200" loading="lazy" />
  {caption && <figcaption className="mt-2 text-sm text-gray-500 text-center">{caption}</figcaption>}
</figure>
```

### 7.3 Blockquotes

```tsx
<blockquote
  className="
  my-8 pl-6 py-4
  border-l-4 border-brand-primary
  bg-gray-50 rounded-r-lg
"
>
  <p className="text-gray-700 italic mb-0">{quote}</p>
</blockquote>
```

### 7.4 Callout Boxes

```tsx
<div className="my-8 p-4 rounded-lg bg-blue-50 border-l-4 border-blue-400 flex gap-3">
  <Icon name="info" className="text-blue-600 flex-shrink-0 mt-0.5" size="sm" />
  <div className="text-sm text-gray-700 leading-relaxed">{content}</div>
</div>
```

Variants: info (blue), warning (amber), success (green), error (red)

### 7.5 Code Blocks

```tsx
<div className="my-8 relative group">
  <button
    className="
    absolute top-3 right-3 z-10
    opacity-0 group-hover:opacity-100 transition-opacity
    px-2 py-1 text-xs bg-gray-700 text-white rounded
    hover:bg-gray-600
  "
  >
    Copy
  </button>
  <pre className="p-4 rounded-lg overflow-x-auto bg-brand-surface border border-gray-200">
    <code className="font-mono text-sm text-gray-800">{code}</code>
  </pre>
</div>
```

### 7.6 Tables

```tsx
<div className="my-8 overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
          Header
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-700">Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 8. Prose Configuration

### 8.1 Tailwind Prose Classes

```tsx
className="
  prose prose-lg max-w-none
  prose-headings:font-display
  prose-headings:text-brand-dark
  prose-headings:font-semibold
  prose-headings:scroll-mt-24
  prose-p:text-gray-800
  prose-a:text-brand-primary
  prose-a:no-underline
  prose-a:font-medium
  hover:prose-a:text-brand-secondary
  hover:prose-a:underline
  prose-strong:text-gray-900
  prose-blockquote:border-l-brand-primary
  prose-blockquote:bg-gray-50
  prose-blockquote:rounded-r-lg
  prose-img:rounded-lg
  prose-img:border
  prose-img:border-gray-200
"
```

### 8.2 Custom Prose Styles (globals.css)

```css
.article-prose {
  -webkit-font-smoothing: antialiased;
}

.article-prose h2 {
  margin-top: 3rem;
  margin-bottom: 0.75rem;
}

.article-prose h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.article-prose a {
  transition: color 0.2s ease-in-out;
}

.article-prose :not(pre) > code {
  background-color: theme('colors.gray.100');
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

.article-prose img {
  margin: 2.5rem auto;
}
```

---

## 9. Mobile Optimization

### 9.1 Breakpoint Behavior

| Feature         | Mobile (<768px) | Tablet (768-1023px) | Desktop (>=1024px) |
| --------------- | --------------- | ------------------- | ------------------ |
| Hero layout     | Stacked         | Stacked             | Split (40/60)      |
| TOC sidebar     | Hidden          | Hidden              | Sticky sidebar     |
| Description box | Full width      | Full width          | Full width         |
| Body text size  | 16px            | 16px                | 17px               |
| Title size      | 32px            | 36px                | 44px               |
| Progress bar    | Visible         | Visible             | Visible            |
| Content padding | 24px            | 32px                | 0 (within layout)  |

### 9.2 Mobile Hero

```tsx
{
  /* Mobile: stacked vertically */
}
;<div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
  <div className="lg:w-[40%]">{/* meta + title */}</div>
  <div className="lg:w-[60%]">{/* image - full width on mobile */}</div>
</div>
```

### 9.3 Mobile Content Area

```tsx
{
  /* Mobile: no TOC, just article body full width */
}
;<div className="flex gap-12 lg:gap-16">
  <TableOfContents className="hidden lg:block" />
  <article className="flex-1 max-w-3xl">{/* content */}</article>
</div>
```

---

## 10. Accessibility

- Proper heading hierarchy (H1 in hero, H2/H3 in content)
- `<article>`, `<aside>`, `<nav>` semantic elements
- TOC: `aria-label="Table of Contents"`
- Progress bar: `role="progressbar"` with `aria-valuenow`
- All images: meaningful alt text
- Focus rings: 2px brand-primary, offset 2px
- Skip-to-content link
- WCAG AA contrast ratios (4.5:1 body, 3:1 headings)
- `scroll-mt-24` on headings for anchor offset

---

## 11. Performance

- Hero image: `loading="eager"`, no lazy load
- All other images: `loading="lazy"`
- TOC: Client component (needs Intersection Observer)
- Progress bar: Client component (needs scroll listener)
- Reading time: Calculated at build time
- Heading extraction: Done at build time from markdown AST

---

## 12. Implementation Priority

### Phase 1: Structure (Must Have)

1. Split hero layout (40/60, responsive stacking)
2. TOC sidebar with Intersection Observer active state
3. TOC + content flex layout
4. Description/excerpt box
5. Image as REQUIRED prop

### Phase 2: Readability (Must Have)

6. Reading progress bar
7. Heading anchors (hover #)
8. Enhanced prose typography (spacing, rhythm)
9. scroll-mt on headings for TOC links
10. Smooth scroll behavior

### Phase 3: Content Components (Should Have)

11. Inline images with figcaption
12. Enhanced blockquotes
13. Callout boxes (info, warning, success, error)
14. Code blocks with copy button
15. Table styling

### Phase 4: Footer & Polish (Should Have)

16. Related articles section (3-column grid)
17. CTA component
18. Mobile TOC (accordion or drawer — future)

---

## 13. Design Decisions for Owner

### Q1: TOC position

- A) **Left sidebar** (as shown in Webflow screenshot) - Recommended
- B) **Right sidebar** (like many docs sites)

### Q2: Description box

- A) **Gray background box** (as in Webflow) - Recommended
- B) **Lead paragraph** (just larger text, no box)
- C) **Both** (box + lead paragraph after)

### Q3: Reading progress bar

- A) **Yes** - thin colored bar at top of page - Recommended
- B) **No** - keep it clean

### Q4: Callout variants needed

- [ ] Info (blue) - tips, helpful info
- [ ] Warning (amber) - important notes
- [ ] Success (green) - confirmations
- [ ] Error (red) - critical warnings

### Q5: Related content in footer

- [ ] Related articles (same category) — 3-column cards
- [ ] CTA to product/signup
- [ ] Both

### Q6: Code blocks (for support articles with technical content)

- A) **Basic** - gray background only
- B) **With copy button** - Recommended
- C) **Full** (syntax highlighting + copy + language label)

---

## 14. Full Page Example (Desktop)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [Navigation bar]                                                        │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─── LEFT (40%) ────────┬─── RIGHT (60%) ─────────────────────────┐   │
│  │                        │                                         │   │
│  │  (←)                   │  ┌─────────────────────────────────┐    │   │
│  │                        │  │                                 │    │   │
│  │  Agrello Features /    │  │                                 │    │   │
│  │  Getting Started /     │  │         HERO IMAGE              │    │   │
│  │  5 min                 │  │         (rounded-xl)            │    │   │
│  │                        │  │                                 │    │   │
│  │  First Steps in        │  │                                 │    │   │
│  │  Agrello               │  │                                 │    │   │
│  │                        │  └─────────────────────────────────┘    │   │
│  │  December 8, 2025      │                                         │   │
│  │                        │                                         │   │
│  │  [img] Jarmo Tuisk     │                                         │   │
│  │        Agrello         │                                         │   │
│  │                        │                                         │   │
│  └────────────────────────┴─────────────────────────────────────────┘   │
│                                                                          │
├── CONTENT ZONE ─────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌── TOC (220px) ──┬── ARTICLE BODY (720px) ───────────────────────┐   │
│  │                  │                                               │   │
│  │  ▌Your Home     │  ┌─────────────────────────────────────────┐  │   │
│  │   Screen        │  │  A quick orientation for new Agrello    │  │   │
│  │                  │  │  users - understand your home screen    │  │   │
│  │  Upload First   │  │  and upload your first document.        │  │   │
│  │  Document       │  └─────────────────────────────────────────┘  │   │
│  │                  │                                               │   │
│  │  Send for       │  You've just logged in to Agrello. Let's     │   │
│  │  Signing        │  get you oriented so you can start working   │   │
│  │                  │  with documents right away.                  │   │
│  │                  │                                               │   │
│  │                  │  ## Your Home Screen                          │   │
│  │                  │                                               │   │
│  │                  │  When you first log in, you'll see your     │   │
│  │                  │  home screen...                              │   │
│  │                  │                                               │   │
│  │                  │  [screenshot with caption]                   │   │
│  │                  │                                               │   │
│  └──────────────────┴───────────────────────────────────────────────┘   │
│                                                                          │
├── FOOTER ZONE ──────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │  Related Articles                                                  │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │ │
│  │  │  [img]       │  │  [img]       │  │  [img]       │            │ │
│  │  │  Title       │  │  Title       │  │  Title       │            │ │
│  │  │  Category    │  │  Category    │  │  Category    │            │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘            │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [Footer]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Approval Checklist

- [ ] Owner approved split hero layout (40% text / 60% image)
- [ ] Owner confirmed image is REQUIRED
- [ ] Owner approved TOC sidebar on left (Q1)
- [ ] Owner confirmed description box style (Q2)
- [ ] Owner decided on reading progress bar (Q3)
- [ ] Owner confirmed callout variants (Q4)
- [ ] Owner decided on article footer content (Q5)
- [ ] Owner confirmed code block level (Q6)

---

_Design Specification v3.0 - Ready for Owner Review_
