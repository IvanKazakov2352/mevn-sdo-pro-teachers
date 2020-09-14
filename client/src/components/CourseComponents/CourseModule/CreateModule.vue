<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="1300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Создание модуля обучения
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Создание модуля обучения</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="nameModule"
                    :rules="nameModuleRules"
                    label="Название модуля обучения"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="photoModule"
                    :rules="photoModuleRules"
                    label="Фотография модуля обучения"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="descriptionModule"
                    :rules="descriptionModuleRules"
                    outlined
                    label="Дополнительная информация по модулю обучения"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Отмена
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            @click="createModule"
          >
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Создание модуля обучения для подкатегории:
          {{ subCategory.nameSubcategory }}
        </v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <moduleList
        class="ml-9 mt-4 mb-4"
        v-for="modul in subCategory.modules"
        :key="modul.id"
        :modul="modul"
        :subCategory="subCategory"
      />
    </v-row>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import moduleList from "@/components/CourseComponents/CourseModule/ModuleList";
export default {
  metaInfo: {
    title: "Создание модуля обучения | СДО PRO",
  },
  data: () => ({
    dialog: false,
    valid: false,
    nameModule: null,
    photoModule: null,
    descriptionModule: null,
    lections: [],
    nameModuleRules: [(v) => !!v || "Укажите имя модуля обучения"],
    photoModuleRules: [
      (v) => !!v || "Вставьте ссылку на фотографию для модуля обучения",
    ],
    descriptionModuleRules: [
      (v) => !!v || "Добавьте описание к модулю обучения",
    ],
  }),
  methods: {
    createModule() {
      const module = {
        id: this.$uuid.v4(),
        routeID: this.$route.params.id,
        nameModule: this.nameModule,
        photoModule: this.photoModule,
        descriptionModule: this.descriptionModule,
        lections: this.lections,
      };
      this.subCategory.modules.push(module);
      this.$store.dispatch("updateProfile", this.$route.params.id);
      this.dialog = false;
    },
  },
  computed: {
    category() {
      return this.$store.getters.category(this.$route.params.categoryID);
    },
    subCategory() {
      return this.category.subCategories.find(
        (cats) => cats.id === this.$route.params.subcategoryID
      );
    },
  },
  components: {
    moduleList,
  },
};
</script>
