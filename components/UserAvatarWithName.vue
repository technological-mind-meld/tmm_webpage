<template>
  <div class="d-flex flex-column align-center">
    <UserAvatar :user="user" :size="width" />
    <div class="text-subtitle-1" v-text="fullName" />
  </div>
</template>

<script>
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserAvatarWithName',
  mixins: [userCardMixin],
  data () {
    return {
      width: 140
    }
  }
}
</script>
