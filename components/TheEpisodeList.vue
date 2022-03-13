<template>
  <div>
    <CircularLoading v-if="loading" />
    <template v-else>
      <template v-for="(episode, index) in episodes">
        <EpisodeListItem
          :key="episode.slug"
          :episode="episode"
          :index="index + 1"
        />
        <v-divider v-if="index < episodes.length - 1" :key="episodes.length + index" class="my-2" />
      </template>
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
