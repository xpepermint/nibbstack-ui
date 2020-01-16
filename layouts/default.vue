<template>
  <div class="layout app_rpr">
    <navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/layout';
</style>
