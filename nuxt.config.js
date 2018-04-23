const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vinylc family',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },
  css: [
    '~assets/css/common.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  ////loading: false,

  router: {
    middleware: ['i18n'],
    scrollBehavior(to, from, savedPosition) {
      // savedPosition은 오직 popstate 동작으로 가능합니다.
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        // 만약 children 요소가 감지되지 않는다면
        if (to.matched.length < 2) {
          // 페이지 상단으로 스크롤됩니다.
          position = {x: 0, y: 0}
        }
        else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // 어떤 자식요소가 scrollToTop 옵션으로 설정되어있다면
          position = {x: 0, y: 0}
        }
        // link가 anchor를 가지고 있을 경우, 반환된 선택자를 이용해 anchor로 이동합니다.
        if (to.hash) {
          position = {selector: to.hash}
        }
        return position
      }
    },
    extendRoutes(routes, resolve) {
      /*routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })*/
    }
  },

  plugins: ['@/plugins/i18n.js', '@/plugins/axios.js'],

  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'super-secret-key',
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    })
  ],

  //proxy: 'http://word.api.maru.zone/api/v1',

  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },

    vendor: ['axios'],

    /*
    ** Run ESLint on save
    */
    /*extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },*/

  },

  manifest: {
    name: 'family',
    description: '...',
    theme_color: '#000000'
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/axios']
}
