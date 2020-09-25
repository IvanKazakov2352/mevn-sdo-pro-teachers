<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ examen.nameExamen }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="examen.photoExamen" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="updateExamen(examen)">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать экзамен</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="deleteExamen(examen.id)">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить экзамен</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    examen: {
      type: Object,
      default: {},
      required: true,
    },
  },
  methods: {
    updateExamen(examen) {
      this.$emit("updateExamen", examen);
    },
    deleteExamen(id) {
      this.$emit("deleteExamen", id);
    },
  },
};
</script>
