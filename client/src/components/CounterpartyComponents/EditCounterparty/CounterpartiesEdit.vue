<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title
        >Редактирование контрагента: {{ counterparty.name }}</v-toolbar-title
      >
    </v-toolbar>
    <v-card>
      <v-row class="mr-2 ml-2" justify="center">
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
                                  v-model="counterparty.name"
                                  label="Наименование контрагента"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="innRules"
                                  v-mask="'############'"
                                  v-model="counterparty.inn"
                                  label="ИНН"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  :rules="managerRules"
                                  v-model="counterparty.manager"
                                  :items="allAdmins"
                                  item-text="fio"
                                  label="Менеджеры"
                                ></v-select>
                              </v-col>
                            </v-row>
                          </v-form>
                          <v-expansion-panels focusable>
                            <CounterpartyEditZao
                              @postDopDataZao="dataZao"
                              :counterparty="this.counterparty"
                            />
                            <CounterpartyBanks
                              :counterparty="this.counterparty"
                            />
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
                                  v-model="counterparty.name"
                                  label="Наименование контрагента"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-text-field
                                  :rules="innRules"
                                  v-model="counterparty.inn"
                                  label="ИНН"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  :rules="managerRules"
                                  v-model="counterparty.manager"
                                  :items="allAdmins"
                                  item-text="fio"
                                  label="Менеджеры"
                                ></v-select>
                              </v-col>
                              <v-col cols="12" sm="6" md="3">
                                <v-select
                                  v-model="counterparty.group"
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
                            <CounterpartyEditCh
                              @postDopDataCh="dataCh"
                              :counterparty="this.counterparty"
                            />
                            <CounterpartyBanks
                              :counterparty="this.counterparty"
                            />
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
        <v-col cols="11">
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="success"
            @click="updateCounterparty"
            :disabled="!valid"
          >
            <v-icon left>mdi-pencil</v-icon> Сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
const CounterpartyBanks = () => import("./CounterpartyEditBanks")
const CounterpartyEditCh = () => import("./CounterpartyEditCh")
const CounterpartyEditZao = () => import("./CounterpartyEditZao")
export default {
  metaInfo: {
    title: "Редактирование контрагента | СДО PRO",
  },
  data: () => ({
    alert: false,
    valid: false,
    date: new Date().toISOString().substr(0, 10),
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    tabMode: "data",
    nameRules: [(v) => !!v || "Введите название контрагента"],
    innRules: [(v) => !!v || "Введите ИНН контрагента"],
    managerRules: [(v) => !!v || "Укажите менеджера для данного контрагента"],
  }),
  methods: {
    updateCounterparty() {
      this.$notify({
        title: "СДО PRO",
        message: `Контрагент успешно сохранен`,
        type: "success",
      });
      this.$store.dispatch("updateCounterparty", this.$route.params.id);
      this.$router.push({
        name: "counterparties",
        query: { message: "CounterpartyUpdated" + `(${Date.now()})` },
      });
    },
    dataZao(dataZao) {
      Object.assign(this.counterparty, dataZao);
    },
    dataCh(dataCh) {
      Object.assign(this.counterparty, dataCh);
    },
  },
  mounted() {
    this.$store.dispatch("fetchAdmins");
    this.$store.dispatch("fetchGroups");
    this.$store.dispatch("fetchCounterparty", this.$route.params.id);
  },
  computed: mapGetters(["allAdmins", "allGroups", "counterparty"]),
  components: {
    CounterpartyBanks,
    CounterpartyEditCh,
    CounterpartyEditZao,
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
