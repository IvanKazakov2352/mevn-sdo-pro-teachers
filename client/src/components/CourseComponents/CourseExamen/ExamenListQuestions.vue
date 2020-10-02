<template>
  <v-col cols="12">
    <v-card>
      <v-simple-table v-if="questions.length">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Название вопроса</th>
              <th class="text-left">Правильный ответ</th>
              <th class="text-left">Неверный ответ</th>
              <th class="text-left">Неверный ответ 1</th>
              <th class="text-left">Неверный ответ 2</th>
              <th class="text-left">Неверный ответ 3</th>
              <th class="text-left">Комментарий к вопросу</th>
              <th class="text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ques in questions" :key="ques.id">
              <td>{{ ques.question }}</td>
              <td>{{ ques.answer }}</td>
              <td>{{ ques.wronganswer }}</td>
              <td>{{ ques.wronganswer1 }}</td>
              <td>{{ ques.wronganswer2 }}</td>
              <td>{{ ques.wronganswer3 }}</td>
              <td>{{ ques.comment }}</td>
              <td>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="updateQuestionDialog(ques.id)"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Редактирование вопроса</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="deleteQuestion(ques.id)"
                    >
                      <v-icon>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Удалить вопрос</span>
                </v-tooltip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteQuestion(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Вопрос успешно удален`,
        type: "success",
      });
      this.$emit("deleteQuestion", id);
    },
    updateQuestionDialog(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Вопрос успешно сохранен`,
        type: "success",
      });
      this.$emit("updateQuestionDialog", id);
    },
  },
};
</script>
