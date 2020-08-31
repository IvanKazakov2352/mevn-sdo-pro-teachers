<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Реквизиты контрагента</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.namekr"
            label="Краткое наименование"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.fio"
            label="ФИО Директора"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.position"
            label="ФИО Директора"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'######'"
            v-model="counterparty.postcode"
            label="Почтовый индекс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.town"
            label="Город"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.legal"
            label="Юридический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.postaddress"
            label="Почтовый адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.factaddress"
            label="Фактический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###############'"
            v-model="counterparty.ogrn"
            label="ОГРН(ИП)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'##########'"
            v-model="counterparty.kpp"
            label="КПП"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#########'"
            v-model="counterparty.okpo"
            label="ОКПО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="counterparty.okato"
            label="ОКАТО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="counterparty.oktmo"
            label="ОКТМО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#######'"
            v-model="counterparty.okogu"
            label="ОКОГУ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#####'"
            v-model="counterparty.okopf"
            label="ОКОПФ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="counterparty.phone"
            label="Телефон"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="counterparty.faks"
            label="Факс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.email"
            label="Email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="ma-2" outlined color="indigo" @click="fetchDopDataZao"
        >Сохранить</v-btn
      >
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    counterparty: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    positions: [
      "Директор",
      "Исполнительный директор",
      "Гл Бухгалтер",
      "Бухгалтер",
      "Работник",
    ],
  }),
  methods: {
    fetchDopDataZao() {
      this.$emit("postDopDataZao", this.counterparty)
    },
  },
};
</script>
