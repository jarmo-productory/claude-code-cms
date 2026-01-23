---
name: ui-components
description: Complete UI component library. Contains buttons, form inputs, cards, modals, and all interactive elements. Activated when building React components, forms, or UI elements.
allowed-tools: Read, Write, Glob, Grep
---

# UI Component Library

Complete component patterns for building applications with React and Tailwind CSS.

**Live Reference:** See `/styleguide` for interactive examples and full documentation.

## Using the Component Library

Import components using the `@/` path alias:

```tsx
import { Button, Badge, Card, Input, Icon, SectionHeader } from '@/components/ui'
```

### Available Components

| Component       | Description                  | Key Props                                         |
| --------------- | ---------------------------- | ------------------------------------------------- |
| `Button`        | All button variants          | `variant`, `size`, `onDark`                       |
| `Badge`         | Labels and status indicators | `variant`, `showDot`, `onDark`                    |
| `Card`          | Content containers           | `variant`, `padding`, `hoverable`                 |
| `Input`         | Form inputs with labels      | `type`, `label`, `error`, `helperText`            |
| `Icon`          | Lucide icons integration     | `name`, `size`                                    |
| `SectionHeader` | Section titles with overline | `overline`, `headline`, `body`, `align`, `onDark` |
| `FadeInView`    | Scroll-triggered animations  | `direction`, `delay`                              |

---

## Raw Tailwind Patterns (Reference)

Below are raw Tailwind patterns for cases where you need custom implementations.

## Buttons

### Primary Button

```tsx
<button className="bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150 shadow-md shadow-brand-primary/25">
  Primary Action
</button>
```

### Secondary Button

```tsx
<button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 active:scale-[0.98] transition-all duration-150">
  Secondary Action
</button>
```

### Ghost Button

```tsx
<button className="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-xl font-semibold hover:bg-brand-primary hover:text-white active:scale-[0.98] transition-all duration-150">
  Ghost Action
</button>
```

### Accent Button (CTA)

```tsx
<button className="bg-gradient-to-r from-brand-accent to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-md shadow-brand-accent/25">
  Call to Action
</button>
```

### Button Sizes

```tsx
// Small
<button className="... px-4 py-2 text-sm rounded-lg">Small</button>

// Medium (default)
<button className="... px-6 py-3 text-base rounded-xl">Medium</button>

// Large
<button className="... px-8 py-4 text-lg rounded-xl">Large</button>
```

## Form Inputs

### Text Input

```tsx
<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 font-sans focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-150"
/>
```

### Input with Label

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-slate-700">Email Address</label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 font-sans focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-150"
  />
</div>
```

### Input States

```tsx
// Error State
<input className="w-full px-4 py-3 rounded-xl border-2 border-red-500 bg-red-50 ..." />
<p className="text-red-500 text-sm mt-1">This field is required</p>

// Success State
<input className="w-full px-4 py-3 rounded-xl border-2 border-brand-secondary bg-teal-50 ..." />

// Disabled State
<input className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed" disabled />
```

## Cards

### Basic Card

```tsx
<div className="bg-white rounded-2xl border border-slate-200 p-8">
  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">Card Title</h3>
  <p className="text-slate-600">Card content goes here.</p>
</div>
```

### Interactive Card

```tsx
<div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-brand-primary/50 hover:shadow-lg transition-all cursor-pointer group">
  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
    Interactive Card
  </h3>
  <p className="text-slate-600">Hover to see the effect.</p>
</div>
```

### Feature Card with Icon

```tsx
<div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-brand-primary/50 hover:shadow-lg transition-all group">
  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
    <svg
      className="w-6 h-6 text-brand-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">Feature Title</h3>
  <p className="text-slate-600">Feature description text.</p>
</div>
```

## Badges & Tags

```tsx
// Default
<span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
  Default
</span>

// Primary
<span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
  Primary
</span>

// Success
<span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
  Success
</span>

// Accent
<span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
  New
</span>
```

## Loading States

### Spinner

```tsx
<svg
  className="animate-spin h-8 w-8 text-brand-primary"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle
    className="opacity-25"
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="4"
  ></circle>
  <path
    className="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  ></path>
</svg>
```

### Skeleton

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
</div>
```

## Usage Guidelines

### Do:

- Use Primary button for main actions
- Use Accent button for CTAs that need attention
- Maintain consistent spacing (use spacing scale)
- Include focus states for accessibility
- Use loading states for async operations

### Don't:

- Mix button styles arbitrarily
- Use more than one Accent button per section
- Skip error/validation states on forms
- Use custom colors outside the palette
- Remove focus indicators
