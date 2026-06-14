import { getCollection, type CollectionEntry } from "astro:content";

export type GardenEntry = CollectionEntry<"garden">;
export type PostEntry = CollectionEntry<"posts">;
export type ProjectEntry = CollectionEntry<"projects">;
export type ContentEntry = GardenEntry | PostEntry | ProjectEntry;

export async function getPublishedGarden() {
  return sortByFreshness(
    await getCollection("garden", ({ data }) => data.published),
  );
}

export async function getPublishedPosts() {
  return sortByFreshness(
    await getCollection("posts", ({ data }) => data.published),
  );
}

export async function getPublishedProjects() {
  return sortByFreshness(
    await getCollection("projects", ({ data }) => data.published),
  );
}

export async function getAllPublished(): Promise<ContentEntry[]> {
  const [garden, posts, projects] = await Promise.all([
    getPublishedGarden(),
    getPublishedPosts(),
    getPublishedProjects(),
  ]);

  return sortByFreshness([...garden, ...posts, ...projects]);
}

export function sortByFreshness<T extends ContentEntry>(entries: T[]): T[] {
  return entries.sort(
    (a, b) => contentDate(b).getTime() - contentDate(a).getTime(),
  );
}

export function contentDate(entry: ContentEntry): Date {
  return entry.data.updated ?? entry.data.date;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function readingTime(body = ""): string {
  const words = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_[\]()`-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function entryHref(entry: ContentEntry): string {
  if (entry.collection === "garden") return `/garden/${entry.id}/`;
  if (entry.collection === "posts") return `/writing/${entry.id}/`;
  return `/projects/${entry.id}/`;
}

export function entryTypeLabel(entry: ContentEntry): string {
  if (entry.collection === "garden") return "Garden";
  if (entry.collection === "posts") return "Writing";
  return "Project";
}

export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAllTags(entries: ContentEntry[]) {
  const tags = new Map<string, number>();

  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      tags.set(tag, (tags.get(tag) ?? 0) + 1);
    }
  }

  return [...tags.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export function getRelated(
  current: ContentEntry,
  entries: ContentEntry[],
  limit = 3,
) {
  const currentTags = new Set(
    current.data.tags.map((tag) => tag.toLowerCase()),
  );

  return entries
    .filter(
      (entry) =>
        !(entry.collection === current.collection && entry.id === current.id),
    )
    .map((entry) => ({
      entry,
      score: entry.data.tags.reduce(
        (score, tag) => score + Number(currentTags.has(tag.toLowerCase())),
        0,
      ),
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        contentDate(b.entry).getTime() - contentDate(a.entry).getTime(),
    )
    .slice(0, limit)
    .map(({ entry }) => entry);
}

export function getBacklinks(
  current: ContentEntry,
  entries: ContentEntry[],
  limit = 4,
) {
  const targetHref = entryHref(current).toLowerCase();
  const title = current.data.title.toLowerCase();

  return entries
    .filter(
      (entry) =>
        !(entry.collection === current.collection && entry.id === current.id),
    )
    .filter((entry) => {
      const body = entry.body?.toLowerCase() ?? "";
      return body.includes(targetHref) || body.includes(`[[${title}]]`);
    })
    .slice(0, limit);
}

export function plainText(body = ""): string {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_[\]()`|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
