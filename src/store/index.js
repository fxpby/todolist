//Vuex核心管理模块-store对象

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import mutationsType from './mutations-type'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Vuex,VueAwesomeSwiper)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  mutationsType
});