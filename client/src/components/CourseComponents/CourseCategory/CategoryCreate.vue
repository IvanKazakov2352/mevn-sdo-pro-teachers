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
        <CategoryList
          class="mt-4 mb-4 mr-4 ml-4"
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :nameProfile="profile.nameProfile"
        />
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
const CategoryList = () => import("./CategoryList");
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Создание категории обучения | СДО PRO",
  },
  props: {
    profile: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => ({
    dialog: false,
    nameCategory: null,
    trainingHours: null,
    linkPhotoCategory: null,
    valid: false,
    subCategories: [],
    nameCategoryRules: [(v) => !!v || "Введите пожалуйста название категории"],
    photoCategoryRules: [
      (v) => !!v || "Вставьте пожалуйста ссылку на фотографию",
    ],
  }),
  methods: {
    async createCategory() {
      const category = {
        id: this.$uuid.v4(),
        routeID: this.$route.params.id,
        nameCategory: this.nameCategory,
        linkPhotoCategory: this.linkPhotoCategory,
        subCategories: this.subCategories,
      };
      this.$notify({
        title: "СДО PRO",
        message: `Категория обучения ${this.nameCategory} успешно создана`,
        type: "success",
      });
      this.$store.dispatch("addCategory", category);
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  components: {
    CategoryList,
  },
};
</script>
