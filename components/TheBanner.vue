<template>
  <v-row>
    <v-col cols="12" md="7">
      <div class="banner-description">
        <!-- Main Image -->
        <v-img src="/users/david.jpg" lazy-src="/users/david.jpg" max-width="45%" contain>
          <template #placeholder>
            <v-row class="fill-height" align="center" justify="center" no-gutters>
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>

        <!-- Description Text -->
        <div>
          <h2 class="pt-5">
            technological-mind-meld
          </h2>
          <p>
           I want help people make better decisions regarding the cloud and the direction of their business. I’m making this show to share my experience about the Cloud and AWS, by spending two hours with you where I’ll answer any question you might have, which should result in an interesting conversation for you and the listeners.
          </p>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="5">
      <!-- This component loads calendly widget -->
      <CalendlyWidget />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TheBanner'
}
</script>

<style lang="scss" scoped>
.banner-description {
  .v-image {
    float: left;
    margin: 0 30px 15px 0;
    border-radius: 0.375rem;
  }

  p {
    font-size: 1.1875rem;
    color: $text-gray-700;
  }
}
</style>
