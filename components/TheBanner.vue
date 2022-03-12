<template>
  <v-row>
    <v-col cols="12" md="7">
      <div class="banner-description">
        <!-- Main Image -->
        <v-img src="/david.jpg" max-width="45%" contain />

        <!-- Description Text -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam, molestias obcaecati perspiciatis quis repellat vero voluptates. Ad, consectetur consequuntur dolore eaque, facilis fuga magni perspiciatis quo vero voluptate voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam, molestias obcaecati perspiciatis quis repellat vero voluptates. Ad, consectetur consequuntur dolore eaque, facilis fuga magni perspiciatis quo vero voluptate voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam, molestias obcaecati perspiciatis quis repellat vero voluptates. Ad, consectetur consequuntur dolore eaque, facilis fuga magni perspiciatis quo vero voluptate voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam, molestias obcaecati perspiciatis quis repellat vero voluptates. Ad, consectetur consequuntur dolore eaque, facilis fuga magni perspiciatis quo vero voluptate voluptatibus.
        </p>
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
    margin: 0 25px 20px 0;
  }
}
</style>
