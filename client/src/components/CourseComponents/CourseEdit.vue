<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title
        >Профиль обучения: {{ profile.nameProfile }}</v-toolbar-title
      >
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
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <Category :profile="profile" />
          <Examen :profile="profile" />
        </v-expansion-panels>
        <v-col cols="12">
          <v-btn
            class="ma-2"
            x-large
            tile
            outlined
            color="success"
            @click="updateProfile(profile)"
          >
            <v-icon left>mdi-pencil</v-icon> Сохранить
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
const Category = () => import("./CourseCategory/CategoryCreate")
const Examen = () => import("./CourseExamen/CreateExamen")
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Редактирование профиля обучения | СДО PRO",
  },
  data: () => ({
    nameModuleRules: [(v) => !!v || "Укажите пожалуйста имя профиля обучения"],
  }),
  methods: {
    updateProfile(profile) {
      this.$notify({
        title: "СДО PRO",
        message: `Профиль обучения ${profile.nameProfile} успешно сохранен`,
        type: "success",
      });
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.$router.push({
        name: "courses",
        query: { message: "ProfileUpdated" + `(${Date.now()})` },
      });
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  mounted() {
    this.$store.dispatch("fetchModule", this.$route.params.id);
  },
  components: {
    Category,
    Examen,
  },
};
</script>
