// Dog Zone: La Plaga — SW del build dist/web. No cambia el original del repo de desarrollo.
const CACHE = 'dogzone-dist-v0.1.3';
const FILES = ['./','./index.html','./css/style.css','./app.js','./data/breeds.json',
  './assets/models/dog.glb','./assets/models/wolf.glb',
  './assets/fonts/PixelifySans.ttf','./assets/fonts/Fredoka.ttf',
  './manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', (e) => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request)));
});
