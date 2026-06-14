# Vercel Deployment

## Connect the repository

1. Import the Git repository into Vercel.
2. Keep the detected framework preset as Astro.
3. Use `pnpm build` as the build command.
4. Use `dist` as the output directory.

These values are also declared in `vercel.json`.

## Environment

Set the production environment variable:

```text
SITE_URL=https://your-domain.example
```

The value is used for canonical URLs, Open Graph metadata, RSS, robots, and the
sitemap. Preview deployments may use their Vercel URL without changing source
files.

## Automatic deployment

Vercel's Git integration creates preview deployments for pull requests and a
production deployment for pushes to the configured production branch. The
GitHub Actions installs dependencies with pnpm's frozen lockfile, then runs
formatting checks, Astro schema/type checks, and the static build independently.

## Domain and crawl checks

After assigning the production domain:

1. Confirm `/robots.txt` references the production sitemap.
2. Confirm `/sitemap-index.xml` is reachable.
3. Confirm `/rss.xml` returns valid XML.
4. Inspect a page's canonical and Open Graph URLs.
5. Run Lighthouse against the production deployment.
