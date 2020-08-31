import axios from "axios";

export default {
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, data) {
      state.tasks = data;
    },
    addTasks(state, payload) {
      state.tasks.push(payload);
    },
    deleteTasks(state, payload) {
      state.tasks.filter(t => t.payload !== payload);
    },
  },
  actions: {
    async addedTasks({commit, dispatch}, payload) {
      const { data } = await axios.post("/api/tasks/", payload);
      commit("addTasks", payload);
      dispatch("fetchTasks")
    },
    async fetchTasks({commit}) {
      const { data } = await axios.get("/api/tasks/");
      commit("setTasks", data);
    },
    async deleteTasks({commit, dispatch}, payload) {
      const { data } = await axios.delete("/api/tasks/" + payload);
      commit("deleteTasks", payload);
      dispatch("fetchTasks")
    },
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    countTasks(state) {
      return state.tasks.length;
    },
  },
};
