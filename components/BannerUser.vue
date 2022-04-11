<template>
  <v-img
    :src="image"
    :lazy-src="image"
    width="45%"
    max-width="262px"
    contain
    class="rounded"
    :alt="name"
  >
    <template #placeholder>
      <v-row class="fill-height" align="center" justify="center" no-gutters>
        <v-progress-circular indeterminate color="grey lighten-5" />
      </v-row>
    </template>
  </v-img>
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
