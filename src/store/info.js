import firebase from 'firebase/app';

export default {
  state: {
    info: {}
  },

  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const infoFirebase = (await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .once('value')).val();
        commit('setInfo', infoFirebase);
      } catch (error) {}
    }
  },

  mutations: {
    setInfo(state, info) {
      state.info = info;
    },

    clearInfo(state) {
      state.info = {};
    }
  },

  getters: {
    info(state) {
      return state.info;
    }
  }
};
