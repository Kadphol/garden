import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const hostname = context.request.headers.get("host") || "";

  // Define your target subdomain and the internal path it should point to
  const targetSubdomain = "resume.kadphol.com";
  const targetPath = "/resume";

  if (hostname === targetSubdomain) {
    // Prevent infinite loop if the request is already accessing the subpath assets
    if (!url.pathname.startsWith(targetPath)) {
      // Rewrite the URL internally to the specific path
      url.pathname = `${targetPath}${url.pathname}`;
      return context.redirect(url.toString(), 307);
      // Note: In an Astro Edge context, returning a modified URL context
      // preserves the browser address bar string transparently.
    }
  }

  return next();
});
