# Agrello Website

Marketing website for **Agrello** - a secure e-signature and contract management platform for SMEs. Built with Next.js 15 and managed via Claude Code.

**Live site:** [www.agrello.io](https://www.agrello.io) (currently on Webflow - migrating here)

## About Agrello

Agrello is a web-based contract management and e-signature platform that digitizes the entire contract lifecycle. The platform enables businesses to create, sign, and manage legally-binding agreements with automation and security.

### Target Audience
- Small and medium-sized enterprises (SMEs)
- Companies handling high volumes of standardized contracts
- Businesses moving away from manual Word/Excel/email workflows

### Key Features
- **Contract Creation & Automation** - Bulk generation with Word templates + Excel data
- **Contract Management** - Centralized storage, Kanban views, renewal tracking
- **E-Signatures** - UK/EU compliant, audit trails, bulk signing
- **Integrations** - Zapier, API, SharePoint, Google Drive, HubSpot

### Value Proposition
- 60% reduction in contract signing time
- Eliminates printing, scanning, posting
- Enterprise-grade security with eIDAS compliance

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Next.js 15 (App Router) |
| Components | React 19 |
| Styling | Tailwind CSS v4 |
| Content | Markdown + frontmatter |
| i18n | File-based (`/et/`, `/en/`) |

## Development

```bash
# Install dependencies
npm install

# Start dev server (port 3001)
PORT=3001 npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── .claude/
│   ├── agents/         # AI expert agents
│   ├── skills/         # Domain knowledge
│   └── commands/       # Slash commands
├── src/
│   ├── app/            # Next.js pages
│   ├── components/     # React components
│   ├── content/        # Markdown content
│   └── lib/            # Utilities
├── docs/
│   └── roadmap.md      # Migration roadmap
└── CLAUDE.md           # AI instructions
```

## Documentation

- [Migration Roadmap](docs/roadmap.md) - Plan for Webflow to Next.js migration
- [CLAUDE.md](CLAUDE.md) - AI agent instructions and workflows

## Team

- **Jarmo** - Product Owner
- **Claude Code** - Engineering (via expert agents)

## License

Proprietary - Agrello
