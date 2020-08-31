import axios from "axios"

export default {
  state: {
    deals: [],
  },
  mutations: {
    setDeals(state, data) {
      state.deals = data;
    },
    addDeal(state, payload) {
      state.deals.push(payload);
    },
    deleteDeal(state, payload) {
      state.deals.filter((u) => u.payload !== payload);
    },
  },
  actions: {
    async fetchDeals({ commit }) {
      const { data } = await axios.get("/api/deals/");
      commit("setDeals", data);
    },
    async addedDeals({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/deals/", payload);
      commit("addDeal", payload);
      dispatch("fetchDeals");
    },
    async deleteDeal({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/deals/" + payload);
      commit("deleteUser", payload);
      dispatch("fetchDeals");
    },
  },
  getters: {
    allDeals(state) {
      return state.deals;
    },
    dealsCount(state) {
      return state.deals.length;
    },
  },
};
