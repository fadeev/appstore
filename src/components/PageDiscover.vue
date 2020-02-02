<template lang="pug">
  div
    .wrapper
      .container
        .hero
          .hero__banner
            img(src="https://images.pexels.com/photos/1416367/pexels-photo-1416367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260").hero__banner__image
            .hero__banner__text
              .hero__banner__text__h2 Our favourites
              .hero__banner__text__h1 Getting started with your new Mac?
              .hero__banner__text__h3 Say hi to these key apps and games first
          img(src="https://images.pexels.com/photos/1416367/pexels-photo-1416367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260").hero__image
        .featured
          .featured__item
            .featured__item__text
              .featured__item__text__h2 Arcade
              .featured__item__text__h1 Welcome to Apple Arcade on Mac!
              .featured__item__text__h3 It's here – and it's only the beginning.
            img(src="https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260").featured__item__image
          router-link(:to="`/page/${this.$route.params.id}/a7ec382b-5764-4e7d-bfef-0e4f518948f3`" tag="div").featured__item
            .featured__item__text
              .featured__item__text__h2.featured__item__text__h2__alt Great on Catalina
              .featured__item__text__h1 Mac and iPad: even better together
              .featured__item__text__h3 Sidecar brings out the best in both.
            img(src="https://images.pexels.com/photos/1912832/pexels-photo-1912832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260").featured__item__image
        .h2 Apps and Games We Love Right Now
        app-grid
</template>

<style lang="stylus" scoped>
.wrapper
  margin-left 40px
  margin-right 40px
  margin-bottom 40px

.container
  width 100%
  max-width 1640px
  margin-left auto
  margin-right auto

.hero
  width 100%
  height 25vw
  min-height 340px
  max-height 480px
  overflow hidden
  display grid
  grid-auto-flow column
  grid-template-columns 25% 75%
  border-bottom-left-radius 8px
  border-bottom-right-radius 8px

  &__banner
    position relative
    overflow hidden

    &__image
      position absolute
      object-fit cover
      width 100%
      height 100%
      transform scale(2)
      filter blur(10px) brightness(.5)

    &__text
      position absolute 
      top 0
      left 0
      width 100%
      height 100%
      padding 40px 30px 20px 27px
      color rgba(255,255,255,.9)
      box-sizing border-box
      display flex
      flex-direction column

      &__h2
        text-transform uppercase
        font-size .65rem
        font-weight 600
        letter-spacing .05em
        margin-bottom 1.25rem

      &__h1
        font-size 1.4rem
        letter-spacing .03em
        flex-grow 1

      &__h3
        font-size .87rem
        line-height 1.5

  &__image
    width 100%
    height 100%
    object-fit cover

.featured
  display grid
  gap 20px
  grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
  margin-top 20px
  
  &__item
    background #f7f7f8
    border-radius 8px
    padding-left 27px
    padding-top 20px
    padding-bottom 20px
    padding-right 20px
    display grid
    grid-auto-flow column
    grid-template-columns 1fr 170px
    gap 20px
    overflow-x hidden

    &__text

      &__h2
        font-size .87rem
        font-weight 500
        color rgba(0,0,0,.5)
        margin-bottom .15rem

        &__alt
          text-transform uppercase
          font-size .7rem
          letter-spacing .02em

      &__h1
        font-size 1.46rem
        margin-bottom 1rem

      &__h3
        font-size .87rem
        color rgba(0,0,0,.5)
        line-height 1.35

    &__image
      width 170px
      height 170px
      border-radius 100%
      object-fit cover

.h2
  font-size 1.248rem
  margin-top 30px
  border-top 1px solid rgba(0,0,0,.1)
  padding-top .6em
  font-weight 500
</style>

<script>
import AppGrid from "@/components/AppGrid.vue";

export default {
  components: { AppGrid }
};
</script>