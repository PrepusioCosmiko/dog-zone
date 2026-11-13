// Dog Zone: La Plaga — SW del build dist/web. No cambia el original del repo de desarrollo.
const CACHE = 'dogzone-dist-v0.2';
const FILES = ['./','./index.html','./css/style.css','./app.js','./data/breeds.json',
  './assets/models/dog.glb','./assets/models/husky.glb','./assets/models/npc_lis.glb','./assets/models/npc_matt.glb','./assets/models/npc_shaun.glb','./assets/models/pastor.glb','./assets/models/pug.glb','./assets/models/wolf.glb','./assets/models/wolf_q.glb','./assets/models/zombie_basic.glb',
  './assets/fonts/PixelifySans.ttf','./assets/fonts/Fredoka.ttf',
  './manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('message', (e) => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(e.request);
      if (res && res.ok && res.type !== 'opaque') {
        const copy = res.clone();
        const c = await caches.open(CACHE);
        try { await c.put(e.request, copy); } catch (_) {}
      }
      return res;
    } catch (err) {
      const cached = await caches.match(e.request, { ignoreSearch: true });
      if (cached) return cached;
      throw err;
    }
  })());
});
