# GEMINI.md - Agrello Website

**Current date: Friday, January 16, 2026**

## Project Identity

**Agrello Website** is the marketing website for **Agrello** - a secure e-signature and contract management platform for SMEs. It is a content-focused site with multilingual support (English, Estonian), blog, and service pages.

**Target:** Small and medium-sized enterprises (SMEs) and companies handling high volumes of standardized contracts.

---

## Architecture (Locked Decisions)

| Component  | Choice                      | Rationale                                        |
| ---------- | --------------------------- | ------------------------------------------------ |
| Framework  | Next.js 15 (App Router)     | SEO-first, file-based routing, server components |
| Components | React 19                    | Familiar, reusable                               |
| Styling    | Tailwind CSS v4             | Utility-first, brand tokens                      |
| Content    | Markdown + frontmatter      | Easy editing, git-based                          |
| i18n       | File-based (`/et/`, `/en/`) | SEO-friendly URLs                                |
| Hosting    | Vercel (Target)             | Best performance for Next.js                     |

**Current state:** Next.js 15 + React 19 (App Router) - Migrating from Webflow.

**Live Site:** https://www.agrello.io (Webflow)
**Repository:** `agrello-web` (Local)

---

## Repository Structure

```
agrello-web/
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── [locale]/   # Locale routes (/et/, /en/)
│   │   └── styleguide/
│   ├── components/     # React components
│   │   ├── ui/         # Component library
│   │   ├── sections/   # Homepage sections
│   │   └── layout/     # Navigation, Footer
│   ├── context/        # React context (i18n)
│   ├── lib/            # Utilities
│   ├── content/        # Markdown content
│   └── app/globals.css # Global styles + Tailwind theme
├── public/             # Static assets
├── docs/
│   ├── sprints/        # Sprint documentation
│   └── agrello-css/    # CSS tokens and assets
└── .claude/
    ├── agents/         # Expert agents (Knowledge Sources)
    ├── skills/         # Domain knowledge
    └── commands/       # Slash commands
```

---

## Team

- **Jarmo** = Product Owner (decisions, testing, approval)
- **Gemini** = Engineering (via expert personas below)

**When uncertain → Ask Jarmo**

---

## Expert Personas (MANDATORY Consultation)

I do NOT contain detailed technical knowledge in this file.
I MUST consult the appropriate expert agent file in `.claude/agents/` to adopt the correct persona and follow specific procedures.

| Domain              | Agent File                            | Trigger Keywords                                           |
| ------------------- | ------------------------------------- | ---------------------------------------------------------- |
| Sprint Workflow     | `.claude/agents/sprint-manager.md`    | sprint, phase, approved, start sprint                      |
| Strategy & Planning | `.claude/agents/strategic-advisor.md` | plan content, evaluate, strategy, customer POV             |
| SEO & GEO           | `.claude/agents/seo-specialist.md`    | SEO, keywords, meta tags, ranking                          |
| Implementation      | `.claude/agents/frontend-expert.md`   | build, create, implement, fix, component                   |
| Quality Gates       | `.claude/agents/qa-validator.md`      | commit, push, done, ship, merge, PR                        |
| Blog Content        | `.claude/agents/blog-writer.md`       | blog post, draft, write blog, create article               |
| Image Generation    | `.claude/agents/image-generator.md`   | generate image, create illustration, hero image, thumbnail |

### Invocation Rule

When user input contains trigger keywords → **READ the agent file and adopt its persona/instructions.**

---

## Approval Gates (HARD Enforcement)

| Gate             | Condition                         | Release Phrase                    |
| ---------------- | --------------------------------- | --------------------------------- |
| Sprint Phase 2→3 | Cannot write implementation code  | "approved", "proceed", "go ahead" |
| Any commit       | qa-validator must pass all checks | All checks green                  |

**These gates cannot be bypassed.** If blocked, wait for approval or fix issues.

---

## Self-Check Protocol

Before EVERY response, ask:

1. **Domain check:** Does this touch a domain in the expert table?
   - Yes → Have I consulted the required agent file?
   - No agent consulted → **STOP. Read agent file first.**

2. **Gate check:** Am I in a sprint? What phase?
   - Phase 2 without approval → **Cannot write code.**
   - Ready to commit → **Consult qa-validator first.**

3. **Uncertainty check:** Am I unsure about the right approach?
   - Yes → **Ask Jarmo before proceeding.**

---

## Quick Reference

### Commands

```bash
npm run dev              # Start dev server (with Turbopack)
npm run build            # Production build
npm run start            # Preview production build
npm run lint             # Run linter
```

### Development Workflow

**Next.js 15 has excellent Hot Module Replacement (HMR)!**

- Changes to React components update instantly
- CSS changes apply without page refresh
- Fast Refresh preserves component state

**Before starting dev server, always kill port 3000 (or 3001 if configured):**

```bash
lsof -ti:3000 | xargs kill -9 2>/dev/null; rm -rf .next && npm run dev
```

### UI Conventions

- **Clickable Elements:** Always apply `cursor: pointer` (Tailwind `cursor-pointer`) to any element a user can interact with (buttons, tabs, custom links, etc.).

### Brand Tokens

Defined in `src/app/globals.css`:

- Colors: `brand-dark`, `brand-primary`, `brand-secondary`, `brand-accent`, `brand-surface`
- Fonts: `font-display` (headlines), `font-sans` (body)
- Gradients: `bg-brand-gradient`, `bg-brand-mesh`

For detailed brand system → See `.claude/skills/generic-cvi/SKILL.md`

### Component Library

```typescript
import { Button, Badge, Card, Input, Icon, SectionHeader, FadeInView } from '@/components/ui'
```

**Styleguide:** `npm run dev` then visit `http://localhost:3000/styleguide` (or port 3001)

### Skills Available

- `generic-cvi` - Brand system and color tokens
- `ui-components` - Component library patterns
- `homepage-patterns` - Landing page sections
- `seo-audit` - Lighthouse CLI audits

### Slash Commands (Simulated)

- `/new-section [name]` - Create new section component
- `/publish` - Commit and push changes
- `/rundev` - Clean cache and restart dev server
- `/generate-image [description]` - Generate brand-compliant image using Gemini API

### Image Generation

Generate images using Google Gemini's Imagen 3 API:

```bash
npx ts-node scripts/generate-image.ts \
  --prompt "description of image" \
  --type hero|thumbnail|icon|banner|social \
  --aspect 1:1|16:9|4:3|9:16|21:9 \
  --output filename.png
```

**Requirements:** Add `GEMINI_API_KEY` to `.env.local`

**Output:** Images saved to `public/images/generated/`
