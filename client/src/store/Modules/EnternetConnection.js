export default {
  state: {
    connected: navigator.onLine,
  },
  mutations: {
    SET_CONNECTED(state, payload) {
      state.connected = payload;
    },
  },
  actions: {
    setConnected({ commit }, payload) {
      commit("SET_CONNECTED", payload);
    },
  },
  getters: {
    connected: (state) => state.connected,
  },
};
