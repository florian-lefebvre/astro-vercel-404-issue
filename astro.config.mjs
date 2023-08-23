import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-vercel-404-issue.vercel.app",
  base: "/",
  trailingSlash: "never",
  output: "hybrid",
  compressHTML: true,
  adapter: vercel({}),
});
