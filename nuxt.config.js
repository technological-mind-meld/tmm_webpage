import { feed as feedConfig } from './nuxt-config/feed'
import { getEpisodeRoutes } from './utils/episode'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '0x4447_webpage_podcast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    routes: getEpisodeRoutes,
    fallback: 'error.html'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
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
    // Sitemap module configuration (https://sitemap.nuxtjs.org/guide/setup)
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: process.env.BASE_URL || 'https://podcast.0x4447.com',
      gzip: true
    }],
    // Robots module configuration (https://www.npmjs.com/package/@nuxtjs/robots#setup)
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '/',
      Disallow: '/_nuxt/',
      CrawlDelay: 5,
      Sitemap: 'https://podcast.0x4447.com/sitemap.xml'
    }]
  ],

  // Feed module configuration (https://github.com/nuxt-community/feed-module#setup)
  feed: feedConfig,

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

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
