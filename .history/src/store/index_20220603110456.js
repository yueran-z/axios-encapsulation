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
  getters: {},
  
  actions: {
    async getDate({commit}, newId){
      try {
        const item = await apiGetArticleItem()
        const search = await apiGetSearch()
        commit("GET_DATA",{item:item.data, search:search.data})
      }catch(err) {
        console.error(err)
      }
    }
  },
    mutations: {
      GET_DATA(state, payload) {
        state.item = payload.item
        state.search = payload.search
      }
    },
  modules: {
  }
})
