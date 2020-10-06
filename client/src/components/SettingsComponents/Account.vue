<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Аккаунт преподавателя</v-toolbar-title>
      </v-toolbar>
      <v-card class="ml-3 mr-3" max-width="auto" max-height="auto">
        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              :src="adminOne.photo"
              max-height="300"
              max-width="350"
              class="ml-3"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="adminOne.fio"
              label="Имя преподавателя"
            ></v-text-field>
            <v-text-field
              v-model="adminOne.email"
              label="Email преподавателя"
            ></v-text-field>
            <v-text-field
              v-model="adminOne.position"
              label="Должность"
            ></v-text-field>
            <v-text-field
              v-model="adminOne.photo"
              label="Ссылка на фотографию"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              class="ml-3"
              outlined
              color="indigo"
              @click="updateAccount(adminOne)"
              >Сохранить профиль</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Аккаунт преподавателя | СДО PRO",
    admin: {},
  },
  methods: {
    updateAccount(adminOne) {
      this.admin = adminOne;
      this.$store.dispatch("updateAdmin", this.admin);
      this.$notify({
        title: "СДО PRO",
        message: "Настройки аккаунта успешно сохранены",
        type: "success",
      });
    },
  },
  computed: {
    ...mapGetters(["adminOne"]),
  },
};
</script>
