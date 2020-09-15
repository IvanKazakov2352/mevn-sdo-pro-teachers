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
<!--       <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="redirectToEditlection(lect)">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактирование данной лекции</span>
      </v-tooltip> -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="createTest(lect)">
            <v-icon>
              mdi-alpha-t-box-outline
            </v-icon>
          </v-btn>
        </template>
        <span>Создание тестирования для данной лекции</span>
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
  </v-card>
</template>
<script>
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
        params: { lectID: lect.id },
      });
    },
    createTest(lect) {
      this.$router.push({
        name: "createTest",
        params: { lectTestID: lect.id },
      });
    },
    redirectToEditlection(lect) {
      this.$router.push({
        name: "lectionEdit",
        params: { lectEditID: lect.id },
      });
    },
  },
};
</script>
