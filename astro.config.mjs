import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // outDir:'./docs',
  integrations: [tailwind(), vue()],
  vite:{
    plugins: [yaml()]
  }
});