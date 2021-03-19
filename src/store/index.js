import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 修改存储的状态
    }),
  ], // 状态持久化
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {  },
  actions: {},
});

export default store;
