import Vue from 'vue'
import VueRouter from 'vue-router'
import { find } from "lodash"
import store from "@/store/index.js"
import Page from "@/components/Page.vue"
import GlobalLayout from "@/views/GlobalLayout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page/discover'
  },
  {
    path: '/page/:id',
    component: GlobalLayout
  },
  {
    path: '/page/:id/:id2',
    component: GlobalLayout
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
