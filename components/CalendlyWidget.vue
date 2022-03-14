<template>
  <iframe
    class="iframe-calendly rounded"
    src="https://calendly.com/0x4447/podcast?hide_event_type_details=1&hide_gdpr_banner=1&text_color=27303b&primary_color=007bff"
    width="100%"
    height="480"
  />
</template>

<script>
export default {
  name: 'CalendlyWidget'
}
</script>

<style scoped>
iframe.iframe-calendly {
  height: 480px;
  overflow: hidden;
  border: 0;
}
</style>
