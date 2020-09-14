<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>
        Редактирование группы: {{ group.namegroup }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-form v-model="valid">
        <v-row class="mr-2 ml-2">
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              :rules="namegroupRules"
              v-model="group.namegroup"
              label="Название группы"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="group.starttraining"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="group.starttraining"
                  :rules="starttrainingRules"
                  label="Начало обучения"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="group.starttraining" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(group.starttraining)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              :return-value.sync="group.endtraining"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="group.endtraining"
                  :rules="endtrainingRules"
                  label="Конец обучения"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="group.endtraining" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu1 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu1.save(group.endtraining)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="group.dateexamen"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="group.dateexamen"
                  :rules="dateexamenRules"
                  label="Дата экзамена"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="group.dateexamen" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu2.save(group.dateexamen)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="group.trainingplan"
              :rules="trainingplanRules"
              :items="[
                'Очная',
                'Стажировка',
                'Дистанционная',
                'Индивидуальный учебный план',
              ]"
              label="Форма обучения"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="group.user"
              :items="allUsers"
              item-text="fiolistener"
              label="Выберите слушателей для группы"
              return-object
              multiple
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="group.course"
              :items="allModule"
              item-text="nameProfile"
              label="Выберите профиль обучения для группы"
              return-object
              multiple
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-textarea
              outlined
              v-model="group.messagelistener"
              :rules="messagelistenerRules"
              name="input-7-4"
              counter
              maxlength="1000"
              label="Сообщение слушателю(1000 символов максимум)"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="group.dostup"
              :label="'Доступ группы к сдаче экзамена'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12">
            <v-card-text class="headline">
              Сообщить о сдаче экзамена
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-checkbox
              v-model="group.alert"
              :label="'В уведомлении'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-checkbox
              :disabled="this.group.alert === true"
              v-model="message"
              :label="'На почту'"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" v-if="this.message === true">
            <v-text-field
              v-model="group.email"
              :rules="emailRules"
              label="Название почты"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="ma-2"
              x-large
              tile
              outlined
              color="success"
              @click="updateGroup"
            >
              <v-icon left>mdi-pencil</v-icon> Редактировать
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Редактирование группы | СДО PRO",
  },
  data: () => ({
    menu: false,
    menu1: false,
    menu2: false,
    dostup: true,
    message: false,
    alert: true,
    alert1: false,
    email: null,
    user: null,
    valid: false,
    namegroupRules: [(v) => !!v || "Введите название группы"],
    starttrainingRules: [(v) => !!v || "Укажите дату начала обучения"],
    endtrainingRules: [(v) => !!v || "Укажите дату конца обучения"],
    dateexamenRules: [(v) => !!v || "Укажите дату экзамена"],
    trainingplanRules: [(v) => !!v || "Выберите план обучения"],
    userRules: [(v) => !!v || "Выберите слушателей для группы"],
    messagelistenerRules: [
      (v) => !!v || "Введите сообщение для сушателей данной группы",
    ],
    emailRules: [
      (v) => !!v || "Введите Email слушателя",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
  }),
  methods: {
    updateGroup() {
      this.$store.dispatch("updateGroup", this.$route.params.id);
      this.$router.push({
        name: "groups",
        query: { message: "GroupUpdated" + `(${Date.now()})` },
      });
    },
  },
  computed: {
    ...mapGetters(["group", "allUsers", "allModule"]),
  },
  mounted() {
    this.$store.dispatch("fetchGroup", this.$route.params.id);
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchModules");
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
