/**
 * Created by J on 16/09/2016.
 */
// Use a cacheName for cache versioning
var cacheName = '1.0';

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                '../index.html',
                '../pages/tabuleiro.html',
                '../js/reversi-ia.js',
                '../js/reversi.js',
                '../js/home.js',
                '../bower_components/sweetalert/dist/sweetalert.css',
                '../bower_components/bootstrap/dist/css/bootstrap.min.css',
                '../css/home.css',
                '../css/estilo.css',
                '../bower_components/jquery/dist/jquery.min.js',
                '../bower_components/bootstrap/dist/js/bootstrap.min.js',
                '../bower_components/sweetalert/dist/sweetalert.min.js',
                '../images/favicon.ico',
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});