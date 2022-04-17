<template>
  <div class="d-flex align-center" :class="marginClass">
    <v-icon v-if="$vuetify.breakpoint.smAndUp" large>
      {{ icons.mdiRibbon }}
    </v-icon>
  </div>
</template>

<script>
import iconMixin from '~/mixins/iconMixin'

export default {
  name: 'TheRibbonDivider',
  mixins: [iconMixin],
  computed: {
    marginClass () {
      return this.$vuetify.breakpoint.smAndUp ? 'mx-2' : 'mx-1'
    }
  }
}
</script>
