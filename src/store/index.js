import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },

    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error(state) {
      return state.error;
    }
  },
  actions: {},
  modules: {
    auth
  }
});
