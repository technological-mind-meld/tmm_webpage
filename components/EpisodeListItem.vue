<template>
  <v-card :to="{ name: 'episodes-slug', params: { slug: episode.slug } }" outlined tile class="episode-card mb-4">
    <v-card-text>
      <div class="d-flex align-center">
        <div class="episode-number mr-4 px-4 py-3 primary--text font-weight-bold" v-text="index" />
        <div class="episode-content">
          <h3 class="text-h5" v-text="episode.title" />
          <p class="text-subtitle-1 mb-1" v-text="episode.description" />
          <p class="text-subtitle-2 mb-0">
            {{ episode.createdAt | date }}
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
    },
    index: {
      type: Number,
      default: 0
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
  border-left: 0;
  border-right: 0;

  .episode-number {
    border: 2px solid #0286ee;
    font-size: 18px;
    text-align: center;
  }

  .episode-content {
    color: #222;
  }
}
</style>
