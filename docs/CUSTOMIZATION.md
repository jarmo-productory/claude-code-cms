# Customization Guide

This guide explains how to customize the starter kit for your project.

## 1. Brand Identity

### Colors

Edit `src/app/globals.css` to change brand colors:

```css
@theme {
  /* Dark color - used for backgrounds, text */
  --color-brand-dark: #1e1b4b;

  /* Primary color - buttons, links, accents */
  --color-brand-primary: #4338ca;

  /* Secondary color - highlights, success states */
  --color-brand-secondary: #2dd4bf;

  /* Accent color - CTAs, important buttons */
  --color-brand-accent: #d946ef;

  /* Surface color - light backgrounds */
  --color-brand-surface: #f8fafc;
}
```

### Typography

Fonts are loaded in `src/app/layout.tsx`:

```tsx
import { Space_Grotesk, Sofia_Sans } from 'next/font/google'

// Replace with your preferred fonts
const displayFont = Space_Grotesk({ ... })
const bodyFont = Sofia_Sans({ ... })
```

### Logo

Replace the placeholder logo in:

- `src/components/layout/Navigation.tsx`
- `src/components/layout/Footer.tsx`

## 2. Content

### Homepage Sections

Each section is a separate component in `src/components/sections/`:

| File               | Purpose              |
| ------------------ | -------------------- |
| `Hero.tsx`         | Main hero section    |
| `LogoCloud.tsx`    | "Trusted by" logos   |
| `Features.tsx`     | Feature cards        |
| `HowItWorks.tsx`   | Process steps        |
| `Pricing.tsx`      | Pricing tiers        |
| `Testimonials.tsx` | Customer quotes      |
| `CTA.tsx`          | Final call-to-action |

Search for `[PLACEHOLDER]` in each file and replace with your content.

### Navigation

Edit `src/components/layout/Navigation.tsx`:

- Update `navItems` array with your pages
- Change the logo and brand name

### Blog Posts

Add markdown files to `src/content/blog/`:

```yaml
---
title: Post Title
slug: url-friendly-slug
description: SEO description
date: '2026-01-12'
category: news
image: /images/blog/image.jpg
author: author-name
lang: en # or 'et'
tags: [tag1, tag2]
---
Your markdown content...
```

## 3. Claude Code Configuration

### CLAUDE.md

Update the main project file with:

- Your project name and description
- Team members
- Production URLs
- Custom agents or skills

### Agents

Agents in `.claude/agents/` can be customized:

| Agent                  | Customize                                        |
| ---------------------- | ------------------------------------------------ |
| `strategic-advisor.md` | Add your company info, services, target audience |
| `seo-specialist.md`    | Add your target keywords                         |
| `blog-writer.md`       | Add your author IDs                              |

### Skills

Skills in `.claude/skills/` provide domain knowledge:

- `generic-cvi/SKILL.md` - Update with your brand tokens
- `homepage-patterns/SKILL.md` - Customize section patterns

## 4. Environment Variables

Create `.env.local` for environment variables:

```bash
# Site URL (used for SEO)
SITE_URL=https://your-domain.com

# Add other variables as needed
```

## 5. Deployment

### Netlify

The project is configured for static export. Deploy to Netlify:

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `out`

### Other Platforms

Next.js static export works with any static hosting:

- Vercel
- Cloudflare Pages
- GitHub Pages

## Quick Customization Checklist

- [ ] Update brand colors in `globals.css`
- [ ] Replace fonts in `layout.tsx`
- [ ] Update logo in Navigation and Footer
- [ ] Edit homepage section content
- [ ] Update `CLAUDE.md` with project details
- [ ] Configure `next-sitemap.config.cjs` with your domain
- [ ] Add your blog posts
- [ ] Update Navigation menu items
- [ ] Update Footer links and contact info
- [ ] Set `SITE_URL` environment variable
