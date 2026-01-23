# Webflow API Research

**Date:** 2026-01-16
**Sprint:** 07 - Webflow Content Integration
**Research Focus:** Webflow Data API capabilities for fetching CMS collections

---

## Webflow API Overview

### Current Webflow API Version (as of knowledge cutoff)

- **Version:** Webflow Data API v2 (released 2023)
- **Previous:** Legacy API v1 (deprecated in favor of v2)
- **Base URL:** `https://api.webflow.com/v2/`
- **Documentation:** https://developers.webflow.com/

### Authentication

**API Token Types:**

1. **Site API Token** (full access to a specific site)
   - Generated in Webflow Site Settings → Integrations → API Access
   - Scoped to a single site
   - Can read/write CMS collections, publish site

2. **OAuth 2.0** (for apps accessing multiple sites)
   - Required for third-party integrations
   - More complex setup

**For our use case:** Site API Token is sufficient.

**Environment Variable:**

```bash
WEBFLOW_API_TOKEN=your_site_api_token_here
WEBFLOW_SITE_ID=your_site_id_here
```

---

## CMS Collections API

### 1. List Collections

**Endpoint:** `GET /sites/{site_id}/collections`

**Response:**

```json
{
  "collections": [
    {
      "_id": "collection_id",
      "slug": "blog-posts",
      "name": "Blog Posts",
      "singularName": "Blog Post",
      "fields": [
        {
          "_id": "field_id",
          "slug": "name",
          "type": "PlainText",
          "required": true
        },
        {
          "_id": "field_id_2",
          "slug": "post-image",
          "type": "ImageRef",
          "required": false
        }
      ]
    }
  ]
}
```

### 2. Get Collection Items

**Endpoint:** `GET /collections/{collection_id}/items`

**Query Parameters:**

- `offset` - Pagination offset (default: 0)
- `limit` - Items per page (default: 100, max: 100)

**Response:**

```json
{
  "items": [
    {
      "_id": "item_id",
      "_archived": false,
      "_draft": false,
      "name": "Article Title",
      "slug": "article-title",
      "post-body": "<p>Rich text content...</p>",
      "post-image": {
        "fileId": "file_id",
        "url": "https://uploads-ssl.webflow.com/...",
        "alt": "Image alt text"
      },
      "author": "Author Name",
      "published-date": "2026-01-15T12:00:00.000Z",
      "tags": ["tag1", "tag2"]
    }
  ],
  "count": 25,
  "limit": 100,
  "offset": 0,
  "total": 25
}
```

### 3. Get Single Item

**Endpoint:** `GET /collections/{collection_id}/items/{item_id}`

**Response:** Same structure as single item above.

---

## Image Handling in Webflow API

### Image Field Types

1. **ImageRef** - Single image field
2. **FileRef** - Generic file (PDF, etc.)

### Image Data Structure

```json
{
  "post-image": {
    "fileId": "507f1f77bcf86cd799439011",
    "url": "https://uploads-ssl.webflow.com/507f1f77bcf86cd799439011/507f191e810c19729de860ea_image.jpg",
    "alt": "Alt text from Webflow"
  }
}
```

**Key Properties:**

- `fileId` - Unique identifier for the asset
- `url` - Full CDN URL (Webflow's CDN)
- `alt` - Alt text (if set in Webflow CMS)

### Downloading Images

Images must be downloaded separately via HTTP:

```typescript
const response = await fetch(imageUrl)
const buffer = await response.arrayBuffer()
// Save to public/images/blog/
```

---

## Rate Limits

**Webflow API v2 Rate Limits:**

- **Standard Plan:** 60 requests/minute
- **Higher Plans:** May have higher limits
- **Headers:**
  - `X-RateLimit-Limit` - Max requests per minute
  - `X-RateLimit-Remaining` - Remaining requests
  - `X-RateLimit-Reset` - Unix timestamp when limit resets

**Strategy for batch import:**

- Implement exponential backoff on 429 errors
- Process items in batches with delays
- Cache API responses to avoid repeated calls

---

## Rich Text Content

Webflow returns rich text fields as HTML:

```json
{
  "post-body": "<p>This is <strong>bold</strong> text.</p><h2>Heading</h2>"
}
```

**Conversion Strategy:**

1. **Option A:** Keep as HTML, convert to markdown
   - Use `turndown` package for HTML → Markdown conversion
   - Pros: Preserves formatting accurately
   - Cons: Extra dependency

2. **Option B:** Store as HTML in markdown frontmatter
   - Store raw HTML in `content` field
   - Pros: No conversion needed
   - Cons: Loses markdown simplicity

**Recommendation:** Convert to markdown for consistency with existing blog system.

---

## Localization/Multi-Language

Webflow CMS items can have locale-specific fields:

- Each item has a `locale` property (e.g., `"en-US"`, `"et"`)
- Multi-locale sites require separate API calls per locale

**Example:**

```bash
GET /collections/{collection_id}/items?locale=en-US
GET /collections/{collection_id}/items?locale=et
```

---

## API Implementation Plan

### Node.js Script Structure

```typescript
// scripts/import-webflow-content.ts
import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'

const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN!
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID!
const API_BASE = 'https://api.webflow.com/v2'

async function fetchCollections() {
  const response = await fetch(`${API_BASE}/sites/${WEBFLOW_SITE_ID}/collections`, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      'accept-version': '2.0.0',
    },
  })
  return await response.json()
}

async function fetchCollectionItems(collectionId: string) {
  const response = await fetch(`${API_BASE}/collections/${collectionId}/items?limit=100`, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      'accept-version': '2.0.0',
    },
  })
  return await response.json()
}

async function downloadImage(url: string, filename: string) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const outputPath = path.join(process.cwd(), 'public/images/blog-import', filename)
  fs.writeFileSync(outputPath, Buffer.from(buffer))
}

// Main import logic
async function importWebflowContent() {
  // 1. Fetch collections
  // 2. Identify blog collection
  // 3. Fetch all items
  // 4. Download images
  // 5. Convert to markdown
  // 6. Save to src/content/blog-import/
}
```

---

## Pros & Cons

### Pros

- **Direct API access** - No manual export/import
- **Real-time sync** - Can be run periodically to fetch new content
- **Structured data** - JSON format is easy to parse
- **Image metadata** - Alt text and file IDs preserved
- **Pagination support** - Can handle large collections

### Cons

- **Rate limits** - Must handle throttling (60 req/min)
- **API token security** - Must keep token in environment variables
- **Network dependency** - Requires internet connection during import
- **Complex error handling** - API errors, network failures, image download failures
- **Cost** - May incur Webflow plan costs if API access is restricted

---

## Dependencies Required

```json
{
  "devDependencies": {
    "node-fetch": "^3.3.0",
    "turndown": "^7.1.2",
    "@types/turndown": "^5.0.0"
  }
}
```

---

## Security Considerations

1. **API Token Storage:**
   - Store in `.env.local` (not committed to git)
   - Add to `.gitignore`
   - Document in `.env.example`

2. **Access Control:**
   - Site API token has full read/write access
   - Consider using read-only OAuth app if available

3. **Output Directory:**
   - Save to temporary import folder (`src/content/blog-import/`)
   - Review before moving to production (`src/content/blog/`)

---

## Estimated Complexity

| Task                        | Complexity      | Time Estimate |
| --------------------------- | --------------- | ------------- |
| Setup API authentication    | Low             | 30 min        |
| Fetch collections           | Low             | 30 min        |
| Fetch items with pagination | Medium          | 1 hour        |
| Download images             | Medium          | 1 hour        |
| Convert HTML to markdown    | Medium          | 1-2 hours     |
| Generate frontmatter        | Low             | 30 min        |
| Error handling & retries    | High            | 2 hours       |
| **Total**                   | **Medium-High** | **6-7 hours** |

---

## Recommendation

**Use Webflow API if:**

- Need to sync content regularly (weekly/monthly)
- Have Webflow plan with API access
- Want automated, repeatable process
- Comfortable with rate limiting and error handling

**Use CSV import if:**

- One-time migration
- Simple, quick solution needed
- Want manual control over data
- Concerned about API complexity

**My recommendation:** Start with **CSV import** for simplicity, then build API sync for ongoing updates.
