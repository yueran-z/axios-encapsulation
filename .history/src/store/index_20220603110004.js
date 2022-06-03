import { createStore } from 'vuex'
import {
  apiGetArticleItem,
  apiGetSearch
} from "../api"
export default createStore({
  state() {
    return {
      item:[],
      search: {}
    }
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
