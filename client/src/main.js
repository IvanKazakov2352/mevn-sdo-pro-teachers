import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
import VueHtmlToPaper from "vue-html-to-paper";
import UUID from "vue-uuid";
import VueMeta from "vue-meta";

Vue.use(VueMask);
Vue.use(VueHtmlToPaper, options);
Vue.use(UUID);
Vue.use(VueHtmlToPaper);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
};

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    window.addEventListener("offline", () => {
      store.dispatch("setConnected", false);
    });
    window.addEventListener("online", () => {
      store.dispatch("setConnected", true);
    });
  },
}).$mount("#app");
