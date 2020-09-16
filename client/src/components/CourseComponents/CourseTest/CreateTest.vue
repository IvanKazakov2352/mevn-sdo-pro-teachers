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

                    <v-btn color="green darken-1" text @click="updateQuestion">
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
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
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

        <v-divider></v-divider>
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
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <TestingList :lection="lectionContent" />
    </v-col>
  </v-row>
</template>
<script>
import TestingList from "@/components/CourseComponents/CourseTest/TestingList";
import ExcelImportData from "@/components/CourseComponents/CourseTest/ExcelImportComponent";
import ShablonQuestion from "@/components/CourseComponents/test.json";
import { exportToExcel } from "@/functions/ExportExcelQuestionFile.js";
import XLSX from "xlsx";
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
    question: null,
    answer: null,
    wronganswer: null,
    wronganswer1: null,
    wronganswer2: null,
    wronganswer3: null,
    comment: null,
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
      this.lectionContent.tests.push(test);
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
    updateQuestion() {
      this.quest = Object.assign(this.quest);
      this.dialogQuestionEdit = false;
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
      this.dialogQuestionTable = false
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
    ExcelImportData,
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
