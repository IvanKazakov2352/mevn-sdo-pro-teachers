<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline"> {{test.nameTest}} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="test.photoTest" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать тестирование</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить тестирование</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    test: {
      type: Object,
      default: {},
      required: true,
    },
  },
};
</script>
