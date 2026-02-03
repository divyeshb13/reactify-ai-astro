// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://reactify-ai-astro.vercel.app",
  // useCdn: true,
  output: "server",
  /* adapter: node({
    mode: "standalone",
  }), */
  adapter: vercel(),
  integrations: [react(), sitemap()],
  image: {
    domains: ["cdn.sanity.io", "images.unsplash.com", "plus.unsplash.com"],
  },
  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
