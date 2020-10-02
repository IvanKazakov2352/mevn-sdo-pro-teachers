<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Редактирование тестирования: {{ testing.nameTest }}
        </v-toolbar-title>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>Дополнительные настройки</v-subheader>
        <v-form v-model="valid">
          <v-list-item>
            <v-col cols="4">
              <v-text-field
                :rules="nameTestRules"
                v-model="testing.nameTest"
                label="Название тестирования"
              ></v-text-field>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-col cols="4">
              <v-text-field
                :rules="photoTestRules"
                v-model="testing.photoTest"
                label="Фотография тестирования"
              ></v-text-field>
            </v-col>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="testing.dostupTest"></v-checkbox>
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
            :questions="testing.questions"
            @deleteQuestion="deleteQuestion"
            @updateQuestionDialog="updateQuestionDialog"
          />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn
          class="ma-2"
          x-large
          tile
          outlined
          color="success"
          @click="updateTest"
        >
          <v-icon left>mdi-pencil</v-icon> Сохранить
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
const ExamenDialogImportExcelData = () => import("../CourseExamen/ExamenDialogImportExcelData");
const ExamenDialogAddQuestion = () => import("../CourseExamen/ExamenDialogAddQuestion");
const ExamenDialogEditQuestion = () => import("../CourseExamen/ExamenDialogEditQuestion");
const TestingQuestionsList = () => import("./TestingQuestionList");
import { exportToExcel } from "@/utils/ExportExcelQuestionFile.js";
import ShablonQuestion from "@/components/CourseComponents/test.json";
export default {
  metaInfo: {
    title: "Редактирование тестирования | СДО PRO",
  },
  data: () => ({
    valid: false,
    dialogQuestion: false,
    dialogQuestionTable: false,
    dialogQuestionEdit: false,
    array: ShablonQuestion.arr,
    quest: {},
    nameTestRules: [(v) => !!v || "Введите название тестирования"],
    photoTestRules: [
      (v) => !!v || "Добавьте ссылку на фотографию тестирования",
    ],
  }),
  methods: {
    exportFileQuestion() {
      return exportToExcel(this.array);
    },
    handleSuccess(data) {
      this.testing.questions = data.results;
    },
    addQuestionToTests(question) {
      this.testing.questions.push(question);
      this.dialogQuestion = false;
    },
    updateQuestionDialog(id) {
      this.quest = this.testing.questions.find((ques) => ques.id === id);
      this.dialogQuestionEdit = true;
    },
    deleteQuestion(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Вопрос успешно удален`,
        type: "success",
      });
      this.testing.questions = this.testing.questions.filter(
        (ques) => ques.id !== id
      );
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
    updateTest() {
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.$router.go(-1);
    },
  },
  computed: {
    testing() {
      return this.$store.getters.test(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectTestID,
        this.$route.params.testID
      );
    },
  },
  components: {
    ExamenDialogImportExcelData,
    ExamenDialogAddQuestion,
    ExamenDialogEditQuestion,
    TestingQuestionsList,
  },
};
</script>
