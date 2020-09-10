import axios from "axios";

export default {
  state: {
    modules: [],
    module: {},
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
      state.modules = state.modules.filter((m) => m._id !== payload);
    },
    addCategory(state, payload) {
      state.module.categories.push(payload);
    },
    deleteCategory(state, payload) {
      state.module.categories = state.module.categories.filter(
        (cats) => cats.id !== payload
      );
    },
    updateCategory(payload) {
      Object.assign(payload);
    },
    saveSubcategoryToState(state, payload) {
      const category = state.module.categories.find(category => category.id === payload.categoryID)
      const subCategory = category.subCategories.find(subCategory => subCategory.id === payload.subcategoryID)
      Object.assign(subCategory, {modules: payload.modules})
      console.log(subCategory)
    },
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
      commit("deleteCategory", payload.id);
      dispatch("updateProfile", payload.routeID);
    },
    updateCategory({ commit, dispatch }, payload) {
      commit("updateCategory", payload);
      dispatch("updateProfile", payload.routeID);
    },
    deleteSubCategory({ dispatch }, payload) {
      dispatch("updateProfile", payload.routeID);
    },
    saveSubcategoryToState({ commit }, payload) {
      commit("saveSubcategoryToState", payload);
    },
  },
  getters: {
    allModule(state) {
      return state.modules;
    },
    countModule(state) {
      return state.modules.length;
    },
    profile(state) {
      return state.module;
    },
    categories(state) {
      return state.module.categories;
    },
    category: (state) => (categoryID) => {
      return state.module.categories.find((cats) => cats.id === categoryID);
    },
  },
};
