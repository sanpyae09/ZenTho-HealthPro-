const CACHE_NAME = 'zentho-health-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json', // manifest ကိုပါ cache လုပ်ရန်ထည့်ပါ
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
