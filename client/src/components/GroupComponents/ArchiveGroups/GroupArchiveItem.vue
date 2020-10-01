<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Группа {{ archive.group.namegroup }}</v-toolbar-title>
      </v-toolbar>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-expansion-panels class="archive">
          <TableUsers :users="archive.group.user" />
        </v-expansion-panels>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
const TableUsers = () => import("./GroupArchiveTableUsers")
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["archive"]),
  },
  mounted() {
    this.$store.dispatch("fetchArchive", this.$route.params.id)
  },
  components: {
    TableUsers,
  },
};
</script>
<style scoped>
@import "../../../assets/index.css";
</style>
