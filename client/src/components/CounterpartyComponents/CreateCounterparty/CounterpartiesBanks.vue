<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      >Банковские реквизиты контрагента</v-expansion-panel-header
    >
    <v-expansion-panel-content>
      <v-row justify="center" class="mt-3">
        <v-dialog v-model="dialogBank" persistent max-width="1000px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on"
              >Добавить банковские реквизиты</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Банковские реквизиты</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      v-model="namebank"
                      label="Наименование банка"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="5" md="3">
                    <v-text-field
                      v-mask="'#########'"
                      v-model="bik"
                      label="БИК"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="5" md="3">
                    <v-text-field
                      v-mask="'####################'"
                      v-model="kscore"
                      label="Кор счет"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="5" md="3">
                    <v-text-field
                      v-mask="'####################'"
                      v-model="rscore"
                      label="Расчетный счет"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="3" md="3">
                    <v-text-field
                      v-model="lscore"
                      label="Лицевой счет"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="11" sm="3" md="3">
                    <v-text-field
                      v-model="bscore"
                      label="Бюджетный счет"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>Все поля обязательны для заполнения</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialogBank = false"
                >Отмена</v-btn
              >
              <v-btn color="blue darken-1" text @click="addBanks"
                >Сохранить</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-container fluid>
        <v-simple-table v-if="banks.length">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Название банка
                </th>
                <th class="text-left">БИК</th>
                <th class="text-left">
                  Кор счет
                </th>
                <th class="text-left">
                  Расчетный счет
                </th>
                <th class="text-left">
                  Лицевой счет
                </th>
                <th class="text-left">Бух счет</th>
                <th class="text-left">Удалить</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bank in banks" :key="bank.id">
                <td>{{ bank.namebank }}</td>
                <td>{{ bank.bik }}</td>
                <td>{{ bank.kscore }}</td>
                <td>{{ bank.rscore }}</td>
                <td>{{ bank.lscore }}</td>
                <td>{{ bank.bscore }}</td>
                <td>
                  <v-btn text color="red" @click="deleteBank(bank.id)"
                    >Удалить</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  data: () => ({
    dialogBank: false,
    namebank: null,
    bik: null,
    kscore: null,
    rscore: null,
    lscore: null,
    bscore: null,
    banks: [],
  }),
  methods: {
    addBanks() {
      const bank = {
        id: this.$uuid.v4(),
        namebank: this.namebank,
        bik: this.bik,
        kscore: this.kscore,
        rscore: this.rscore,
        lscore: this.lscore,
        bscore: this.bscore,
      };
      this.banks.push(bank);
      this.$notify({
        title: "СДО PRO",
        message: `Банковские реквизиты успешно добавлены`,
        type: "success",
      });
      this.$emit("addBanks", { banks: this.banks });
      this.dialogBank = false;
    },
    deleteBank(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Банковские реквизиты успешно удалены`,
        type: "success",
      });
      this.banks = this.banks.filter((bank) => bank.id !== id);
    },
  },
};
</script>
