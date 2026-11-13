// Dog Zone: La Plaga — SW del build dist/web. No cambia el original del repo de desarrollo.
const CACHE = 'dogzone-dist-v0.3.2';
const FILES = ['./','./index.html','./css/style.css','./app.js','./data/breeds.json','./data/banned_names.json',
  './assets/models/dog.glb','./assets/models/husky.glb','./assets/models/npc_lis.glb','./assets/models/npc_matt.glb','./assets/models/npc_shaun.glb','./assets/models/pastor.glb','./assets/models/pug.glb','./assets/models/wolf.glb','./assets/models/wolf_q.glb','./assets/models/zombie_basic.glb',
  './assets/portraits/akita.webp','./assets/portraits/amstaff.webp','./assets/portraits/beagle.webp','./assets/portraits/bloodhound.webp','./assets/portraits/border_collie.webp','./assets/portraits/borzoi.webp','./assets/portraits/boxer.webp','./assets/portraits/briard.webp','./assets/portraits/bulldog_frances.webp','./assets/portraits/cane_corso.webp','./assets/portraits/caniche.webp','./assets/portraits/caucasico.webp','./assets/portraits/chihuahua.webp','./assets/portraits/cimarron.webp','./assets/portraits/dobermann.webp','./assets/portraits/dogo_argentino.webp','./assets/portraits/dogo_burdeos.webp','./assets/portraits/fila.webp','./assets/portraits/galgo_espanol.webp','./assets/portraits/golden.webp','./assets/portraits/gran_danes.webp','./assets/portraits/greyhound.webp','./assets/portraits/husky.webp','./assets/portraits/jack_russell.webp','./assets/portraits/labrador.webp','./assets/portraits/malinois.webp','./assets/portraits/pastor_aleman.webp','./assets/portraits/rottweiler.webp','./assets/portraits/shiba.webp','./assets/portraits/teckel.webp','./assets/portraits/weimaraner.webp',
  './assets/items/game-icons/black-2x/checkmark.png','./assets/items/game-icons/black-2x/exclamation.png','./assets/items/game-icons/black-2x/information.png','./assets/items/game-icons/black-2x/minus.png','./assets/items/game-icons/black-2x/plus.png','./assets/items/game-icons/black-2x/question.png','./assets/items/game-icons/black-2x/star.png','./assets/items/game-icons/black-2x/warning.png','./assets/items/game-icons/white-2x/checkmark.png','./assets/items/game-icons/white-2x/exclamation.png','./assets/items/game-icons/white-2x/information.png','./assets/items/game-icons/white-2x/minus.png','./assets/items/game-icons/white-2x/plus.png','./assets/items/game-icons/white-2x/question.png','./assets/items/game-icons/white-2x/star.png','./assets/items/game-icons/white-2x/warning.png','./assets/items/generic-items/genericItem_color_089.png','./assets/items/generic-items/genericItem_color_090.png','./assets/items/generic-items/genericItem_color_093.png','./assets/items/generic-items/genericItem_color_094.png','./assets/items/generic-items/genericItem_color_096.png','./assets/items/generic-items/genericItem_color_097.png','./assets/items/generic-items/genericItem_color_099.png','./assets/items/generic-items/genericItem_color_100.png','./assets/items/generic-items/genericItem_color_101.png','./assets/items/generic-items/genericItem_color_102.png','./assets/items/generic-items/genericItem_color_103.png','./assets/items/generic-items/genericItem_color_104.png','./assets/items/generic-items/genericItem_color_110.png','./assets/items/generic-items/genericItem_color_113.png','./assets/items/generic-items/genericItem_color_118.png','./assets/items/generic-items/genericItem_color_121.png','./assets/items/generic-items/genericItem_color_126.png','./assets/items/generic-items/genericItem_color_128.png',
  './assets/credits/retratos-creditos.json',
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
