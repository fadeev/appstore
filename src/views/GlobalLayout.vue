<template lang="pug">
  div
    .layout
      .sidebar
        sidebar
      .content
        transition(name="hslide")
          page(:value="pageById($route.params.id)" :key="$route.params.id").content__page
    transition(name="vslide")
      .sheet(v-if="$route.params.id2")
        transition(name="hslide")
          page(:value="pageById($route.params.id2)" :sheet="true" :key="$route.params.id2")
</template>

<style lang="stylus" scoped>
.sheet
  position fixed
  width 100vw
  height 100vh
  bottom 0
  left 0
  z-index 20000
  overflow-y scroll
  background white

.layout
  overflow-x hidden
  position relative

.sidebar
  width var(--sidebar-width)
  box-shadow inset -1px 0 0 0 rgba(0,0,0,.1)
  height 100vh
  overflow-y scroll
  z-index 5000
  position relative
  -webkit-app-region drag

.content
  position absolute
  overflow-x hidden
  top 0
  left var(--sidebar-width)
  width calc(100vw - var(--sidebar-width))
  height 100vh
  background white

.hslide-enter-active
  transition all .5s

.hslide-enter
  transform translateX(100%)

.hslide-enter-to
  transform translateX(0)

.hslide-leave-active
  transition all .5s

.hslide-leave
  transform translateX(0)
  filter brightness(100%)

.hslide-leave-to
  transform translateX(-25%)
  filter brightness(75%)

.vslide-enter-active
  transition all .25s linear

.vslide-enter
  transform translateY(100%)

.vslide-enter-to
  transform translateY(0)

.vslide-leave-active
  transition all .5s

.vslide-leave
  transform translateY(0)

.vslide-leave-to
  transform translateY(100%)
</style>

<script>
import { find } from "lodash";
import Page from "@/components/Page";
import Sidebar from "@/components/Sidebar";

export default {
  components: { Page, Sidebar },
  props: ["page"],
  methods: {
    pageById(pageId) {
      return find(this.$store.state.entityList, ["id", pageId]);
    }
  }
};
</script>