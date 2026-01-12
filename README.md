# Claude Code CMS

A Next.js 15 starter kit with Claude Code integration, multilingual support, and markdown-based content management.

## Features

- **Next.js 15** with App Router and React 19
- **Tailwind CSS v4** with customizable brand tokens
- **Claude Code integration** with expert agents and skills
- **File-based i18n** (/et/, /en/) for SEO-friendly URLs
- **Markdown blog** with frontmatter and TOC extraction
- **Sprint workflow** with approval gates

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/claude-code-cms.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Customization

### 1. Brand Colors

Edit `src/app/globals.css`:

```css
@theme {
  --color-brand-dark: #1e1b4b;      /* Your dark color */
  --color-brand-primary: #4338ca;   /* Your primary color */
  --color-brand-secondary: #2dd4bf; /* Your accent color */
  --color-brand-accent: #d946ef;    /* Your CTA color */
  --color-brand-surface: #f8fafc;   /* Your light surface */
}
```

### 2. Project Configuration

Update `CLAUDE.md` with your project details:
- Replace `[PROJECT_NAME]` placeholders
- Add your team members
- Update URLs and repository links

### 3. Content

- **Homepage sections**: Edit components in `src/components/sections/`
- **Blog posts**: Add markdown files to `src/content/blog/`
- **Navigation**: Update `src/components/layout/Navigation.tsx`

## Project Structure

```
├── .claude/                 # Claude Code configuration
│   ├── agents/             # Expert agents (sprint-manager, qa-validator, etc.)
│   ├── skills/             # Domain knowledge (CVI, homepage patterns)
│   └── commands/           # Slash commands (/rundev, /publish)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── [locale]/       # Locale-specific routes
│   │   └── styleguide/     # Component showcase
│   ├── components/
│   │   ├── ui/             # Base components (Button, Card, etc.)
│   │   ├── sections/       # Homepage sections
│   │   └── layout/         # Navigation, Footer
│   ├── content/            # Markdown content
│   │   └── blog/           # Blog posts
│   ├── context/            # React context (LanguageContext)
│   └── lib/                # Utilities (content, SEO, markdown)
├── CLAUDE.md               # Project instructions for Claude
└── package.json
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run start        # Start production server
```

## Claude Code Commands

When using Claude Code in this project:

- `/rundev` - Kill port 3000 and restart dev server
- `/publish` - Commit and push changes
- `/new-section [name]` - Create new homepage section

## Adding Blog Posts

Create a markdown file in `src/content/blog/`:

```yaml
---
title: Your Post Title
slug: your-post-slug
description: A brief description for SEO
date: '2026-01-12'
category: news
image: /images/blog/your-image.jpg
author: your-name
lang: en
tags:
  - tag1
  - tag2
---

# Your content here...
```

## i18n

Routes are locale-prefixed:
- `/et/` - Estonian
- `/en/` - English

The `LanguageContext` provides:
- `lang` - Current language
- `setLang` - Change language
- `t(et, en)` - Translation helper

## License

MIT
