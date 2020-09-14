<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Создание профиля обучения
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="blue darken-3">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Создание профиля обучения</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="addProfileModule">Создать</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line>
          <v-list-item>
            <v-list-item-content>
              <v-col cols="12" sm="3">
                <v-text-field
                  :rules="nameModuleRules"
                  v-model="nameProfile"
                  label="Название профиля обучения"
                ></v-text-field>
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Дополнительное управление профилем обучения</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="dostupOnModule"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Доступ слушателя до модуля</v-list-item-title>
              <v-list-item-subtitle>
                Разрешить ли доступ слушателя до модуля обучения
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <courseList />
    </v-col>
  </v-row>
</template>
<script>
import courseList from "@/components/CourseComponents/CourseList";
export default {
  metaInfo: {
    title: "Профили обучения | СДО PRO",
  },
  data: () => ({
    dialog: false,
    nameProfile: null,
    dostupOnModule: true,
    dostupOnTests: true,
    dostupOnLections: true,
    nameModuleRules: [(v) => !!v || "Укажите пожалуйста имя профиля обучения"],
  }),
  methods: {
    addProfileModule() {
      const profile = {
        nameProfile: this.nameProfile,
        dostupOnLections: this.dostupOnLections,
        dostupOnModule: this.dostupOnModule,
        dostupOnTests: this.dostupOnTests,
      };
      this.$store.dispatch("addedModule", profile);
      this.dialog = false;
    },
  },
  components: {
    courseList,
  },
};
</script>
