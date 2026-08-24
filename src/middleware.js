import { defineMiddleware } from 'astro:middleware';

const excludedExtensions = [
  '.mp4',
  '.webm',
  '.mov',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.svg',
  '.avif',
];

export const onRequest = defineMiddleware(async (context, next) => {
  const method = context.request.method;

  if (method !== 'GET' && method !== 'HEAD') {
    return next();
  }

  const url = new URL(context.request.url);
  const pathname = url.pathname.toLowerCase();

  if (excludedExtensions.some((ext) => pathname.endsWith(ext))) {
    return next();
  }

  const response = await next();
  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const cacheDurationSeconds = 300;
  const staleWhileRevalidateSeconds = 86400;

  response.headers.set(
    'Cache-Control',
    `public, max-age=0, s-maxage=${cacheDurationSeconds}, stale-while-revalidate=${staleWhileRevalidateSeconds}`,
  );

  response.headers.set(
    'Netlify-CDN-Cache-Control',
    `public, max-age=${cacheDurationSeconds}, s-maxage=${cacheDurationSeconds}, stale-while-revalidate=${staleWhileRevalidateSeconds}`,
  );

  return response;
});
