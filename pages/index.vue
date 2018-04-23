<template>
  <div class="container">
    <nuxt></nuxt>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  middleware: 'auth',
  components: {
    AppLogo
  }
}
</script>

<style>
</style>
