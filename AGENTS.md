# Repository Guidelines

## Project Structure & Module Organization

- `src/app/`: Next.js App Router routes and layouts (locale routing lives in `src/app/[locale]/`).
- `src/components/`: shared UI, layout, and section components.
- `src/content/`: Markdown content with frontmatter (blog posts and imported drafts).
- `src/lib/` and `src/context/`: utilities and React context (see `@/*` path alias in `tsconfig.json`).
- `public/`: static assets (images, flags, SVGs). Built output is a static export to `out/` (see `next.config.ts`).
- `scripts/`: one-off tooling (e.g., Webflow CSV import, image generation). Docs: `scripts/README-import.md`.
- `docs/`: roadmap and migration notes.

## Build, Test, and Development Commands

- `npm install`: install dependencies (uses `package-lock.json`).
- `npm run dev`: start Next.js dev server.
- `npm run lint`: run `next lint` (ESLint).
- `npm run build`: lint then build static export (`out/`).
- `npm run build:skip-lint`: build without lint (use sparingly).
- `npx serve out`: serve the exported site locally after `npm run build`.
- `npm run import-webflow -- ./articles.csv --locale=en --limit=5`: import Webflow CMS CSV into `src/content/blog-import/`.
- `npm run generate-image`: run `scripts/generate-image.ts`.

## Coding Style & Naming Conventions

- Language: TypeScript + React (ESM; `"type": "module"`).
- Indentation: 2 spaces; keep components small and composable.
- Naming: React components in `PascalCase.tsx`; utilities in `kebab-case.ts` or `camelCase` exports.
- Linting: ESLint via `eslint.config.js` (scripts are ignored; don’t rely on lint for `scripts/`).

## Testing Guidelines

- No automated test suite is currently configured. Use `npm run lint` and `npm run build` as pre-PR checks.
- When adding tests, prefer colocating them near the feature (e.g., `src/lib/foo.test.ts`) and document the chosen runner.

## Commit & Pull Request Guidelines

- Commits follow short, imperative messages (e.g., “Add …”, “Update …”, “Fix …”). Keep the subject focused and descriptive.
- PRs: include a clear summary, link related issues/roadmap items in `docs/`, and attach screenshots for UI changes.
- Content changes: ensure frontmatter is valid and images referenced in Markdown exist under `public/`.

## Agent-Specific Instructions

- If using AI assistants, follow `CLAUDE.md`, `GEMINI.md`, and workflows under `.claude/` for project-specific conventions.
