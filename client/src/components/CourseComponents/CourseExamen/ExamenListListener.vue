<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Таблица слушателей прошедших экзамен: {{ examen.nameExamen }}
        </v-toolbar-title>
      </v-toolbar>
      <v-col>
        <v-btn class="ma-2" outlined color="indigo" @click="exportExcelUsers"
          >Экспорт результатов тестирования в Excel</v-btn
        >
        <v-card width="auto" height="auto">
          <v-col cols="12">
            <v-simple-table fixed-header id="Table">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Имя слушателя</th>
                    <th class="text-left">Процент прохождения теста</th>
                    <th class="text-left">Оценка за тестирование</th>
                    <th class="text-left">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="listener in paginateProduct" :key="listener.id">
                    <td>{{ listener.userName }}</td>
                    <td>{{ listener.percent }}%</td>
                    <td>{{ listener.appraisal }}</td>
                    <td>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                            @click="deleteResult(listener.id)"
                          >
                            <v-icon>
                              mdi-delete
                            </v-icon>
                          </v-btn>
                        </template>
                        <span>Удалить группу</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                            @click="showTestResult(listener.id)"
                          >
                            <v-icon>
                              mdi-transcribe
                            </v-icon>
                          </v-btn>
                        </template>
                        <span>Результат прохождения тестирования</span>
                      </v-tooltip>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-pagination
              v-model="page"
              :length="pages"
              :click-handler="pageClick"
              :total-visible="3"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              color="blue"
            ></v-pagination>
          </v-col>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import { exportToExcel } from "@/utils/ExportFinalTesting";
export default {
  metaInfo: {
    title: "Итоги прохождения данного тестирования | СДО PRO",
  },
  data: () => ({
    page: 1,
    listenersPerPage: 10,
    listener: {},
    loading: true,
  }),
  methods: {
    pageClick(page) {
      this.page = page;
    },
    deleteResult(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Результат пользователя успешно удален`,
        type: "success",
      });
      this.examen.listeners = this.examen.listeners.filter((listener) => listener.id !== id);
      this.$store.dispatch("updateProfile", this.$route.params.id);
    },
    exportExcelUsers() {
      return exportToExcel(this.examen.listeners);
    },
    showTestResult(id) {
      this.listener = this.examen.listeners.find((l) => l.id === id);
    },
  },
  computed: {
    examen() {
      return this.$store.getters.examen(this.$route.params.examenID);
    },
    pages() {
      return Math.ceil(this.examen.listeners.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.listenersPerPage;
      const to = from + this.listenersPerPage;
      return this.examen.listeners.slice(from, to);
    },
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
