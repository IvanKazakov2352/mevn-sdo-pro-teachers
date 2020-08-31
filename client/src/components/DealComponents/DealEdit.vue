<template>
  <v-row justify="center" class="edit">
    <h1>Редактирование сделки</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-autocomplete
            v-model="deal.admin"
            :items="admins"
            item-text="fio"
            label="Администратор сделки"
            return-object
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="4">
          <v-autocomplete
            v-model="deal.course"
            :items="courses"
            item-text="namecourse"
            label="Выберите курс обучения"
            return-object
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="4">
          <v-autocomplete
            v-model="deal.group"
            :items="groups"
            item-text="namegroup"
            label="Выберите группу"
            return-object
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="deal.namedeal"
            label="Наименование сделки"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            v-model="deal.counterparty"
            :items="counterparties"
            item-text="name"
            label="Выберите контрагента"
            return-object
          ></v-select>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            v-model="deal.status"
            :items="['Оплачено', 'В работе', 'Думает', 'Отказ']"
            label="Статус"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Контакты</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-text-field
                  v-model="deal.fio"
                  label="ФИО полностью"
                ></v-text-field>
                <v-text-field
                  v-model="deal.position"
                  label="Должность"
                ></v-text-field>
                <v-text-field
                  v-model="deal.phone1"
                  label="Телефон 1"
                ></v-text-field>
                <v-text-field
                  v-model="deal.phone2"
                  label="Телефон 2"
                ></v-text-field>
                <v-text-field
                  v-model="deal.phone3"
                  label="Телефон 3"
                ></v-text-field>
                <v-text-field v-model="deal.email" label="Email"></v-text-field>
                <v-text-field v-model="deal.skype" label="Скайп"></v-text-field>
                <v-textarea
                  outlined
                  label="Комментарий"
                  v-model="deal.commentaryzav"
                ></v-textarea>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" sm="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Данные заявки</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-textarea
                  outlined
                  label="Комментарий к заявке"
                  v-model="deal.commentary"
                ></v-textarea>
                <v-text-field
                  v-model.number="deal.sumdok"
                  label="Сумма договора"
                ></v-text-field>
                <v-text-field
                  v-model.number="deal.sumplat"
                  label="Сумма платежа"
                ></v-text-field>
                <v-text-field
                  v-model.number="deal.summar"
                  label="Сумма маржи"
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Кастомизация карточки сделки</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-row>
                  <v-col class="d-flex justify-left">
                    <v-color-picker v-model="deal.colorCard"></v-color-picker>
                  </v-col>
                  <v-col class="d-flex justify-right">
                    <v-color-picker v-model="deal.colorChip"></v-color-picker>
                  </v-col>
                  <v-col cols="12">
                    <v-card
                      max-width="344"
                      class="mx-auto ma-2"
                      :color="`${deal.colorCard}`"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="headline"
                            >Наименование сделки</v-list-item-title
                          >
                          <v-list-item-subtitle>10000 руб</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-card-text>
                        Комментарий к сделке
                      </v-card-text>

                      <v-card-actions>
                        <v-btn text color="White">
                          Редактировать
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-chip class="ma-2" :color="`${deal.colorChip}`">
                          Оплачено
                        </v-chip>
                      </v-card-actions>
                      <v-col cols="12">
                        <v-btn text color="White">
                          Удалить
                        </v-btn>
                      </v-col>
                    </v-card>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-col cols="11">
        <v-btn
          class="ma-2"
          x-large
          tile
          outlined
          color="success"
          @click="updateDeal"
        >
          <v-icon left>mdi-pencil</v-icon> Редактировать
        </v-btn>
      </v-col>
    </v-container>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    deal: {},
    admins: [],
    courses: [],
    groups: [],
    counterparties: [],
  }),
  methods: {
    async updateDeal() {
      const res = await axios.put(
        "/api/deals/" + this.$route.params.id,
        this.deal
      );
      this.deal = res.data;
    },
    async getAdmins() {
      const res = await axios.get("/api/getAdmin");
      this.admins = res.data;
    },
    async getCourses() {
      const res = await axios.get("/api/course");
      this.courses = res.data;
    },
    async getGroups() {
      const res = await axios.get("/api/groups");
      this.groups = res.data;
    },
    async getCounterparties() {
      const res = await axios.get("/api/counterparty");
      this.counterparties = res.data;
    },
    async getDeal() {
      const res = await axios.get("/api/deals/" + this.$route.params.id);
      this.deal = res.data;
    },
  },
  mounted() {
    this.getAdmins();
    this.getCourses();
    this.getGroups();
    this.getCounterparties();
    this.getDeal();
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
