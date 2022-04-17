<template>
  <v-app>
    <TheHeader />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <TheFooter />
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
  },
  async mounted () {
    // If there is an update, refresh the page.
    const workbox = await window.$workbox
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        if (event.isUpdate) {
          window.location.reload()
        }
      })
    }
  }
}
</script>
