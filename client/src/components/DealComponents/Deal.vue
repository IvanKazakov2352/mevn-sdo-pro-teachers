<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1100px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Добавить сделку
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создание сделки</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-autocomplete
                  v-model="admin"
                  :items="allAdmins"
                  item-text="fio"
                  label="Администратор сделки"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="4">
                <v-autocomplete
                  v-model="course"
                  :items="allModule"
                  item-text="nameProfile"
                  label="Выберите курс обучения"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="4">
                <v-autocomplete
                  v-model="group"
                  :items="allGroups"
                  item-text="namegroup"
                  label="Выберите группу"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="namedeal"
                  label="Наименование сделки"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="counterparty"
                  :items="allCounterparties"
                  item-text="name"
                  label="Выберите контрагента"
                  return-object
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="status"
                  :items="['Оплачено', 'В работе', 'Думает', 'Отказ']"
                  label="Статус"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header
                      >Контакты</v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <v-text-field
                        v-model="fio"
                        label="ФИО полностью"
                      ></v-text-field>
                      <v-text-field
                        v-model="position"
                        label="Должность"
                      ></v-text-field>
                      <v-text-field
                        v-model="phone1"
                        label="Телефон 1"
                        v-mask="'8(###) ###-##-##'"
                      ></v-text-field>
                      <v-text-field
                        v-model="phone2"
                        label="Телефон 2"
                        v-mask="'8(###) ###-##-##'"
                      ></v-text-field>
                      <v-text-field
                        v-model="phone3"
                        label="Телефон 3"
                        v-mask="'8(###) ###-##-##'"
                      ></v-text-field>
                      <v-text-field
                        v-model="email"
                        label="Email"
                      ></v-text-field>
                      <v-text-field
                        v-model="skype"
                        label="Скайп"
                      ></v-text-field>
                      <v-textarea
                        outlined
                        label="Комментарий"
                        v-model="commentaryzav"
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
                        v-model="commentary"
                      ></v-textarea>
                      <v-text-field
                        v-model.number="sumdok"
                        label="Сумма договора"
                      ></v-text-field>
                      <v-text-field
                        v-model.number="sumplat"
                        label="Сумма платежа"
                      ></v-text-field>
                      <v-text-field
                        v-model.number="summar"
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
                          <v-color-picker v-model="colorCard"></v-color-picker>
                        </v-col>
                        <v-col class="d-flex justify-right">
                          <v-color-picker v-model="colorChip"></v-color-picker>
                        </v-col>
                        <v-col cols="12">
                          <v-card
                            max-width="344"
                            class="mx-auto ma-2"
                            :color="`${colorCard}`"
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
                              <v-chip class="ma-2" :color="`${colorChip}`">
                                Оплачено
                              </v-chip>
                            </v-card-actions>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Отмена</v-btn
          >
          <v-btn color="blue darken-1" text @click="testDeal">Создать</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <DealList />
    </v-col>
  </v-row>
</template>
<script>
const DealList = () => import("./DealList")
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Сделки | СДО PRO",
  },
  data: () => ({
    dialog: false,
    admin: null,
    course: null,
    group: null,
    status: null,
    namedeal: null,
    counterparty: null,
    commentary: null,
    sumdok: null,
    sumplat: null,
    summar: null,
    commentaryzav: null,
    fio: null,
    position: null,
    phone1: null,
    phone2: null,
    phone3: null,
    email: null,
    skype: null,
    types: ["hex", "hexa", "rgba", "hsla", "hsva"],
    type: "hex",
    type1: "hexa",
    hex: "#FF00FF",
    hexa: "#FF00FFFF",
    rgba: { r: 255, g: 0, b: 255, a: 1 },
    hsla: { h: 300, s: 1, l: 0.5, a: 1 },
    hsva: { h: 300, s: 1, v: 1, a: 1 },
    admins: [],
    courses: [],
    groups: [],
    counterparties: [],
    deals: [],
  }),
  methods: {
    testDeal() {
      const deal = {
        admin: this.admin,
        course: this.course,
        group: this.group,
        namedeal: this.namedeal,
        status: this.status,
        commentary: this.commentary,
        counterparty: this.counterparty,
        sumdok: this.sumdok,
        sumplat: this.sumplat,
        summar: this.summar,
        commentaryzav: this.commentaryzav,
        fio: this.fio,
        position: this.position,
        phone1: this.phone1,
        phone2: this.phone2,
        phone3: this.phone3,
        email: this.email,
        skype: this.skype,
        colorCard: this.colorCard,
        colorChip: this.colorChip,
      };
      this.$notify({
        title: "СДО PRO",
        message: `Сделка ${this.namedeal} успешно создана`,
        type: "success",
      });
      this.$store.dispatch("addedDeals", deal);
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(["allCounterparties", "allAdmins", "allGroups", "allModule"]),
    colorCard: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
    colorChip: {
      get() {
        return this[this.type1];
      },
      set(v11) {
        this[this.type1] = v11;
      },
    },
  },
  mounted() {
    this.$store.dispatch("fetchAdmins");
    this.$store.dispatch("fetchModules");
    this.$store.dispatch("fetchGroups");
    this.$store.dispatch("fetchCounterparties");
  },
  components: {
    DealList,
  },
};
</script>
