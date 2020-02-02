<template lang="pug">
  div
    .navbar
      .navbar__button(@click="$router.go(-1)")
        icon-chevron.navbar__button__icon
    .container
      .wrapper
        .header
          .header__icon
            img(:src="value.iconImgSrc").header__icon__img
          .header__desc
            .header__desc__wrapper
              .header__desc__h1 {{value.title}}
              .header__desc__meta
                .header__desc__meta__p
                  .header__desc__meta__p__h1 Organize your life
                  .header__desc__meta__p__h2 Cultured Code GmbH &amp; Co. KG
                .header__desc__meta__price
                  .header__desc__meta__price__item
                    .header__desc__meta__price__item__button $ 49.99
                  .header__desc__meta__price__item
                    .header__desc__meta__price__item__icon
                      icon-share
            .header__desc__indicators
              .header__desc__indicators__main
                .header__desc__indicators__main__item
                  .header__desc__indicators__main__item__stars
                    .header__desc__indicators__main__item__stars__wrapper
                      icon-discover.header__desc__indicators__main__item__stars__item
                      icon-discover.header__desc__indicators__main__item__stars__item
                      icon-discover.header__desc__indicators__main__item__stars__item
                      icon-discover.header__desc__indicators__main__item__stars__item
                      icon-discover.header__desc__indicators__main__item__stars__item
                    .header__desc__indicators__main__item__stars__desc 166 Ratings
                .header__desc__indicators__main__item
                  .header__desc__indicators__main__item__awards
                    .header__desc__indicators__main__item__awards__icon
                      .header__desc__indicators__main__item__awards__icon__icon(style="transform: scaleX(-1);")
                        icon-leaf
                      .header__desc__indicators__main__item__awards__icon__desc Editors' #[br] Choice
                      .header__desc__indicators__main__item__awards__icon__icon
                        icon-leaf
                    .header__desc__indicators__main__item__awards__desc Apps
                .header__desc__indicators__main__item
                  .header__desc__indicators__main__item__section
                    .header__desc__indicators__main__item__section__h1
                      .header__desc__indicators__main__item__section__h1__key No.
                      .header__desc__indicators__main__item__section__h1__value 12
                    .header__desc__indicators__main__item__section__h2 Productivity
              .header__desc__indicators__rest
                .header__desc__indicators__rest__age
                  .header__desc__indicators__rest__age__h1 4+
                  .header__desc__indicators__rest__age__h2 Age
</template>

<style lang="stylus" scoped>
.navbar
  display flex
  padding 7px 20px

  &__button
    background white
    min-width 20px
    display flex
    align-items center
    justify-content center
    min-height 1rem
    padding 2px 10px
    box-shadow inset 0 0 0 .5px rgba(0,0,0,.27), 0 1px 2px -1px rgba(0,0,0,.25)
    border-radius 4px

    &:active
      background rgba(255,255,255,.5)

    &__icon
      height 11px
      width 11px
      fill #333

.container
  width 100%
  max-width 1640px
  margin-left auto
  margin-right auto

.wrapper
  padding-left 30px
  padding-right 30px

.header
  display grid
  margin-top 20px
  grid-template-columns 190px calc(100% - 190px - 10px)
  gap 10px
  align-items flex-start

  &__icon
    display flex
    align-items center
    justify-content center

    &__img
      width 120px
      height 120px
      object-fit cover
      border-radius 10px

  &__desc
    padding-bottom 1rem

    &__wrapper
      padding-bottom 1rem
      margin-bottom 1rem
      box-shadow inset 0 -1px 0 0 rgba(0,0,0,.1)

    &__h1
      font-size 1.5rem
      font-weight 700
      margin-bottom .25rem
    
    &__meta
      display grid
      grid-auto-flow column

      &__p

        &__h1
          color rgba(0,0,0,.5)
          font-size .95rem
          letter-spacing .02em
          margin-bottom .2rem

        &__h2
          font-size .875rem
          color rgba(0,125,255,1)

      &__price
        display grid 
        grid-auto-flow column
        gap 1rem
        align-items center
        justify-content flex-end

        &__item

          &__button
            background rgba(0,122,255,1)
            color white
            padding .4rem 1.1rem
            font-size .85rem
            font-weight 600
            border-radius 1000px
            white-space nowrap

          &__icon
            height 1.3rem
            width 1.3rem
            stroke rgba(0,122,255,1)

    &__indicators
      display flex
      justify-content space-between

      &__main
        gap 1.3rem
        display inline-grid
        grid-auto-flow column

        &__item

          &__stars

            &__wrapper
              display inline-grid 
              grid-auto-flow column
              gap .15rem
              height 2rem
              align-items center

            &__item
              width 1.25rem
              height 1.25rem
              fill rgba(0,0,0,.65)

            &__desc
              font-size .7rem
              letter-spacing .02em
              color rgba(0,0,0,.5)

          &__awards

            &__icon
              display grid
              grid-auto-flow column
              align-items center
              gap 3px
              fill rgba(0,0,0,.65)
              font-size .65rem
              color rgba(0,0,0,.65)
              height 2rem

              &__icon
                padding-top .4rem
                width 1rem

            &__desc
              display flex
              justify-content center
              font-size .7rem
              letter-spacing .02em
              color rgba(0,0,0,.5)

          &__section
            display grid
            justify-content center

            &__h1
              display inline-grid
              grid-auto-flow column
              font-weight 600
              margin 0 auto
              height 2rem
              color rgba(0,0,0,.65)

              &__key
                font-size 1.1rem
                margin-right .25rem

              &__value
                font-size 1.35rem

            &__h2
              display flex
              justify-content center
              font-size .7rem
              letter-spacing .02em
              color rgba(0,0,0,.5)

      &__rest
        
        &__age

          &__h1
            font-size 1.4rem
            font-weight 600
            color rgba(0,0,0,.7)
            height 2rem

          &__h2
            display flex
            justify-content center
            font-size .7rem
            letter-spacing .02em
            color rgba(0,0,0,.5)
</style>

<script>
import IconChevron from "@/components/IconChevron.vue"
import IconShare from "@/components/IconShare.vue"
import IconDiscover from "@/components/IconDiscover.vue"
import IconLeaf from "@/components/IconLeaf.vue"

export default {
  props: ["value"],
  components: { IconChevron, IconShare, IconDiscover, IconLeaf },
}
</script>