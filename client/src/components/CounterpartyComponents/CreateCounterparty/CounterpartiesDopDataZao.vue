<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Реквизиты контрагента</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="namekr"
            label="Краткое наименование"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="fio" label="ФИО Директора"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="position" label="Должность"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'######'"
            v-model="postcode"
            label="Почтовый индекс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="town" label="Город"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="legal"
            label="Юридический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="postaddress"
            label="Почтовый адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="factaddress"
            label="Фактический адрес"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###############'"
            v-model="ogrn"
            label="ОГРН(ИП)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'##########'"
            v-model="kpp"
            label="КПП"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#########'"
            v-model="okpo"
            label="ОКПО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="okato"
            label="ОКАТО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'###########'"
            v-model="oktmo"
            label="ОКТМО"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#######'"
            v-model="okogu"
            label="ОКОГУ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'#####'"
            v-model="okopf"
            label="ОКОПФ"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="phone"
            label="Телефон"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###)###-##-## доб ####'"
            v-model="faks"
            label="Факс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="email" label="Email"></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="ma-2" outlined color="indigo" @click="fetchDopData"
        >Сохранить</v-btn
      >
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  data: () => ({
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
  }),
  methods: {
    fetchDopData() {
      this.$emit("fetchDopDataZao", {
        namekr: this.namekr,
        position: this.position,
        fio: this.fio,
        postcode: this.postcode,
        town: this.town,
        legal: this.legal,
        postaddress: this.postaddress,
        factaddress: this.factaddress,
        ogrn: this.ogrn,
        kpp: this.kpp,
        okpo: this.okpo,
        okato: this.okato,
        oktmo: this.oktmo,
        okogu: this.okogu,
        okopf: this.okopf,
        phone: this.phone,
        faks: this.faks,
        email: this.email,
      });
    },
  },
};
</script>
