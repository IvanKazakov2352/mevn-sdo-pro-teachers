<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ modul.nameModule }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="modul.photoModule" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="redirectTolectionAndTest(modul)">
            <v-icon>
              mdi-exit-to-app
            </v-icon>
          </v-btn>
        </template>
        <span>Войти в модуль обучения</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать превью модуля</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="deleteModule(modul.id)">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить модуль обучения</span>
      </v-tooltip>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="1500">
      <v-card>
        <v-card-title>
          <span class="headline">
            {{ modul.nameModule }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
              <v-col cols="12">
                <v-text-field
                  v-model="modul.nameModule"
                  :rules="nameModuleRules"
                  label="Название модуля обучения"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="modul.photoModule"
                  :rules="photoModuleRules"
                  label="Фотография модуля обучения"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="modul.descriptionModule"
                  :rules="descriptionModuleRules"
                  outlined
                  label="Дополнительная информация по модулю обучения"
                ></v-textarea>
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
            @click="updateModule(modul)"
          >
            Редактировать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    modul: {
      type: Object,
      required: true,
      default: {},
    },
    subCategory: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => ({
    dialog: false,
    valid: false,
    nameModuleRules: [(v) => !!v || "Укажите имя модуля обучения"],
    photoModuleRules: [
      (v) => !!v || "Вставьте ссылку на фотографию для модуля обучения",
    ],
    descriptionModuleRules: [
      (v) => !!v || "Добавьте описание к модулю обучения",
    ],
  }),
  methods: {
    deleteModule(id) {
      this.subCategory.modules = this.subCategory.modules.filter(
        (cat) => cat.id !== id
      );
      this.$store.dispatch("deleteSubModule", this.profile);
    },
    updateModule(modul) {
      this.$store.dispatch("updateCategory", modul);
      this.dialog = false;
    },
    redirectTolectionAndTest(modul) {
      this.$router.push({name: "createLection", params: { moduleID: modul.id }});
    }
  },
  computed: {
    ...mapGetters(["profile"]),
  },
};
</script>
