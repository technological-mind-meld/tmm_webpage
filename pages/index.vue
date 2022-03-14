<template>
  <div>
    <TheBanner class="mb-12" />

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
    this.episodes = await this.$content('episodes').sortBy('date', 'desc').fetch()
  }
}
</script>
