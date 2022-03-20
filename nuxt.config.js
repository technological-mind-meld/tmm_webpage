import { feed as feedConfig } from './nuxt-config/feed'
import { head as headConfig } from './nuxt-config/head'
import { getEpisodeRoutes } from './utils/episode'
import { BASE_URL } from './utils/constants/app-constants'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: headConfig,

  // https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    routes: getEpisodeRoutes,
    fallback: 'error.html'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters',
    { src: '~/plugins/hotjar', mode: 'client' },
    { src: '~/plugins/calendly', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Feed module
    ['@nuxtjs/feed'],
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', {
      icon: {
        source: './static/logo-icon.png'
      },
      meta: false,
      manifest: false
    }],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Podcast RSS Generation Module
    '~/modules/podcast',
    // Sitemap module configuration (https://sitemap.nuxtjs.org/guide/setup)
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: BASE_URL,
      gzip: true
    }],
    // Robots module configuration (https://www.npmjs.com/package/@nuxtjs/robots#setup)
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '/',
      Disallow: '/_nuxt/',
      CrawlDelay: 5,
      Sitemap: `${BASE_URL}/sitemap.xml`
    }]
  ],

  // Router configuration (https://nuxtjs.org/docs/configuration-glossary/configuration-router)
  router: {
    trailingSlash: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/vuetify.options.js',
    defaultAssets: false,
    treeShake: true
  },

  // Feed module configuration (https://github.com/nuxt-community/feed-module#setup)
  feed: feedConfig,

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCSS: true,
    extractCSS: {
      ignoreOrder: true
    },
    optimization: {
      removeEmptyChunks: true,
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
