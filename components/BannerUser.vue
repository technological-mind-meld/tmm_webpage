<template>
  <nuxt-img
    :src="image"
    :alt="name"
    class="rounded banner-user"
    width="350"
    height="350"
    format="webp"
  />
</template>

<script>
export default {
  name: 'BannerUser',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img.banner-user {
  width: 45%;
  height: auto;
  max-width: 262px;
  margin: 0 15px;
}
</style>
