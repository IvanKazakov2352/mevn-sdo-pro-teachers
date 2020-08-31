<template>
  <v-card class="edit">
    <v-row justify="center" class="mr-2 ml-2">
      <h1>Редактирование события "{{ event.nameEvent }}"</h1>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="event.nameEvent"
                label="Название события"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="event.start"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="event.start"
                    label="Дата начала события"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="event.start"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false"
                    >Отмена</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(event.start)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                :return-value.sync="event.end"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="event.end"
                    label="Дата конца события"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="event.end" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu2 = false"
                    >Отмена</v-btn
                  >
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu2.save(event.end)"
                    >OK</v-btn
                  >
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-row>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    event: {},
    menu: false,
    menu2: false,
  }),
  methods: {
    async getEvent() {
      const res = await axios.get("/api/events/" + this.$route.params.id);
      this.event = res.data;
    },
  },
  mounted() {
    this.getEvent();
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>