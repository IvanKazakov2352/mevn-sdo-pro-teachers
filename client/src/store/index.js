import Vue from "vue";
import Vuex from "vuex";
import tasksModule from "./Modules/Tasks";
import counterpartiesModule from "./Modules/Counterparties";
import groupsModule from "./Modules/Groups";
import listenersModule from "./Modules/Listeners";
import coursesModule from "./Modules/Courses";
import dealsModule from "./Modules/Deals";
import adminsModule from "./Modules/Admins";
import enternetConnectionModule from "./Modules/EnternetConnection"
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasksModule,
    counterpartiesModule,
    groupsModule,
    listenersModule,
    coursesModule,
    dealsModule,
    adminsModule,
    enternetConnectionModule
  },
  plugins: [createPersistedState()]
});
