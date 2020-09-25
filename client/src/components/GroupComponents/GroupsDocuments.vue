<template>
  <v-row justify="center" class="center">
    <h1>Документы для группы {{ doc.namegroup }}</h1>
    <v-expansion-panels class="pa-5">
      <v-expansion-panel>
        <v-expansion-panel-header>Журнал</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Journal :journal="doc.tests" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Лист учета слушателя входящего в группу
          обучения</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <ListListener :users="doc.user" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Приказ о зачислении</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Zachislenie :group="doc" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
import Journal from "@/components/GroupComponents/Documents/Journal.vue";
import Zachislenie from "@/components/GroupComponents/Documents/Zachislenie.vue";
import ListListener from "@/components/GroupComponents/Documents/ListListener.vue";
import axios from "axios";
export default {
  metaInfo: {
    title: "Документы | СДО PRO",
  },
  data: () => ({
    dialog: false,
    doc: {}
  }),
  methods: {
    async getGroups() {
      const res = await axios.get("/api/groups/" + this.$route.params.id);
      this.doc = res.data;
    },
  },
  mounted() {
    this.getGroups();
  },
  components: {
    Journal,
    ListListener,
    Zachislenie,
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
