<template>
  <li class="d-inline-block user-list-item">
    <v-menu offset-y open-on-hover :close-on-content-click="false">
      <template #activator="{ on, attrs }">
        <img :src="photoURL" :alt="fullName" v-bind="attrs" v-on="on">
      </template>
      <v-card width="250px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="photoURL" :alt="fullName">
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
      </v-card>
    </v-menu>
  </li>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'
import userCardMixin from '~/mixins/userCardMixin'

export default {
  name: 'UserListItem',
  mixins: [iconMixin, userCardMixin],
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style scoped lang="scss">
li.user-list-item {
  margin-right: -16px;
  border: 2px solid #ddd;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: $hover-link;
    z-index: 99999;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    vertical-align: middle;
  }
}

.menu-social-wrapper {
  img {
    margin: 15px 10px;
    vertical-align: middle;
  }
}
</style>
