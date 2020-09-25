<template>
  <v-dialog v-model="dialogQuestion" max-width="800">
    <v-card>
      <v-card-title class="headline">
        Добавление вопроса
      </v-card-title>
      <v-card-text>
        <v-col cols="12">
          <v-text-field
            v-model="question"
            label="Название вопроса"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="answer"
            label="Правильный ответ"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="wronganswer"
            label="Неверный ответ"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="wronganswer1"
            label="Неверный ответ1"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="wronganswer2"
            label="Неверный ответ2"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="wronganswer3"
            label="Неверный ответ3"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="comment"
            outlined
            label="Комментарий к вопросу"
          ></v-textarea>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="closeDialog">
          Отмена
        </v-btn>

        <v-btn color="green darken-1" text @click="addQuestionToTests">
          Добавить вопрос
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialogQuestion: {
      type: Boolean,
    },
  },
  data: () => ({
    question: null,
    answer: null,
    wronganswer: null,
    wronganswer1: null,
    wronganswer2: null,
    wronganswer3: null,
    comment: null,
  }),
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    addQuestionToTests() {
      this.$emit("addQuestionToTest", {
        question: this.question,
        answer: this.answer,
        wronganswer: this.wronganswer,
        wronganswer1: this.wronganswer1,
        wronganswer2: this.wronganswer2,
        wronganswer3: this.wronganswer3,
        comment: this.comment,
      });
      this.closeDialog()
    },
  },
};
</script>
