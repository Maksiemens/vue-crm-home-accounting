<template>
  <div class="grey darken-1 empty-layout">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
import messages from '@/utils/messages';

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },

  watch: {
    error(firebaseError) {
      this.$message(messages[firebaseError.code]);
    }
  }
};
</script>
