<template>
  <div class="fill-height">
    <v-sheet tile height="54" color="grey lighten-3" class="d-flex"> </v-sheet>
    <v-sheet height="600">
      <v-calendar :events="allTasks" @change="getEvents"></v-calendar>
    </v-sheet>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    getEvents({ start, end }) {
      const events = [];
      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      this.events = events;
    },
  },
  computed: mapGetters(["allTasks"]),
  mounted() {
    this.$store.dispatch('fetchTasks');
  },
};
</script>
