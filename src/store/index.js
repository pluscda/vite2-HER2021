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
  actions: {
   async increment (context,payload) {
      context.commit('increment')
    }
  },
  mutations: {
    increment(state,payload) {
      state.count++;
    },
  },
 
});

export default store;
