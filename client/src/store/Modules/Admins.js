import axios from "axios"

export default {
  state: {
    admins: [],
    admin: {}
  },
  mutations: {
    setAdmins(state, data) {
      state.admins = data;
    },
    setAdmin(state, payload) {
      state.admin = payload
    }
  },
  actions: {
    async fetchAdmins({ commit }) {
      const { data } = await axios.get("/api/admins");
      commit("setAdmins", data);
    },
    async updateAdmin({commit}, payload) {
      await axios.put("/api/admins/update", payload)
      commit("setAdmin", payload)
    }
  },
  getters: {
    allAdmins(state) {
      return state.admins
    },
    adminOne(state) {
      return state.admin
    }
  },
};
