module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt01',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: [
      'assets/common.css'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    filenames: {
      css: 'style.[contenthash].css',
      manifest: 'menifest.[hash].js',
      vendor: 'vendors.[chunkhash].js',
      app: 'app.[chunkhash].js',
      chunk: '[name].[chunkhash].js'
    }
  }
}
