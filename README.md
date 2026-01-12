# Claude Code CMS

A Next.js 15 starter kit designed for **AI-assisted web development** with Claude Code. Build marketing websites, blogs, and landing pages with expert AI agents guiding your workflow.

**Production example:** [productory.ai](https://www.productory.ai) - Built and maintained using this starter kit.

## Why This Starter?

Modern web development with AI assistance requires more than just code completion. This starter provides:

- **Expert AI Agents** - Specialized agents for sprint planning, SEO, frontend development, and quality assurance
- **Domain Knowledge (Skills)** - Pre-configured knowledge about your brand system, component patterns, and homepage structures
- **Approval Workflows** - Built-in gates to ensure AI follows your process before writing code
- **Markdown Content** - Write blog posts in markdown, get SEO-optimized pages automatically

### Works Best With

**[Ritemark](https://ritemark.app)** - A native markdown editor for macOS that pairs perfectly with this workflow. Write your blog content in Ritemark, save to `src/content/blog/`, and watch your site update instantly.

## Features

| Feature | Description |
|---------|-------------|
| **Next.js 15** | App Router, React 19, static export for any host |
| **Tailwind CSS v4** | Brand tokens, custom theme, modern styling |
| **Claude Code Integration** | 6 expert agents + 4 skills + 3 commands |
| **Multilingual (i18n)** | File-based routing (`/et/`, `/en/`) for SEO |
| **Markdown Blog** | Frontmatter, TOC extraction, reading time |
| **Component Library** | Buttons, cards, badges, section headers |
| **Landing Page Sections** | Hero, features, pricing, testimonials, CTA |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/jarmo-productory/claude-code-cms.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

You'll see a working SaaS landing page with placeholder content. Replace `[PLACEHOLDER]` values with your own content.

## Claude Code Agents

When you use Claude Code in this project, specialized agents activate based on your request:

| Agent | Triggers | Purpose |
|-------|----------|---------|
| `sprint-manager` | "sprint", "phase", "approved" | 6-phase workflow with approval gates |
| `frontend-expert` | "build", "create", "component" | UI implementation |
| `seo-specialist` | "SEO", "keywords", "meta tags" | Search optimization |
| `qa-validator` | "commit", "push", "done" | Quality checks before commits |
| `blog-writer` | "blog post", "write article" | Content creation |
| `strategic-advisor` | "strategy", "plan content" | Business guidance |

### Example Workflow

```
You: "Let's start a sprint to add a contact form"

Claude: [sprint-manager activates]
        "I'll create a sprint plan. Here's Phase 1: Research..."

You: "approved"

Claude: [frontend-expert activates]
        "Creating the ContactForm component..."

You: "commit this"

Claude: [qa-validator activates]
        "Running quality checks before commit..."
```

## Customization

### Brand Colors

Edit `src/app/globals.css`:

```css
@theme {
  --color-brand-dark: #1e1b4b;      /* Dark backgrounds */
  --color-brand-primary: #4338ca;   /* Primary actions */
  --color-brand-secondary: #2dd4bf; /* Accents */
  --color-brand-accent: #d946ef;    /* CTAs */
  --color-brand-surface: #f8fafc;   /* Light surfaces */
}
```

### Project Configuration

Update `CLAUDE.md` with your project details - this file tells Claude Code about your project, team, and workflows.

### Content

| What | Where |
|------|-------|
| Homepage sections | `src/components/sections/` |
| Blog posts | `src/content/blog/` |
| Navigation | `src/components/layout/Navigation.tsx` |
| Footer | `src/components/layout/Footer.tsx` |

## Project Structure

```
├── .claude/
│   ├── agents/         # AI expert agents
│   ├── skills/         # Domain knowledge
│   └── commands/       # Slash commands
├── src/
│   ├── app/
│   │   ├── [locale]/   # Locale routes (/et/, /en/)
│   │   └── styleguide/ # Component showcase
│   ├── components/
│   │   ├── ui/         # Base components
│   │   ├── sections/   # Landing page sections
│   │   └── layout/     # Navigation, Footer
│   ├── content/blog/   # Markdown blog posts
│   └── lib/            # Utilities
├── CLAUDE.md           # AI instructions
└── package.json
```

## Commands

### npm Scripts

```bash
npm run dev      # Development server
npm run build    # Production build (static export)
npm run lint     # ESLint
```

### Claude Code Commands

```
/rundev          # Restart dev server (kills port 3000 first)
/publish         # Commit and push changes
/new-section     # Create new homepage section
```

## Blog Posts

Create markdown files in `src/content/blog/`:

```yaml
---
title: Your Post Title
slug: your-post-slug
description: SEO description
date: '2026-01-12'
author: your-name
lang: en
tags: [tag1, tag2]
---

Your content here...
```

## Deployment

Built for static export - deploy anywhere:

- **Netlify** - `npm run build`, publish `out/`
- **Vercel** - Works out of the box
- **Cloudflare Pages** - Static hosting
- **GitHub Pages** - Free hosting

## Contributing

This starter evolved from building [productory.ai](https://www.productory.ai). Contributions welcome!

## License

MIT
