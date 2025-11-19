const cacheName = 'nota-terjun-v2';
const assets = ['.','index.html','manifest.json','IconBrain-192.png','IconBrain-512.png'];

self.addEventListener('install', e=>{ e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assets))); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });

