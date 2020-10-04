<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            СДО PRO
          </v-list-item-title>
          <v-list-item-subtitle>
            8(865)-465-71-81
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <template v-for="(item, i) in menu">
          <v-row v-if="item.heading" :key="`menu${i}`" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
          </v-row>
          <v-list-item v-else :key="item.text" :to="item.route" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">СДО PRO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="exit" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{ admin.fio }} - {{ admin.position }}
          </v-btn>
        </template>
        <v-list subheader>
          <v-list-item
            v-for="item in profileComponents"
            :key="item.title"
            :to="item.route"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-tooltip v-if="exit" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-if="exit" v-bind="attrs" v-on="on" @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Выйти из системы</span>
      </v-tooltip>
    </v-app-bar>
    <v-snackbar v-model="connected">
      {{ text }}
    </v-snackbar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="start" justify="center">
              <router-view></router-view>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    alerts: 6,
    messages: 4,
    dialog: false,
    drawer: null,
    text:
      "Соединение с сервером утеряно, проверьте пожалуйста свое соединение с интернетом",
    exit: document.cookie,
    user: {},
    profileComponents: [
      { title: "Уведовления", icon: "mdi-alert-rhombus", route: "/alerts" },
      { title: "Чат", icon: "mdi-chat", route: "/chat" },
      { title: "События", icon: "mdi-alpha-e-box", route: "/events" },
    ],
  }),
  methods: {
    async logout() {
      const res = await axios.get("/api/auth/logout");
      const message = res.data.message;
      this.$notify.info({
        title: "СДО PRO",
        message,
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
  },
  computed: {
    admin() {
      return this.$store.getters["adminOne"];
    },
    connected() {
      return !this.$store.getters["connected"];
    },
    menu() {
      if (!this.exit) {
        return [
          {
            icon: "mdi-account-plus",
            text: "Зарегистрироваться",
            route: "/signup",
          },
          {
            icon: "mdi-arrow-left-bold-circle",
            text: "Войти",
            route: "/signin",
          },
        ];
      } else {
        return [
          { icon: "mdi-note", text: "Задачи", route: "/tasks" },
          {
            icon: "mdi-account-key",
            text: "Контрагенты",
            route: "/counterparties",
          },
          { icon: "mdi-account-group", text: "Группы", route: "/groups" },
          {
            icon: "mdi-account",
            text: "Слушатели",
            route: "/users",
          },
          { icon: "mdi-book", text: "Профили обучения", route: "/profiles" },
          { icon: "mdi-cloud-upload", text: "Файлы", route: "/files" },
          {
            icon: "mdi-cog",
            text: "Настройка УЦ",
            route: "/settings",
          },
          {
            icon: "mdi-briefcase",
            text: "Сделки",
            route: "/deals",
          },
          {
            icon: "mdi-video",
            text: "Видеокомнаты",
            route: "/rooms",
          },
        ];
      }
    },
  },
};
</script>
