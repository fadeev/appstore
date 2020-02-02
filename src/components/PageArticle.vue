<template lang="pug">
  div
    .navbar
      .navbar__buttons
        .navbar__buttons__item
          icon-upload.navbar__buttons__item__icon
        .navbar__buttons__item(@click="$router.push(url)") Done
    .container
      .content
        .content__image
          .content__image__text
            .content__image__text__subtitle {{value.subtitle}}
            .content__image__text__title {{value.title}}
          .content__image__box
            img(:src="value.coverImgSrc").content__image__box__img
        .content__main
          .content__main__desc(v-html="md(value.text)")
          .content__main__grid
            app-grid(:sheet="true")
</template>

<style lang="stylus" scoped>
/deep/
  strong 
    color black
    font-weight 600

.container
  overflow-y hidden
  max-width 1580px
  width 100%
  margin-left auto
  margin-right auto
  padding 0 40px
  box-sizing border-box

.navbar
  position sticky
  top 0
  height 40px
  display flex
  justify-content flex-end
  align-items center
  padding-right 20px
  padding-left 20px
  -webkit-app-region drag
  transition all .25s

  &:hover
    background rgba(220,220,220,.98)
    box-shadow inset 0 -1px 0 0 rgba(0,0,0,.1)

  &__buttons
    display grid 
    grid-auto-flow column
    gap 10px

    &__item
      background white
      font-size .83rem
      padding 2px 10px
      letter-spacing .02em
      border-radius 4px
      color rgba(0,0,0,.8)
      box-shadow inset 0 0 0 .5px rgba(0,0,0,.27), 0 1px 2px -1px rgba(0,0,0,.25)
      user-select none

      &:active
        background rgba(255,255,255,.5)

      &__icon
        width 14px
        height 14px

.content
  display grid 
  grid-template-columns 660px calc(100% - 660px)
  height calc(100vh - 40px)
  gap 40px

  &__main
    overflow-y scroll
    padding-right 40px

    &__desc
      font-size 1.248rem
      color rgba(0,0,0,.5)
      line-height 1.4

    &__grid
      margin-top 3rem

  &__image
    padding-left 10px
    padding-right 10px
    padding-top 10px
    padding-bottom 60px

    &__text
      position absolute
      margin 3rem 2.5rem
      color white

      &__subtitle
        text-transform uppercase
        font-size .85rem
        letter-spacing .04em
        font-weight 600
        opacity .65

      &__title
        font-size 2.06rem

    &__box

      &__img
        height calc(100vh - 100px)
        width 100%
        display block
        border-radius 4px
        object-fit cover
</style>

<script>
import IconUpload from "@/components/IconUpload.vue";
import MarkdownIt from "markdown-it";
import AppGrid from "@/components/AppGrid.vue";

export default {
  props: ["value"],
  components: { IconUpload, AppGrid },
  computed: {
    url() {
      return this.$route.path
        .split("/")
        .slice(0, -1)
        .join("/");
    }
  },
  methods: {
    md(string) {
      const md = new MarkdownIt();
      return md.render(string);
    }
  }
};
</script>