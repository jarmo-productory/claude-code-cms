# SEO Testing Tools Guide

**Created:** 2026-01-26
**Purpose:** Free tools for technical SEO validation before and after launch

---

## Quick Test URLs

**Staging URL:** https://agrelloweb.netlify.app

### Instant Tests - Homepage EN (Click to Run)

| Test                       | Link                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| **PageSpeed Insights**     | [Run Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/)              |
| **Rich Results (JSON-LD)** | [Run Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/)     |
| **Mobile-Friendly**        | [Run Test](https://search.google.com/test/mobile-friendly?url=https://agrelloweb.netlify.app/en/)  |
| **Social Preview (OG)**    | [Run Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/en/)                           |
| **hreflang Checker**       | [Run Test](https://www.hreflang.org/hreflang-tags-checker/?url=https://agrelloweb.netlify.app/en/) |
| **Schema Validator**       | [Run Test](https://validator.schema.org/#url=https://agrelloweb.netlify.app/en/)                   |
| **Security Headers**       | [Run Test](https://securityheaders.com/?q=https://agrelloweb.netlify.app/en/)                      |
| **SEOBility Audit**        | [Run Test](https://freetools.seobility.net/en/seocheck/https://agrelloweb.netlify.app/en/)         |

### Instant Tests - Homepage ET

| Test                       | Link                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **PageSpeed Insights**     | [Run Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/et/)          |
| **Rich Results (JSON-LD)** | [Run Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/et/) |
| **Social Preview (OG)**    | [Run Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/et/)                       |

### Instant Tests - Key Pages

| Page      | PageSpeed                                                                                                    | Rich Results                                                                                                          | Social Preview                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Features  | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/features/)                   | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/features/)                   | [Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/en/features/)                   |
| Pricing   | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/pricing/)                    | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/pricing/)                    | [Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/en/pricing/)                    |
| Blog      | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/et/blog/)                       | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/et/blog/)                       | [Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/et/blog/)                       |
| Blog Post | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/et/blog/frantsiisilepingutest/) | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/et/blog/frantsiisilepingutest/) | [Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/et/blog/frantsiisilepingutest/) |
| Contact   | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/contact/)                    | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/contact/)                    | [Test](https://opengraph.xyz/url/https://agrelloweb.netlify.app/en/contact/)                    |

---

## Google Official Tools

### Google Search Console

**URL:** https://search.google.com/search-console

**What it tests:**

- Indexing status
- Sitemap submission and errors
- hreflang implementation errors
- Core Web Vitals (field data)
- Mobile usability issues
- Security issues

**Setup required:** Verify site ownership

### Rich Results Test

**URL:** https://search.google.com/test/rich-results

**What it tests:**

- JSON-LD structured data validation
- Schema.org compliance
- Eligibility for rich snippets

**Test pages:**

- Homepage (Organization + FAQ schemas)
- Blog posts (Article schema)

### PageSpeed Insights

**URL:** https://pagespeed.web.dev

**What it tests:**

- Core Web Vitals (LCP, INP, CLS)
- Performance score
- Accessibility score
- Best practices score
- SEO score

**Target scores:** ≥90 on all metrics

### Mobile-Friendly Test

**URL:** https://search.google.com/test/mobile-friendly

**What it tests:**

- Mobile viewport configuration
- Touch target sizing
- Content wider than screen
- Text readability

---

## Meta Tags & Social Preview

### OpenGraph.xyz

**URL:** https://opengraph.xyz

**What it tests:**

- og:title, og:description, og:image
- Preview for Facebook, Twitter, LinkedIn
- Image dimensions and loading

### Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

**What it tests:**

- Twitter card meta tags
- Card type (summary_large_image)
- Image preview

### LinkedIn Post Inspector

**URL:** https://www.linkedin.com/post-inspector/

**What it tests:**

- LinkedIn sharing preview
- OG tag parsing
- Image rendering

### metatags.io

**URL:** https://metatags.io

**What it tests:**

- All social previews in one place
- Google search preview
- Meta tag editor

---

## Technical SEO Audit Tools

### Ahrefs Webmaster Tools (Free)

**URL:** https://ahrefs.com/webmaster-tools

**What it tests:**

- Site-wide crawl (up to 5,000 pages)
- Broken links
- Missing meta tags
- Duplicate content
- Redirect chains

**Setup required:** Verify site ownership

### Screaming Frog SEO Spider (Free up to 500 URLs)

**URL:** https://www.screamingfrog.co.uk/seo-spider/

**What it tests:**

- Full site crawl
- All meta tags
- hreflang implementation
- Canonical URLs
- Response codes
- Page titles and descriptions

**Best for:** Comprehensive crawl-based audit

### SEOBility

**URL:** https://www.seobility.net/en/seocheck/

**What it tests:**

- Single page quick audit
- Meta tags
- Headings structure
- Image optimization
- Link analysis

### SEORCH

**URL:** https://seorch.eu

**What it tests:**

- Comprehensive single-page check
- Technical factors
- Content analysis
- Social signals

---

## Structured Data Tools

### Schema Markup Validator

**URL:** https://validator.schema.org

**What it tests:**

- JSON-LD syntax validation
- Schema.org vocabulary compliance
- Nested schema structures

### JSON-LD Playground

**URL:** https://json-ld.org/playground/

**What it tests:**

- JSON-LD parsing
- Expanded/compacted views
- Debug malformed JSON-LD

---

## hreflang Validation

### hreflang Tags Checker

**URL:** https://www.hreflang.org/hreflang-tags-checker/

**What it tests:**

- hreflang tag presence
- Reciprocal links
- x-default configuration
- Language/region codes

### Aleyda Solis hreflang Tools

**URL:** https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/

**What it tests:**

- hreflang validation
- Generate correct tags
- Check implementation

---

## Security Headers

### SecurityHeaders.com

**URL:** https://securityheaders.com

**What it tests:**

- X-Frame-Options
- Content-Security-Policy
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

**Run after deployment** (requires live URL)

---

## Lighthouse CLI

Run locally or in CI:

```bash
# Install
npm install -g lighthouse

# Run audit
lighthouse https://agrelloweb.netlify.app/en/ \
  --output=html \
  --output-path=./docs/sprints/sprint-08-pre-production-audit/lighthouse-results/homepage-en.html

# Run with JSON output for CI
lighthouse https://agrelloweb.netlify.app/en/ \
  --output=json \
  --output-path=./lighthouse-results/homepage-en.json
```

### Key Pages to Test

| Page         | URL                    |
| ------------ | ---------------------- |
| Homepage EN  | `/en/`                 |
| Homepage ET  | `/et/`                 |
| Features     | `/en/features/`        |
| Pricing      | `/en/pricing/`         |
| Blog Listing | `/en/blog/`            |
| Blog Post    | `/en/blog/[any-slug]/` |

---

## Testing Checklist

### Pre-Launch (Staging)

- [ ] PageSpeed Insights ≥90 on homepage
- [ ] Rich Results Test passes for structured data
- [ ] Mobile-Friendly Test passes
- [ ] Social previews look correct (OG image, title, description)
- [ ] hreflang checker shows no errors

### Post-Launch (Production)

- [ ] Submit sitemap to Google Search Console
- [ ] Verify indexing in GSC
- [ ] Check for crawl errors in GSC
- [ ] Run Ahrefs/Screaming Frog full crawl
- [ ] Test security headers

---

## Agrello Test URLs

**Staging:** https://agrelloweb.netlify.app

### One-Click Tests

| Test                   | EN                                                                                               | ET                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **PageSpeed Insights** | [Test EN](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/)             | [Test ET](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/et/)             |
| **Rich Results**       | [Test EN](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/)    | [Test ET](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/et/)    |
| **Mobile-Friendly**    | [Test EN](https://search.google.com/test/mobile-friendly?url=https://agrelloweb.netlify.app/en/) | [Test ET](https://search.google.com/test/mobile-friendly?url=https://agrelloweb.netlify.app/et/) |
| **Social Preview**     | [Test EN](https://opengraph.xyz/url/https://agrelloweb.netlify.app/en/)                          | [Test ET](https://opengraph.xyz/url/https://agrelloweb.netlify.app/et/)                          |

### Additional Pages to Test

| Page      | PageSpeed                                                                                                    | Rich Results                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Features  | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/features/)                   | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/features/)                   |
| Pricing   | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/pricing/)                    | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/pricing/)                    |
| Blog      | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/en/blog/)                       | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/en/blog/)                       |
| Blog Post | [Test](https://pagespeed.web.dev/analysis?url=https://agrelloweb.netlify.app/et/blog/frantsiisilepingutest/) | [Test](https://search.google.com/test/rich-results?url=https://agrelloweb.netlify.app/et/blog/frantsiisilepingutest/) |

### Other Validation Tools

| Tool             | Link                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| hreflang Checker | [Test](https://www.hreflang.org/hreflang-tags-checker/?url=https://agrelloweb.netlify.app/en/) |
| Schema Validator | [Test](https://validator.schema.org/#url=https://agrelloweb.netlify.app/en/)                   |
| Security Headers | [Test](https://securityheaders.com/?q=https://agrelloweb.netlify.app/en/)                      |

---

## Lighthouse Results Log

Record scores here after running tests:

| Page        | Date | Performance | Accessibility | Best Practices | SEO |
| ----------- | ---- | ----------- | ------------- | -------------- | --- |
| Homepage EN |      |             |               |                |     |
| Homepage ET |      |             |               |                |     |
| Features    |      |             |               |                |     |
| Pricing     |      |             |               |                |     |
| Blog        |      |             |               |                |     |
| Blog Post   |      |             |               |                |     |

**Target:** ≥90 on all metrics

---

_Document created: 2026-01-26_
