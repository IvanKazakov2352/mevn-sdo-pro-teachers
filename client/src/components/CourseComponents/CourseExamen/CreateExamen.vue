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
                    Базовая настройка экзаменационного теста
                  </v-list-item-title>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model="nameExamen"
                      label="Название экзаменационного теста"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model.number="appraisal3"
                      label="Процент прохождения теста на оценку 3"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model.number="appraisal4"
                      label="Процент прохождения теста на оценку 4"
                    ></v-text-field>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-col cols="12" sm="3">
                    <v-text-field
                      v-model.number="appraisal5"
                      label="Процент прохождения теста на оценку 5"
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
                <ExamenDialogImportExcelData
                  :dialogQuestionTable="dialogQuestionTable"
                  @closeDialog="dialogQuestionTable = false"
                  @handleSuccess="handleSuccess"
                />
                <ExamenDialogAddQuestion
                  :dialogQuestion="dialogQuestion"
                  @closeDialog="dialogQuestion = false"
                  @addQuestionToTest="addQuestionToTests"
                />
                <ExamenDialogEditQuestion
                  :dialogQuestionEdit="dialogQuestionEdit"
                  :quest="quest"
                  @closeDialogEdit="dialogQuestionEdit = false"
                  @updateQuestion="updateQuestion"
                />
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
const ExamenListQuestions = () => import("./ExamenListQuestions");
const ExamensListItem = () => import("./ExamenList");
const ExamenDialogImportExcelData = () => import("./ExamenDialogImportExcelData");
const ExamenDialogAddQuestion = () => import("./ExamenDialogAddQuestion");
const ExamenDialogEditQuestion = () => import("./ExamenDialogEditQuestion");
import ShablonQuestion from "@/components/CourseComponents/test.json";
import { exportToExcel } from "@/functions/ExportExcelQuestionFile.js";
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
    appraisal3: null,
    appraisal4: null,
    appraisal5: null,
    array: ShablonQuestion.arr,
    questions: [],
    quest: {},
    examens: [],
    listeners: [],
  }),
  methods: {
    addTestToExamen() {
      const exam = {
        id: this.$uuid.v4(),
        nameExamen: this.nameExamen,
        countExam: this.countExam,
        photoExamen: this.photoExamen,
        questions: this.questions,
        listeners: this.listeners,
        appraisal3: this.appraisal3,
        appraisal4: this.appraisal4,
        appraisal5: this.appraisal5,
      };
      this.profile.examens.push(exam);
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.dialog = false;
    },
    addQuestionToTests(question) {
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
      this.profile.examens = this.profile.examens.filter((examen) => examen.id !== id);
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
    exportFileQuestion() {
      return exportToExcel(this.array);
    },
    handleSuccess(data) {
      this.questions = data.results;
    },
  },
  components: {
    ExamenListQuestions,
    ExamensListItem,
    ExamenDialogAddQuestion,
    ExamenDialogEditQuestion,
    ExamenDialogImportExcelData,
  },
};
</script>
