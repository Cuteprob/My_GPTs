import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

const site = "https://www.mygpts.site";

export default defineConfig({
  site,
  output: "server",
  adapter: vercel({
    runtime: "nodejs18.x",  // Ensure the runtime is set correctly
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind()]
});