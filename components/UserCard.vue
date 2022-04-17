<template>
  <div class="user-card-wrapper d-flex align-center justify-end rounded overflow-hidden" :class="wrapperClass">
    <!--Info-->
    <div class="d-flex flex-column justify-center" :class="textWrapperClass">
      <h3 class="user-card__name" v-text="fullName" />
      <p class="user-card__company mb-0" v-text="companyName" />
    </div>
    <!--Image-->
    <nuxt-img
      :src="photoURL"
      :alt="fullName"
      class="rounded"
      format="webp"
      :width="imageSize * 2"
      :height="imageSize * 2"
      :style="{ width: `${imageSize}px`, height: `${imageSize}px` }"
    />
  </div>
</template>

<script>
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserCard',
  mixins: [userCardMixin],
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapperClass () {
      return { 'flex-row-reverse': this.right }
    },
    textWrapperClass () {
      return { 'align-end': !this.right }
    },
    imageSize () {
      return this.$vuetify.breakpoint.mdAndUp ? 100 : 50
    }
  }
}
</script>

<style scoped lang="scss">
.user-card-wrapper {
  width: 100%;
  gap: 15px;

  .user-card__company {
    color: $text-muted;
  }
}

@media (max-width: 968px) { // mobile
  .user-card-wrapper {
    gap: 10px;

    .user-card__name {
      font-size: 1em;
      white-space: nowrap;
    }

    .user-card__company {
      font-size: 1em;
    }
  }
}
</style>
