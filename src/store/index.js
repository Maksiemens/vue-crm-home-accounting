import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    currency: null
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
    },

    getCurrency(state) {
      return state.currency;
    }
  },

  actions: {
    async fetchCurrency() {
      const apiKeyFixer = process.env.VUE_APP_FIXER;
      const response = await fetch(
        `http://data.fixer.io/api/latest?access_key=${apiKeyFixer}&symbols=USD,EUR,RUB,UAH`
      );
      return await response.json();
    }
  },

  modules: {
    auth,
    info
  }
});
