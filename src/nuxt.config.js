module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxtjs SSR Firebase Functions',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }, {
        name: 'google-site-verification',
        content: '25aGtsdrxiV5R2Q8Uc-e3j7KJjSH2EmjkdZ_JsOTYiU'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
      {rel: 'stylesheet', href: 'https://cdn.muicss.com/mui-0.9.35/css/mui.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

// <script src="https://cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
  /*
   ** Customize the progress bar color
   */
  router: {
    middleware: 'router-auth'
  },
  loading: {
    color: '#3B8070'
  },
  modules: [
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    '@/assets/styles/global.scss'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vuetify',
    '@/plugins/fireauth.js'
  ],
  css: [
    {src: '@/assets/styles/main.css', lang: 'css'},
    // {src: '@/assets/styles/global.scss'},
    {src: 'element-ui/lib/theme-chalk/index.css'},
    {src: 'vuetify/dist/vuetify.min.css'}

  ],
  /*
   ** Build configuration
   */
  buildDir: '../prod/server/nuxt',
  build: {
    vendor: ['element-ui', 'vuetify', 'firebase'],
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        ["transform-runtime", {
          "polyfill": true,
          "regenerator": true
        }],
      ]
    },
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
