import {
  entryHref,
  entryTypeLabel,
  getAllPublished,
  plainText,
} from "@/lib/content";

export const prerender = true;

export async function GET() {
  const entries = await getAllPublished();
  const index = entries.map((entry) => ({
    title: entry.data.title,
    description: entry.data.summary ?? entry.data.description,
    href: entryHref(entry),
    type: entryTypeLabel(entry),
    tags: entry.data.tags,
    content: plainText(entry.body),
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
