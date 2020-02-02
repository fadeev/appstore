<template lang="pug">
  div
    .page
      component(:is="routePage()" :value="value")
       div {{value}}
</template>

<style lang="stylus" scoped>
.close
  position absolute
  top 0
  right 0

.page
  height 100vh
  position absolute
  z-index 10000
  width 100%
  top 0
  background white

  &__wide

    &__true
      left 0
      position fixed
      width 100vw
</style>

<script>
import { find } from "lodash";
import PageDiscover from "@/components/PageDiscover.vue";
import PageArcade from "@/components/PageArcade.vue";
import PageArticle from "@/components/PageArticle.vue";
import PageApp from "@/components/PageApp.vue";

export default {
  props: ["value", "sheet"],
  components: { PageDiscover, PageArticle, PageArcade, PageApp },
  methods: {
    routePage() {
      const cap = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
      return (
        this.$options.components[`Page${this.value.title}`] ||
        this.$options.components[`Page${cap(this.value.type)}`] ||
        "div"
      );
    },
    createLink(id) {
      const entity = find(this.$store.state.entityList, ["id", id]);
      if (entity && entity.type === "app" && this.sheet !== true)
        return `/page/${id}`;
      if (entity && entity.type === "app" && this.sheet === true)
        return `/page/${this.$route.params.id}/${id}`;
      if (entity && entity.type === "article")
        return `/page/${this.$route.params.id}/${id}`;
    }
  }
};
</script>