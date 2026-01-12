---
description: Create a new section component following established patterns
allowed-tools: Read, Write, Glob
argument-hint: [section-name]
---

Create a new section component named "$1Section" following the established patterns.

## Steps

1. Read existing section components for patterns:
   - `src/components/sections/Hero.tsx`
   - `src/components/sections/Features.tsx`

2. Create the new component at `src/components/sections/$1.tsx` following:
   - Use `animate-fade-in` wrapper
   - Section headers with `font-display font-semibold text-3xl`
   - White cards with `bg-white rounded-2xl border border-slate-200 p-8`
   - Brand colors from Tailwind config

3. Determine if the component needs interactivity:
   - **Server Component** (default): Static content, no hooks or event handlers
   - **Client Component**: Add `'use client'` at top if using useState, useEffect, onClick, etc.

4. To use the section in a page:
   - Import in the relevant Next.js page
   - For homepage: Add to `src/app/[locale]/page.tsx`
   - For standalone pages: Add to corresponding route

5. Follow the CVI patterns exactly.

## Usage in Next.js

```tsx
// Server Component (static content)
import { $1Section } from '@/components/sections/$1'

export default function Page() {
  return <$1Section />
}
```

For sections with interactivity:

```tsx
// Client Component (interactive)
'use client'
import { useState } from 'react'

export function $1Section() {
  const [state, setState] = useState()
  return <div onClick={() => setState(...)}>...</div>
}
```
