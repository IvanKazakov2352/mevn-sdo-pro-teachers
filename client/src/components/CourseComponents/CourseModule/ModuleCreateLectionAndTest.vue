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
          Создание лекции
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="blue darken-3">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Создание лекции</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="createLection">Создать</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="nameLection"
            label="Название лекции"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="photoLection"
            label="Фотография лекции"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <quillEditor
            style="height: 600px;"
            v-model="content"
            ref="lection"
            :options="editorOption"
          />
        </v-col>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Создание лекций для модуля:
          {{ subModule.nameModule }}
        </v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-row>
      <LectionList
        class="ml-9 mt-4 mb-4"
        v-for="lect in subModule.lections"
        :key="lect.id"
        :lect="lect"
        :subModule="subModule"
      />
    </v-row>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import LectionList from "@/components/CourseComponents/CourseModule/LectionList";
export default {
  metaInfo: {
    title: "Создание лекции | СДО PRO",
  },
  data: () => ({
    dialog: false,
    valid: false,
    content: "",
    nameLection: null,
    photoLection: null,
    editorOption: {
      debug: "info",
      placeholder: "Создание лекции",
      readOnly: true,
      theme: "snow",
    },
  }),
  methods: {
    createLection() {
      const lection = {
        id: this.$uuid.v4(),
        nameLection: this.nameLection,
        photoLection: this.photoLection,
        content: this.$refs.lection.quill.getContents(),
      };
      this.subModule.lections.push(lection);
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
    subModule() {
      return this.subCategory.modules.find(
        (modul) => modul.id === this.$route.params.moduleID
      );
    },
  },
  components: {
    quillEditor,
    LectionList,
  },
};
</script>
