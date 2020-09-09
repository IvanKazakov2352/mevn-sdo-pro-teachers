import axios from "axios";

export default {
  state: {
    modules: [],
    module: {},
    category: {}
  },
  mutations: {
    setModules(state, data) {
      state.modules = data;
    },
    setModule(state, data) {
      state.module = data;
    },
    addModule(state, payload) {
      state.modules.push(payload);
    },
    deleteModule(state, payload) {
      state.modules.filter((m) => m.payload !== payload);
    },
    addCategory(state, payload) {
      state.module.categories.push(payload);
    },
    deleteCategory(state, payload) {
      state.module.categories = state.module.categories.filter(cats => cats.payload !== payload)
    },
    updateCategory(state, payload) {
      const upCats = Object.assign(payload)
      console.log(upCats)
    }
  },
  actions: {
    async fetchModules({ commit }) {
      const { data } = await axios.get("/api/course/");
      commit("setModules", data);
    },
    async fetchModule({ commit }, payload) {
      const { data } = await axios.get("/api/course/" + payload);
      commit("setModule", data);
    },
    async addedModule({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/course", payload);
      commit("addModule", payload);
      dispatch("fetchModules");
    },
    async deleteModule({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/course/" + payload);
      commit("deleteModule", payload);
      dispatch("fetchModules");
    },
    async updateProfile({ state }, payload) {
      const { data } = await axios.put("/api/course/" + payload, {
        ...state.module,
      });
    },
    addCategory({ commit, dispatch }, payload) {
      commit("addCategory", payload);
      dispatch("updateProfile", payload.routeID);
    },
    deleteCategory({ commit, dispatch }, payload) {
      commit("deleteCategory", payload.payload);
      dispatch("updateProfile", payload.routeID)
    },
    updateCategory({commit, dispatch}, payload) {
      commit("updateCategory", payload)
      dispatch("updateProfile", payload.routeID)
    }
  },
  getters: {
    allModule(state) {
      return state.modules;
    },
    profile(state) {
      return state.module;
    },
    categories(state) {
      return state.module.categories;
    },
    countModule(state) {
      return state.modules.length;
    },
  },
};
