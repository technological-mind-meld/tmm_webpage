<template>
  <div>
    <EpisodeListItem v-for="episode in episodes" :key="episode.id" :episode="episode" />
  </div>
</template>

<script>
export default {
  name: 'TheEpisodeList',
  props: {
    episodes: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
