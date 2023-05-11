import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import vercelStatic from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelStatic()
});