# Sprint 09: Support Pages - Content Migration & Features

**Created:** 2026-01-19
**Updated:** 2026-01-19 (with owner decisions)
**Status:** Phase 1 - PLANNING

---

## Goal

Migrate ~80 existing support articles (20 per language) from agrello-content-marketing repository into a three-level support structure, with article search functionality and last-updated dates. Support 4 languages: en, et, lv, ua.

---

## Owner Decisions (Critical)

**Confirmed:**

1. **NO billing topic** - Exclude from initial launch
2. **YES article search** - Client-side search across title, summary, and content
3. **YES last-updated dates** - Show prominently on articles (use `date` field from frontmatter)
4. **ALL 4 languages** - en, et, lv, ua (not just en/et as originally planned)

**Source content:** `/Users/jarmotuisk/Projects/agrello/agrello-content-marketing/topics/agrello-features/`

**Article count:** ~80 articles total (~20 per language)

---

## Success Criteria

- [ ] All ~80 articles migrated with frontmatter preserved
- [ ] 5 topic folders created (getting-started, documents, templates, signing-process, collaboration)
- [ ] Topic routing works correctly (hub → topic → article)
- [ ] Article search works (searches title + summary + content)
- [ ] "Last updated" dates displayed on articles
- [ ] All 4 languages supported (en, et, lv, ua)
- [ ] Images migrated to `public/images/support/`
- [ ] Consistent topic slugs across all languages
- [ ] Support hub page lists all topics
- [ ] Topic pages list articles with order
- [ ] SEO metadata properly configured

---

## Deliverables

| Deliverable      | Description                                 | Output Path                                        |
| ---------------- | ------------------------------------------- | -------------------------------------------------- |
| Migrated Content | ~80 articles organized by topic + language  | `src/content/support/{locale}/{topic}/`            |
| Topic Metadata   | `_index.md` for each topic in each language | `src/content/support/{locale}/{topic}/_index.md`   |
| Images           | All article images from source repo         | `public/images/support/`                           |
| Content Types    | TypeScript types for topics and articles    | `src/lib/support.ts`                               |
| Support Hub Page | Lists all available topics                  | `src/app/[locale]/support/page.tsx`                |
| Topic Index Page | Lists articles within a topic               | `src/app/[locale]/support/[topic]/page.tsx`        |
| Article Page     | Renders individual article with search      | `src/app/[locale]/support/[topic]/[slug]/page.tsx` |
| Search Component | Client-side search UI                       | `src/components/support/ArticleSearch.tsx`         |
| Support Layout   | Shared layout with breadcrumbs              | `src/app/[locale]/support/layout.tsx`              |
| Migration Script | Script to copy and organize content         | `scripts/migrate-support-content.ts`               |

---

## Implementation Checklist

### Phase 1: Research & Planning ✅

- [x] Review existing content structure in agrello-content-marketing
- [x] Analyze `.subtopics.yml` and article frontmatter format
- [x] Confirm migration approach with owner
- [x] Update sprint plan with owner decisions
- [ ] **Owner approval required** ⚠️

### Phase 2: Content Structure Setup

- [ ] Create target folder structure for 4 languages
- [ ] Create TypeScript types for support content
- [ ] Define topic `_index.md` schema (preserve existing where possible)
- [ ] Define article frontmatter schema (KEEP existing format)
- [ ] Create content loading utilities

### Phase 3: Content Migration

- [ ] Create migration script (`scripts/migrate-support-content.ts`)
- [ ] Copy articles from source → target (organized by `sub_topic`)
- [ ] Copy images from source → `public/images/support/`
- [ ] Generate topic `_index.md` files for each topic + language
- [ ] Validate all files copied successfully
- [ ] Verify frontmatter preserved correctly

### Phase 4: Routing Implementation

- [ ] Create support hub page (`/[locale]/support/`)
- [ ] Create topic index page (`/[locale]/support/[topic]/`)
- [ ] Create article page (`/[locale]/support/[topic]/[slug]`)
- [ ] Create support layout with breadcrumbs
- [ ] Implement dynamic route generation
- [ ] Handle 4 language codes (en, et, lv, ua)

### Phase 5: Search Implementation

- [ ] Create search component with input UI
- [ ] Implement client-side search logic (title + summary + content)
- [ ] Add search results highlighting
- [ ] Add "no results" state
- [ ] Test search performance with ~20 articles per language

### Phase 6: Article Display Components

- [ ] Topic card component (for hub page)
- [ ] Article list component (for topic index, sorted by `rank`)
- [ ] Article page layout with "Last updated" date
- [ ] Breadcrumb navigation component
- [ ] Article navigation (prev/next within topic)
- [ ] Markdown rendering with image support

### Phase 7: SEO & Metadata

- [ ] Generate metadata for hub page (4 languages)
- [ ] Generate metadata for topic pages (5 topics × 4 languages)
- [ ] Generate metadata for article pages (~80 articles)
- [ ] Add structured data (breadcrumbs)
- [ ] Validate meta tags

### Phase 8: Testing

- [ ] Test all three route levels work (4 languages)
- [ ] Test locale switching preserves topic/article
- [ ] Test search functionality
- [ ] Verify breadcrumbs work correctly
- [ ] Test markdown rendering
- [ ] Verify images load correctly
- [ ] Test "Last updated" dates display
- [ ] Test article ordering by `rank` field
- [ ] Test responsive design

### Phase 9: Documentation

- [ ] Document content structure
- [ ] Document migration process
- [ ] Create content authoring guide
- [ ] Document search implementation

### Phase 10: Cleanup

- [ ] Remove debug code
- [ ] Code review and refactoring
- [ ] Ensure TypeScript types are correct
- [ ] Update imports

### Phase 11: Validation

- [ ] Run qa-validator checks
- [ ] Test production build
- [ ] Verify no broken links
- [ ] Check Lighthouse scores

---

## Technical Approach

### Source Content Structure

**Location:** `/Users/jarmotuisk/Projects/agrello/agrello-content-marketing/topics/agrello-features/`

```
agrello-features/
├── .subtopics.yml          # Maps sub_topic keys to localized names/slugs
├── en/
│   ├── _index.md
│   ├── first-steps-in-agrello.md
│   ├── setting-up-your-agrello-account.md
│   └── ... (20 articles)
├── et/
├── lv/
└── ua/
```

**Existing frontmatter format (PRESERVE THIS):**

```yaml
author: jarmo-tuisk
date: '2025-08-19' # USE for "Last updated"
image: ../../../assets/first-steps-hero.webp
rank: 1 # USE for ordering articles
seo_desc: ...
seo_title: ...
slug: first-steps-in-agrello
sub_topic: getting-started # THIS determines target folder
summary: ... # USE in search
title: First Steps in Agrello # USE in search
```

### Target Content Structure

```
src/content/support/
├── en/
│   ├── _index.md                           # Support hub intro
│   ├── getting-started/
│   │   ├── _index.md                       # Topic metadata
│   │   ├── first-steps-in-agrello.md
│   │   ├── setting-up-your-agrello-account.md
│   │   └── creating-a-document-for-signing.md
│   ├── documents/
│   │   ├── _index.md
│   │   ├── understanding-agrello-documents-and-containers.md
│   │   ├── managing-documents-with-folders.md
│   │   └── managing-documents-through-signing-lifecycle.md
│   ├── templates/
│   │   ├── _index.md
│   │   ├── how-to-create-agrello-templates.md
│   │   └── shareable-template-links-self-service-signing.md
│   ├── signing-process/
│   │   ├── _index.md
│   │   ├── signer-experience-how-to-sign-document.md
│   │   ├── e-signature-options-security-levels-and-authentication-methods.md
│   │   └── troubleshooting-signing-process-issues.md
│   └── collaboration/
│       ├── _index.md
│       ├── inviting-team-members-workspace-setup.md
│       ├── roles-permissions-agrello-workspaces.md
│       ├── team-collaboration-workflows-best-practices.md
│       └── using-comments-document-review-feedback.md
├── et/
│   ├── _index.md
│   ├── getting-started/      # NOTE: English slug, Estonian content
│   │   ├── _index.md
│   │   ├── esimesed-sammud-agrellos.md
│   │   └── konto-loomine.md
│   └── ... (mirrors en structure)
├── lv/
└── ua/
```

**Key migration rules:**

1. Article's `sub_topic` field → determines topic folder (e.g., `sub_topic: getting-started` → `getting-started/`)
2. Keep consistent topic slugs across languages (use English keys: getting-started, documents, etc.)
3. Preserve all existing frontmatter fields
4. Copy images and update paths: `../../../assets/` → `/images/support/`

### Topic \_index.md Schema

Generated from `.subtopics.yml`:

```yaml
title: 'Getting Started' # From .subtopics.yml → {locale}.name
description: '...' # Manual or from existing _index.md
slug: 'getting-started' # From .subtopics.yml → {locale}.slug (but use English key)
icon: 'rocket' # Map manually (getting-started → rocket, etc.)
order: 1 # Manual assignment
```

**Icon mapping:**

- getting-started → "rocket"
- documents → "file-text"
- templates → "layout-template"
- signing-process → "pen-tool"
- collaboration → "users"

### Article Frontmatter Schema (KEEP EXISTING)

No changes needed! Existing format is perfect:

```yaml
author: jarmo-tuisk
date: '2025-08-19' # Display as "Last updated: Aug 19, 2025"
image: /images/support/first-steps-hero.webp # Updated path
rank: 1 # Use for ordering
seo_desc: ... # Use for meta description
seo_title: ... # Use for meta title
slug: first-steps-in-agrello # Use for URL
sub_topic: getting-started # Not needed after migration (implicit from folder)
summary: ... # Display on lists, use in search
title: First Steps in Agrello # H1, use in search
```

### Route Structure

```
src/app/[locale]/support/
├── page.tsx                         # Hub: lists 5 topics
├── layout.tsx                       # Shared layout + breadcrumbs + search
├── [topic]/
│   ├── page.tsx                     # Topic index: lists articles (sorted by rank)
│   └── [slug]/
│       └── page.tsx                 # Article view (with last-updated date)
```

### TypeScript Types

```typescript
// src/lib/support.ts

export interface SupportTopic {
  slug: string // 'getting-started', 'documents', etc.
  title: string // Localized from .subtopics.yml
  description: string
  icon: string // lucide-react icon name
  order: number
  locale: string // 'en', 'et', 'lv', 'ua'
  articleCount: number
}

export interface SupportArticle {
  slug: string
  title: string
  summary: string
  content: string // For search
  topic: string // Topic folder name
  author: string
  date: string // ISO date, display as "Last updated"
  image?: string
  rank: number // For ordering within topic
  seoDesc: string
  seoTitle: string
  locale: string
  relatedArticles?: string[] // Future enhancement
}

export interface SupportBreadcrumb {
  label: string
  href: string
}
```

### Content Loading Utilities

```typescript
// src/lib/support.ts (functions)

export async function getAllTopics(locale: string): Promise<SupportTopic[]>
export async function getTopic(locale: string, slug: string): Promise<SupportTopic>
export async function getTopicArticles(locale: string, topic: string): Promise<SupportArticle[]>
export async function getArticle(
  locale: string,
  topic: string,
  slug: string
): Promise<SupportArticle>
export async function searchArticles(locale: string, query: string): Promise<SupportArticle[]>
export function generateBreadcrumbs(
  locale: string,
  topic?: string,
  article?: string
): SupportBreadcrumb[]
```

---

## Search Implementation

### Requirements

- Client-side search (no backend needed)
- Search across: title, summary, content (markdown)
- Real-time filtering as user types
- Highlight matching text
- Show topic context in results

### Approach

```typescript
// src/components/support/ArticleSearch.tsx
'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/Input'
import { Icon } from '@/components/ui/Icon'

interface SearchProps {
  articles: SupportArticle[]
  locale: string
}

export function ArticleSearch({ articles, locale }: SearchProps) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()

    return articles.filter(article => {
      return (
        article.title.toLowerCase().includes(lowerQuery) ||
        article.summary.toLowerCase().includes(lowerQuery) ||
        article.content.toLowerCase().includes(lowerQuery)
      )
    })
  }, [articles, query])

  return (
    <div className="search-container">
      <Input
        type="search"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={<Icon name="search" />}
      />

      {query && (
        <div className="search-results">
          {results.length > 0 ? (
            results.map(article => (
              <a
                key={article.slug}
                href={`/${locale}/support/${article.topic}/${article.slug}`}
                className="search-result-item"
              >
                <h4>{article.title}</h4>
                <p>{article.summary}</p>
                <span className="topic-badge">{article.topic}</span>
              </a>
            ))
          ) : (
            <p>No results found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  )
}
```

**Performance consideration:** With ~20 articles per language (80 total), client-side search is fast enough. No need for indexing or complex search libraries.

---

## Migration Script

**Purpose:** Automate content copy from source repo to target structure.

```bash
# Usage
npm run migrate-support
```

**Script tasks:**

1. Read `.subtopics.yml` to get topic mappings
2. For each language (en, et, lv, ua):
   - Read all article `.md` files
   - Parse frontmatter to get `sub_topic` value
   - Copy file to `src/content/support/{locale}/{sub_topic}/{slug}.md`
   - Update image paths in content
3. Copy images from `assets/` → `public/images/support/`
4. Generate topic `_index.md` files (using .subtopics.yml data)
5. Log summary (files copied, images migrated, topics created)

---

## URL Structure Examples

| Page Type   | EN URL                                               | ET URL                                                 | LV URL                                            | UA URL                                               |
| ----------- | ---------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------- |
| Support Hub | `/en/support/`                                       | `/et/support/`                                         | `/lv/support/`                                    | `/ua/support/`                                       |
| Topic Index | `/en/support/getting-started/`                       | `/et/support/getting-started/`                         | `/lv/support/getting-started/`                    | `/ua/support/getting-started/`                       |
| Article     | `/en/support/getting-started/first-steps-in-agrello` | `/et/support/getting-started/esimesed-sammud-agrellos` | `/lv/support/getting-started/pirmie-soli-agrello` | `/ua/support/getting-started/pershi-kroky-v-agrello` |

**Note:** Topic slugs stay consistent (English keys), article slugs are localized (from original filenames).

---

## Last Updated Display

**Frontmatter field:** `date: '2025-08-19'`

**Display format:** "Last updated: August 19, 2025"

**Implementation:**

```typescript
// In article page
import { format } from 'date-fns'

const lastUpdated = format(new Date(article.date), 'MMMM dd, yyyy')

// Display
<p className="text-sm text-gray-600">
  Last updated: {lastUpdated}
</p>
```

**Location:** Display at top of article, below title, or in sidebar.

---

## SEO Strategy

### Hub Page (`/[locale]/support/`)

- Title: "Support | Agrello"
- Description: "Find help articles and guides for using Agrello"
- H1: "How can we help you?"

### Topic Page (`/[locale]/support/[topic]/`)

- Title: "[Topic Title] | Support | Agrello"
- Description: "[Topic description from _index.md]"
- H1: "[Topic Title]"
- List articles with summaries

### Article Page (`/[locale]/support/[topic]/[slug]`)

- Title: "[seo_title from frontmatter] | Agrello"
- Description: "[seo_desc from frontmatter]"
- H1: "[title from frontmatter]"
- Structured data: Breadcrumb list
- Display: Last updated date

---

## Risks & Mitigations

| Risk                                | Impact | Mitigation                                                     |
| ----------------------------------- | ------ | -------------------------------------------------------------- |
| Image paths broken after migration  | High   | Test image rendering; update paths in migration script         |
| Missing articles in some languages  | Medium | Validate all 4 languages have content; skip missing gracefully |
| Search performance with 80 articles | Low    | Client-side search is fast enough; monitor with real data      |
| Inconsistent topic slugs            | Medium | Use .subtopics.yml as source of truth                          |
| Complex markdown rendering          | Low    | Test with varied content from source repo                      |

---

## Out of Scope (Future Enhancements)

- Feedback/rating system on articles
- Contact support CTA on articles
- Article view analytics
- Table of contents for long articles
- Advanced search (fuzzy matching, filters)
- Search result highlighting
- Related articles automation
- Support chatbot integration

---

## Dependencies

No new npm packages required. Uses existing:

- `next` - Routing and pages
- `react` - Components
- `gray-matter` - Frontmatter parsing (already used for blog)
- `lucide-react` - Icons for topics
- `date-fns` - Date formatting (already used)

---

## Testing Checklist

### Content Migration

- [ ] All ~80 articles copied successfully
- [ ] Frontmatter preserved correctly
- [ ] Images copied and paths updated
- [ ] Topic `_index.md` files generated
- [ ] 5 topics × 4 languages = 20 topic folders created

### Content Loading

- [ ] Topic `_index.md` files load correctly
- [ ] Article markdown files load correctly
- [ ] Images in articles render correctly
- [ ] Frontmatter parsing works
- [ ] Article ordering by `rank` works

### Routing (4 Languages)

- [ ] Hub page loads at `/[locale]/support/`
- [ ] Topic index loads at `/[locale]/support/[topic]/`
- [ ] Article page loads at `/[locale]/support/[topic]/[slug]`
- [ ] 404 handling for invalid topics/articles
- [ ] Locale switching preserves current page
- [ ] All 4 language codes work (en, et, lv, ua)

### Search Functionality

- [ ] Search input appears on hub/topic pages
- [ ] Search filters by title correctly
- [ ] Search filters by summary correctly
- [ ] Search filters by content correctly
- [ ] "No results" state works
- [ ] Results link to correct articles

### UI Components

- [ ] Topic cards display correctly (5 topics)
- [ ] Article lists render properly (sorted by rank)
- [ ] "Last updated" dates display correctly
- [ ] Breadcrumbs show correct hierarchy
- [ ] Markdown content renders correctly
- [ ] Responsive design works on mobile

### SEO

- [ ] Meta tags present on all pages
- [ ] seo_title and seo_desc used from frontmatter
- [ ] Structured data validates
- [ ] Sitemap includes support pages
- [ ] Canonical URLs correct

---

## Timeline Estimate

| Phase                 | Tasks                                    | Estimated Time        |
| --------------------- | ---------------------------------------- | --------------------- |
| Content Structure     | Folders, types, schemas                  | 1 hour                |
| Migration Script      | Automate content copy + images           | 2 hours               |
| Run Migration         | Execute script, validate output          | 1 hour                |
| Routing               | Hub, topic, article pages (4 languages)  | 2.5 hours             |
| Search Implementation | Client-side search component             | 1.5 hours             |
| Article Display       | Cards, lists, breadcrumbs, last-updated  | 2 hours               |
| Content Loading       | Utilities and data fetching              | 1.5 hours             |
| SEO & Metadata        | Meta tags, structured data               | 1 hour                |
| Testing               | All routes, search, content, 4 languages | 2 hours               |
| Documentation         | Migration process, content guide         | 1 hour                |
| **Total**             |                                          | **16 hours (2 days)** |
| Buffer                | Testing & fixes                          | 0.5 day               |
| **Grand Total**       |                                          | **2.5 days**          |

---

## Approval Requirements

**Phase 1 → 2 Gate:** Owner must approve this updated sprint plan

**Approval confirms:**

1. Migration approach is correct (preserve frontmatter, use sub_topic)
2. Content structure with 5 topics makes sense
3. Search implementation (client-side) is acceptable
4. "Last updated" display is what's wanted
5. All 4 languages support is feasible
6. Timeline estimate is realistic
7. NO billing topic confirmed for initial launch

**Owner Questions:**

1. ✅ Should we include a "Billing" topic in the initial launch? → **NO**
2. ✅ Do you want article search functionality now or defer to future sprint? → **YES**
3. ✅ Should articles show "Last updated" dates prominently? → **YES**
4. ✅ Which languages to support? → **ALL 4: en, et, lv, ua**
5. Do you want migration script automated or manual copy?
6. Should article images be optimized during migration?
7. Any specific design requirements for search UI?

---

## Current Phase: 1 (PLANNING)

**Status:** UPDATED - AWAITING APPROVAL

**Critical Decisions Received:**

- ✅ NO billing topic
- ✅ YES article search
- ✅ YES last-updated dates
- ✅ ALL 4 languages (en, et, lv, ua)

**Next Actions:**

1. Owner reviews updated sprint plan
2. Owner confirms migration approach
3. Owner provides approval phrase ("approved", "proceed", "go ahead")
4. Move to Phase 2: Content Structure Setup

---

## Approval

- [ ] Owner reviewed updated sprint plan
- [ ] Owner confirmed migration approach
- [ ] Owner confirmed content source is correct
- [ ] Owner approved implementation start

**Approval Status:** ⚠️ PENDING

---

_Phase 1: Planning - Awaiting Owner Approval_
