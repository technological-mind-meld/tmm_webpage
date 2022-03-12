<template>
  <div>
    <div v-if="$fetchState.pending">
      Loading episodes...
    </div>
    <div v-else-if="$fetchState.error">
      {{ $fetchState.error }}
    </div>
    <TheEpisodeList v-else :episodes="episodes" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      episodes: []
    }
  },
  async fetch () {
    this.episodes = await this.$content('episodes').fetch()
  }
}
</script>
