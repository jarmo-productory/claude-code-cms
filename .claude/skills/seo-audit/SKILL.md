# SEO Audit Skill

Run technical SEO audits using Lighthouse CLI.

---

## Quick Usage

```bash
# Audit a URL
/seo:audit https://yoursite.com/

# Audit local dev server
/seo:audit http://localhost:3000/en/
```

---

## What It Checks

| Category | Metrics |
|----------|---------|
| **Performance** | LCP, FID, CLS, Speed Index, TTI |
| **SEO** | Meta tags, crawlability, mobile-friendly |
| **Accessibility** | ARIA, contrast, alt texts |
| **Best Practices** | HTTPS, console errors, image formats |

---

## Manual Audit Command

```bash
# Full audit with JSON + HTML reports
npx lighthouse "https://yoursite.com/" \
  --output json \
  --output html \
  --output-path ./lighthouse-report \
  --chrome-flags="--headless"

# Quick CLI output only
npx lighthouse "https://yoursite.com/" \
  --only-categories=seo,performance \
  --chrome-flags="--headless"
```

---

## Score Interpretation

| Score | Rating |
|-------|--------|
| 90-100 | Good (green) |
| 50-89 | Needs improvement (orange) |
| 0-49 | Poor (red) |

**Target Scores:**
- Performance: 90+
- SEO: 95+
- Accessibility: 90+
- Best Practices: 90+

---

## Key SEO Checks (Lighthouse)

1. **Document has a `<title>` element** - Critical
2. **Document has a meta description** - Critical
3. **Page has successful HTTP status code** - Critical
4. **Document has a valid hreflang** - Important for i18n
5. **Document has a valid rel=canonical** - Important
6. **Page is mobile friendly** - Important
7. **Links have descriptive text** - Moderate
8. **Image elements have [alt] attributes** - Moderate

---

## Core Web Vitals Thresholds

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | 2.5-4s | >4s |
| **FID** (First Input Delay) | ≤100ms | 100-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | 0.1-0.25 | >0.25 |

---

## Troubleshooting

### "Chrome not found"
```bash
# Ensure Chrome/Chromium is installed
# On macOS:
brew install --cask google-chrome

# Or use puppeteer's bundled Chrome:
npx lighthouse --chrome-flags="--headless" ...
```

### "Page load timeout"
```bash
# Increase timeout (default is 30s)
npx lighthouse "URL" --max-wait-for-load=60000
```

### Local Development
```bash
# Start dev server first
npm run dev

# Then audit (in another terminal)
npx lighthouse "http://localhost:3000/en/" --chrome-flags="--headless"
```

---

## Integration with SEO Specialist Agent

The `seo-specialist` agent uses this skill to:
1. Audit pages before recommending fixes
2. Verify fixes improved scores
3. Generate baseline reports for tracking

See: `.claude/agents/seo-specialist.md`

---

## Prerequisites

- Node.js 18+
- Google Chrome or Chromium
- `lighthouse` package (installed via npx, no setup needed)
