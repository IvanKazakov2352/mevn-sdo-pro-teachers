<template>
  <v-card class="edit">
    <v-row justify="center" class="mr-2 ml-2">
      <h2>Редактирование пользователя "{{ user.fiolistener }}"</h2>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-alert v-model="alertEmail" type="success">
              Письмо слушателю успешно отправлено
            </v-alert>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field
              v-model="user.fiolistener"
              label="ФИО(Полностью)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="5">
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
              <v-date-picker v-model="user.datebirth" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Отмена</v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(user.datebirth)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field
              v-model="user.phone"
              label="Телефон"
              v-mask="'8(###) ###-##-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field v-model="user.email" label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="5">
            <v-select
              v-model="user.education"
              :items="educations"
              label="Образование"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="5">
            <v-text-field
              v-model="user.position"
              label="Должность"
            ></v-text-field>
          </v-col>
          <v-col cols="10" sm="5">
            <v-text-field v-model="user.login" label="Логин"></v-text-field>
            <v-btn text color="blue" @click="generateLogin"
              >Сгенерировать логин</v-btn
            >
          </v-col>
          <v-col cols="10" sm="5">
            <v-text-field v-model="user.password" label="Пароль"></v-text-field>
            <v-btn text color="blue" @click="generatePassword"
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
                        label="Паспорт"
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
        <v-col cols="12">
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="success"
            @click="updateUser"
          >
            <v-icon left>mdi-pencil</v-icon> Редактировать
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
          <v-col>
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
        </v-col>
      </v-container>
    </v-row>
  </v-card>
</template>
<script>
import axios from "axios";
import emailjs from "emailjs-com";
import { sendEmailToUser } from "@/functions/SendEmailToUser.js";
import { userInfo } from "@/functions/CardListener.js";
export default {
  data: () => ({
    user: {},
    counterparties: [],
    groups: [],
    menu: false,
    menu1: false,
    alertEmail: false,
    educations: [
      "Неопределенно",
      "Основное-общее",
      "Среднее-общее",
      "Среднее-профессиональное",
      "Высшее-бакалавриат",
      "Высшее-специалитет",
      "Высшее-магистратура",
    ],
  }),
  methods: {
    async getCounterparty() {
      const res = await axios.get("/api/counterparty/");
      this.counterparties = res.data;
    },
    async getGroups() {
      const res = await axios.get("/api/groups/");
      this.groups = res.data;
    },
    async getUser() {
      const res = await axios.get("/api/listeners/" + this.$route.params.id);
      this.user = res.data;
    },
    async updateUser() {
      const res = await axios.put(
        "/api/listeners/" + this.$route.params.id,
        this.user
      );
    },
    cardListener(user) {
      return userInfo(user)
    },
    sendEmail(user) {
      return sendEmailToUser(user, setTimeout(() => {
        this.alertEmail = true
      }, 3000))
    },
    generateLogin() {
      var login = "";
      var string = "0123456789";
      for (var i = 0; i < 7; i++) {
        login += string.charAt(Math.floor(Math.random() * string.length));
      }
      this.user.login = login;
    },
    generatePassword() {
      var password = "";
      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/\|=-_()!@#$%^&+";
      for (var i = 0; i < 15; i++) {
        password += string.charAt(Math.floor(Math.random() * string.length));
      }
      this.user.password = password;
    },
  },
  mounted() {
    this.getUser();
    this.getCounterparty();
    this.getGroups();
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
