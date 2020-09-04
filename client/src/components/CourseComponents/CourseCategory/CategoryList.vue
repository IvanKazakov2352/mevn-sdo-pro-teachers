<template>
  <v-card max-width="344">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ category.nameCategory }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Расчитана на {{ category.trainingHours }} часов обучения
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="category.linkPhotoCategory" height="194"></v-img>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4" @click="addMaterialRoutes">
        Редактировать категорию
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="1500">
      <v-card>
        <v-card-title>
          <span class="headline">Категория: {{ category.nameCategory }}</span>
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
              <v-col cols="12" sm="6">
                <v-text-field
                  :rules="hoursCategoryRules"
                  v-model.number="category.trainingHours"
                  label="Количество часов обучения"
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
            @click="updateCategory"
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
    category: {
      type: Object,
      required: true,
      default: {},
    },
    profile: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => ({
    dialog: false,
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
    addMaterialRoutes() {
      this.dialog = true;
    },
    async updateCategory() {
      this.category = Object.assign(this.category);
      const res = await axios.put("/api/course/" + this.profile._id, {...this.profile})
      this.profile = res.data
      this.dialog = false;
    },
  },
};
</script>
