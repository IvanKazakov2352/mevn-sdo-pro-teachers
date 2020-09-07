<template>
  <v-card max-width="344">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ subcategory.nameSubcategory }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Программа расчитана на
          {{ subcategory.hoursTrainingSubcategory }}
          часа обучения
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img :src="subcategory.photoSubcategory" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <span>Добавить модуль обучения</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать подкатегорию</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="deleteSubcategory(subcategory.id)"
          >
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить подкатегорию</span>
      </v-tooltip>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="1500">
      <v-card>
        <v-card-title>
          <span class="headline">
            Подкатегория: {{ subcategory.nameSubcategory }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="nameSubCategoryRules"
                  v-model="subcategory.nameSubcategory"
                  label="Название категории"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="photoSubCategoryRules"
                  v-model="subcategory.photoSubcategory"
                  label="Ссылка на фотографию"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="hoursTrainingSubCategoryRules"
                  v-model="subcategory.hoursTrainingSubcategory"
                  label="Часы обучения"
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
            @click="updateSubCategory"
          >
            Редактировать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  props: {
    subcategory: {
      type: Object,
      default: {},
      required: true,
    },
    category: {
      type: Object,
      default: {},
      required: true,
    },
    profile: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data: () => ({
    dialog: false,
    valid: false,
    nameSubCategoryRules: [(v) => !!v || "Введите пожалуйста название подкатегории"],
    photoSubCategoryRules: [(v) => !!v || "Вставьте пожалуйста ссылку на фотографию"],
    hoursTrainingSubCategoryRules: [(v) => !!v || "Введите пожалуйста часы обучения"],
  }),
  methods: {
    async deleteSubcategory(id) {
      this.category.subCategories = this.category.subCategories.filter((subCats) => subCats.id !== id);
      const res = await axios.put("/api/course/" + this.profile._id, {...this.profile});
      this.profile = res.data;
    },
    async updateSubCategory() {
      this.subcategory = Object.assign(this.subcategory);
      const res = await axios.put("/api/course/" + this.profile._id, {...this.profile});
      this.profile = res.data;
      this.dialog = false;
    },
  },
};
</script>
