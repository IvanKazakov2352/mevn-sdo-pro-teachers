<template>
  <v-container>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>Слушатели ({{ usersCount }})</v-toolbar-title>
    </v-toolbar>
    <v-alert v-if="!usersCount" type="info">
      Слушателей пока что нет, нажмите на кнопку добавить пользователя
    </v-alert>
    <v-card max-height="auto" max-width="auto" v-else>
      <div>
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="exportToExcel"
        >
          Экспорт таблицы в Excel
          <v-icon right dark>mdi-microsoft-excel</v-icon>
        </v-btn>
        <v-btn color="blue-grey" class="ma-2 white--text" @click="printTable">
          Печать таблицы
          <v-icon right dark>mdi-cloud-print</v-icon>
        </v-btn>
      </div>

      <v-col cols="12">
        <v-simple-table class="mr-2 ml-2" fixed-header id="Table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ФИО Слушателя</th>
                <th class="text-left">Дата регистрации</th>
                <th class="text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in paginateProduct" :key="user._id">
                <td>{{ user.fiolistener }}</td>
                <td>
                  {{ new Date(user.dateregister).toLocaleString() }}
                </td>
                <td>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <router-link
                        tag="button"
                        :to="{ name: 'user', params: { id: user._id } }"
                      >
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon>
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </router-link>
                    </template>
                    <span>Редактирование пользователя</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        @click="deleteUser(user._id)"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Удалить пользователя</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
          v-if="usersCount"
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
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    page: 1,
    userPerPage: 10,
    users: [],
    groups: [],
    data: [],
    group: null,
    list: null,
    listLoading: true,
    filename: "Пользователи",
    autoWidth: true,
    bookType: "xlsx",
  }),
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id)
    },
    printTable() {
      this.$htmlToPaper("Table");
    },
    exportToExcel() {
      import("../../vendor/Export2Excel").then((excel) => {
        const tHeader = [
          "ФИО Слушателя",
          "Номер телефона",
          "Почта",
          "Образование",
          "Снилс",
          "Дата регистрации",
        ];
        const filterVal = [
          "fiolistener",
          "phone",
          "email",
          "education",
          "snils",
          "dateregister",
        ];
        const list = this.users;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    pageClick(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapGetters(["allUsers", "usersCount"]),
    pages() {
      return Math.ceil(this.allUsers.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.userPerPage;
      const to = from + this.userPerPage;
      return this.allUsers.slice(from, to);
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers")
  },
};
</script>
<style scoped></style>
