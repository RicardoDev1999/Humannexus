import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [storyblok({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    apiOptions: {
      cache: {
        clear: "manual",
        type: "memory"
      }
    },
    useCustomApi: false,
    components: {
      service: "storyBlok/Service",
      program: "storyBlok/Program",
      teamMember: "storyBlok/TeamMember",
      partner: "storyBlok/Partner"
    },
    bridge: import.meta.env.MODE === "development" ? true : false
  }), tailwind()],
  vite: {
    define: {
      'process.env.NODE_ENV': `'${import.meta.env.MODE}'`,
      "process.env.RECAPTCHA_SITE_KEY": `'${import.meta.env.VITE_RECAPTCHA_SITE_KEY}'`,
    }
  },
  plugins: [basicSsl()],
  server: {
    https: true,
  },
  paths: {
    "@components/*": "./src/components/*",
    "@layouts/*": "./src/layouts/*",
    "@adapters/*": "./src/adapters/*",
    "@scripts/*": "./src/scripts/*"
  },
  output: "server",
  adapter: netlify(),
});