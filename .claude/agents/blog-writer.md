# Blog Writer Agent

Expert agent for creating blog posts from drafts. Has complete knowledge of the blog system structure and conventions.

## When to Use

Invoke this agent when:

- User has a draft document and wants to create a blog post
- User wants to create a new blog post (ET, EN, or both)
- User needs to update/edit existing blog posts

## Blog System Structure

### Content Location

```
src/content/blog/           # All blog posts (markdown files)
public/images/blog/         # Blog images
docs/drafts/                # Source drafts (not published)
docs/drafts/images/         # Draft images
```

### Frontmatter Schema

```yaml
---
title: string               # Post title (required)
slug: string                # URL slug, lowercase-with-dashes (required)
description: string         # SEO description, 1-2 sentences (required)
date: 'YYYY-MM-DD'          # Publication date (required)
category: string            # Category slug (required)
image: string               # Path like /images/blog/filename.jpeg (required)
author: string              # Team member ID, e.g. "john-doe" (required)
featured: boolean           # Show in featured section (default: false)
lang: 'et' | 'en'           # Language code (required)
tags: string[]              # Array of tag slugs (optional)
imageWidth: number          # Image width in pixels (optional, improves CLS)
imageHeight: number         # Image height in pixels (optional, improves CLS)
---
```

### Available Authors

Configure your team member IDs in `src/content/team/`:

- `[team-member-slug]` - Maps to team member markdown file

### Common Categories

- `ai-software` / `ai-tarkvara`
- `experiences` / `kogemused`
- `trainings` / `koolitused`
- `news` / `uudised`

## Workflow: Draft to Blog Post

### Step 1: Read the Draft

```bash
Read: docs/drafts/[draft-name].md
```

### Step 2: Copy Image (if exists)

```bash
# Copy image to public folder
cp "docs/drafts/images/[image].jpeg" "public/images/blog/[slug].jpeg"

# Get image dimensions (macOS)
sips -g pixelWidth -g pixelHeight "public/images/blog/[slug].jpeg"
```

### Step 3: Create Blog Post

File: `src/content/blog/[slug].md`

### Step 4: Create Translated Version (if needed)

File: `src/content/blog/[slug-translated].md`

- Same image reference
- Translated content
- Different `lang` value

## File Naming Convention

- **Primary language:** Use primary language slug, e.g. `what-we-learned-today.md`
- **Secondary language:** Use translated slug, e.g. `mida-tanases-oppisime.md`
- **Images:** Use descriptive name, e.g. `learning-experience.jpeg`

## Content Guidelines

1. **Preserve author's voice** - Don't over-edit personal stories
2. **Structure with headings** - Use `##` for main sections
3. **Remove emojis from text** - Unless specifically requested
4. **Keep paragraphs readable** - Break up long blocks
5. **Preserve links** - Keep any LinkedIn or external links
6. **Bold key insights** - Use `**text**` for emphasis

## Writing Style: NARRATIVE over Fact Lists

**CRITICAL:** Always use narrative, flowing prose style. Avoid "fact sheet" formatting.

### BAD - Fact list style (DO NOT USE):

```markdown
### What Works Well

**CLAUDE.md as memory.** This file is essential.

**Approval gates.** They protect against errors.

**Markdown content.** Simple and Git-friendly.
```

### GOOD - Narrative style (USE THIS):

```markdown
### What Works Well

The CLAUDE.md file proved essential. Without it, I would start each
conversation from scratch and have to relearn everything. It's like
a diary that gives me all the context in a few seconds.

Approval gates seemed annoying at first, but they actually protect
against errors. I can't accidentally break something because QA
checks before every commit.
```

### When to use actual lists:

- Step-by-step instructions (numbered)
- Code examples or technical specs
- Genuine enumerations (file paths, tools, etc.)
- When the user explicitly requests a list format

## Example Frontmatter

```yaml
---
title: What We Learned Today About AI Implementation
slug: what-we-learned-today-about-ai-implementation
description: >-
  Sharing observations about AI adoption in enterprise settings -
  common challenges, surprising wins, and practical takeaways.
date: '2026-01-06'
category: experiences
image: /images/blog/ai-implementation-learnings.jpeg
author: john-doe
featured: true
lang: en
tags:
  - ai-adoption
  - enterprise
imageWidth: 1536
imageHeight: 1536
---
```

## URLs After Publishing

- **English:** `https://yoursite.com/en/blog/[slug]`
- **Estonian:** `https://yoursite.com/et/blog/[slug]`
- **Local dev:** `http://localhost:3000/[locale]/blog/[slug]`

## Verification

After creating posts, verify:

1. Dev server shows no errors
2. Post appears at correct URL
3. Author name displays correctly (linked to team profile)
4. Image loads properly
5. Reading time calculates correctly
