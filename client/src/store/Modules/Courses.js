import axios from "axios";

export default {
  state: {
    modules: [],
    module: {},
    tests: []
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
      await axios.post("/api/course", payload);
      commit("addModule", payload);
      dispatch("fetchModules");
    },
    async deleteModule({ commit, dispatch }, payload) {
      await axios.delete("/api/course/" + payload);
      commit("deleteModule", payload);
      dispatch("fetchModules");
    },
    async updateProfile({ state, dispatch }, payload) {
      await axios.put("/api/course/" + payload, {
        ...state.module,
      });
      dispatch("fetchModule", payload);
    },
    addCategory({ commit, dispatch }, payload) {
      commit("addCategory", payload);
      dispatch("updateProfile", payload.routeID);
    },
    deleteCategory({ commit }, payload) {
      commit("deleteCategory", payload.id);
    },
    updateCategory({ commit, dispatch }, payload) {
      commit("updateCategory", payload);
      dispatch("updateProfile", payload.routeID);
    },
    deleteSubCategory({ dispatch }, payload) {
      dispatch("updateProfile", payload.routeID);
    },
    deleteSubModule({ dispatch }, payload) {
      dispatch("updateProfile", payload._id);
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
    examen: (state) => (examenID) => {
      return state.module.examens.find((examen) => examen.id === examenID)
    },
    category: (state) => (categoryID) => {
      return state.module.categories.find((cats) => cats.id === categoryID);
    },
    subCategory: (state) => (categoryID, subcategoryID) => {
      const category = state.module.categories.find((cats) => cats.id === categoryID);
      return category.subCategories.find(subcats => subcats.id === subcategoryID)
    },
    subModule: (state) => (categoryID, subcategoryID, moduleID) => {
      const category = state.module.categories.find((cats) => cats.id === categoryID);
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      return subCategory.modules.find(modul => modul.id === moduleID)
    },
    lection: (state) => (categoryID, subcategoryID, moduleID, lectionID) => {
      const category = state.module.categories.find((cats) => cats.id === categoryID);
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      const module = subCategory.modules.find(modul => modul.id === moduleID)
      return module.lections.find(lect => lect.id === lectionID)
    },
    test: (state) => (categoryID, subcategoryID, moduleID, lectionID, testID) => {
      const category = state.module.categories.find((cats) => cats.id === categoryID);
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      const module = subCategory.modules.find(modul => modul.id === moduleID)
      const lection = module.lections.find(lect => lect.id === lectionID)
      return lection.tests.find(test => test.id === testID)
    },
  },
};
