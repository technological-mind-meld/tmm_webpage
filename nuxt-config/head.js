import * as headTags from '../assets/defaultHeadTags.json'

export const head = {
  title: headTags.title,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
    { hid: 'description', name: 'description', content: headTags.description },

    // Twitter
    // Test on: https://cards-dev.twitter.com/validator
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:title', name: 'twitter:title', content: headTags.title },
    { hid: 'twitter:description', name: 'twitter:description', content: headTags.description },
    { hid: 'twitter:image', name: 'twitter:image', content: headTags.image },

    // Open Graph
    // Test on: https://developers.facebook.com/tools/debug/
    { hid: 'og:site_name', property: 'og:site_name', content: headTags.siteName },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:title', property: 'og:title', content: headTags.title },
    { hid: 'og:description', property: 'og:description', content: headTags.description },
    { hid: 'og:image', property: 'og:image', content: headTags.image },
    { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: headTags.image },
    { hid: 'og:image:alt', property: 'og:image:alt', content: headTags.siteName }
  ],
  link: [
    {
      name: 'apple-mobile-web-app-title',
      content: '0x4447 LLC'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicons/favicon-16x16.png'
    },
    {
      name: 'apple-touch-icon',
      href: '/favicons/apple-touch-icon.png'
    },
    {
      rel: 'manifest',
      href: '/favicons/site.webmanifest'
    },
    {
      rel: 'mask-icon',
      href: 'favicons/safari-pinned-tab.svg',
      color: '#5bbad5'
    }
  ]
}
