import axios from "axios"

export default {
  state: {
    settings: {},
  },
  mutations: {
    setSettings(state, data) {
      state.settings = data;
    },
  },
  actions: {
    async getSettings({ commit }) {
      const { data } = await axios.get("/api/settings/5f197e301c700b2760043a50");
      commit("setSettings", data);
    },
    async saveSettings({state, dispatch}) {
      await axios.put("/api/settings/5f197e301c700b2760043a50", {...state.settings});
      dispatch("getSettings")
    },
  },
  getters: {
    settings(state) {
      return state.settings
    }
  },
};
