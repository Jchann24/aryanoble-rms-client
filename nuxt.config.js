require('dotenv').config()

export default {
  mode: 'spa',
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
        href: '/assets/vendor/nucleo/css/nucleo.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css',
        type: 'text/css',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: '/assets/css/argon.css?v=1.2.0',
        type: 'text/css'
      }
    ],
    script: [
      { src: '/assets/vendor/jquery/dist/jquery.min.js', body: true },
      {
        src: '/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
        body: true
      },
      { src: '/assets/vendor/js-cookie/js.cookie.js', body: true },
      {
        src: '/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js',
        body: true
      },
      {
        src: '/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
        body: true
      },
      {
        src:
          '/assets/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        body: true
      },
      { src: '/assets/js/argon.js?v=1.2.0', body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffb64f' },
  /*
   ** Global CSS
   */
  css: ['~/assets/transitions/transitions.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-moment',
    { src: '~/plugins/objectToForm', mode: 'client' },
    { src: '~/plugins/skeletonLoader', mode: 'client' },
    { src: '~/plugins/vue-spinner', mode: 'client' }
  ],
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
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    'nuxt-material-design-icons'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: process.env.API_URL
  },
  auth: {
    localStorage: false,
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 60 * 60 * 24
        },
        refreshToken: {
          property: 'access_token',
          data: 'access_token',
          maxAge: 60 * 60 * 24
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'login/', method: 'post' },
          refresh: { url: 'refresh/', method: 'post' },
          user: { url: 'me/', method: 'get' },
          logout: false
        },
        tokenType: 'Bearer'
      }
    }
  },
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  }
}
