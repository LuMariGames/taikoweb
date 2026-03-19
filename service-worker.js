self.addEventListener('fetch', function (e) {
  console.log('service worker fetch')
})

self.addEventListener('install', function (e) {
  console.log('service worker install')
})

self.addEventListener('activate', function (e) {
  console.log('service worker activate')
})
