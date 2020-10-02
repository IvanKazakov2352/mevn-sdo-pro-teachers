<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Создание тестирования
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="blue darken-3">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Создание тестирования</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn :disabled="!valid" dark text @click="addTestingToLection"
              >Создать</v-btn
            >
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Дополнительные настройки</v-subheader>
          <v-form v-model="valid">
            <v-list-item>
              <v-col cols="4">
                <v-text-field
                  :rules="nameTestRules"
                  v-model="nameTest"
                  label="Название тестирования"
                ></v-text-field>
              </v-col>
            </v-list-item>
            <v-list-item>
              <v-col cols="4">
                <v-text-field
                  :rules="photoTestRules"
                  v-model="photoTest"
                  label="Фотография тестирования"
                ></v-text-field>
              </v-col>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="dostupTest"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Доступ до теста
                </v-list-item-title>
                <v-list-item-subtitle>
                  Разрешить доступ слушателю до тестирования
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-form>
        </v-list>
        <v-list three-line subheader>
          <v-list-item>
            <v-list-item-content>
              <v-row justify="start">
                <v-col>
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
                </v-col>
              </v-row>
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
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-col cols="12">
          <v-card>
            <TestingQuestionsList
              :questions="questions"
              @deleteQuestion="deleteQuestion"
              @updateQuestionDialog="updateQuestionDialog"
            />
          </v-card>
        </v-col>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <TestingList :lection="lectionContent" />
    </v-col>
  </v-row>
</template>
<script>
const TestingList = () => import("./TestingList");
const ExamenDialogImportExcelData = () => import("../CourseExamen/ExamenDialogImportExcelData");
const ExamenDialogAddQuestion = () => import("../CourseExamen/ExamenDialogAddQuestion");
const ExamenDialogEditQuestion = () => import("../CourseExamen/ExamenDialogEditQuestion");
const TestingQuestionsList = () => import("./TestingQuestionList");
import ShablonQuestion from "@/components/CourseComponents/test.json";
import { exportToExcel } from "@/utils/ExportExcelQuestionFile.js";
export default {
  metaInfo: {
    title: "Создание тестирования | СДО PRO",
  },
  data: () => ({
    dialog: false,
    dialogQuestion: false,
    dialogQuestionTable: false,
    dialogQuestionEdit: false,
    dostupTest: false,
    nameTest: null,
    photoTest: null,
    valid: false,
    array: ShablonQuestion.arr,
    questions: [],
    quest: {},
    nameTestRules: [(v) => !!v || "Введите название тестирования"],
    photoTestRules: [
      (v) => !!v || "Добавьте ссылку на фотографию тестирования",
    ],
    excelData: {
      header: null,
      results: null,
    },
  }),
  methods: {
    exportFileQuestion() {
      return exportToExcel(this.array);
    },
    addTestingToLection() {
      const test = {
        id: this.$uuid.v4(),
        nameTest: this.nameTest,
        photoTest: this.photoTest,
        dostupTest: this.dostupTest,
        questions: this.questions,
      };
      this.$notify({
        title: "СДО PRO",
        message: `Тест ${this.nameTest} успешно добавлен`,
        type: "success",
      });
      this.lectionContent.tests.push(test);
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.dialog = false;
    },
    addQuestionToTests(question) {
      this.questions.push(question);
      this.dialogQuestion = false;
    },
    deleteQuestion(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Вопрос успешно удален`,
        type: "success",
      });
      this.questions = this.questions.filter((ques) => ques.id !== id);
    },
    updateQuestionDialog(id) {
      this.quest = this.questions.find((ques) => ques.id === id);
      this.dialogQuestionEdit = true;
    },
    updateQuestion() {
      this.$notify({
        title: "СДО PRO",
        message: `Вопрос успешно сохранен`,
        type: "success",
      });
      this.quest = Object.assign(this.quest);
      this.dialogQuestionEdit = false;
    },
    handleSuccess(data) {
      this.questions = data.results;
    },
  },
  computed: {
    lectionContent() {
      return this.$store.getters.lection(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectTestID
      );
    },
  },
  components: {
    TestingList,
    ExamenDialogImportExcelData,
    ExamenDialogAddQuestion,
    ExamenDialogEditQuestion,
    TestingQuestionsList,
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
