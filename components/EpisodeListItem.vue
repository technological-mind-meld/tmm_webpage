<template>
  <v-card :to="{ name: 'episodes-slug', params: { slug: episode.slug } }" outlined tile class="episode-card" color="transparent">
    <v-card-text>
      <div class="d-flex align-center">
        <div class="episode-number d-flex align-center justify-center flex-shrink-0 mr-4 primary--text" v-text="index" />
        <div class="episode-content">
          <h3 class="text-h5" v-text="episode.title" />
          <p class="description mb-1" v-text="episode.description" />
          <p class="meta mb-0">
            <span class="font-weight-bold">
              {{ episode.createdAt | date }}
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
    border-radius: 50%;
    width: 46px;
    height: 46px;
  }

  .episode-content {
    color: #222;

    p.description {
      font-size: 1.05rem;
      color: $text-gray-700;
    }

    p.meta {
      color: $text-gray-700;
    }
  }
}
</style>
