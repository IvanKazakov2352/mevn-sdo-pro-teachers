import axios from "axios";

export default {
  state: {
    groups: [],
    archives: [],
    group: {},
    groupByID: {},
    groupDocuments: {},
    archive: {},
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    },
    setGroup(state, data) {
      state.groupByID = data;
    },
    setArchives(state, data) {
      state.archives = data;
    },
    setArchive(state, data) {
      state.archive = data
    },
    addGroup(state, payload) {
      state.groups.push(payload);
    },
    deleteGroup(state, payload) {
      state.groups.filter((g) => g.payload !== payload);
    },
    deleteGroupToArchive(state, payload) {
      state.group !== payload;
    },
    findGroupToArchive(state, payload) {
      state.groups.find((g) => g.payload === payload);
      state.group = payload;
    },
    groupDocuments(state, data) {
      state.groupDocuments = data;
    },
  },
  actions: {
    async addedGroup({ commit, dispatch }, payload) {
      await axios.post("/api/groups/", payload);
      commit("addGroup", payload);
      dispatch("fetchGroups");
    },
    async fetchGroup({ commit }, payload) {
      const { data } = await axios.get("/api/groups/" + payload);
      commit("setGroup", data);
    },
    async fetchGroups({ commit }) {
      const { data } = await axios.get("/api/groups/");
      commit("setGroups", data);
    },
    async deleteGroups({ commit, dispatch }, payload) {
      await axios.delete("/api/groups/" + payload);
      commit("deleteGroup", payload);
      dispatch("fetchGroups");
    },
    async updateGroup({ state, dispatch }, payload) {
      await axios.put("/api/groups/" + payload, {
        ...state.groupByID,
      });
      dispatch("fetchGroups");
    },
    async addGroupsToArchive({ commit, dispatch, state }, payload) {
      commit("findGroupToArchive", payload);
      await axios.post("/api/archive/", { group: state.group });
      dispatch("deleteGroups", state.group._id);
      dispatch("fetchGroups");
    },
    async fetchArchives({ commit }) {
      const { data } = await axios.get("/api/archive/");
      commit("setArchives", data);
    },
    async fetchArchive({ commit }, payload) {
      const { data } = await axios.get("/api/archive/" + payload);
      commit("setArchive", data);
    },
    async deleteGroupsToArchive({ commit, dispatch }, payload) {
      await axios.delete("/api/archive/" + payload);
      commit("deleteGroupToArchive", payload);
      dispatch("fetchArchive");
    },
    async groupDocuments({ commit }, payload) {
      const { data } = await axios.get("/api/groups/" + payload);
      commit("groupDocuments", data);
    },
  },
  getters: {
    allGroups(state) {
      return state.groups;
    },
    allArchives(state) {
      return state.archives;
    },
    group(state) {
      return state.groupByID;
    },
    groupsCount(state) {
      return state.groups.length;
    },
    archivesCount(state) {
      return state.archives.length;
    },
    documents(state) {
      return state.groupDocuments;
    },
    archive(state) {
      return state.archive
    }
  },
};
