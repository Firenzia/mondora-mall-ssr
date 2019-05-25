// import pkg from './package'

export default {
  mode: 'universal',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios', '@nuxtjs/proxy'
    ],
  
  axios: {
    proxy: true,
    // prefix: '/api/',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
    /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui',
    { src: '@/plugins/element-ui', ssr: true},
    '@/plugins/axios',
    '@/plugins/router',
    '@/plugins/vue-inject.js'
  ],
  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/global.scss'
  ],




  /*
  ** Nuxt.js modules
  */
 
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios','element-ui'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
