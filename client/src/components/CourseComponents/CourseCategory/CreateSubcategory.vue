<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Создание подкатегории
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создание подкатегории</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="nameSubcategory"
                    :rules="nameSubcategoryRules"
                    label="Название подкатегории"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="photoSubcategory"
                    :rules="photoSubcategoryRules"
                    label="Ссылка на фотографию"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="hoursTrainingSubcategory"
                    :rules="hoursTrainingSubcategoryRules"
                    label="Количество часов обучения"
                  ></v-text-field>
                </v-col>
              </v-row>
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
            @click="createSubcategory"
            >Создать</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Создание подкатегории для: {{ category.nameCategory }}
        </v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <SubcategoryList
        class="ml-9 mt-4 mb-4"
        v-for="subcategory in category.subCategories"
        :key="subcategory.id"
        :subcategory="subcategory"
        :category="category"
        :profile="profile"
      />
    </v-row>
  </v-row>
</template>
<script>
import axios from "axios";
import SubcategoryList from "@/components/CourseComponents/CourseCategory/SubcategoryList";
export default {
  props: {
    categoryID: {
      type: String,
      default: "",
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    valid: false,
    nameSubcategory: null,
    photoSubcategory: null,
    hoursTrainingSubcategory: null,
    profile: {},
    category: {},
    subCategories: [],
    nameSubcategoryRules: [(v) => !!v || "Укажите имя подкатегории"],
    photoSubcategoryRules: [(v) => !!v || "Вставьте ссылку на фотографию"],
    hoursTrainingSubcategoryRules: [
      (v) => !!v || "Укажите количество часов обучения",
    ],
  }),
  methods: {
    async getProfile() {
      const res = await axios.get("/api/course/" + this.$route.params.id);
      this.profile = res.data;
      this.category = this.profile.categories.find(
        (cats) => cats.id === this.categoryID
      );
    },
    async createSubcategory() {
      const subcategory = {
        id: this.$uuid.v4(),
        nameSubcategory: this.nameSubcategory,
        photoSubcategory: this.photoSubcategory,
        hoursTrainingSubcategory: this.hoursTrainingSubcategory,
      };
      this.category.subCategories.push(subcategory);
      const res = await axios.put("/api/course/" + this.profile._id, {
        ...this.profile,
      });
      this.profile = res.data;
      this.dialog = false;
    },
  },
  mounted() {
    this.getProfile();
  },
  components: {
    SubcategoryList,
  },
};
</script>
