<template>
  <div class="user-card-wrapper d-flex align-center justify-end rounded overflow-hidden" :class="wrapperClass">
    <!--Info-->
    <div class="d-flex flex-column justify-space-around" :class="textWrapperClass" style="height: 100%;">
      <h3 class="user-card__name" v-text="fullName" />
      <img
        :src="companyImage"
        :alt="companyName"
        :height="companyImageSize"
        class="user-card__company-image"
        :class="companyImageClass"
      >
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
    companyImageClass () {
      return { filtered: this.hasCompanyImageFiltered }
    },
    imageSize () {
      return this.$vuetify.breakpoint.mdAndUp ? 100 : 50
    },
    companyImageSize () {
      return this.$vuetify.breakpoint.mdAndUp ? 30 : 20
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

  .user-card__company-image {
    &.filtered {
      filter: drop-shadow(0px 0px 1px $text-muted) drop-shadow(0px 0px 1px $text-muted) drop-shadow(0px 0px 1px $text-muted);
      -webkit-filter: drop-shadow(0px 0px 1px $text-muted) drop-shadow(0px 0px 1px $text-muted) drop-shadow(0px 0px 1px $text-muted);
    }
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
