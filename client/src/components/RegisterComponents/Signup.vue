<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Регистрация в СДО PRO</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
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
            <v-text-field
              :rules="PositionRules"
              v-model="position"
              label="Введите должность"
              autocomplete="off"
              prepend-icon="mdi-card-account-details-star"
            ></v-text-field>
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
          <v-btn color="primary" :disabled="!valid" @click="signup"
            >Зарегистрироваться</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  metaInfo: {
    title: "Регистрация | СДО PRO",
  },
  data: () => ({
    fio: null,
    position: null,
    email: null,
    password: null,
    valid: false,
    FioRules: [(v) => !!v || "Введите Фамилию Имя Отчество"],
    PositionRules: [(v) => !!v || "Введите пожалуйста должность"],
    emailRules: [
      (v) => !!v || "Введите Email",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
    passwordRules: [
      (v) => !!v || "Введите пароль",
      (v) => (v && v.length >= 8) || "Пароль должен быть минимум 8 символов",
    ],
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
    async signup() {
      const admin = {
        fio: this.fio,
        position: this.position,
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("/api/admin/register", admin);
        const token = response.data.token;
        if (token) {
          localStorage.setItem("userToken", token);
          this.$router.push("/tasks");
          this.$notify({
            title: "СДО PRO",
            message: "Вы успешно зарегистрированны в системе",
            type: "success",
          });
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else {
          this.$notify.error({
            title: "СДО PRO",
            message: "Ошибка регистрации, проверьте пожалуйста валидность введенных данных",
          });
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          this.$notify.error({
            title: "Если вылезла эта ошибка то сделайте пожалуйста скриншот и вышлите администрации",
            message: error.data.message,
          });
        } else {
          this.$notify.error({
            title: "Если вылезла эта ошибка то сделайте пожалуйста скриншот и вышлите администрации",
            message: error.data.err.message,
          });
        }
      }
    },
  },
};
</script>
