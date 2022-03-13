<template>
  <v-hover v-slot="{ hover }">
    <v-card width="60%" class="user-card text-center" tile elevation="0" color="transparent">
      <v-img :src="photoURL" :alt="fullName" class="user-avatar">
        <v-expand-transition>
          <div v-if="hover" class="d-flex align-center justify-center social-wrapper">
            <v-btn v-if="linkedinURL" icon :href="linkedinURL" target="_blank" color="primary">
              <v-icon>{{ icons.mdiLinkedin }}</v-icon>
            </v-btn>
            <v-btn v-if="personalURL" icon :href="personalURL" target="_blank" color="#333">
              <v-icon>{{ icons.mdiWeb }}</v-icon>
            </v-btn>
            <v-btn v-if="githubURL" icon :href="githubURL" target="_blank" color="#333">
              <v-icon>{{ icons.mdiGithub }}</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <div class="text-subtitle-1" v-text="fullName" />
    </v-card>
  </v-hover>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserCard',
  mixins: [iconMixin, userCardMixin]
}
</script>

<style lang="scss" scoped>
.user-card {
  .v-image {
    border-radius: 0.375rem !important;
  }

  .social-wrapper {
    background-color: rgb(100 100 100 / 40%);
    height: 100%;
  }
}
</style>
