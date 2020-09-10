<template>
  <v-card max-width="340">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ modul.nameModule }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="modul.photoModule" height="194"></v-img>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <span>Войти в модуль обучения</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
        </template>
        <span>Редактировать превью модуля</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="deleteModule(modul.id)">
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </template>
        <span>Удалить модуль обучения</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    modul: {
      type: Object,
      required: true,
      default: {},
    },
  },
  methods: {

  },
};
</script>
