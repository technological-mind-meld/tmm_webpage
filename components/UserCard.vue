<template>
  <v-card width="50%" class="text-center" tile elevation="0">
    <v-img :src="photoURL" :alt="fullName" />
    <div class="text-subtitle-1" v-text="fullName" />
    <div class="d-flex">
      <v-btn v-if="linkedinURL" icon :href="linkedinURL" target="_blank" color="#0077b5">
        <v-icon>{{ icons.mdiLinkedin }}</v-icon>
      </v-btn>
      <v-btn v-if="personalURL" icon :href="personalURL" target="_blank" color="#666">
        <v-icon>{{ icons.mdiWeb }}</v-icon>
      </v-btn>
      <v-btn v-if="githubURL" icon :href="githubURL" target="_blank" color="#333">
        <v-icon>{{ icons.mdiGithub }}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'

export default {
  name: 'UserCard',
  mixins: [iconMixin],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName () {
      return this.user.full_name
    },
    photoURL () {
      return this.user.photo
    },
    linkedinURL () {
      const row = this.user.urls.find(url => url.site === 'linkedin')
      return row ? row.url : null
    },
    personalURL () {
      const row = this.user.urls.find(url => url.site === 'personal')
      return row ? row.url : null
    },
    githubURL () {
      const row = this.user.urls.find(url => url.site === 'github')
      return row ? row.url : null
    }
  }
}
</script>
