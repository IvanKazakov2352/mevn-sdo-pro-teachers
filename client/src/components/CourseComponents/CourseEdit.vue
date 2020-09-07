<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>Модуль обучения</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-row justify="center" class="mr-4 ml-4">
        <v-expansion-panels focusable class="mt-4">
          <v-expansion-panel>
            <v-expansion-panel-header
              >Редактирование профиля</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-col cols="12" sm="3">
                <v-text-field
                  :rules="nameModuleRules"
                  v-model="profile.nameProfile"
                  label="Название профиля обучения"
                ></v-text-field>
              </v-col>
              <v-list three-line subheader>
                <v-subheader
                  >Дополнительное управление профилем обучения</v-subheader
                >
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="profile.dostupOnModule"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      >Доступ слушателя до модуля</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      Разрешить ли доступ слушателя до модуля обучения
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="profile.dostupOnTests"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      >Доступ слушателя до тестов</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      Разрешить ли доступ слушателю до тестов
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="profile.dostupOnLections"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      >Доступ слушателю до лекций</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      Разрешить ли доступ слушателю до лекций
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <category :profile="profile" />
        </v-expansion-panels>
        <v-col cols="12">
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="success"
            @click="updateProfile"
          >
            <v-icon left>mdi-pencil</v-icon> Редактировать
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import category from "@/components/CourseComponents/CourseCategory/CategoryCreate";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    nameCategory: null,
    trainingHours: 0,
    profile: {},
    nameModuleRules: [(v) => !!v || "Укажите пожалуйста имя профиля обучения"],
  }),
  methods: {
    async getProfile() {
      const res = await axios.get("/api/course/" + this.$route.params.id);
      this.profile = res.data;
    },
    async updateProfile() {
      this.profile = Object.assign(this.profile);
      const res = await axios.put("/api/course/" + this.$route.params.id, {
        ...this.profile,
      });
      this.profile = res.data;
      this.$router.push({
        name: "courses",
        query: { message: "profile updated" },
      });
    },
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  mounted() {
    this.getProfile();
  },
  components: {
    category,
  },
};
</script>
