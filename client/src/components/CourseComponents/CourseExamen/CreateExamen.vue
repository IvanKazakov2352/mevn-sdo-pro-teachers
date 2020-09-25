<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Создание экзамена для данного профиля
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-4" color="primary" dark v-bind="attrs" v-on="on">
              Перейти к настройке экзамена
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Формирование экзамена</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="addTestToExamen"
                  >Сформировать экзамен</v-btn
                >
              </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    Базовая настройка экзамена
                  </v-list-item-title>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model="nameExamen"
                      label="Название экзамена"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model.number="countExam"
                      label="Количество попыток сдачи экзамена"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model="photoExamen"
                      label="Фотография для экзамена"
                      id="photo"
                    ></v-text-field>
                    <v-btn text small color="primary" @click="selectlinkPhoto"
                      >Выделить ссылку</v-btn
                    >
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="dostupExamen"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title
                    >Доступ до сдачи экзамена</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >Разрешить доступ до экзамена, слушателям которые входят в
                    данный профиль обучения</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12">
                    <v-row>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="ma-2"
                            outlined
                            v-bind="attrs"
                            v-on="on"
                            color="indigo"
                            @click="dialogQuestion = true"
                          >
                            Добавить вопрос
                          </v-btn>
                        </template>
                        <span>Добавить вопрос в ручном режиме</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="ma-2"
                            outlined
                            color="indigo"
                            v-bind="attrs"
                            v-on="on"
                            @click="dialogQuestionTable = true"
                          >
                            Добавить вопросы списком
                          </v-btn>
                        </template>
                        <span>Добавить вопросы списком Excel файл</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="ma-2"
                            outlined
                            color="indigo"
                            v-bind="attrs"
                            v-on="on"
                            @click="exportFileQuestion"
                          >
                            Скачать шаблон
                          </v-btn>
                        </template>
                        <span>Скачать шаблон для вопросов(Excel файл)</span>
                      </v-tooltip>
                    </v-row>
                  </v-col>
                </v-list-item-content>
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

                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogQuestion = false"
                      >
                        Отмена
                      </v-btn>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="addQuestionToTests"
                      >
                        Добавить вопрос
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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

                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogQuestionEdit = false"
                      >
                        Отмена
                      </v-btn>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="updateQuestion"
                      >
                        Редактировать вопрос
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogQuestionTable" max-width="650">
                  <v-card>
                    <v-card-title class="headline"
                      >Добавление вопросов списком</v-card-title
                    >

                    <v-card-text>
                      <ExcelImportData
                        :on-success="handleSuccess"
                        :before-upload="beforeUpload"
                      />
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialogQuestionTable = false"
                      >
                        Отмена
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-item>
              <ExamenListQuestions
                :questions="questions"
                @deleteQuestion="deleteQuestion"
                @updateQuestionDialog="updateQuestionDialog"
              />
            </v-list>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row>
        <ExamensListItem
          class="mt-4 mb-4 mr-4 ml-4"
          v-for="examen in profile.examens"
          :key="examen.id"
          :examen="examen"
          @updateExamen="updateExamen"
          @deleteExamen="deleteExamen"
        />
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import ShablonQuestion from "@/components/CourseComponents/test.json";
import { exportToExcel } from "@/functions/ExportExcelQuestionFile.js";
const ExcelImportData = () =>
  import("@/components/CourseComponents/CourseTest/ExcelImportComponent");
const ExamenListQuestions = () => import("./ExamenListQuestions");
const ExamensListItem = () => import("./ExamenList");
export default {
  props: {
    profile: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    dialogQuestion: false,
    dialogQuestionTable: false,
    dialogQuestionEdit: false,
    nameExamen: null,
    countExam: null,
    photoExamen: null,
    dostupExamen: false,
    question: null,
    answer: null,
    wronganswer: null,
    wronganswer1: null,
    wronganswer2: null,
    wronganswer3: null,
    comment: null,
    array: ShablonQuestion.arr,
    questions: [],
    quest: {},
    examens: [],
  }),
  methods: {
    addTestToExamen() {
      const exam = {
        id: this.$uuid.v4(),
        nameExamen: this.nameExamen,
        countExam: this.countExam,
        photoExamen: this.photoExamen,
        questions: this.questions,
      };
      this.profile.examens.push(exam);
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.dialog = false;
    },
    addQuestionToTests() {
      const question = {
        id: this.$uuid.v4(),
        question: this.question,
        answer: this.answer,
        wronganswer: this.wronganswer,
        wronganswer1: this.wronganswer1,
        wronganswer2: this.wronganswer2,
        wronganswer3: this.wronganswer3,
        comment: this.comment,
      };
      this.questions.push(question);
      this.dialogQuestion = false;
    },
    deleteQuestion(id) {
      this.questions = this.questions.filter((ques) => ques.id !== id);
    },
    updateQuestionDialog(id) {
      this.quest = this.questions.find((ques) => ques.id === id);
      this.dialogQuestionEdit = true;
    },
    deleteExamen(id) {
      this.profile.examens = this.profile.examens.filter(
        (examen) => examen.id !== id
      );
      this.$store.dispatch("updateProfile", this.$route.params.id);
    },
    updateExamen(examen) {
      this.$router.push({ name: "examen", params: { examenID: examen.id } });
    },
    updateQuestion() {
      this.quest = Object.assign(this.quest);
      this.dialogQuestionEdit = false;
    },
    selectlinkPhoto() {
      document.querySelector("#photo").select();
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.questions = results;
      this.tableHeader = header;
      this.dialogQuestionTable = false;
    },
    exportFileQuestion() {
      return exportToExcel(this.array);
    },
  },
  components: {
    ExcelImportData,
    ExamenListQuestions,
    ExamensListItem,
  },
};
</script>
