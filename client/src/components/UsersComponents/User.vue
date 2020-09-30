<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Добавить слушателя
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Добавление слушателя</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-row justify="center">
              <v-col cols="12" sm="5">
                <v-text-field
                  :rules="nameUserRules"
                  v-model="fiolistener"
                  label="ФИО(Полностью)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :rules="phoneUserRules"
                  v-model="phone"
                  label="Телефон"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :rules="emailUserRules"
                  v-model="email"
                  label="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-select
                  :rules="educationUserRules"
                  v-model="education"
                  :items="educations"
                  label="Образование"
                ></v-select>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  v-model="position"
                  label="Должность"
                ></v-text-field>
              </v-col>
              <v-col cols="10" sm="5">
                <v-text-field
                  :rules="loginUserRules"
                  v-model="login"
                  label="Логин"
                ></v-text-field>
                <v-btn text color="blue" @click="generatingLogin"
                  >Сгенерировать логин</v-btn
                >
              </v-col>
              <v-col cols="10" sm="5">
                <v-text-field
                  :rules="passwordUserRules"
                  v-model="password"
                  label="Пароль"
                ></v-text-field>
                <v-btn text color="blue" @click="generatingPassword"
                  >Сгенерировать пароль</v-btn
                >
              </v-col>
              <v-col cols="12" sm="10">
                <v-expansion-panels focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header
                      >Дополнительные параметры
                      пользователя</v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="birth"
                            label="Место рождения"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="register"
                            label="Адрес регистрации"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="snils"
                            v-mask="`###-###-###-##`"
                            label="Снилс"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="datebirth"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="datebirth"
                                label="Дата рождения"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="datebirth"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false"
                                >Отмена</v-btn
                              >
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(datebirth)"
                                >OK</v-btn
                              >
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            v-model="pasport"
                            v-mask="`## ## ######`"
                            label="Паспорт(Серия Номер)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            :return-value.sync="datereceiving"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="datereceiving"
                                label="Дата получения"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="datereceiving"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu1 = false"
                                >Отмена</v-btn
                              >
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu1.save(datereceiving)"
                                >OK</v-btn
                              >
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="vpasport"
                            label="Выдан"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Отмена</v-btn
          >
          <v-btn
            color="blue darken-1"
            :disabled="!valid"
            text
            @click="addListener"
            >Добавить</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <UsersList />
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import UsersList from "@/components/UsersComponents/UserList.vue";
import { generateLogin, generatePassword } from "@/utils/GenerateLogin&Password.js";
export default {
  metaInfo: {
    title: "Слушатели | СДО PRO",
  },
  data: () => ({
    dialog: false,
    fiolistener: null,
    datebirth: new Date().toISOString().substr(0, 10),
    datereceiving: new Date().toISOString().substr(0, 10),
    phone: null,
    email: null,
    education: null,
    group: null,
    counterparty: null,
    position: null,
    snils: null,
    birth: null,
    register: null,
    pasport: null,
    vpasport: null,
    login: null,
    course: null,
    password: null,
    valid: false,
    usersGroup: [],
    groups: [],
    educations: [
      "Неопределенно",
      "Основное-общее",
      "Среднее-общее",
      "Среднее-профессиональное",
      "Высшее-бакалавриат",
      "Высшее-специалитет",
      "Высшее-магистратура",
    ],
    nameUserRules: [(v) => !!v || "Введите имя пользователя"],
    phoneUserRules: [(v) => !!v || "Укажите телефон пользователя"],
    loginUserRules: [
      (v) => !!v || "Необходимо ввести или сгенерировать логин",
      (v) =>
        (v && v.length === 7) || "Логин должен содержать только 7 символов",
    ],
    passwordUserRules: [
      (v) => !!v || "Необходимо ввести или сгенерировать пароль",
      (v) =>
        (v && v.length === 15) || "Пароль должен содержать только 15 символов",
    ],
    educationUserRules: [(v) => !!v || "Укажите образование пользователя"],
    emailUserRules: [
      (v) => !!v || "Введите Email слушателя",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
    menu: false,
    menu1: false,
  }),
  methods: {
    addListener() {
      const listener = {
        fiolistener: this.fiolistener,
        datebirth: this.datebirth,
        datereceiving: this.datereceiving,
        login: this.login,
        password: this.password,
        phone: this.phone,
        email: this.email,
        education: this.education,
        position: this.position,
        snils: this.snils,
        birth: this.birth,
        register: this.register,
        pasport: this.pasport,
        vpasport: this.vpasport,
      };
      this.$store.dispatch("addedUser", listener);
      this.dialog = false;
    },
    generatingLogin() {
      const login = generateLogin();
      this.login = login;
    },
    generatingPassword() {
      const password = generatePassword();
      this.password = password;
    },
  },
  components: {
    UsersList,
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
