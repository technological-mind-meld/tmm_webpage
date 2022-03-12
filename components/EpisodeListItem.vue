<template>
  <div>
    <nuxt-link :to="{ name: 'episodes-slug', params: { slug: episode.slug } }">
      {{ episode.title }}
    </nuxt-link>
    <p>{{ episode.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'EpisodeListItem',
  props: {
    episode: {
      type: Object,
      required: true
    }
  }
}
</script>
