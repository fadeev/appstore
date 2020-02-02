<template lang="pug">
  div
    div Arcade
    //- router-link(:to="`/page/${link}`" tag="div" v-for="link in value.links") {{link}}
</template>

<script>
export default {
  props: ["value"],
}
</script>