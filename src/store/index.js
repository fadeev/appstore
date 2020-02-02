import Vue from 'vue'
import Vuex from 'vuex'
import stateInitial from "./stateInitial.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...stateInitial,
  },
  mutations: {
  },
  actions: {
  },
})
