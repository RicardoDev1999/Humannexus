import { defineConfig } from 'astro/config'
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { storyblok } from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import allowedContextPages from "./src/contextPages";

const allowedContextPagesMapped = allowedContextPages.map(x => `https://humannexus.pt${x}/`);

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://humannexus.pt",
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
  }), sitemap({
    filter: (page) => page !== "https://humannexus.pt/404/" && page !== "https://humannexus.pt/400/",
    customPages: [...allowedContextPagesMapped]
  })],
  vite: {
    define: {
      "process.env.NODE_ENV": `'${import.meta.env.MODE}'`,
      "process.env.RECAPTCHA_SITE_KEY": `'${import.meta.env.VITE_RECAPTCHA_SITE_KEY}'`
    },

    plugins: [tailwindcss()]
  },
  plugins: [basicSsl()],
  server: {
    https: true
  },
  paths: {
    "@components/*": "./src/components/*",
    "@layouts/*": "./src/layouts/*",
    "@adapters/*": "./src/adapters/*",
    "@scripts/*": "./src/scripts/*"
  },
  output: "server",
  adapter: netlify()
});