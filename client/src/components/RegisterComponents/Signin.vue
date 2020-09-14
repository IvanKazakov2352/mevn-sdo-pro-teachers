<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти в СДО PRO</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              :rules="emailRules"
              label="Email"
              v-model="email"
              prepend-icon="mdi-email"
              type="text"
            ></v-text-field>
            <v-text-field
              :rules="passwordRules"
              label="Пароль"
              v-model="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!valid" @click="signin"
            >Войти</v-btn
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
    title: "Авторизация | СДО PRO",
  },
  data: () => ({
    email: null,
    password: null,
    loading: false,
    valid: false,
    emailRules: [
      (v) => !!v || "Введите Email",
      (v) => /.+@.+\..+/.test(v) || "Введите корректный Email",
    ],
    passwordRules: [
      (v) => !!v || "Введите пароль",
      (v) => (v && v.length >= 8) || "Пароль должен быть минимум 8 символов",
    ],
  }),
  methods: {
    async signin() {
      const admin = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post("/api/admin/login", admin);
        const token = response.data.token;
        localStorage.setItem("userToken", token);
        if (token) {
          this.$router.push("/tasks");
          sweetalert("Успех", "Регистрация прошла успешно", "success");
          setTimeout(() => {
            location.reload();
          }, 2000);
        } else sweetalert("Ошибка", "Ошибка авторизации", "Error");
      } catch (err) {
        sweetalert("Ошибка", "Ошибка авторизации", "error");
        console.log(err.response);
      }
    },
  },
};
</script>
