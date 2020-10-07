<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ category.nameCategory }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="category.linkPhotoCategory" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="addMaterialRoutes(category)"
          >
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <span>Добавить подкатегорию</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="dialogCopyCategoryToProfile(category)"
          >
            <v-icon>
              mdi-content-copy
            </v-icon>
          </v-btn>
        </template>
        <span
          >Копировать категорию со всеми настройками в другой профль
          обучения</span
        >
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать категорию</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="deleteCategory(category)"
          >
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить категорию</span>
      </v-tooltip>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="1500">
      <v-card>
        <v-card-title>
          <span class="headline">{{ category.nameCategory }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="nameCategoryRules"
                  v-model="category.nameCategory"
                  label="Название категории"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="photoCategoryRules"
                  v-model="category.linkPhotoCategory"
                  label="Ссылка на фотографию"
                ></v-text-field>
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Отмена
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            :disabled="!valid"
            @click="updateCategory(category)"
          >
            Редактировать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row justify="center">
      <v-dialog v-model="dialogCopyCategories" persistent max-width="800px">
        <v-card>
          <v-card-title>
            <span class="headline">
              Копирование категории: {{ copyCategory.nameCategory }}
            </span>
          </v-card-title>
          <v-card-text>
            Выберите профиль обучения куда нужно скопировать категорию обучения
          </v-card-text>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="profile"
                    :items="allModule"
                    item-text="nameProfile"
                    label="Выберите профиль обучения"
                    outlined
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialogCopyCategories = false"
              >Отмена</v-btn
            >
            <v-btn
              color="blue darken-1"
              text
              @click="copyCategoryToProfile(category)"
              >Копировать</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  props: {
    category: {
      type: Object,
      required: true,
      default: {},
    },
    nameProfile: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    dialogCopyCategories: false,
    valid: false,
    copyCategory: {},
    profile: {},
    nameCategoryRules: [(v) => !!v || "Введите пожалуйста название категории"],
    photoCategoryRules: [
      (v) => !!v || "Вставьте пожалуйста ссылку на фотографию",
    ],
  }),
  methods: {
    addMaterialRoutes(category) {
      this.$router.push({
        name: "subcategory",
        params: { categoryID: category.id, category },
      });
    },
    deleteCategory(category) {
      this.$notify({
        title: "СДО PRO",
        message: `Категория обучения успешно удалена`,
        type: "success",
      });
      this.$store.dispatch("deleteCategory", category);
      this.$store.dispatch("updateProfile", this.$route.params.id);
    },
    updateCategory(category) {
      this.$notify({
        title: "СДО PRO",
        message: `Категория обучения успешно сохранена`,
        type: "success",
      });
      this.$store.dispatch("updateCategory", category);
      this.dialog = false;
    },
    dialogCopyCategoryToProfile(category) {
      this.copyCategory = category;
      this.dialogCopyCategories = true;
    },
    async copyCategoryToProfile(category) {
      if (this.nameProfile === this.profile.nameProfile) {
        const copyCategoryParentProfile = {
          id: this.$uuid.v4(),
          nameCategory: `Копия - ${category.nameCategory}`,
          routeID: category.routeID,
          linkPhotoCategory: category.linkPhotoCategory,
          subCategories: category.subCategories,
        };
        this.profile.categories.push(copyCategoryParentProfile)
        await axios.put("/api/course/" + this.profile._id, { ...this.profile });
        this.dialogCopyCategories = false;
      } else {
        this.profile.categories.push(this.copyCategory);
        await axios.put("/api/course/" + this.profile._id, { ...this.profile });
        this.dialogCopyCategories = false;
      }
    },
  },
  computed: {
    ...mapGetters(["allModule"]),
  },
  mounted() {
    this.$store.dispatch("fetchModules");
  },
};
</script>
