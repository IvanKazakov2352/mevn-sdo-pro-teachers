<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-col cols="12">
            <v-btn
              class="mx-2"
              fab
              dark
              color="indigo"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Создание дополнительного администратора</span>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" autocomplete="off">
              <v-text-field
                :rules="FioRules"
                label="ФИО(Полностью)"
                v-model="fio"
                autocomplete="off"
                prepend-icon="mdi-account-box"
                type="text"
              ></v-text-field>
              <v-select
                :rules="PositionRules"
                v-model="position"
                :items="positions"
                item-text="pos"
                label="Выберите должность"
                prepend-icon="mdi-card-account-details-star"
                item-disabled="Ген Директор"
              ></v-select>
              <v-text-field
                :rules="emailRules"
                label="Email"
                v-model="email"
                autocomplete="off"
                prepend-icon="mdi-email"
                type="text"
              ></v-text-field>
              <v-text-field
                :rules="passwordRules"
                label="Пароль"
                v-model="password"
                autocomplete="off"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Отмена</v-btn
            >
            <v-btn color="blue darken-1" :disabled="!valid" text @click="createAdmin"
              >Создать</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="admins"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  data: () => ({
    fio: null,
    email: null,
    password: null,
    position: null,
    valid: false,
    dialog: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    FioRules: [(v) => !!v || "Введите Фамилию Имя Отчество"],
    PositionRules: [(v) => !!v || "Выберите пожалуйста должность"],
    emailRules: [
      (v) => !!v || "Введите Email",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
    passwordRules: [
      (v) => !!v || "Введите пароль",
      (v) => (v && v.length >= 8) || "Пароль должен быть минимум 8 символов",
    ],
    headers: [
      {
        text: "Существующие члены учебного центра",
        align: "start",
        sortable: false,
        value: "fio",
      },
      { text: "Должность", sortable: false, value: "position" },
    ],
    admins: [],
    positions: [
      { pos: "Ген Директор" },
      { pos: "Зам Директора" },
      { pos: "Гл Бухгалтер" },
      { pos: "Бухгалтер" },
      { pos: "Преподаватель" },
      { pos: "Младший преподаватель" },
    ],
  }),
  methods: {
    async getAdmins() {
      const res = await axios.get("/api/getAdmin");
      this.admins = await res.data;
    },
    async createAdmin() {
      const admin = {
        fio: this.fio,
        position: this.position,
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("/api/admin/register", admin);
        const token = response.data.token;
        sweetalert("Успех", "Регистрация прошла успешно", "success");
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          sweetalert("Error", error.data.message, "error");
        } else {
          sweetalert("Error", error.data.err.message, "error");
        }
      }
      this.dialog = false;
    },
  },
  async mounted() {
    await this.getAdmins();
  },
};
</script>
