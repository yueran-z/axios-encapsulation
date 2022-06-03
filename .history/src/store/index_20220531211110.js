import { createStore } from 'vuex'

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
