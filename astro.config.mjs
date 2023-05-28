import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [preact()]
});