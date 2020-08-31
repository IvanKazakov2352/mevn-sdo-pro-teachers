<template>
  <v-expansion-panel>
    <v-expansion-panel-header>Реквизиты контрагента</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="12" sm="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Дата рождения"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="birthday"
            label="Место рождения"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-select
            v-model="education"
            :items="educations"
            label="Образование"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###) ###-##-##'"
            v-model="phone"
            label="Tелефон"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="email" label="Email"></v-text-field>
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
            v-model="address"
            label="Адрес регистрации"
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
            v-mask="'###-###-###-##'"
            v-model="snils"
            label="Снилс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field v-model="pasport" label="Паспорт"></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="date1"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date1"
                label="Дата получения"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu1.save(date1)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="11" sm="3">
          <v-text-field
            v-model="vpasport"
            label="Выдан(Паспорт)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="ma-2" outlined color="indigo" @click="fetchDopDataCh"
        >Сохранить</v-btn
      >
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    birthday: null,
    education: null,
    phone: null,
    email: null,
    postcode: null,
    town: null,
    address: null,
    factaddress: null,
    snils: null,
    pasport: null,
    vpasport: null,
    menu: false,
    menu1: false,
    date: new Date().toISOString().substr(0, 10),
    date1: new Date().toISOString().substr(0, 10),
    educations: [
      "Неопределенно",
      "Основоное общее",
      "Среднее-общее",
      "Среднее-профессиональное",
      "Высшее-бакалавриат",
      "Высшее-специалитет",
      "Высшее-магистратура",
    ],
  }),
  methods: {
    fetchDopDataCh() {
      this.$emit("fetchDopDataCh", {
        birthday: this.birthday,
        education: this.education,
        phone: this.phone,
        email: this.email,
        postcode: this.postcode,
        town: this.town,
        address: this.address,
        factaddress: this.factaddress,
        snils: this.snils,
        pasport: this.pasport,
        vpasport: this.vpasport,
      });
    },
  },
};
</script>
