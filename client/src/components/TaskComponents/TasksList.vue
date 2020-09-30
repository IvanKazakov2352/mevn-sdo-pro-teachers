<template>
  <v-container fluid>
    <v-data-iterator :items="allTasks" :items-per-page.sync="itemsPerPage">
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>Задачи ({{ countTasks }})</v-toolbar-title>
        </v-toolbar>
      </template>
      <template>
        <v-row>
          <v-col
            v-for="task in allTasks"
            :key="task._id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{
                task.name
              }}</v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Постановщик:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    task.postan
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Описание:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    task.description
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Ответственный:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    task.otvets
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Статус задачи:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    task.status
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Дата начала задачи:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    new Date(task.start).toISOString().substr(0, 10)
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content
                    >Дата окончания задачи:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    new Date(task.end).toISOString().substr(0, 10)
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content
                    >Время начала задачи:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    task.timestart
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content
                    >Время окончания задачи:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    task.timeend
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-btn color="red" text @click="deleteTask(task._id)"
                    >Удалить</v-btn
                  >
                </v-list-item>

                <v-list-item>
                  <router-link
                    tag="button"
                    :to="{ name: 'task', params: { id: task._id } }"
                  >
                    <v-btn color="green" text>Редактировать</v-btn>
                  </router-link>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-slot:no-data>
        <v-alert type="info">
          Задач пока нет
        </v-alert>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
const Loader = () => import("../SettingsComponents/Loader");
export default {
  data: () => ({
    itemsPerPage: 4,
  }),
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTasks", id);
    },
  },
  computed: mapGetters(["allTasks", "countTasks", "loading"]),
  mounted() {
    this.$store.dispatch("fetchTasks");
  },
  components: {
    Loader,
  },
};
</script>
