<template>
  <div>
    <TheBanner class="mb-12" />

    <TheEpisodeList :loading="$fetchState.pending" :episodes="episodes" />
  </div>
</template>

<script>
import { getSeasonFromEpisode } from '~/utils/helpers'

export default {
  name: 'IndexPage',
  data () {
    return {
      episodes: []
    }
  },
  async fetch () {
    let episodes = await this.$content('episodes', { deep: true }).sortBy('date', 'desc').fetch()
      .catch(() => [])
    episodes = episodes.map(episode => ({ ...episode, season: getSeasonFromEpisode(episode) }))

    this.episodes = episodes
  }
}
</script>
