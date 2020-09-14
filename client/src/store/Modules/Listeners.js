import axios from "axios";

export default {
  state: {
    users: [],
    user: {},
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setUser(state, data) {
      state.user = data;
    },
    addUser(state, payload) {
      state.users.push(payload);
    },
    deleteUser(state, payload) {
      state.users.filter((u) => u.payload !== payload);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const { data } = await axios.get("/api/listeners/");
      commit("setUsers", data);
    },
    async fetchUser({ commit }, payload) {
      const { data } = await axios.get("/api/listeners/" + payload);
      commit("setUser", data);
    },
    async addedUser({ commit, dispatch }, payload) {
      await axios.post("/api/listeners/", payload);
      commit("addUser", payload);
      dispatch("fetchUsers");
    },
    async deleteUser({ commit, dispatch }, payload) {
      await axios.delete("/api/listeners/" + payload);
      commit("deleteUser", payload);
      dispatch("fetchUsers");
    },
    async updateUser({ state, dispatch }, payload) {
      await axios.put("/api/listeners/" + payload, {
        ...state.user,
      });
      dispatch("fetchUser", payload);
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    usersCount(state) {
      return state.users.length;
    },
  },
};
