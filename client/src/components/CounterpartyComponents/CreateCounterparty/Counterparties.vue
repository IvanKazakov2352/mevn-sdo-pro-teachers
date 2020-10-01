<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1200">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Добавить контрагента</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Добавление контрагента</span>
        </v-card-title>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
              <v-tabs
                v-model="tabMode"
                color="accent"
                fixed-tabs
                slider-color="success"
              >
                <v-tab :key="'zao'" ripple>ЗАО/ООО/ИП</v-tab>
                <v-tab :key="'ch'" ripple>Частное лицо</v-tab>
                <v-tab-item :key="'zao'">
                  <v-row justify="center">
                    <v-list three-line subheader>
                      <v-list-item>
                        <v-list-item-content>
                          <v-form v-model="valid">
                            <v-row>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="nameRules"
                                  v-model="name"
                                  label="Наименование контрагента"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="innRules"
                                  v-mask="'############'"
                                  v-model="inn"
                                  label="ИНН"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  :rules="managerRules"
                                  v-model="manager"
                                  :items="allAdmins"
                                  item-text="fio"
                                  label="Менеджеры"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <v-expansion-panels focusable>
                            <CounterpartiesDopDataZao
                              @fetchDopDataZao="getDopDataZao"
                            />
                            <CounterpartiesBanks @addBanks="onAddBanks" />
                          </v-expansion-panels>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-row>
                </v-tab-item>
                <v-tab-item :key="'ch'">
                  <v-row justify="center">
                    <v-list three-line subheader>
                      <v-list-item>
                        <v-list-item-content>
                          <v-form v-model="valid">
                            <v-row>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="nameRules"
                                  v-model="name"
                                  label="Наименование контрагента"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="innRules"
                                  v-model="inn"
                                  label="ИНН"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  :rules="managerRules"
                                  v-model="manager"
                                  :items="allAdmins"
                                  item-text="fio"
                                  label="Менеджеры"
                                ></v-select>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  v-model="group"
                                  :items="allGroups"
                                  item-text="namegroup"
                                  label="Группа"
                                  multiple
                                  return-object
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <v-expansion-panels focusable>
                            <CounterpartiesDopDataCh
                              @fetchDopDataCh="getDopDataCh"
                            />
                            <CounterpartiesBanks @addBanks="onAddBanks" />
                          </v-expansion-panels>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-row>
                </v-tab-item>
              </v-tabs>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Закрыть</v-btn
          >
          <v-btn
            color="blue darken-1"
            :disabled="!valid"
            text
            @click="addCounterparty"
            >Добавить контрагента</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <CounterpartiyList />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
const CounterpartiesDopDataZao = () => import("./CounterpartiesDopDataZao")
const CounterpartiesDopDataCh = () => import("./CounterpartiesDopDataCh")
const CounterpartiesBanks = () => import("./CounterpartiesBanks")
const CounterpartiyList = () => import("../CounterpartiesList")
export default {
  metaInfo: {
    title: "Контрагенты | СДО PRO",
  },
  data: () => ({
    valid: false,
    dialog: false,
    name: null,
    inn: null,
    manager: null,
    group: null,
    dopParamsZao: null,
    dopParamsCh: null,
    banks: [],
    tabMode: "data",
    nameRules: [(v) => !!v || "Введите название контрагента"],
    innRules: [(v) => !!v || "Введите ИНН контрагента"],
    managerRules: [(v) => !!v || "Укажите менеджера для данного контрагента"],
  }),
  methods: {
    getDopDataZao(dopParamsZao) {
      this.dopParamsZao = dopParamsZao;
    },
    getDopDataCh(dopParamsCh) {
      this.dopParamsCh = dopParamsCh;
    },
    onAddBanks(banks) {
      this.banks = banks;
    },
    addCounterparty() {
      const { ...paramsZao } = this.dopParamsZao;
      const { ...paramsCh } = this.dopParamsCh;
      const { banks } = this.banks;
      const counterparty = Object.assign(
        {},
        {
          name: this.name,
          inn: this.inn,
          manager: this.manager,
          group: this.group,
          ...paramsZao,
          ...paramsCh,
          banks,
        }
      );
      this.$notify({
        title: "СДО PRO",
        message: `Контрагент успешно создан`,
        type: "success",
      });
      this.$store.dispatch("addedCounterparty", counterparty);
      this.dialog = false;
    },
  },
  computed: mapGetters(["allAdmins", "allGroups"]),
  mounted() {
    this.$store.dispatch("fetchAdmins");
    this.$store.dispatch("fetchGroups");
  },
  components: {
    CounterpartiyList,
    CounterpartiesDopDataZao,
    CounterpartiesDopDataCh,
    CounterpartiesBanks,
  },
};
</script>
