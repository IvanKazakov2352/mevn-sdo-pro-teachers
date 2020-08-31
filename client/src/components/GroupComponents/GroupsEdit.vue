<template>
  <v-card class="edit">
    <v-row class="mr-2 ml-2" justify="center">
      <h1>Редактирование Группы</h1>
      <v-col cols="12">
        <v-alert v-model="alert1" type="success">
          Группа успешно изменена, через 5 секунд вы будете перенаправлены на
          страницу с группами
        </v-alert>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="group.namegroup"
          label="Название группы"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <h3>
          Внимание дата в полях по умолчанию сегодняшняя
        </h3>
      </v-col>
      <v-col cols="12" sm="6" md="4">
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
      <v-col cols="12" sm="6" md="4">
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
              label="Конец обучения"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="group.endtraining" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu1.save(group.endtraining)"
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
          :return-value.sync="group.dateexamen"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="group.dateexamen"
              label="Дата экзамена"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="group.dateexamen" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu2.save(group.dateexamen)"
              >OK</v-btn
            >
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="group.trainingplan"
          :items="[
            'Очная',
            'Стажировка',
            'Дистанционная',
            'Индивидуальный учебный план',
          ]"
          label="Форма обучения"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-textarea
          outlined
          v-model="group.messagelistener"
          name="input-7-4"
          counter
          maxlength="1000"
          label="Сообщение слушателю(1000 символов максимум)"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="group.user"
          :items="usersGroup"
          item-text="fiolistener"
          label="Выберите слушателей для группы"
          return-object
          multiple
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-select
          v-model="group.course"
          :items="courses"
          item-text="namecourse"
          label="Выберите курс для группы"
          return-object
          multiple
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="5">
        <v-checkbox
          v-model="group.dostup"
          :label="'Доступ группы к сдаче экзамена'"
        ></v-checkbox>
      </v-col>
      <v-col cols="12">
        <h3>Сообщить о сдаче экзамена</h3>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-checkbox v-model="group.alert" :label="'В уведомлении'"></v-checkbox>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-checkbox
          :disabled="this.group.alert === true"
          v-model="group.message"
          :label="'На почту'"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" v-if="this.group.message === true">
        <v-text-field
          v-model="group.email"
          label="Название почты"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="11">
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
  </v-card>
</template>
<script>
import axios from "axios";
export default {
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
    group: {},
    usersGroup: [],
    users: [],
    courses: [],
  }),
  methods: {
    async updateGroup() {
      const res = await axios.put(
        "/api/groups/" + this.$route.params.id,
        this.group
      );
      this.group = await res.data;
      this.alert1 = true;
      setTimeout(() => {
        this.alert1 = false;
        this.$router.push("/groups");
      }, 5000);
    },
    async getGroup() {
      const res = await axios.get("/api/groups/" + this.$route.params.id);
      this.group = res.data;
    },
    async getUsers() {
      const res = await axios.get("/api/listeners/");
      this.usersGroup = res.data;
    },
    async getCourses() {
      const res = await axios.get("/api/course");
      this.courses = res.data;
    },
  },
  mounted() {
    this.getGroup();
    this.getUsers();
    this.getCourses();
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
