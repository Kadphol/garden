# Writing Workflow

## Create an entry

Choose the directory that owns the content:

- `content/garden/` for evergreen notes
- `content/posts/` for dated writing
- `content/projects/` for portfolio case studies
- `content/pages/about.md` for the professional profile

Use a lowercase, hyphenated filename. The filename becomes the route slug.

## Frontmatter contract

Every entry uses the validated fields below:

```yaml
---
title: Note title
description: A concise description for search and SEO.
date: 2026-01-01
updated: 2026-01-02
tags:
  - architecture
type: garden
status: evergreen
published: false
summary: Optional shorter text for index pages.
---
```

Set `type` to `garden`, `post`, or `project` based on the directory. Standalone
pages use `page`.

## Publish

1. Write and preview the Markdown entry.
2. Keep `published: false` while the entry is private or incomplete.
3. Run `pnpm build` to validate schemas and generated routes.
4. Change the entry to `published: true`.
5. Commit and push.

Published entries are automatically included in routes, search, tags, related
content, backlinks, sitemap generation, and relevant feeds.

## Links and backlinks

Use normal Markdown links with the final site path:

```md
[Related note](/garden/related-note/)
```

The build scans published Markdown bodies for those paths and exposes backlinks
on the destination entry.

## Diagrams

Mermaid code fences are enhanced on article pages:

````md
```mermaid
flowchart LR
  A --> B
```
````
