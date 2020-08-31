<template>
  <v-row justify="start">
    <v-col cols="12" sm="3">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="datePrikaz"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="datePrikaz"
            label="Выберите дату приказа"
            readonly
            v-bind="attrs"
            v-on="on"
            :disabled="editCheckbox"
          ></v-text-field>
        </template>
        <v-date-picker v-model="datePrikaz" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(datePrikaz)"
            >OK</v-btn
          >
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="3">
      <v-text-field
        v-model.number="numberPrikaz"
        :disabled="editCheckbox"
        label="Введите номер приказа"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="1">
      <v-checkbox v-model="editCheckbox" label="Редактировать"></v-checkbox>
    </v-col>
    <v-col cols="12">
      <v-btn class="ma-2" outlined color="indigo" @click="formAnOrder"
        >Сформировать приказ</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
import { PrikazZachslenie } from "@/functions/PrikazZachislenie.js"
export default {
  props: {
    group: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    datePrikaz: new Date().toISOString().substr(0, 10),
    menu: false,
    editCheckbox: true,
    numberPrikaz: 222,
  }),
  methods: {
    formAnOrder() {
      return PrikazZachslenie(this.datePrikaz, this.numberPrikaz, this.group)
    },
  },
};
</script>
