<template>
  <div class="d-flex flex-column align-center">
    <UserAvatar :user="user" :size="width" />
    <div class="text-subtitle-1" v-text="name" />
  </div>
</template>

<script>
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserAvatarWithName',
  mixins: [userCardMixin],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      width: 140
    }
  }
}
</script>
