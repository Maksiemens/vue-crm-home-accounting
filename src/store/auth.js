import firebase from 'firebase/app';

export default {
  actions: {
    async login({ email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        throw error;
      }
    },

    async logout() {
      await firebase.auth().signOut();
    },

    async register({ dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            bill: 10000,
            name
          });
      } catch (error) {
        throw error;
      }
    },

    getUid() {
      return firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
    }
  }
};
