import axios from "axios"

export default {
  state: {
    admins: [],
  },
  mutations: {
    setAdmins(state, data) {
      state.admins = data;
    },
  },
  actions: {
    async fetchAdmins({ commit }) {
      const { data } = await axios.get("/api/getAdmin");
      commit("setAdmins", data);
    },
  },
  getters: {
    allAdmins(state) {
      return state.admins
    }
  },
};
