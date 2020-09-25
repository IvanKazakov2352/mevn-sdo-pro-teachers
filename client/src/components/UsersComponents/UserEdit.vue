<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>
        Редактирование слушателя: {{ user.fiolistener }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-row justify="center" class="mr-2 ml-2">
        <v-form v-model="valid">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <v-text-field
                :rules="nameUserRules"
                v-model="user.fiolistener"
                label="ФИО(Полностью)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                :rules="phoneUserRules"
                v-model="user.phone"
                label="Телефон"
                v-mask="'8(###) ###-##-##'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field
                :rules="emailUserRules"
                v-model="user.email"
                label="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5">
              <v-select
                :rules="educationUserRules"
                v-model="user.education"
                :items="educations"
                label="Образование"
              ></v-select>
            </v-col>
            <v-col cols="10">
              <v-text-field
                v-model="user.position"
                label="Должность"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5">
              <v-text-field
                :rules="loginUserRules"
                v-model="user.login"
                label="Логин"
              ></v-text-field>
              <v-btn text color="blue" @click="generatingLogin"
                >Сгенерировать логин</v-btn
              >
            </v-col>
            <v-col cols="10" sm="5">
              <v-text-field
                :rules="passwordUserRules"
                v-model="user.password"
                label="Пароль"
              ></v-text-field>
              <v-btn text color="blue" @click="generatingPassword"
                >Сгенерировать пароль</v-btn
              >
            </v-col>
            <v-col cols="12" sm="10">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >Дополнительные параметры
                    пользователя</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.birth"
                          label="Место рождения"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.register"
                          label="Адрес регистрации"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="user.snils"
                          v-mask="`###-###-###-##`"
                          label="Снилс"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="user.datebirth"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="user.datebirth"
                              label="Дата рождения"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="user.datebirth"
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
                              @click="$refs.menu.save(user.datebirth)"
                              >OK</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="user.pasport"
                          v-mask="`## ## ######`"
                          label="Паспорт(Серия Номер)"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-menu
                          ref="menu1"
                          v-model="menu1"
                          :close-on-content-click="false"
                          :return-value.sync="user.datereceiving"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="user.datereceiving"
                              label="Дата получения"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="user.datereceiving"
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
                              @click="$refs.menu1.save(user.datereceiving)"
                              >OK</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user.vpasport"
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
        <v-col cols="12">
          <v-btn class="ma-2" x-large tile outlined color="success" @click="updateUser">
            <v-icon left>mdi-pencil</v-icon> Сохранить
          </v-btn>
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="purple darken-3"
            @click="cardListener(user)"
          >
            <v-icon left>mdi-microsoft-word</v-icon> Карточка слушателя
          </v-btn>
          <v-btn
            x-large
            tile
            outlined
            color="blue lighten-1"
            @click="sendEmail(user)"
          >
            <v-icon left>mdi-email</v-icon>Отправить доступ на Email
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import emailjs from "emailjs-com";
import { sendEmailToUser } from "@/functions/SendEmailToUser.js";
import { userInfo } from "@/functions/CardListener.js";
import {
  generateLogin,
  generatePassword,
} from "@/functions/GenerateLogin&Password.js";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    menu: false,
    menu1: false,
    alertEmail: false,
    valid: false,
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
    educationUserRules: [(v) => !!v || "Укажите образование пользователя"],
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
    emailUserRules: [
      (v) => !!v || "Введите Email слушателя",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
  }),
  methods: {
    updateUser() {
      this.$store.dispatch("updateUser", this.$route.params.id);
      this.$router.push({ name: "users", query: { message: "UserUpdated" + `(${Date.now()})` } });
    },
    cardListener(user) {
      return userInfo(user);
    },
    sendEmail(user) {
      return sendEmailToUser(user);
    },
    generatingLogin() {
      const login = generateLogin();
      this.user.login = login;
    },
    generatingPassword() {
      const password = generatePassword();
      this.user.password = password;
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.$route.params.id);
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
