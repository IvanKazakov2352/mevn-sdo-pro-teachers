<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Группа {{ archive.namegroup }}</v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-expansion-panels class="archive">
          <TableUsers :users="archive.user"/>
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import TableUsers from "@/components/GroupComponents/ArchiveGroups/GroupArchiveTableUsers";
export default {
  data: () => ({
    archive: {},
  }),
  methods: {
    async getArchive() {
      const res = await axios.get("/api/archive/" + this.$route.params.id);
      this.archive = res.data.group;
    },
  },
  mounted() {
    this.getArchive();
  },
  components: {
    TableUsers,
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
