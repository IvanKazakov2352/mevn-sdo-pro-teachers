<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Создание тестирования для лекции: {{lection.nameLection}}</v-toolbar-title>
      </v-toolbar>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    lection: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>
