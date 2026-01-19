import { defineConfig, passthroughImageService } from 'astro/config'
import netlify from "@astrojs/netlify";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { storyblok } from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";

import allowedContextPages from "./src/contextPages";

const allowedContextPagesMapped = allowedContextPages.map(x => `https://humannexus.pt${x}/`);

const mode = import.meta.env.VITE_FORCE_MODE || import.meta.env.MODE;

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://humannexus.pt",
  image: { service: passthroughImageService() },
  integrations: [storyblok({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
    apiOptions: {
      cache: {
        clear: "manual",
        type: "memory"
      },
      region: 'eu'
    },
    useCustomApi: false,
    components: {
      service: "storyBlok/Service",
      program: "storyBlok/Program",
      teamMember: "storyBlok/TeamMember",
      partner: "storyBlok/Partner",
      pack: "storyBlok/Pack"
    },
  }), sitemap({
    filter: (page) => page !== "https://humannexus.pt/404/" && page !== "https://humannexus.pt/400/",
    customPages: [...allowedContextPagesMapped]
  })],
  vite: {
    define: {
      "process.env.NODE_ENV": `'${mode}'`,
      "process.env.RECAPTCHA_SITE_KEY": `'${import.meta.env.VITE_RECAPTCHA_SITE_KEY}'`
    },
    plugins: mode === 'development' ? [tailwindcss()] : [tailwindcss(), basicSsl()]
  },
  paths: {
    "@components/*": "./src/components/*",
    "@layouts/*": "./src/layouts/*",
    "@adapters/*": "./src/adapters/*",
    "@scripts/*": "./src/scripts/*"
  },
  server: mode === 'development' ? {} : { https: true },
  output: "server",
  adapter: mode === "development" 
    ? node({ mode: "standalone" }) 
    : netlify({ functionsDirectory: 'netlify/functions', imageCDN: false })
});