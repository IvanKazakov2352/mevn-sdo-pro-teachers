<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ lect.nameLection }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="lect.photoLection" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="lectionPreview(lect)">
            <v-icon>
              mdi-polaroid
            </v-icon>
          </v-btn>
        </template>
        <span>Просмотреть превью лекции</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="dialogEdit = true">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать лекцию</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="deleteLection(lect.id)">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить лекцию</span>
      </v-tooltip>
    </v-card-actions>
    <v-dialog
      v-model="dialogEdit"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="blue darken-3">
          <v-btn icon dark @click="dialogEdit = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title
            >Редактирование лекции: {{ lect.nameLection }}</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text>Редактировать</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="lect.nameLection"
            label="Название лекции"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="lect.photoLection"
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
  </v-card>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
export default {
  props: {
    lect: {
      type: Object,
      required: true,
      default: {},
    },
    subModule: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data: () => ({
    dialogPreview: false,
    dialogEdit: false,
    valid: false,
    content: "",
    editorOption: {
      debug: "info",
      placeholder: "Создание лекции",
      readOnly: true,
      theme: "snow",
    },
  }),
  methods: {
    deleteLection(id) {
      this.subModule.lections = this.subModule.lections.filter(
        (lect) => lect.id !== id
      );
      this.$store.dispatch("updateProfile", this.$route.params.id);
    },
    lectionPreview(lect) {
      this.$router.push({
        name: "previewLection",
        params: { lectID: lect.id, lectContent: lect },
      });
    },
  },
  mounted() {
    this.content = this.lect.content;
  },
  components: {
    quillEditor,
  },
};
</script>
