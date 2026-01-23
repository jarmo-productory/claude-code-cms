# CLAUDE.md - [PROJECT_NAME]

**Current date: [CURRENT_DATE]** (Claude's knowledge cutoff may be outdated - verify facts!)

## Project Identity

[PROJECT_NAME] is [PROJECT_DESCRIPTION]. A content-focused site with multilingual support ([SUPPORTED_LANGUAGES]), blog, and service pages.

**Target:** [TARGET_DESCRIPTION]

---

## Architecture (Locked Decisions)

| Component  | Choice                      | Rationale                                        |
| ---------- | --------------------------- | ------------------------------------------------ |
| Framework  | Next.js 15 (App Router)     | SEO-first, file-based routing, server components |
| Components | React 19                    | Familiar, reusable                               |
| Styling    | Tailwind CSS v4             | Utility-first, brand tokens                      |
| Content    | Markdown + frontmatter      | Easy editing, git-based                          |
| i18n       | File-based (`/et/`, `/en/`) | SEO-friendly URLs                                |
| Hosting    | [HOSTING_PROVIDER]          | [HOSTING_REASON]                                 |

**Current state:** Next.js 15 + React 19 (App Router)

**Production URL:** [PRODUCTION_URL]
**Staging URL:** [STAGING_URL]
**Repository:** [REPOSITORY_URL]

### Agrello App URLs (IMPORTANT)

Always use these URLs for login/signup links:

- **Login:** `https://docs.agrello.io/app/login?open_tab=sign_in`
- **Signup:** `https://docs.agrello.io/app/login?open_tab=sign_up`

Do NOT use `app.agrello.io` or `/login` or `/signup` - always use the full URLs above.

---

## Repository Structure

```
[PROJECT_NAME]/
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
└── .claude/
    ├── agents/         # Expert agents
    ├── skills/         # Domain knowledge
    └── commands/       # Slash commands
```

---

## Team

- **[OWNER_NAME]** = Product Owner (decisions, testing, approval)
- **Claude** = Engineering (via expert agents below)

**When uncertain → Ask [OWNER_NAME]**

---

## Expert Agents (MANDATORY Invocation)

I do NOT contain detailed technical knowledge in this file.
I MUST delegate to the appropriate expert agent.

| Domain              | Agent               | Trigger Keywords                               |
| ------------------- | ------------------- | ---------------------------------------------- |
| Sprint Workflow     | `sprint-manager`    | sprint, phase, approved, start sprint          |
| Strategy & Planning | `strategic-advisor` | plan content, evaluate, strategy, customer POV |
| SEO & GEO           | `seo-specialist`    | SEO, keywords, meta tags, ranking              |
| Implementation      | `frontend-expert`   | build, create, implement, fix, component       |
| Quality Gates       | `qa-validator`      | commit, push, done, ship, merge, PR            |
| Blog Content        | `blog-writer`       | blog post, draft, write blog, create article   |

### Invocation Rule

When user input contains trigger keywords → **INVOKE agent BEFORE responding.**

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
   - Yes → Have I invoked the required agent?
   - No agent invoked → **STOP. Invoke agent first.**

2. **Gate check:** Am I in a sprint? What phase?
   - Phase 2 without approval → **Cannot write code.**
   - Ready to commit → **Invoke qa-validator first.**

3. **Uncertainty check:** Am I unsure about the right approach?
   - Yes → **Ask [OWNER_NAME] before proceeding.**

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

**Before starting dev server, always kill port 3001:**

```bash
lsof -ti:3001 | xargs kill -9 2>/dev/null; rm -rf .next && npm run dev -p 3001
```

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

**Styleguide:** `npm run dev` then visit `http://localhost:3001/styleguide`

### Skills Available

- `generic-cvi` - Brand system and color tokens
- `ui-components` - Component library patterns
- `homepage-patterns` - Landing page sections
- `seo-audit` - Lighthouse CLI audits

### Slash Commands

- `/new-section [name]` - Create new section component
- `/publish` - Commit and push changes
- `/rundev` - Clean cache and restart dev server

---

## Agent Locations

```
.claude/
├── agents/
│   ├── sprint-manager.md    # Sprint workflow, approval gates
│   ├── strategic-advisor.md # Business & content strategy
│   ├── seo-specialist.md    # SEO/GEO optimization
│   ├── frontend-expert.md   # UI implementation
│   ├── qa-validator.md      # Quality checks
│   └── blog-writer.md       # Blog post creation
└── skills/
    ├── ui-components/       # Component patterns
    ├── homepage-patterns/   # Landing page patterns
    ├── seo-audit/           # Lighthouse audits
    └── generic-cvi/         # Brand system
```
