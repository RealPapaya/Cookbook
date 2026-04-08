/// <reference lib="webworker" />

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

declare let self: ServiceWorkerGlobalScope;

action();

function action(): void {
  cleanupOutdatedCaches();
  precacheAndRoute(self.__WB_MANIFEST);

  // Let deep links resolve to index.html for SPA routes.
  const navigationHandler = createHandlerBoundToURL('index.html');
  registerRoute(({ request }) => request.mode === 'navigate', navigationHandler);

  registerRoute(
    ({ url }) => url.pathname.includes('/data/recipes/'),
    new NetworkFirst({
      cacheName: 'recipe-data',
      plugins: [new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 })]
    })
  );

  registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'image-assets',
      plugins: [new ExpirationPlugin({ maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 })]
    })
  );

  registerRoute(
    ({ request, url }) =>
      request.destination === 'style' || request.destination === 'script' || url.pathname.endsWith('.json'),
    new StaleWhileRevalidate({ cacheName: 'app-static' })
  );
}
