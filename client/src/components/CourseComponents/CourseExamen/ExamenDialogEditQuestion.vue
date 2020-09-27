<template>
  <v-dialog v-model="dialogQuestionEdit" max-width="800">
    <v-card>
      <v-card-title class="headline">
        Редактирование вопроса: {{ quest.question }}
      </v-card-title>
      <v-card-text>
        <v-col cols="12">
          <v-text-field
            v-model="quest.question"
            label="Название вопроса"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="quest.answer"
            label="Правильный ответ"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="quest.wronganswer"
            label="Неверный ответ"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="quest.wronganswer1"
            label="Неверный ответ1"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="quest.wronganswer2"
            label="Неверный ответ2"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="quest.wronganswer3"
            label="Неверный ответ3"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="quest.comment"
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

        <v-btn color="green darken-1" text @click="updateQuestion">
          Редактировать вопрос
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialogQuestionEdit: {
      type: Boolean,
    },
    quest: {
      type: Object,
      default: {},
      required: true,
    },
  },
  methods: {
    updateQuestion() {
      this.$emit("updateQuestion", this.quest);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit("closeDialogEdit");
    },
  },
};
</script>
