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
        <quillEditor ref="editor" :options="editorOption" />
      </v-col>
    </v-col>
    <v-col cols="12">
      <v-btn class="mt-5 ml-3" x-large tile outlined color="success" @click="updateLection">
        <v-icon left>mdi-pencil</v-icon> Сохранить
      </v-btn>
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
  methods: {
    updateLection() {
      const content = this.$refs.editor.quill.getContents()
      Object.assign(this.lection, {content})
      this.$store.dispatch("updateProfile", this.$route.params.id)
    }
  },
  computed: {
    lection() {
      return this.$store.getters.lection(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectEditID
      );
    },
  },
  mounted() {
    this.$refs.editor.quill.setContents(this.lection.content.ops);
  },
  components: {
    quillEditor,
  },
};
</script>
