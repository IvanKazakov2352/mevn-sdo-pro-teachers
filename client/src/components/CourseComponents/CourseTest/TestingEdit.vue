<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Редактирование тестирования: {{ testing.nameTest }}
        </v-toolbar-title>
      </v-toolbar>
    </v-col>
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    title: "Редактирование тестирования | СДО PRO",
  },
  computed: {
    testing() {
      return this.$store.getters.test(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectTestID,
        this.$route.params.testID
      );
    },
  },
};
</script>
