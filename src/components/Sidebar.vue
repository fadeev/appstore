<template lang="pug">
  div(style="height: 100%")
    .container
      .search
        icon-search.search__icon
        .search__text Search
      .menu
        router-link(v-for="category in categoryList" :to="`/page/${category.id}`" tag="div" :key="category.key").menu__item
          component(:is="`icon-${category.title}`").menu__item__icon
          div {{category.title}}
      .footer
        .footer__icon JA
        .footer__text John Appleseed
</template>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  height 100%

.search
  margin 50px 20px 20px
  background rgba(0,0,0,.1)
  border-radius 4px
  box-shadow inset 0 0 0 1px rgba(0,0,0,.2)
  padding 6px
  display flex
  justify-content center
  align-items center

  &__icon
    width 14px
    height 14px
    fill rgba(0,0,0,.6)
    margin-right 5px

  &__text
    font-size .75rem
    color rgba(0,0,0,.35)
    font-weight 500

.menu
  flex-grow 1

  &__item
    padding 7px 20px
    color rgba(0,0,0,.65)
    font-size 1.11rem
    letter-spacing .03em
    display flex
    align-items center

    &.router-link-exact-active
      background rgba(0,0,0,.25)

    &__icon
      width 26px
      height 26px
      margin-right 12px
      fill rgba(0,0,0,.6)

.footer
  padding 20px
  display flex
  align-items center

  &__icon
    border-radius 100%
    display flex
    height 40px
    align-items center
    justify-content center
    text-align center
    color rgba(255,255,255,.7)
    width 40px
    background rgba(0,0,0,.5)
    margin-right 10px

  &__text
    flex-grow 1
    font-size .8rem
    font-weight 600
    letter-spacing .02em
    display flex
    align-self stretch
    align-items center
</style>

<script>
import IconDiscover from "@/components/IconDiscover";
import IconArcade from "@/components/IconArcade";
import IconCreate from "@/components/IconCreate";
import IconWork from "@/components/IconWork";
import IconPlay from "@/components/IconPlay";
import IconDevelop from "@/components/IconDevelop";
import IconCategories from "@/components/IconCategories";
import IconUpdates from "@/components/IconUpdates";
import IconSearch from "@/components/IconSearch";

export default {
  components: {
    IconDiscover,
    IconArcade,
    IconCreate,
    IconWork,
    IconPlay,
    IconDevelop,
    IconCategories,
    IconUpdates,
    IconSearch
  },
  computed: {
    categoryList() {
      return this.$store.state.entityList.filter(
        item => item.type === "category"
      );
    }
  }
};
</script>