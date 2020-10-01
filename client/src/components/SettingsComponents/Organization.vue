<template>
  <div>
    <v-divider></v-divider>
    <div class="wrap">
      <v-col cols="12" sm="2">
        <v-img src="../../images/logo.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.longnameorganization"
          label="Полное название организации"
        ></v-text-field>
        <v-text-field
          v-model="settings.factaddress"
          label="Фактический адрес"
        ></v-text-field>
        <v-text-field
          v-model="settings.postindex1"
          label="Почтовый индекс"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.shortnomeorganization"
          label="Краткое название организации"
        ></v-text-field>
        <v-text-field v-model="settings.town" label="Город"></v-text-field>
        <v-text-field
          v-model="settings.license"
          label="Лицензия УЦ"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.uraddress"
          label="Юридический адрес"
        ></v-text-field>
        <v-text-field
          v-model="settings.postaddress1"
          label="Почтовый адрес"
        ></v-text-field>
        <v-text-field
          v-model="settings.organlicense"
          label="Орган выдачи лицензии"
        ></v-text-field>
      </v-col>
    </div>
    <v-divider></v-divider>
    <div class="center-settings">
      <h2 class="settings-div-h2">Данные для отправки счетов и актов</h2>
    </div>
    <v-row>
      <v-col cols="12" sm="9">
        <v-text-field
          v-model="settings.postaddress2"
          label="Почтовый адрес"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.postindex2"
          label="Почтовый индекс"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.phone1"
          v-mask="`8(###)-###-##-## доб ####`"
          label="Телефон 1"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.phone2"
          v-mask="`8(###)-###-##-## доб ####`"
          label="Телефон 2"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field v-model="settings.email" label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="settings.whatsapp"
          v-mask="`8(###)-###-##-##`"
          label="Whatsapp"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" sm="3">
        <v-text-field v-model="settings.inn" label="ИНН"></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field v-model="settings.ogrn" label="ОГРН"></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field v-model="settings.kpp" label="КПП"></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field v-model="settings.okpo" label="ОКПО"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="settings.fiodirector"
          label="ФИО Директора"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="settings.fiozamdirector"
          label="ФИО Зам Директора"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn class="ma-2" tile outlined color="success" @click="saveSettings">
      <v-icon left>mdi-pencil</v-icon> Сохранить
    </v-btn>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    longnameorganization: null,
    factaddress: null,
    postindex1: null,
    shortnomeorganization: null,
    town: null,
    license: null,
    uraddress: null,
    postaddress1: null,
    organlicense: null,
    postaddress2: null,
    postindex2: null,
    email: null,
    whatsapp: null,
    inn: null,
    ogrn: null,
    kpp: null,
    okpo: null,
    fiodirector: null,
    fiozamdirector: null,
    phone1: null,
    phone2: null,
  }),
  methods: {
    saveSettings() {
      this.$notify({
        title: "СДО PRO",
        message: `Настройки СДО успешно изменены`,
        type: "success",
      });
      this.$store.dispatch("saveSettings");
    },
  },
  computed: {
    ...mapGetters(["settings"]),
  },
  mounted() {
    this.$store.dispatch("getSettings");
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
