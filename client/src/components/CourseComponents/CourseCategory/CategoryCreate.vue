<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Создание категории обучения
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              class="mt-4 mb-4"
            >
              Создание категории
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Создание категории</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form v-model="valid">
                  <v-col cols="12">
                    <v-text-field
                      :rules="nameCategoryRules"
                      v-model="nameCategory"
                      label="Название категории"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      :rules="photoCategoryRules"
                      v-model="linkPhotoCategory"
                      label="Ссылка на фотографию"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      :rules="hoursCategoryRules"
                      v-model.number="trainingHours"
                      label="Количество часов обучения"
                    ></v-text-field>
                  </v-col>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false"
                >Отмена</v-btn
              >
              <v-btn
                color="blue darken-1"
                text
                :disabled="!valid"
                @click="createCategory"
                >Создать</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row>
        <list
          class="mt-4 mb-4 mr-4 ml-4"
          v-for="category in profile.allCategories"
          :key="category.id"
          :category="category"
          :profile="profile"
        />
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import list from "@/components/CourseComponents/CourseCategory/CategoryList";
import axios from "axios"
import { mapGetters } from "vuex";
export default {
  props: {
    profile: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    dialog: false,
    nameCategory: null,
    trainingHours: null,
    linkPhotoCategory: null,
    valid: false,
    nameCategoryRules: [(v) => !!v || "Введите пожалуйста название категории"],
    photoCategoryRules: [
      (v) => !!v || "Вставьте пожалуйста ссылку на фотографию",
    ],
    hoursCategoryRules: [
      (v) => !!v || "Укажите пожалуйста количество часов обучения",
    ],
  }),
  methods: {
    async createCategory() {
      const category = {
        id: this.$uuid.v4(),
        nameCategory: this.nameCategory,
        trainingHours: this.trainingHours,
        linkPhotoCategory: this.linkPhotoCategory,
      };
      this.profile.allCategories.push(category)
      const res = await axios.put("/api/course/" + this.profile._id, {...this.profile})
      this.dialog = false;
    },
  },
  components: {
    list,
  },
};
</script>
