// Evento de instalación
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
  
          'index.html',
          'html/Catalogo.html',
          'html/Contacto.html',
          'html/Elaboracion.html',
          'html/Nosotros.html',
          'js/script-catalogo.js',
          'videos/1.impresora video.mp4',
          'videos/2.impresora video .mp4',
          'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
  
        ]);
      })
    );
  });
  
  // Evento de activación
  self.addEventListener('activate', (event) => {
    // Eliminar cachés antiguos que ya no son necesarios
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== 'my-cache') {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  // Evento fetch
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  