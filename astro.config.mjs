import { defineConfig } from 'astro/config';
import vercelEdge from '@astrojs/vercel/edge';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel()
});