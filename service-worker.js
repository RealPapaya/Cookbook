const CACHE_NAME = 'cookbook-v18';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/my-recipes.js',
  '/js/recipes.js',
  '/js/cooking-methods.js',
  '/data/recipes/index.json',
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
  '/images/carbonara_udon.webp',
  '/images/kimchi_udon.webp',
  '/images/lemon_chicken_udon.webp',
  '/images/garlic_butter_tomato_shrimp.webp',
  '/images/kimchi_tofu_stew.webp',
  '/images/french_chicken_stew.webp',
  '/images/salted_egg_chicken_tofu.webp',
  '/images/curry-rice.webp',
  '/images/gyudon.webp',
  '/images/shanghai-veg-rice.webp',
  '/images/mapo_tofu_1776072339256.webp',
  '/images/pepper_sesame_soy_milk_noodle_1776072358665.webp',
  '/images/silky_egg_shimeji_rice_1776072373600.webp',
  '/images/shacha-milk-glass-noodles.webp',
  '/images/miso-douban-hot-pot.webp',
  '/images/scallion-pork.webp',
  '/images/shacha-pork.webp',
  '/images/scallion-oil-chicken.webp',
  '/images/butter-salmon.webp',
  '/images/mushroom-scallop.webp',
  '/images/hamburger-steak.webp',
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
        // cache new images, fonts, or recipe jsons on the fly
        if (e.request.url.includes('/images/') || e.request.url.includes('fonts.g') || e.request.url.includes('/data/recipes/')) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
