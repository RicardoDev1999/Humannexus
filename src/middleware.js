import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const method = context.request.method;

  if (method !== 'GET' && method !== 'HEAD') {
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
