import Vue from 'vue'
import Vuex from "vuex"
import mutations from './mutations'
import action from './action'
import getter from './getter'

Vue.use(Vuex)

const state = {
  listDatas:[]
}

export default new Vuex.Store({
  state,
  action,
  mutations,
  getter
})
