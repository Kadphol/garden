# Obsidian Integration

## Vault layout

The simplest setup is to open the repository root as an Obsidian vault. The
website only loads Markdown from the `content/` subdirectories, so project
source files remain outside normal writing views.

An existing vault can instead symlink its publishable folders to:

```text
content/garden/
content/posts/
content/projects/
content/pages/
```

## Recommended settings

- Use Markdown links.
- Prefer relative asset paths when adding local images.
- Keep filenames lowercase and hyphenated.
- Store private drafts with `published: false`.
- Preserve the frontmatter keys defined in `src/content.config.ts`.

## Link behavior

The site supports regular Markdown links and calculates backlinks from links to
generated site paths. Obsidian wikilinks can remain useful inside the vault, but
normal Markdown links are the portable publishing format.

## Validation

Run `npm run check` after changing frontmatter. Astro reports the file and field
when an entry does not match its collection schema.
