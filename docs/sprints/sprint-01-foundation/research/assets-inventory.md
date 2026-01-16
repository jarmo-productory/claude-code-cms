# Assets Inventory - Sprint 01 Research

## CSS Files

### Location
`/Users/jarmotuisk/Projects/agrello/agrello-web/docs/agrello-css/`

### Files
1. **agrello-web.shared.min.css** (281.7 KB)
   - Minified production CSS from Webflow
   - Contains all component styles, layout rules, brand tokens
   - Single-line format (challenging to parse)
   - Requires browser DevTools for effective extraction

2. **google-fonts.css** (205 lines)
   - Font-face declarations for:
     - Inter (9 weights: 100-900)
     - Manrope (7 weights: 200-800)
     - Montserrat (18 variations: 100-900 normal + italic)
   - All fonts loaded from fonts.gstatic.com

## Image Assets

### Location
`/Users/jarmotuisk/Projects/agrello/agrello-web/docs/agrello-images/`

### Logos
- `5e73642ba2128c3459c6a635_logo.svg` - Original logo variant
- `643ffb1cd99b572cc276a6c0_Agrello_logo.svg` - Main Agrello logo

### Social Icons
- `61ad55cc2fe0f2eac74fa9a5_facebook.svg`
- `61ad55cd77ae9c031066ff372_linkdin.svg` (sic - filename typo)
- `61ad55cd915b0a7dba16ca3a_twitter.svg`

### Illustrations & Graphics
- `6818929f7182e7d06f91c4c6_agrello-blobs.svg` - Decorative blob shapes
- `68189590d432b3fdc3811c18_signature-mock-agrello.svg` - Signature illustration
- `681898d06f67a0240e00fe09_agrello-zigzag.svg` - Zigzag pattern
- `68189ed4929d512ce7b43874_pointer-arrow.svg` - Arrow pointer
- `6818a47fba6492d11cdf244b_does-it-work-4-me.svg` - Feature graphic
- `68ff3558955d9eb7d2d13bf3_agrello-dot-tile.svg` - Dot pattern tile
- `close.svg` - Close icon
- `revisit.svg` - Revisit icon
- `poweredbtcky.svg` - Powered by CKY badge

### Pricing
- `659faf66ae659cfbaeb49828_price-block-3.svg` - Pricing tier graphic

### Product Screenshots
- `663b76202d5d68e927b0c786_bulk-creation-illustration.webp` - Bulk creation feature
- `66ac920a7652ab5eeba064b9_macbooks-screenshot-folders.webp` - Product screenshot
- `6818b2cf2800ec4bcc1b3f70_agrello_customers_may25.webp` - Customer logos
- `6818b3327cbd80c4c58c7964_2025-hero-image.avif` - Hero image (AVIF format)
- `68f340200ab9bba821a3f205_faq_illustation_xs.webp` - FAQ illustration

### Utility
- `download_images.sh` - Shell script used to download images

## Current Implementation (Placeholder)

### From `src/app/globals.css`
```css
--color-brand-dark: #1e1b4b;       /* Indigo-900 */
--color-brand-primary: #4338ca;    /* Indigo-700 */
--color-brand-secondary: #2dd4bf;  /* Teal-400 */
--color-brand-accent: #d946ef;     /* Fuchsia-500 */
--color-brand-surface: #f8fafc;    /* Slate-50 */
```

### From `src/app/layout.tsx`
```typescript
Space_Grotesk (display) - variable: --font-space
Sofia_Sans (body) - variable: --font-sofia
```

## Action Items

### Immediate
1. Inspect live agrello.io with browser DevTools
2. Extract hex colors from:
   - Hero section background
   - Primary CTA buttons
   - Secondary buttons
   - Card backgrounds
   - Text colors (headings, body, muted)
3. Inspect logo SVGs for embedded brand colors
4. Screenshot current color palette from live site

### For Phase 2
1. Replace placeholder colors in globals.css
2. Switch fonts from Space Grotesk/Sofia Sans to Inter/Manrope
3. Copy optimized logos to public/ folder
4. Update styleguide with real brand tokens

## Notes

- All image filenames include Webflow asset IDs (long alphanumeric prefixes)
- Should be renamed to semantic names during migration (e.g., `agrello-logo.svg`)
- Hero image uses modern AVIF format - ensure Next.js optimization handles it
- Customer logos screenshot dated May 2025 - verify if this is current
