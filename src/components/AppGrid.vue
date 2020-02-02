<template lang="pug">
div
  .grid
    .grid__page(v-for="page in chunk(value.grid, 9)")
      router-link.grid__page__item(v-for="item in page" :to="urlCreate(item)" tag="div")
        img(:src="item.imgSrc").grid__page__item__image
        .grid__page__item__text
          .grid__page__item__text__desc
            .grid__page__item__text__desc__h1 {{item.title}}
            .grid__page__item__text__desc__h2 {{item.description}}
          .grid__page__item__text__price
            .grid__page__item__text__price__button {{+item.price === 0 ? 'Get' : `$${item.price}`}}
            .grid__page__item__text__price__h2(v-if="item.iap") In-App Purchases
</template>

<style lang="stylus" scoped>
.grid
  overflow-x scroll
  white-space nowrap
  margin-top 20px

  &__page
    width 100%
    display inline-grid
    grid-template-columns repeat(auto-fill, minmax(300px, 1fr))
    white-space normal

    &__item
      margin-bottom 10px
      display flex

      &__image
        width 50px
        flex-shrink 0
        height 50px
        border-radius 10px
        object-fit cover
      
      &__text
        flex-grow 1
        margin-left 15px
        margin-right 20px
        min-height 55px
        border-bottom 1px solid rgba(0,0,0,.1)
        display grid 
        grid-template-columns 1fr 60px

        &__desc

          &__h1
            font-size .875rem
            margin-bottom .25rem

          &__h2
            font-size .75rem
            color rgba(0,0,0,.5)

        &__price

          &__button
            margin-top 8px
            background rgba(0,0,0,.05)
            border-radius 10000px
            text-align center
            color rgba(0, 122, 255, 1)
            font-weight 600
            font-size .75rem
            text-transform uppercase
            letter-spacing .02em
            padding-top 3px
            padding-bottom 3px

          &__h2
            font-size .4rem
            margin-top 4px
            color rgba(0,0,0,.5)
            text-align center
</style>

<script>
import { chunk } from "lodash";

export default {
  props: ["sheet"],
  data: function() {
    return {
      value: {
        grid: [
          {
            title: "Things 3",
            description: "Organize your life",
            price: "20",
            imgSrc:
              "https://images.pexels.com/photos/1292998/pexels-photo-1292998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            iap: true,
            id: "33c0cd4e-c8d3-4026-9cbd-afe9a0aa40b8"
          },
          {
            title: "Pixelmator",
            description: "Pro image editing for everyone",
            price: "49.99",
            imgSrc:
              "https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            title: "Shadow of the Tomb Raider",
            description: "The end of the beginning",
            price: "50",
            imgSrc:
              "https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            title: "Drafts",
            description: "Where text starts",
            price: "2.99",
            iap: true,
            imgSrc:
              "https://images.pexels.com/photos/1579245/pexels-photo-1579245.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            title: "1Password",
            description: "Generate & keep passwords safe",
            price: "9.99",
            imgSrc:
              "https://images.pexels.com/photos/2457284/pexels-photo-2457284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            title: "Instapaper",
            description: "Save anything. Read anywhere.",
            price: "0",
            iap: true,
            imgSrc:
              "https://images.pexels.com/photos/3080654/pexels-photo-3080654.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            title: "Save to Pocket",
            description: "Capture stories for later",
            price: "0",
            iap: true,
            imgSrc:
              "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            title: "Evernote",
            description: "Save web pages & articles",
            price: "0",
            imgSrc:
              "https://images.pexels.com/photos/2876928/pexels-photo-2876928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            title: "Reeder",
            description: "News Reader",
            price: "5.99",
            imgSrc:
              "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            title: "Adobe Lightroom",
            description: "Edit, manage and share photos",
            price: "199"
          },
          {
            title: "Garage Band"
          },
          {
            title: "Microsoft Word"
          },
          {
            title: "Telegram"
          }
        ]
      }
    };
  },
  methods: {
    urlCreate(item) {
      return this.sheet
        ? `/page/${this.$route.params.id}/${item.id}`
        : `/page/${item.id}`
    },
    chunk
  }
};
</script>