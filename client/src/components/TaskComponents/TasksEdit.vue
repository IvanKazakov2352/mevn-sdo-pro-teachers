<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>Редактирование задачи: {{ task.name }}</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-row justify="center" class="mr-2 ml-2">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-select
                v-model="task.postan"
                item-text="fio"
                :items="allAdmins"
                label="Постановщик задачи"
              >
              </v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="task.name"
                label="Название задачи"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="task.description"
                outlined
                name="input-7-4"
                label="Описание задачи"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="task.otvets"
                :items="allAdmins"
                item-text="fio"
                label="Ответственные для данной задачи"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="task.status"
                :items="states"
                label="Статус задачи"
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col cols="12" sm="3">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="task.start"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="task.start"
                    label="Дата начала задачи"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="task.start" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(task.start)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="3">
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="task.end"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="task.end"
                    label="Дата окончания задачи"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="task.end" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu2 = false"
                    >Cancel</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu2.save(task.end)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="3">
              <v-menu
                ref="timemenu"
                v-model="timemenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="task.timestart"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="task.timestart"
                    label="Время начала задачи"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timemenu"
                  v-model="task.timestart"
                  full-width
                  @click:minute="$refs.timemenu.save(task.timestart)"
                ></v-time-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="3">
              <v-menu
                ref="timemenu1"
                v-model="timemenu1"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="task.timeend"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="task.timeend"
                    label="Время окончания задачи"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timemenu1"
                  v-model="task.timeend"
                  full-width
                  @click:minute="$refs.timemenu1.save(task.timeend)"
                ></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="12">
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="success"
            @click="updateTask(task)"
          >
            <v-icon left>mdi-pencil</v-icon> Сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Редактирование задачи | СДО PRO",
  },
  data: () => ({
    timemenu: false,
    timemenu1: false,
    menu: false,
    menu2: false,
    alert: false,
    states: [
      "Задача активна",
      "Задача находится в работе",
      "Задача выполнена",
      "Задача не выполнена",
    ],
  }),
  methods: {
    updateTask(task) {
      this.$notify({
        title: "СДО PRO",
        message: `Задача ${task.name} успешно сохранена`,
        type: "success",
      });
      this.$store.dispatch("updateTask", this.$route.params.id);
      this.$router.push({
        name: "tasks",
        query: { message: "TaskUpdated" + `(${Date.now()})` },
      });
    },
  },
  computed: {
    ...mapGetters(["allAdmins", "task"]),
  },
  mounted() {
    this.$store.dispatch("fetchAdmins");
    this.$store.dispatch("fetchTask", this.$route.params.id);
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
