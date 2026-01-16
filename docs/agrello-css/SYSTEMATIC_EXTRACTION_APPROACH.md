# Systematic CSS Extraction Approach for Agrello Website

## Overview
This document outlines a comprehensive, systematic approach to extract CSS styling from the production Agrello website (agrello.io) for reference and potential migration to the Next.js project.

## Methodology

### Phase 1: Asset Collection ✅
1. **Download CSS Files**
   - Main stylesheet: `agrello-web.shared.min.css` (~400KB, minified)
   - Google Fonts CSS
   - Location: `/tmp/agrello-css/`

2. **Download Images**
   - All website images extracted
   - Location: `/tmp/agrello-images/`

### Phase 2: Token Extraction ✅
Using automated scripts to extract design tokens:

1. **Color Palette**
   - Extracted 100+ unique color values
   - Includes hex, rgb, rgba, and CSS variables
   - Key colors identified:
     - Primary: `#0d2ae6`, `#0b5fff`
     - Secondary: `#2ee0ab`, `#14b8a6`
     - Grays: Multiple shades from `#00010d` to `#f9fafb`

2. **CSS Variables**
   - Extracted 50+ CSS custom properties
   - Key variables:
     - `--untitled-ui--gray*` (gray scale)
     - `--untitled-ui--primary*` (primary colors)
     - `--main`, `--main-txt`, `--blue`
     - `--font-family`: "Red Hat Display"

3. **Typography**
   - Font families: Red Hat Display, Montserrat, system fonts
   - Font sizes: 10px to 40px+ range
   - Line heights: Various ratios

4. **Spacing System**
   - Margin/padding values extracted
   - Common values: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 60px

5. **Border Radius**
   - Values: 0, 2px, 3px, 4px, 7px, 8px, 12px, 16px, 20px, 50px, 100px, 500px, 999px

6. **Box Shadows**
   - Multiple shadow definitions
   - Common pattern: `0 0 Xpx rgba(...)`

7. **Media Queries**
   - Breakpoints identified:
     - `max-width: 991px` (tablet)
     - `max-width: 767px` (mobile)
     - `max-width: 479px` (small mobile)
     - `min-width: 768px` (desktop)

### Phase 3: Browser-Based Extraction (Recommended Next Steps)

#### 3.1 Computed Styles from Key Elements
Use browser DevTools to inspect:

**Hero Section**
- Background colors/gradients
- Typography (font-size, line-height, font-weight)
- Spacing (padding, margin)
- Layout (flexbox/grid properties)

**Navigation**
- Background color
- Text colors
- Hover states
- Active states
- Spacing

**Buttons**
- Primary button styles
- Secondary button styles
- Hover/active states
- Border radius
- Padding
- Font properties

**Cards**
- Background colors
- Border radius
- Box shadows
- Padding
- Spacing between cards

**Typography**
- H1-H6 styles
- Body text styles
- Link styles
- Font families per element

#### 3.2 CSS Variables Extraction
Extract all `--variable-name` declarations from:
- `:root` selector
- Component-specific scopes

#### 3.3 Component-Specific Styles
Document styles for:
- Forms (inputs, selects, textareas)
- Modals/dialogs
- Dropdowns
- Tabs
- Accordions
- Testimonials
- Pricing cards

### Phase 4: Organization and Documentation

#### 4.1 Create Design Token File Structure
```json
{
  "colors": {
    "primary": {...},
    "secondary": {...},
    "grays": {...}
  },
  "typography": {
    "fontFamilies": {...},
    "fontSizes": {...},
    "lineHeights": {...},
    "fontWeights": {...}
  },
  "spacing": {
    "scale": [...]
  },
  "shadows": {...},
  "borders": {...},
  "breakpoints": {...}
}
```

#### 4.2 Map to Tailwind CSS Configuration
Convert extracted tokens to `tailwind.config.js` format:
- Colors → `theme.colors`
- Typography → `theme.fontFamily`, `theme.fontSize`
- Spacing → `theme.spacing`
- Breakpoints → `theme.screens`

#### 4.3 Component Style Reference
Create documentation for:
- Button variants
- Card styles
- Form element styles
- Navigation styles

## Tools and Scripts

### Automated Extraction Scripts
1. **`extract_css_tokens.js`** ✅
   - Extracts colors, variables, typography, spacing
   - Outputs JSON file

### Recommended Browser Tools
1. **Chrome DevTools**
   - Computed styles panel
   - Styles panel
   - CSS variable inspector

2. **Browser Extensions**
   - CSS Peeper
   - ColorZilla
   - WhatFont

### Manual Extraction Steps
1. Open browser DevTools (F12)
2. Select element
3. Copy computed styles
4. Document in structured format

## Key Findings

### Color System
- **Primary**: Blue (`#0d2ae6`, `#0b5fff`)
- **Secondary**: Teal/Aquamarine (`#2ee0ab`, `#14b8a6`)
- **Gray Scale**: Comprehensive `--untitled-ui--gray*` variables
- **Accent**: Purple (`#720072`, `#9e77ed`)

### Typography
- **Display Font**: "Red Hat Display"
- **Body Font**: System stack (Montserrat fallback)
- **Font Sizes**: 10px - 40px+ range
- **Weights**: Multiple weights available

### Spacing Scale
- Base unit appears to be 4px
- Common increments: 4, 8, 12, 16, 24, 32, 40, 48, 60px

### Breakpoints
- Mobile: < 480px
- Tablet: 480px - 767px
- Desktop: 768px - 991px
- Large Desktop: > 991px

## Next Steps

1. **Browser Inspection**
   - Inspect key components in DevTools
   - Extract computed styles
   - Document component-specific styles

2. **CSS Variable Mapping**
   - Map all CSS variables to their values
   - Document variable usage

3. **Component Analysis**
   - Analyze button styles
   - Analyze card styles
   - Analyze form styles
   - Analyze navigation styles

4. **Create Tailwind Config**
   - Convert extracted tokens to Tailwind format
   - Test in Next.js project

5. **Documentation**
   - Create style guide
   - Document component patterns
   - Create migration guide

## Files Generated

- `/tmp/agrello-css/agrello-web.shared.min.css` - Main CSS file
- `/tmp/agrello-css/google-fonts.css` - Google Fonts
- `/tmp/agrello-css/extracted_tokens.json` - Extracted design tokens
- `/tmp/agrello-css/extract_css_tokens.js` - Extraction script
- `/tmp/agrello-css/EXTRACTION_GUIDE.md` - Initial guide
- `/tmp/agrello-css/SYSTEMATIC_EXTRACTION_APPROACH.md` - This document

## Usage

To extract tokens:
```bash
cd /tmp/agrello-css
node extract_css_tokens.js
```

To view extracted tokens:
```bash
cat extracted_tokens.json | jq
```

## Notes

- The CSS file is minified, making manual inspection difficult
- CSS variables are key to understanding the design system
- Browser DevTools provides the most accurate computed styles
- Some styles may be dynamically applied via JavaScript
- Consider using CSS beautifier for easier reading
