import { createStore } from 'vuex'
import {
  apiGetArticleItem,
  apiGetSearch
} from "../api"
export default createStore({
  state: {
    count: 0,
  },
  getters: {
  },
  mutations: {
    increment(state,payload) {
      state.count += payload.amount;
    }
  },
  actions: {
  },
  modules: {
  }
})
