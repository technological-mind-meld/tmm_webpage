<template>
  <div>
    <TheBanner />

    <TheEpisodeList :loading="$fetchState.pending" :episodes="episodes" />
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
    this.episodes = await this.$content('episodes').sortBy('createdAt', 'desc').fetch()
  }
}
</script>
