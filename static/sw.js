importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt01",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7b41efa5560cfd0350f6.js",
    "revision": "4e666602b069be6321c098e73bad7dc8"
  },
  {
    "url": "/_nuxt/app.e7321dc9c010caa9d712d941b28f19ce.css",
    "revision": "e7321dc9c010caa9d712d941b28f19ce"
  },
  {
    "url": "/_nuxt/layouts_default.d8fada01f13a54c21948.js",
    "revision": "3b8227e6e34c8e8cdd563b6c59036cd8"
  },
  {
    "url": "/_nuxt/manifest.4b40f379de2a21c3a548.js",
    "revision": "69704c9a0fc5e77dccd8d757d260ff6e"
  },
  {
    "url": "/_nuxt/pages_404.8b35a488ebf6eba43964.js",
    "revision": "c2d7184b8657630731f2c5380980ebcc"
  },
  {
    "url": "/_nuxt/pages_500.36058d085ff67f9a3257.js",
    "revision": "3e5fb9f091138fa802b6034a558c96e0"
  },
  {
    "url": "/_nuxt/pages_index.82e59bbac8d4820a212a.js",
    "revision": "a3f98038be9b0951c499a0643e4c7fce"
  },
  {
    "url": "/_nuxt/pages_login.a1c22b760b834988a22d.js",
    "revision": "7394dbccd1c5eeb006601878901af5a6"
  },
  {
    "url": "/_nuxt/vendor.50a687b90e87611c1b07.js",
    "revision": "b48139341f7994276cdf6259046137a8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

