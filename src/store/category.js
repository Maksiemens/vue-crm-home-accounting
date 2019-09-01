import firebase from 'firebase/app';

export default {
  actions: {
    async createCategory({ dispatch, commit }, { title, limit }) {
      try {
        const uid = await dispatch('getUid');
        const categoryFirebase = await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .push({ title, limit });
        return { title, limit, id: categoryFirebase.key };
      } catch (error) {
        commit('setError', error);
        throw error;
      }
    }
  }
};
