var cacheName = 'break-it.v2';
var filesToCache = [
  'index.html',
  'menu_level.html',
  'menu_options.html',
  'game.html',
];

this.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
		caches.open(cacheName).then(function(cache) {
		  console.log('[ServiceWorker] Caching app shell');
		  return cache.addAll(filesToCache);
		})
	);
});

this.addEventListener('beforeinstallprompt', function(e) {
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});

this.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return this.clients.claim();
});
//cache before
this.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
