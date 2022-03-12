<template>
  <div>
    <SocialHead :title="episode.title" :description="episode.description" type="video.episode" />

    <h1>{{ episode.title }}</h1>
    <p>{{ episode.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'EpisodeDetailPage',
  async asyncData ({ $content, error, params }) {
    const episode = await $content('episodes', params.slug).fetch()
      .catch(() => null)

    if (!episode) {
      return error({ statusCode: 404, message: 'Episode not found!' })
    }

    return {
      episode
    }
  },
  data () {
    return {
      episode: null
    }
  },
  head () {
    return {
      title: this.episode.title
    }
  }
}
</script>
