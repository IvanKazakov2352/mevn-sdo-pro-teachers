<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="680px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Добавить задачу</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создание задачи</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-col cols="12">
              <v-select
                v-model="postan"
                :rules="postanRules"
                item-text="fio"
                :items="allAdmins"
                label="Постановщик для данной задачи"
              >
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Название задачи"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="description"
                :rules="descriptionRules"
                outlined
                name="input-7-4"
                label="Описание задачи"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="otvets"
                :rules="otvetsRules"
                :items="allAdmins"
                item-text="fio"
                label="Ответственные для данной задачи"
              ></v-select>
            </v-col>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="start"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="start"
                      :rules="startRules"
                      label="Дата начала задачи"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="start" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.menu.save(start)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="end"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="end"
                      :rules="endRules"
                      label="Дата окончания задачи"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="end" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.menu2.save(end)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="11" sm="5">
                <v-menu
                  ref="timemenu"
                  v-model="timemenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="timestart"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="timestart"
                      :rules="timestartRules"
                      label="Время начала задачи"
                      prepend-icon="mdi-clock"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="timemenu"
                    v-model="timestart"
                    full-width
                    @click:minute="$refs.timemenu.save(timestart)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="11" sm="5">
                <v-menu
                  ref="timemenu1"
                  v-model="timemenu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="timeend"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="timeend"
                      :rules="timeendRules"
                      label="Время окончания задачи"
                      prepend-icon="mdi-clock"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="timemenu1"
                    v-model="timeend"
                    full-width
                    @click:minute="$refs.timemenu1.save(timeend)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Закрыть</v-btn
          >
          <v-btn color="blue darken-1" :disabled="!valid" text @click="addTask"
            >Добавить</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <TasksList />
    </v-col>
<!--     <v-col cols="11">
      <TasksCalendar />
    </v-col> -->
  </v-row>
</template>
<script>
import axios from "axios";
import TasksList from "@/components/TaskComponents/TasksList";
import TasksCalendar from "@/components/TaskComponents/TasksCalendar";
import {mapGetters} from "vuex"
export default {
  data: () => ({
    dialog: false,
    timemenu: false,
    timemenu1: false,
    valid: false,
    menu: false,
    menu2: false,
    postan: null,
    otvets: null,
    name: null,
    description: null,
    end: new Date().toISOString().substr(0, 10),
    start: new Date().toISOString().substr(0, 10),
    timestart: null,
    timeend: null,
    nameRules: [(v) => !!v || "Введите название задачи"],
    postanRules: [(v) => !!v || "Выберите поставновщика для данной задачи"],
    descriptionRules: [(v) => !!v || "Введите описание задачи"],
    otvetsRules: [(v) => !!v || "Выберите ответственного для данной задачи"],
    startRules: [(v) => !!v || "Укажите дату начала задачи"],
    endRules: [(v) => !!v || "Укажите дату окончания задачи"],
    timestartRules: [(v) => !!v || "Укажите время начала задачи"],
    timeendRules: [(v) => !!v || "Укажите время окончания задачи"],
  }),
  methods: {
    addTask() {
      const task = {
        postan: this.postan,
        name: this.name,
        description: this.description,
        otvets: this.otvets,
        start: this.start,
        end: this.end,
        timestart: this.timestart,
        timeend: this.timeend,
      };
      this.$store.dispatch('addedTasks', task);
      this.dialog = false;
    },
  },
  computed: mapGetters(["allAdmins"]),
  mounted() {
    this.$store.dispatch("fetchAdmins");
  },
  components: {
    TasksList,
    TasksCalendar,
  },
};
</script>
