<template>
  <v-card
    width="60%"
    max-width="150px"
    class="user-card text-center"
    tile
    outlined
    color="transparent"
  >
    <v-img :src="photoURL" :alt="fullName" class="user-avatar rounded" />
    <div class="text-subtitle-1" v-text="fullName" />
  </v-card>
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

  .social-wrapper {
    background-color: rgb(100 100 100 / 40%);
    height: 100%;
  }
}
</style>
