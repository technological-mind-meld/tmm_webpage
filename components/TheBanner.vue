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
            I’m David and I’ve been doing AWS consulting since 2016. Now I decided that I want to help owners and CEOs to make better decisions regarding technology and the Cloud, especially when it comes to AWS.
          </p>
          <p>
            In this podcast I share my experience about the Cloud and AWS. You get to spend two hours with me, where you can ask me any question you might have about AWS and the Cloud in general. In return the chat will be posted publicly for everyone to learn from.
          </p>
          <p>
            On the right you can find my calendar, pick a date that works for you.
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
