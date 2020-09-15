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
                <div
                  class="mx-auto sheet"
                  ref="contentContainer"
                  contenteditable="false"
                ></div>
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
  metaInfo: {
    title: "Предпросмотр лекции | СДО PRO",
  },
  computed: {
    lectionContent() {
      return this.$store.getters.lection(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectID
      );
    },
  },
  mounted() {
    let article = document.createElement("article");
    let quill = new Quill(article, {});
    quill.setContents(this.lectionContent.content);
    quill.enable(false);
    setTimeout(() => {
      this.$refs.contentContainer.appendChild(article);
    }, 0);
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
