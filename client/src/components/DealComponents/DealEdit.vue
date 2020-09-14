<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>
        Редактирование сделки: {{ deal.namedeal }}
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-autocomplete
              v-model="deal.admin"
              :items="allAdmins"
              item-text="fio"
              label="Администратор сделки"
              return-object
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4">
            <v-autocomplete
              v-model="deal.course"
              :items="allModule"
              item-text="nameProfile"
              label="Выберите курс обучения"
              return-object
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="4">
            <v-autocomplete
              v-model="deal.group"
              :items="allGroups"
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
              :items="allCounterparties"
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
                  <v-text-field
                    v-model="deal.email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    v-model="deal.skype"
                    label="Скайп"
                  ></v-text-field>
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
                <v-expansion-panel-header
                  >Данные заявки</v-expansion-panel-header
                >
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
                            <v-list-item-subtitle
                              >10000 руб</v-list-item-subtitle
                            >
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
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  methods: {
    updateDeal() {
      this.$store.dispatch("updateDeal", this.$route.params.id);
    },
  },
  computed: {
    ...mapGetters([
      "deal",
      "allCounterparties",
      "allAdmins",
      "allGroups",
      "allModule",
    ]),
  },
  mounted() {
    this.$store.dispatch("fetchAdmins");
    this.$store.dispatch("fetchGroups");
    this.$store.dispatch("fetchModules");
    this.$store.dispatch("fetchDeal", this.$route.params.id);
    this.$store.dispatch("fetchCounterparties");
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
