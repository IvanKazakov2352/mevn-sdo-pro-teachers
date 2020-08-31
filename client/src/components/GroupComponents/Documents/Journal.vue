<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Имя слушателя</th>
          <th class="text-left">Уникальный ID пользователя</th>
          <th class="text-left">Процент прохождения теста</th>
          <th class="text-left">Оценка за тест</th>
          <th class="text-left">Посмотреть ошибки пользователя</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="test in journal" :key="test.percent">
          <td>{{ test.nameUser }}</td>
          <td>{{ test.userID }}</td>
          <td>{{ test.percent }}%</td>
          <td>{{ test.appraisal }} балла</td>
          <td>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="testUserOne(test)">
                  <v-icon>
                    mdi-checkbox-multiple-marked
                  </v-icon>
                </v-btn>
              </template>
              <span>Посмотреть ошибки пользователя</span>
            </v-tooltip>
            <v-dialog v-model="dialog" max-width="1400">
              <v-card>
                <v-container>
                  <v-row>
                    <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
                      <v-toolbar-title
                        >Результат теста для пользователя
                        {{ editedItemTest.nameUser }}! Процент прохождения
                        {{ editedItemTest.percent }}%. Оценка за тест
                        {{ editedItemTest.appraisal }} балла.</v-toolbar-title
                      >
                    </v-toolbar>
                  </v-row>
                </v-container>
                <div class="flex">
                  <v-card
                    v-for="vopros in editedItemTest.testQues"
                    :key="vopros.id"
                    class="mb-3 ml-3 mt-3 mr-3"
                    max-height="200"
                    width="460"
                    :color="
                      vopros.otvet !== vopros.answer
                        ? `deep-orange accent-2`
                        : `light-green accent-4`
                    "
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="headline">
                          {{ vopros.question }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          Ваш ответ: {{ vopros.otvet }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Правильный ответ: {{ vopros.answer }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Комментарий к вопросу: {{ vopros.comment }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Закрыть
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    journal: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    dialog: false,
    editedIndex: 0,
    editedItemTest: {},
  }),
  methods: {
    testUserOne(test) {
      this.editedIndex = this.journal.indexOf(test);
      this.editedItemTest = Object.assign({}, test);
      this.dialog = true;
    },
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
