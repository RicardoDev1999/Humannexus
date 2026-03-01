import allowedContextPages from "../contextPages";
import { getStories } from "@scripts/astro/services";
import { StoryblokClient } from "@storyblok/js";

// In-memory cache with daily expiration
let cachedSitemap = null;
let cacheExpiration = null;

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Create Storyblok API client
const storyblokApi = new StoryblokClient({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  apiOptions: {
    cache: {
      clear: "manual",
      type: "memory"
    },
    region: 'eu'
  }
});

async function generateSitemap() {
  const baseUrl = "https://humannexus.pt";
  
  // Static pages
  const staticPages = [
    "",
    "/about-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  // Context pages from contextPages.js (the index pages)
  const contextPages = allowedContextPages.map(path => path);

  // Extract unique contexts from contextPages
  const contexts = [...new Set(allowedContextPages.map(page => page.split('/')[1]))].filter(Boolean);

  // Fetch dynamic content for each context
  const dynamicPages = [];

  for (const context of contexts) {
    try {
      const [services, partners, programs, packs, teamMembers] = await Promise.all([
        getStories(storyblokApi, { content_type: "service" }, context),
        getStories(storyblokApi, { content_type: "partner" }, context),
        getStories(storyblokApi, { content_type: "program" }, context),
        getStories(storyblokApi, { content_type: "pack" }, context),
        getStories(storyblokApi, { content_type: "teamMember" }, context),
      ]);

      // Build context-specific dynamic URLs with content type
      dynamicPages.push(...(services || []).map(item => `/${context}/services/${item.slug.split('/').pop()}`));
      dynamicPages.push(...(partners || []).map(item => `/${context}/partners/${item.slug.split('/').pop()}`));
      dynamicPages.push(...(programs || []).map(item => `/${context}/programs/${item.slug.split('/').pop()}`));
      dynamicPages.push(...(packs || []).map(item => `/${context}/packs/${item.slug.split('/').pop()}`));
      dynamicPages.push(...(teamMembers || []).map(item => `/${context}/team/${item.slug.split('/').pop()}`));
    } catch (error) {
      console.error(`Error fetching items for context ${context}:`, error);
    }
  }

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...contextPages,
    ...dynamicPages,
  ];

  // Filter out 404 and 400 pages and remove duplicates
  const validPages = [...new Set(allPages.filter(
    page => page !== "/404" && page !== "/400"
  ))];

  // Generate XML sitemap
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function GET() {
  const now = Date.now();

  // Check if cache is still valid
  if (cachedSitemap && cacheExpiration && now < cacheExpiration) {
    return new Response(cachedSitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }

  // Generate new sitemap
  const sitemap = await generateSitemap();
  
  // Update cache
  cachedSitemap = sitemap;
  cacheExpiration = now + CACHE_DURATION;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
