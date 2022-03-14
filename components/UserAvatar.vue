<template>
  <v-menu
    offset-y
    allow-overflow
    open-on-hover
    :close-delay="100"
    :close-on-content-click="false"
    content-class="popover rounded"
    :min-width="menuWidth"
    :max-width="menuWidth"
    :nudge-bottom="20"
    :nudge-left="nudgeLeft"
  >
    <template #activator="{ on, attrs }">
      <img
        :src="photoURL"
        :alt="fullName"
        :width="size"
        :height="size"
        :class="{ 'rounded': rounded }"
        class="cursor-pointer"
        v-bind="attrs"
        v-on="on"
      >
    </template>
    <div>
      <v-list>
        <v-list-item>
          <v-list-item-avatar rounded>
            <img :src="photoURL" :alt="fullName" class="rounded">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ fullName }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="personalURL">
            <v-btn icon :href="personalURL" target="_blank">
              <v-icon>{{ icons.mdiWeb }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <div class="d-flex align-center justify-center menu-social-wrapper">
        <a v-if="linkedinURL" :href="linkedinURL">
          <img src="/public/img/social/linkedin.svg" alt="LinkedIn">
        </a>
        <a v-if="githubURL" :href="githubURL">
          <img src="/public/img/social/github.svg" alt="GitHub">
        </a>
      </div>
    </div>
  </v-menu>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserAvatar',
  mixins: [iconMixin, userCardMixin],
  props: {
    size: {
      type: Number,
      default: 40
    },
    rounded: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      menuWidth: 250
    }
  },
  computed: {
    nudgeLeft () {
      return (this.menuWidth / 2) - (this.size / 2)
    }
  }
}
</script>

<style scoped lang="scss">
.popover {
  background-color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 1.5rem 4rem rgb(22 28 45 / 10%);
  contain: initial;
  overflow: visible;
  transition: opacity .15s linear;
}

.popover::before {
  position: absolute;
  content: "";
  top: 0;
  left: calc(50% - 10px);
  transform: translateY(-100%);
  width: 20px;
  height: 10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 13px solid #fff;
}

img {
  vertical-align: middle;
}

.menu-social-wrapper {
  img {
    margin: 15px 10px;
  }
}
</style>
