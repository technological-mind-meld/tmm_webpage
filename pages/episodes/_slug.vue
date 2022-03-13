<template>
  <div>
    <SocialHead :title="episode.title" :description="episode.description" type="video.episode" />

    <v-row>
      <v-col cols="12" md="3">
        <div class="d-flex flex-column align-center justify-center fill-height">
          <UserCard v-if="host" :user="host" />
          <div class="my-4 font-weight-bold">
            AND
          </div>
          <UserCard v-if="guest" :user="guest" />
        </div>
      </v-col>
      <v-col cols="12" md="9">
        <VideoEmbed :youtube-id="youtubeId" />
      </v-col>
    </v-row>

    <v-divider class="my-8" />

    <h1 class="text-h4 font-weight-light mb-4" v-text="episode.title" />
    <p class="text-subtitle-1">
      {{ episode.createdAt | date }}
      -
      {{ tags }}
    </p>
    <p class="text-subtitle-1" v-text="episode.description" />
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
  },
  computed: {
    host () {
      const { hosts = [] } = this.episode
      return hosts.length > 0 ? hosts[0] : null
    },
    guest () {
      const { guests = [] } = this.episode
      return guests.length > 0 ? guests[0] : null
    },
    tags () {
      return this.episode.tags.map(tag => `#${tag}`).join(', ')
    },
    youtubeId () {
      const youtubeProvider = this.episode.media.find(media => media.provider === 'youtube')
      return youtubeProvider ? youtubeProvider.url.split('v=')[1] : null
    }
  }
}
</script>
