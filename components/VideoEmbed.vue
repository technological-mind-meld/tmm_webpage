<template>
  <div class="iframe__16x9__wrapper">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${youtubeId}`"
      width="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'VideoEmbed',
  props: {
    youtubeId: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.iframe__16x9__wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
