<template>
  <div class="rounded overflow-hidden calendly-wrapper">
    <vue-calendly
      url="https://calendly.com/0x4447/podcast?hide_event_type_details=1&hide_gdpr_banner=1&text_color=27303b&primary_color=007bff"
      :height="480"
    />
  </div>
</template>

<script>
export default {
  name: 'CalendlyWidget'
}
</script>

<style lang="scss" scoped>
.calendly-wrapper {
  height: 480px;
  background-color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff url("~/assets/images/loading.svg") center no-repeat;
  }
}
</style>
