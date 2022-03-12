<template>
  <div>
    <CircularLoading v-if="loading" />
    <template v-else>
      <EpisodeListItem
        v-for="(episode, index) in episodes"
        :key="episode.id"
        :episode="episode"
        :index="index + 1"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'TheEpisodeList',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    episodes: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
