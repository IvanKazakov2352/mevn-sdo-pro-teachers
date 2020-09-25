<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Реквизиты контрагента</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.namekr"
            label="Краткое наименование"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.fio"
            label="ФИО Директора"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.position"
            label="Должность"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'######'"
            v-model="dataZao.postcode"
            label="Почтовый индекс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="dataZao.town" label="Город"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.legal"
            label="Юридический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.postaddress"
            label="Почтовый адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="dataZao.factaddress"
            label="Фактический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###############'"
            v-model="dataZao.ogrn"
            label="ОГРН(ИП)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'##########'"
            v-model="dataZao.kpp"
            label="КПП"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#########'"
            v-model="dataZao.okpo"
            label="ОКПО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="dataZao.okato"
            label="ОКАТО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="dataZao.oktmo"
            label="ОКТМО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#######'"
            v-model="dataZao.okogu"
            label="ОКОГУ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#####'"
            v-model="dataZao.okopf"
            label="ОКОПФ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="dataZao.phone"
            label="Телефон"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="dataZao.faks"
            label="Факс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="dataZao.email" label="Email"></v-text-field>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  data: () => ({
    dataZao: {
      namekr: null,
      position: null,
      fio: null,
      postcode: null,
      town: null,
      legal: null,
      postaddress: null,
      factaddress: null,
      ogrn: null,
      kpp: null,
      okpo: null,
      okato: null,
      okato: null,
      oktmo: null,
      okogu: null,
      okopf: null,
      phone: null,
      faks: null,
      email: null,
    },
  }),
  watch: {
    dataZao: {
      deep: true,
      handler(newValue) {
        this.$emit("fetchDopDataZao", newValue);
      },
    },
  },
};
</script>
