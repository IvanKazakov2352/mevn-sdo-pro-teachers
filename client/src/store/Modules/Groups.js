import axios from "axios";

export default {
  state: {
    groups: [],
    archives: [],
    group: {},
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    },
    setArchive(state, data) {
      state.archives = data;
    },
    addGroup(state, payload) {
      state.groups.push(payload);
    },
    deleteGroup(state, payload) {
      state.groups.filter((g) => g.payload !== payload);
    },
    deleteGroupToArchive(state, payload) {
      state.group !== payload
    },
    findGroupToArchive(state, payload) {
      state.groups.find((g) => g.payload === payload);
      state.group = payload;
    },
  },
  actions: {
    async addedGroup({ commit, dispatch }, payload) {
      const { data } = await axios.post("/api/groups/", payload);
      commit("addGroup", payload);
      dispatch("fetchGroups");
    },
    async fetchGroups({ commit }) {
      const { data } = await axios.get("/api/groups/");
      commit("setGroups", data);
    },
    async deleteGroups({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/groups/" + payload);
      commit("deleteGroup", payload);
      dispatch("fetchGroups");
    },
    async addGroupsToArchive({ commit, dispatch, state }, payload) {
      commit("findGroupToArchive", payload);
      await axios.post("/api/archive/", { group: state.group });
      dispatch("deleteGroups", state.group._id);
      dispatch("fetchGroups");
    },
    async fetchArchive({ commit }) {
      const { data } = await axios.get("/api/archive/");
      commit("setArchive", data);
    },
    async deleteGroupsToArchive({ commit, dispatch }, payload) {
      const { data } = await axios.delete("/api/archive/" + payload);
      commit("deleteGroupToArchive", payload);
      dispatch("fetchArchive");
    },
  },
  getters: {
    allGroups(state) {
      return state.groups;
    },
    allArchives(state) {
      return state.archives;
    },
    groupsCount(state) {
      return state.groups.length;
    },
    archivesCount(state) {
      return state.archives.length;
    },
  },
};
