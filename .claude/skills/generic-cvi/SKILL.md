---
name: generic-cvi
description: Generic Corporate Visual Identity system. Customize colors, fonts, and brand tokens for your project.
allowed-tools: Read, Write, Glob, Grep
---

# Corporate Visual Identity (CVI)

This skill defines the brand system for your project. Customize the values below to match your brand.

---

## Brand Colors

All colors are defined in `src/app/globals.css` using Tailwind CSS v4's `@theme` directive.

### Default Palette (Customize These!)

| Token | Default | Usage |
|-------|---------|-------|
| `brand-dark` | #1e1b4b | Dark backgrounds, text |
| `brand-primary` | #4338ca | Primary actions, links |
| `brand-secondary` | #2dd4bf | Accents, success states |
| `brand-accent` | #d946ef | CTAs, highlights |
| `brand-surface` | #f8fafc | Light backgrounds |

### How to Customize

Edit `src/app/globals.css`:

```css
@theme {
  /* Replace these with your brand colors */
  --color-brand-dark: #1e1b4b;      /* Your dark color */
  --color-brand-primary: #4338ca;   /* Your primary color */
  --color-brand-secondary: #2dd4bf; /* Your secondary color */
  --color-brand-accent: #d946ef;    /* Your accent color */
  --color-brand-surface: #f8fafc;   /* Your surface color */
}
```

---

## Typography

### Font Stack

| Token | Default | Usage |
|-------|---------|-------|
| `font-display` | Space Grotesk | Headlines, titles |
| `font-sans` | Sofia Sans | Body text, UI |

### How to Customize

1. Update font imports in `src/app/layout.tsx`:

```tsx
import { Space_Grotesk, Sofia_Sans } from 'next/font/google'

// Replace with your fonts
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const bodyFont = Sofia_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})
```

2. Update CSS variables in `globals.css`:

```css
@theme {
  --font-sans: "Your Body Font", sans-serif;
  --font-display: "Your Display Font", sans-serif;
}
```

---

## Gradients

### Brand Gradient

Used for text highlights and decorative elements:

```css
@theme {
  --background-image-brand-gradient: linear-gradient(
    135deg,
    var(--color-brand-secondary) 0%,
    var(--color-brand-primary) 50%,
    var(--color-brand-accent) 100%
  );
}
```

### Mesh Gradient (Background)

Used for hero sections and dark backgrounds:

```css
@theme {
  --background-image-brand-mesh: radial-gradient(
    at 40% 20%,
    var(--color-brand-secondary) 0px,
    transparent 50%
  ),
  radial-gradient(
    at 80% 0%,
    var(--color-brand-primary) 0px,
    transparent 50%
  ),
  radial-gradient(
    at 0% 50%,
    var(--color-brand-accent) 0px,
    transparent 50%
  );
}
```

---

## Usage in Components

### Background Colors

```tsx
// Dark background
<div className="bg-brand-dark text-white">...</div>

// Light surface
<div className="bg-brand-surface text-slate-900">...</div>

// Gradient background
<div className="bg-brand-gradient">...</div>
```

### Text Colors

```tsx
<h1 className="text-brand-primary">Primary heading</h1>
<p className="text-brand-secondary">Accent text</p>

// Gradient text
<span className="bg-brand-gradient bg-clip-text text-transparent">
  Gradient text
</span>
```

### Button Examples

```tsx
// Primary button
<button className="bg-brand-primary text-white hover:bg-indigo-700">
  Primary
</button>

// Accent button (CTA)
<button className="bg-brand-accent text-white hover:bg-fuchsia-600">
  Call to Action
</button>
```

---

## Shadows

### Brand Shadow

```css
@theme {
  --shadow-brand: 0 4px 14px 0 rgba(67, 56, 202, 0.25);
}
```

Usage:

```tsx
<div className="shadow-brand">Card with brand shadow</div>
```

---

## Quick Customization Checklist

When setting up a new project:

- [ ] Choose your brand colors and update `globals.css`
- [ ] Select fonts and update `layout.tsx`
- [ ] Test color contrast for accessibility
- [ ] Update gradient values if needed
- [ ] Create logo variations for dark/light backgrounds
- [ ] Test on both light and dark backgrounds

---

## File Locations

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Color and gradient definitions |
| `src/app/layout.tsx` | Font imports and configuration |
| `src/components/ui/*` | Components using brand tokens |
