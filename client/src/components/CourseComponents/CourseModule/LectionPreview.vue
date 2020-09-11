<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Предпросмотр лекции: {{ lectionContent.nameLection }}
        </v-toolbar-title>
      </v-toolbar>
      <v-col cols="12">
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <v-sheet
                class="pa-12"
                max-width="auto"
                max-height="auto"
                color="grey lighten-3"
              >
                <div class="mx-auto sheet" ref="contentContainer" contenteditable="false"></div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data: () => ({
    delta: undefined,
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
    lectionContent() {
      return this.subModule.lections.find(
        (lect) => lect.id === this.$route.params.lectID
      );
    },
  },
  mounted() {
    let article = document.createElement("article");
    let quill = new Quill(article, {});
    quill.setContents(this.lectionContent.content);
    setTimeout(() => {
      this.$refs.contentContainer.appendChild(article);
    }, 0);
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
