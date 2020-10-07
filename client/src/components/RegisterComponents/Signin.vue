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
export default {
  metaInfo: {
    title: "Авторизация | СДО PRO",
  },
  data: () => ({
    email: null,
    password: null,
    loading: false,
    valid: false,
    photo: null,
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
        const res = await axios.post("/api/auth/login", admin);
        const message = res.data.message;
        if (message === "Вы успешно авторизованы в системе") {
          this.$notify({
            title: "СДО PRO",
            message,
            type: "success",
          });
          this.$router.push("/tasks");
          setTimeout(() => {
            location.reload();
          }, 1000);
          this.$store.commit("setAdmin", res.data.user)
        } else if (message === "Неверный пароль, введите еще раз") {
          this.$notify.error({
            title: "СДО PRO",
            message,
          });
        } else if (message === "Пользователь с данным email не найден в системе") {
          this.$notify.error({
            title: "СДО PRO",
            message,
          });
        }
      } catch (err) {
        this.$notify.error({
          title: "СДО PRO",
          message,
        });
      }
    },
  },
};
</script>
