<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min';
@import 'assets/styles/index';
</style>

<script>
import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
};
</script>
