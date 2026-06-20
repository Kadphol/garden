import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

const site = process.env.SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});
