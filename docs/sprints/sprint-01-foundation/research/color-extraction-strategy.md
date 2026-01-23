# Color Extraction Strategy - Sprint 01 Research

## Challenge

The Webflow CSS (`agrello-web.shared.min.css`) is minified to a single 282KB line, making direct parsing difficult. We need a reliable method to extract accurate brand colors.

## Extraction Methods

### Method 1: Live Site Inspection (RECOMMENDED)

**Target URL:** https://www.agrello.io

**Key Elements to Inspect:**

1. **Hero Section**
   - Background color/gradient
   - Headline color
   - Body text color
   - CTA button colors (primary, secondary)

2. **Navigation**
   - Logo colors
   - Menu text colors
   - Active/hover states

3. **Feature Cards**
   - Card background
   - Card border colors
   - Icon colors
   - Text hierarchy (title, body, muted)

4. **Footer**
   - Background color
   - Text colors
   - Link colors

5. **Buttons & CTAs**
   - Primary button (background, text, hover)
   - Secondary button
   - Outline/ghost variants
   - Disabled state

**Browser DevTools Process:**

```
1. Right-click element → Inspect
2. In Styles panel, look for:
   - color: #XXXXXX
   - background-color: #XXXXXX
   - background: linear-gradient(...)
3. Use built-in color picker to copy exact hex
4. Document in color mapping table
```

### Method 2: SVG Logo Analysis

**Files to inspect:**

- `643ffb1cd99b572cc276a6c0_Agrello_logo.svg`
- `5e73642ba2128c3459c6a635_logo.svg`

SVG files often contain brand colors in `fill` or `stroke` attributes.

**Process:**

```bash
# Open SVG in text editor
cat docs/agrello-images/643ffb1cd99b572cc276a6c0_Agrello_logo.svg

# Look for:
fill="#XXXXXX"
stroke="#XXXXXX"
```

### Method 3: Screenshot Color Picker

**Tools:**

- macOS: Digital Color Meter (built-in)
- Browser extensions: ColorZilla, Eye Dropper

**Process:**

1. Take high-res screenshots of agrello.io
2. Use color picker to sample exact colors
3. Cross-reference with DevTools findings
4. Validate across multiple sections

## Expected Color Palette

Based on typical SaaS brand systems, Agrello likely has:

### Primary Colors

- **Brand Primary** - Main CTA color, links, primary buttons
- **Brand Secondary** - Accent elements, hover states
- **Brand Dark** - Headers, navigation, footer background
- **Brand Accent** - Highlights, badges, special callouts

### Neutral Colors

- **Surface** - Page background (usually white or very light gray)
- **Text Primary** - Body text (dark gray or black)
- **Text Secondary** - Muted text, captions
- **Text Muted** - Disabled states, placeholders
- **Border** - Card borders, dividers

### Semantic Colors

- **Success** - Confirmation messages (green)
- **Error** - Error states (red)
- **Warning** - Warnings (yellow/orange)
- **Info** - Info messages (blue)

## Color Mapping Template

Once extracted, we'll map to Tailwind custom properties:

```css
@theme {
  /* Primary Brand */
  --color-brand-primary: #XXXXXX; /* Main CTA color */
  --color-brand-primary-hover: #XXXXXX; /* Hover state */
  --color-brand-primary-light: #XXXXXX; /* Lighter variant */

  /* Secondary Brand */
  --color-brand-secondary: #XXXXXX;
  --color-brand-secondary-hover: #XXXXXX;

  /* Neutrals */
  --color-brand-dark: #XXXXXX; /* Headers, dark sections */
  --color-brand-surface: #XXXXXX; /* Page background */
  --color-brand-border: #XXXXXX; /* Borders, dividers */

  /* Text Hierarchy */
  --color-text-primary: #XXXXXX; /* Body text */
  --color-text-secondary: #XXXXXX; /* Muted text */
  --color-text-inverse: #ffffff; /* Text on dark backgrounds */

  /* Accent */
  --color-brand-accent: #XXXXXX; /* Highlights, badges */
}
```

## Typography Scale

While extracting colors, also document:

### Font Sizes

- Display (hero headlines)
- H1, H2, H3, H4, H5, H6
- Body (paragraph text)
- Small (captions, labels)

### Font Weights

- Display: likely 700-800 (Manrope Bold/ExtraBold)
- Headings: 600-700 (Manrope SemiBold/Bold)
- Body: 400 (Inter Regular)
- Bold: 500-600 (Inter Medium/SemiBold)

### Line Heights

- Display: 1.1-1.2 (tight)
- Headings: 1.2-1.3
- Body: 1.5-1.6 (comfortable reading)

## Validation Checklist

After extraction, verify:

- [ ] Colors match live site visually
- [ ] Sufficient contrast ratios (WCAG AA minimum)
  - Normal text: 4.5:1
  - Large text (18px+): 3:1
  - UI elements: 3:1
- [ ] Colors work on both light and dark backgrounds
- [ ] Hover states are visible and distinct
- [ ] Disabled states are clearly distinguishable

## Tools for Contrast Checking

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- Browser DevTools (Lighthouse accessibility audit)

## Next Steps

1. **Owner approval required** before starting extraction
2. Once approved, spend 30-60 minutes on live site
3. Document findings in `brand-tokens-extracted.md`
4. Implement in `globals.css`
5. Update styleguide to showcase real tokens
6. Get owner visual approval before proceeding

## Open Questions

1. Does Agrello have brand guidelines document we can reference?
2. Are there existing Figma/design files with exact color codes?
3. Is the current live site the definitive brand source?
4. Any planned rebrand or color changes coming?

---

**Status:** Strategy defined, awaiting owner approval to proceed with extraction.
