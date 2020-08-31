import axios from "axios"

export default {
  state: {
    counterparties: [],
  },
  mutations: {
    setCounterparties(state, data) {
      state.counterparties = data;
    },
    addCounterparties(state, payload) {
      state.counterparties.push(payload);
    },
    deleteCounterparties(state, payload) {
      state.counterparties.filter(c => c.payload !== payload);
    },
  },
  actions: {
    async addedCounterparty({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/counterparty/", payload);
      commit("addCounterparties", payload);
      dispatch("fetchCounterparties");
    },
    async fetchCounterparties({ commit }) {
      const { data } = await axios.get("/api/counterparty/");
      commit("setCounterparties", data);
    },
    async deleteCounterparties({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/counterparty/" + payload);
      commit("deleteCounterparties", payload);
      dispatch("fetchCounterparties");
    },
  },
  getters: {
    allCounterparties(state) {
      return state.counterparties;
    },
    countCounterparties(state) {
      return state.counterparties.length;
    },
  },
};
