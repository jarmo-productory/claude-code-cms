---
description: Generate a brand-compliant image using Google Gemini API
allowed-tools: Bash, Read
argument-hint: [description]
---

Generate an image based on the description: "$ARGUMENTS"

## Quick Generation

I'll create an Agrello brand-aligned image for you.

### Analyzing Request

1. **Description:** $ARGUMENTS
2. **Detecting type:** (hero/thumbnail/icon/social/custom based on context)
3. **Selecting aspect ratio:** (based on use case)

### Executing

```bash
npx ts-node scripts/generate-image.ts --prompt "$ARGUMENTS" --type [detected] --aspect [ratio]
```

## After Generation

The image will be saved to:

- `public/images/generated/[filename].png`
- `public/images/generated/[filename].json` (metadata)

## Options

For more control, use the full command:

```bash
npx ts-node scripts/generate-image.ts \
  --prompt "your description" \
  --type hero|thumbnail|icon|banner|social|custom \
  --aspect 1:1|16:9|4:3|9:16|21:9 \
  --output custom-name.png
```

## Examples

```
/generate-image hero for pricing page
/generate-image thumbnail showing digital signatures
/generate-image LinkedIn post about contract management
/generate-image icon representing document security
```
