const CACHE_NAME = 'pirjadi-cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/-peerjadi-foundation-wahedpur-feni-/offline.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() =>
        caches.match('/-peerjadi-foundation-wahedpur-feni-/offline.html')
      )
  );
});