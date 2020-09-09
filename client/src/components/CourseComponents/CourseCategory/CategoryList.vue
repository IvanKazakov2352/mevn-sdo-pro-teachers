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
          <v-btn color="green darken-1" text :disabled="!valid" @click="updateCategory(category)">
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
  },
  data: () => ({
    dialog: false,
    valid: false,
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
      this.$store.dispatch("deleteCategory", category);
    },
    updateCategory(category) {
      this.$store.dispatch("updateCategory", category);
      this.dialog = false
    }
  },
};
</script>
