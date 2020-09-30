import axios from "axios";

export default {
  state: {
    tasks: [],
    task: {},
    loading: true
  },
  mutations: {
    setTasks(state, data) {
      state.tasks = data;
    },
    setTask(state, data) {
      state.task = data;
    },
    addTasks(state, payload) {
      state.tasks.push(payload);
    },
    deleteTasks(state, payload) {
      state.tasks.filter((t) => t.payload !== payload);
    },
  },
  actions: {
    async addedTasks({ commit, dispatch }, payload) {
      await axios.post("/api/tasks/", payload);
      commit("addTasks", payload);
      dispatch("fetchTasks");
    },
    async fetchTasks({ commit }) {
      const { data } = await axios.get("/api/tasks/");
      commit("setTasks", data)
    },
    async fetchTask({ commit }, payload) {
      const { data } = await axios.get("/api/tasks/" + payload);
      commit("setTask", data);
    },
    async deleteTasks({ commit, dispatch }, payload) {
      await axios.delete("/api/tasks/" + payload);
      commit("deleteTasks", payload);
      dispatch("fetchTasks");
    },
    async updateTask({ state, dispatch }, payload) {
      await axios.put("/api/tasks/" + payload, {
        ...state.task,
      });
      dispatch("fetchTask", payload);
    },
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    countTasks(state) {
      return state.tasks.length;
    },
    task(state) {
      return state.task;
    },
    loading(state) {
      return state.loading
    }
  },
};
