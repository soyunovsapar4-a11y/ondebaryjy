// =====================================================
// ÖŇDE BARYJY ÝYLADYŞHANA — Service Worker v2.1
// Author: yesenow dayanc
// =====================================================

const CACHE_NAME = 'obyl-v2-1';
const STATIC_CACHE = 'obyl-static-v2-1';
const DYNAMIC_CACHE = 'obyl-dynamic-v2-1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/i18n.js',
  './js/app.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap'
];

// ===== INSTALL =====
self.addEventListener('install', event => {
  console.log('[SW] Installing ÖŇDE BARYJY ÝYLADYŞHANA v2.1...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Cache install error:', err))
  );
});

// ===== ACTIVATE =====
self.addEventListener('activate', event => {
  console.log('[SW] Activating v2.1...');
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(k => k !== STATIC_CACHE && k !== DYNAMIC_CACHE)
        .map(k => { console.log('[SW] Deleting old cache:', k); return caches.delete(k); })
    )).then(() => self.clients.claim())
  );
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET and non-http(s)
  if (event.request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // Strategy: Cache-first for static, Network-first for API
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(event.request));
  } else if (isTableAPI(url)) {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

function isStaticAsset(url) {
  return url.pathname.match(/\.(css|js|woff2?|ttf|otf|png|jpg|jpeg|svg|ico|webp)$/) ||
         url.hostname === 'cdn.jsdelivr.net' ||
         url.hostname === 'fonts.googleapis.com' ||
         url.hostname === 'fonts.gstatic.com';
}

function isTableAPI(url) {
  return url.pathname.includes('/tables/');
}

// Cache-first: static assets
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline — resource not cached', { status: 503 });
  }
}

// Network-first: API calls
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response(JSON.stringify({ error: 'Offline' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 503
    });
  }
}

// Stale-while-revalidate: pages
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  return cached || fetchPromise || offlineFallback();
}

async function offlineFallback() {
  const cached = await caches.match('./index.html');
  return cached || new Response('<h1>Offline</h1>', { headers: { 'Content-Type': 'text/html' } });
}

// ===== BACKGROUND SYNC (optional) =====
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
