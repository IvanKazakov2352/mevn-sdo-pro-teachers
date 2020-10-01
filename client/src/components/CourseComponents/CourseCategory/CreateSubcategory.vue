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
      />
    </v-row>
  </v-row>
</template>
<script>
const SubcategoryList = () => import("./SubcategoryList")
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Создание подкатегории обучения | СДО PRO",
  },
  data: () => ({
    dialog: false,
    valid: false,
    nameSubcategory: null,
    photoSubcategory: null,
    hoursTrainingSubcategory: null,
    subCategories: [],
    modules: [],
    nameSubcategoryRules: [(v) => !!v || "Укажите имя подкатегории"],
    photoSubcategoryRules: [(v) => !!v || "Вставьте ссылку на фотографию"],
    hoursTrainingSubcategoryRules: [
      (v) => !!v || "Укажите количество часов обучения",
    ],
  }),
  methods: {
    async createSubcategory() {
      const subcategory = {
        id: this.$uuid.v4(),
        routeID: this.$route.params.id,
        nameSubcategory: this.nameSubcategory,
        photoSubcategory: this.photoSubcategory,
        hoursTrainingSubcategory: this.hoursTrainingSubcategory,
        modules: this.modules,
      };
      this.$notify({
        title: "СДО PRO",
        message: `Подкатегория обучения ${this.nameSubcategory} успешно создана`,
        type: "success",
      });
      this.category.subCategories.push(subcategory);
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.dialog = false;
    },
  },
  computed: {
    category() {
      return this.$store.getters.category(this.$route.params.categoryID);
    },
  },
  components: {
    SubcategoryList,
  },
};
</script>
