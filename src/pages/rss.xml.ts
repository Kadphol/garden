import rss from "@astrojs/rss";
import { entryHref, getPublishedPosts } from "@/lib/content";
import { siteConfig } from "@/site.config";

export async function GET(context: { site: URL | undefined }) {
  const posts = await getPublishedPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary ?? post.data.description,
      pubDate: post.data.date,
      link: entryHref(post),
      categories: post.data.tags,
    })),
  });
}
