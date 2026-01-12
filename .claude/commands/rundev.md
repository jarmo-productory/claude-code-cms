---
description: Clean cache and restart the Next.js development server
allowed-tools: Bash(rm:*), Bash(npm:*), Bash(lsof:*), Bash(xargs:*)
---

!`lsof -ti:3000 | xargs kill -9 2>/dev/null; rm -rf .next && npm run dev`
