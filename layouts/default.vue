<template>
  <v-app>
    <v-app-bar app elevation="1">
      <div class="mx-auto">
        <nuxt-link :to="{ name: 'index' }">
          <v-img src="/logo/logo_dark.svg" max-height="48" contain />
        </nuxt-link>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import mixpanel from 'mixpanel-browser'

import { MIXPANEL_TOKEN } from '~/utils/constants/app-constants'

export default {
  name: 'DefaultLayout',
  created () {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      if (window.location.hostname !== 'localhost') {
        mixpanel.init(MIXPANEL_TOKEN)
        mixpanel.track('Visit')
      }
    }
  }
}
</script>
