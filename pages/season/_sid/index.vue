<template>
  <div>
    <h1>Episodes of Season #{{ season }}</h1>
    <TheEpisodeList :loading="$fetchState.pending" :episodes="episodes" />
  </div>
</template>

<script>
import { getSeasonFromEpisode } from '~/utils/helpers'

export default {
  name: 'SeasonDetailPage',
  data () {
    return {
      episodes: []
    }
  },
  async fetch () {
    const { sid: seasonId } = this.$route.params

    let episodes = await this.$content(`episodes/${seasonId}`).sortBy('date', 'desc').fetch()
      .catch(() => [])
    episodes = episodes.map(episode => ({ ...episode, season: getSeasonFromEpisode(episode) }))

    this.episodes = episodes
  },
  computed: {
    season () {
      return this.$route.params.sid
    }
  }
}
</script>
