<template>
  <span v-if="false" />
</template>

<script>
import { image as defaultImage, description as defaultDescription } from '~/assets/defaultHeadTags.json'

export default {
  name: 'SocialHead',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'website'
    }
  },
  head () {
    const imageUrl = this.image || defaultImage
    const description = this.description || defaultDescription

    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: imageUrl
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: imageUrl
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: imageUrl
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.type
        }
      ]
    }
  }
}
</script>
