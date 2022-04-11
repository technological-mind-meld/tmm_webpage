<template>
  <v-row>
    <v-col cols="12">
      <div class="banner-description">
        <div class="d-flex justify-center">
          <!-- David's Image -->
          <BannerUser name="David Gatti" image="/users/david.jpg" />
          <!-- Matt's Image -->
          <BannerUser name="Matthew D. Smith" image="/users/matthew.jpg" />
        </div>

        <!-- Description Text -->
        <div class="mt-6 text-center">
          <h2 class="mb-4">
            technological-mind-meld
          </h2>
          <p>
            We are two geeks that have a passion for technology, like to talk about it and share our experience and knowledge with others.
          </p>
          <p>
            Not to mention Matthew has a passion for the history of tech companies. He loves figuring out how they came to be, their journey and how they impacted the industry as a whole.
          </p>
          <p>
            We also have different points of view, which creates interesting debates. Tune in and enjoy the show.
          </p>
        </div>
      </div>
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
    margin: 0 15px;
  }

  p {
    font-size: 1.1875rem;
    color: $text-gray-700;
  }
}
</style>
