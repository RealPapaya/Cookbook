const CACHE_NAME = 'cookbook-v11';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/my-recipes.js',
  '/js/recipes.js',
  '/js/cooking-methods.js',
  '/js/ingredients/_constants.js',
  '/js/ingredients/_registry.js',
  '/js/ingredients/staple.js',
  '/js/ingredients/meat.js',
  '/js/ingredients/seafood.js',
  '/js/ingredients/dairy.js',
  '/js/ingredients/vegetable.js',
  '/js/ingredients/seasoning.js',
  '/js/ingredients/spice.js',
  '/js/ingredients/oil.js',
  '/js/ingredients/fermented.js',
  '/js/ingredients/other.js',
  '/images/carbonara_udon.png',
  '/images/kimchi_udon.png',
  '/images/lemon_chicken_udon.png',
  '/images/garlic_butter_tomato_shrimp.png',
  '/images/kimchi_tofu_stew.png',
  '/images/french_chicken_stew.png',
  '/images/salted_egg_chicken_tofu.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        // cache new images or fonts on the fly
        if (e.request.url.includes('/images/') || e.request.url.includes('fonts.g')) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
