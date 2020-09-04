import axios from "axios";

export default {
  state: {
    modules: [],
  },
  mutations: {
    setModules(state, data) {
      state.modules = data;
    },
    addModule(state, payload) {
      state.modules.push(payload);
    },
    deleteModule(state, payload) {
      state.modules.filter((m) => m.payload !== payload);
    },
  },
  actions: {
    async fetchModule({ commit }) {
      const { data } = await axios.get("/api/course/");
      commit("setModules", data);
    },
    async addedModule({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/course", payload);
      commit("addModule", payload);
      dispatch("fetchModule");
    },
    async deleteModule({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/course/" + payload);
      commit("deleteModule", payload);
      dispatch("fetchModule");
    },
  },
  getters: {
    allModule(state) {
      return state.modules;
    },
    countModule(state) {
      return state.modules.length;
    },
    allCategories(state) {
      return state.categories;
    },
  },
};
