import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sharedFields = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  status: z.string(),
  published: z.boolean().default(false),
  summary: z.string().optional(),
};

const garden = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/garden" }),
  schema: z.object({
    ...sharedFields,
    type: z.literal("garden"),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/posts" }),
  schema: z.object({
    ...sharedFields,
    type: z.literal("post"),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/projects" }),
  schema: z.object({
    ...sharedFields,
    type: z.literal("project"),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/pages" }),
  schema: z.object({
    ...sharedFields,
    type: z.literal("page"),
  }),
});

export const collections = { garden, posts, projects, pages };
