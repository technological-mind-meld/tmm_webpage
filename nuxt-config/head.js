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
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
}
