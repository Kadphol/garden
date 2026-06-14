# Kadphol Digital Garden

A static personal knowledge base, technical blog, portfolio, and professional
profile built with Astro, TypeScript, Content Collections, and Tailwind CSS.

The repository contains the publishing system only. Content collections include
unpublished templates but no published notes, posts, projects, or profile copy,
so an Obsidian vault can remain the source of truth.

## Content workflow

Published content lives in:

- `content/garden/` for evergreen notes
- `content/posts/` for dated writing
- `content/projects/` for case studies
- `content/pages/` for standalone Markdown pages

Only entries with `published: true` are included in routes, search, feeds, tags,
related content, and backlinks.

```yaml
---
title: Note title
description: Short search and SEO description.
date: 2026-01-01
updated: 2026-01-02
tags:
  - topic
type: garden
status: evergreen
published: true
summary: Optional list-page summary.
---
```

## Development

```sh
npm install
npm run dev
```

Run production checks with:

```sh
npm run build
npm run format:check
```

Set `SITE_URL` to the production origin so canonical URLs, RSS, sitemap, robots,
and Open Graph metadata use the correct host.

## Obsidian

Point an Obsidian vault at the repository root or symlink the four `content/`
directories into an existing vault. Standard Markdown links to published site
paths are used to calculate backlinks at build time.

See [docs/obsidian.md](docs/obsidian.md) and
[docs/writing-workflow.md](docs/writing-workflow.md) for the complete workflow.

## Deployment

`vercel.json` configures a static Astro deployment. Connect the repository to
Vercel, set `SITE_URL`, and every push to the production branch deploys
automatically. GitHub Actions verifies formatting, schemas, types, and the
static build before merge.

See [docs/deployment.md](docs/deployment.md) for setup and environment details.
