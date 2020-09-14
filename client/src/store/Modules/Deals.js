import axios from "axios";

export default {
  state: {
    deals: [],
    deal: {},
  },
  mutations: {
    setDeals(state, data) {
      state.deals = data;
    },
    setDeal(state, data) {
      state.deal = data;
    },
    addDeal(state, payload) {
      state.deals.push(payload);
    },
    deleteDeal(state, payload) {
      state.deals = state.deals.filter((u) => u.payload !== payload);
    },
  },
  actions: {
    async fetchDeals({ commit }) {
      const { data } = await axios.get("/api/deals/");
      commit("setDeals", data);
    },
    async fetchDeal({ commit }, payload) {
      const { data } = await axios.get("/api/deals/" + payload);
      commit("setDeal", data);
    },
    async updateDeal({ state, dispatch }, payload) {
      await axios.put("/api/deals/" + payload, {
        ...state.deal,
      });
      dispatch("fetchDeal", payload);
      dispatch("fetchDeals");
    },
    async addedDeals({ commit, dispatch }, payload) {
      await axios.post("/api/deals/", payload);
      commit("addDeal", payload);
      dispatch("fetchDeals");
    },
    async deleteDeal({ commit, dispatch }, payload) {
      await axios.delete("/api/deals/" + payload);
      commit("deleteDeal", payload);
      dispatch("fetchDeals");
    },
  },
  getters: {
    allDeals(state) {
      return state.deals;
    },
    deal(state) {
      return state.deal
    },
    dealsCount(state) {
      return state.deals.length;
    },
  },
};
