require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'sytlesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'assets/vendor/nucleo/css/nucleo.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: 'assets/vendor/@fortawesome/fontawesome-free/css/all.min.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: 'assets/css/argon.css?v=1.2.0',
        type: 'text/css'
      }
    ],
    script: [
      { src: 'assets/vendor/jquery/dist/jquery.min.js', body: true },
      {
        src: 'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
        body: true
      },
      { src: 'assets/vendor/js-cookie/js.cookie.js', body: true },
      {
        src: 'assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
        body: true
      },
      {
        src: 'assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
        body: true
      },
      { src: 'assets/js/argon.js?v=1.2.0', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: process.env.API_URL
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  }
}
