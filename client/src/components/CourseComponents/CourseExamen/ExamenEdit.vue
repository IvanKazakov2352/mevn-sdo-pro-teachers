<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Редактирование экзаминационного теста: {{ examen.nameExamen }}
        </v-toolbar-title>
      </v-toolbar>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="examen.nameExamen"
          label="Название экзамена"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model.number="examen.countExam"
          label="Количество попыток сдачи экзамена"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          v-model="examen.photoExamen"
          label="Фотография для экзамена"
          id="photo"
        ></v-text-field>
        <v-btn text small color="primary" @click="selectlinkPhoto"
          >Выделить ссылку</v-btn
        >
      </v-col>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="examen.dostupExamen"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Доступ до сдачи экзамена</v-list-item-title>
          <v-list-item-subtitle
            >Разрешить доступ до экзамена, слушателям которые входят в данный
            профиль обучения</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
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
                @click="exportToExcel"
              >
                Скачать шаблон
              </v-btn>
            </template>
            <span>Скачать шаблон для вопросов(Excel файл)</span>
          </v-tooltip>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-simple-table>
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
                <tr v-for="ques in examen.questions" :key="ques.id">
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
                          @click="updateDialogQuestion(ques.id)"
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
      <v-col cols="12">
        <ExamenDialogImportExcelData
          :dialogQuestionTable="dialogQuestionTable"
          @closeDialog="dialogQuestionTable = false"
          @handleSuccess="handleSuccess"
        />
        <ExamenDialogAddQuestion
          :dialogQuestion="dialogQuestion"
          @closeDialog="dialogQuestion = false"
          @addQuestionToTest="addQuestionToTest"
        />
        <ExamenDialogEditQuestion
          :dialogQuestionEdit="dialogQuestionEdit"
          :quest="quest"
          @closeDialogEdit="dialogQuestionEdit = false"
          @updateQuestion="updateQuestion"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          class="ma-2"
          x-large
          tile
          outlined
          color="success"
          @click="updateExamTest"
        >
          <v-icon left>mdi-pencil</v-icon> Сохранить
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import shablon from "../test.json";
import { exportToExcel } from "@/functions/ExportExcelQuestionFile.js";
const ExcelImportData = () => import("../CourseTest/ExcelImportComponent");
const ExamenDialogAddQuestion = () => import("./ExamenDialogAddQuestion");
const ExamenDialogEditQuestion = () => import("./ExamenDialogEditQuestion");
const ExamenDialogImportExcelData = () => import("./ExamenDialogImportExcelData");
export default {
  metaInfo: {
    title: "Редактирование экзамена | СДО PRO",
  },
  data: () => ({
    array: shablon.arr,
    quest: {},
    dialogQuestion: false,
    dialogQuestionEdit: false,
    dialogQuestionTable: false,
  }),
  methods: {
    selectlinkPhoto() {
      document.querySelector("#photo").select();
    },
    deleteQuestion(id) {
      this.examen.questions = this.examen.questions.filter(ques => ques.id !== id);
    },
    updateDialogQuestion(id) {
      this.quest = this.examen.questions.find(ques => ques.id === id);
      this.dialogQuestionEdit = true;
    },
    updateQuestion(data) {
      this.quest = data;
    },
    updateExamTest() {
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.$router.go(-1)
    },
    addQuestionToTest(data) {
      this.examen.questions.push(data);
    },
    exportToExcel() {
      return exportToExcel(this.array);
    },
    handleSuccess(data) {
      this.examen.questions = data.results;
    },
  },
  computed: {
    examen() {
      return this.$store.getters.examen(this.$route.params.examenID);
    },
  },
  components: {
    ExcelImportData,
    ExamenDialogAddQuestion,
    ExamenDialogEditQuestion,
    ExamenDialogImportExcelData,
  },
};
</script>
