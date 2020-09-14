<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title
          >Редактирование лекции: {{ lection.nameLection }}</v-toolbar-title
        >
      </v-toolbar>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="lection.nameLection"
          label="Название лекции"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="lection.photoLection"
          label="Фотография лекции"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <quillEditor
          id="editor"
          ref="editor"
          style="height: 600px;"
          :options="editorOption"
        />
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
export default {
  metaInfo: {
    title: "Редактирование лекции | СДО PRO",
  },
  data: () => ({
    content: "",
    editorOption: {
      debug: "info",
      placeholder: "Создание лекции",
      readOnly: true,
      theme: "snow",
    },
  }),
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
    lection() {
      return this.subModule.lections.find(
        (lect) => lect.id === this.$route.params.lectEditID
      );
    },
  },
  mounted() {
    var container = document.querySelector("#editor");
    const quill = new quillEditor(container)
    quill.enable(false)
  },
  components: {
    quillEditor,
  },
};
</script>
