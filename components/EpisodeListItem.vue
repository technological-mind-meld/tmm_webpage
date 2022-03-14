<template>
  <v-card :to="{ name: 'episodes-slug', params: { slug: episode.slug } }" outlined class="episode-card overflow-hidden" color="transparent">
    <v-card-text>
      <div class="d-flex align-start">
        <div class="episode-number d-flex align-center justify-center flex-shrink-0 mr-4 primary--text" v-text="episode.slug" />
        <div class="episode-content">
          <h3 class="text-h5" v-text="episode.title" />
          <p class="meta mb-0">
            <span class="font-weight-bold">
              {{ episode.date | date }}
            </span>
            -
            <span v-if="host" v-text="`${host.full_name} - `" />
            {{ tags }}
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'EpisodeListItem',
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    host () {
      const { hosts = [] } = this.episode
      return hosts.length > 0 ? hosts[0] : null
    },
    tags () {
      return this.episode.tags.map(tag => `#${tag}`).join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
.episode-card {

  .episode-number {
    border: 2px solid #0286ee;
    font-size: 18px;
    border-radius: 50%;
    width: 46px;
    height: 46px;
  }

  .episode-content {
    color: #222;

    p.meta {
      color: $text-gray-700;
    }
  }
}
</style>
