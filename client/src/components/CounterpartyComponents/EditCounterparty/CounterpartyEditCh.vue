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
            :return-value.sync="counterparty.date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="counterparty.date"
                label="Дата рождения"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="counterparty.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(counterparty.date)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.birthday"
            label="Место рождения"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-select
            v-model="counterparty.education"
            :items="educations"
            label="Образование"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-mask="'8(###) ###-##-##'"
            v-model="counterparty.phone"
            label="Tелефон"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.email"
            label="Email"
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
            v-model="counterparty.address"
            label="Адрес регистрации"
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
            v-mask="'###-###-###-##'"
            v-model="counterparty.snils"
            label="Снилс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.pasport"
            label="Паспорт"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="counterparty.date1"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="counterparty.date1"
                label="Дата получения"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="counterparty.date1" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu1.save(counterparty.date1)"
                >OK</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="counterparty.vpasport"
            label="Выдан(Паспорт)"
          ></v-text-field>
        </v-col>
      </v-row>
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
    menu: false,
    menu1: false,
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
  watch: {
    counterparty() {
      this.$emit("postDopDataCh", this.counterparty);
    }
  },
};
</script>
