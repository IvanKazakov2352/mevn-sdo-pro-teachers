import axios from "axios";

export default {
  state: {
    counterparties: [],
    counterparty: {}
  },
  mutations: {
    setCounterparties(state, data) {
      state.counterparties = data;
    },
    setCounterparty(state, data) {
      state.counterparty = data
    },
    addCounterparties(state, payload) {
      state.counterparties.push(payload);
    },
    deleteCounterparties(state, payload) {
      state.counterparties.filter((c) => c.payload !== payload);
    },
  },
  actions: {
    async addedCounterparty({ commit, dispatch }, payload) {
      await axios.post("/api/counterparty/", payload);
      commit("addCounterparties", payload);
      dispatch("fetchCounterparties");
    },
    async fetchCounterparties({ commit }) {
      const { data } = await axios.get("/api/counterparty/");
      commit("setCounterparties", data);
    },
    async fetchCounterparty({ commit }, payload) {
      const { data } = await axios.get("/api/counterparty/" + payload);
      commit("setCounterparty", data);
    },
    async updateCounterparty({dispatch, state}, payload) {
      await axios.put("/api/counterparty/" + payload, {...state.counterparty})
      dispatch("fetchCounterparty", payload);
    },
    async deleteCounterparties({ commit, dispatch }, payload) {
      await axios.delete("/api/counterparty/" + payload);
      commit("deleteCounterparties", payload);
      dispatch("fetchCounterparties");
    },
  },
  getters: {
    allCounterparties(state) {
      return state.counterparties;
    },
    counterparty(state) {
      return state.counterparty
    },
    countCounterparties(state) {
      return state.counterparties.length;
    },
  },
};
