import axios from "axios";

export default {
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    deleteUser(state, payload) {
      state.users.filter((u) => u.payload !== payload);
    },
  },
  actions: {
    async fetchUsers({commit}) {
      const { data } = await axios.get("/api/listeners/");
      commit("setUsers", data);
    },
    async addedUser({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/listeners/", payload);
      commit("addUser", payload);
      dispatch("fetchUsers");
    },
    async deleteUser({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/listeners/" + payload);
      commit("deleteUser", payload);
      dispatch("fetchUsers");
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    usersCount(state) {
      return state.users.length;
    },
  },
};
