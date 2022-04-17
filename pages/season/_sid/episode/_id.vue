<template>
  <div>
    <SocialHead :title="episode.title" type="video.episode" />

    <div v-if="host && guest" class="d-flex mb-6">
      <UserCard :user="host" />
      <TheRibbonDivider />
      <UserCard :user="guest" right />
    </div>

    <div class="mb-6">
      <VideoEmbed :youtube-id="youtubeId" />
    </div>

    <div class="mb-6">
      <h1 class="text-h4 font-weight-light mb-2" v-text="episode.title" />
      <p class="text-subtitle-1 mb-0">
        {{ episode.date | date }}
        -
        {{ tags }}
      </p>
    </div>
  </div>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'

export default {
  name: 'EpisodeDetailPage',
  mixins: [iconMixin],
  async asyncData ({ $content, error, params }) {
    const episode = await $content(`episodes/${params.sid}`, params.id).fetch()
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
    hasMultipleHost () {
      const { hosts = [] } = this.episode
      return hosts.length > 1
    },
    host () {
      const { hosts = [] } = this.episode
      return hosts.length > 0 ? hosts[0] : null
    },
    hasMultipleGuest () {
      const { guests = [] } = this.episode
      return guests.length > 1
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
