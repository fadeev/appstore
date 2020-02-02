<template lang="pug">
  div
    router-view
</template>

<style lang="stylus">
body
  margin 0
  font-family BlinkMacSystemFont, sans-serif
  --sidebar-width 221px
</style>

<script>
import GlobalLayout from "@/views/GlobalLayout";

export default {
  components: { GlobalLayout }
};
</script>