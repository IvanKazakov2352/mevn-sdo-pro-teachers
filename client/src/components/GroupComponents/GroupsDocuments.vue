<template>
  <v-row justify="center" class="center">
    <h1>Документы для группы {{ documents.namegroup }}</h1>
    <v-expansion-panels class="pa-5">
      <v-expansion-panel>
        <v-expansion-panel-header
          >Лист учета слушателя входящего в группу
          обучения</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ListListener :users="documents.user" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Приказ о зачислении</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Zachislenie :group="documents" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
const Zachislenie = () => import("./Documents/Zachislenie");
const ListListener = () => import("./Documents/ListListener");
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Документы | СДО PRO",
  },
  computed: {
    ...mapGetters(["documents"]),
  },
  mounted() {
    this.$store.dispatch("groupDocuments", this.$route.params.id);
  },
  components: {
    ListListener,
    Zachislenie,
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
