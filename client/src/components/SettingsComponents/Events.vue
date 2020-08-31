<template>
  <v-row class="fill-height">
    <v-col>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Создание события
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Создание события</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="nameEvent"
                      label="Название события"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="start"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="start"
                          label="Дата начала события"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="start"
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
                          @click="$refs.menu.save(start)"
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
                      :return-value.sync="end"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="end"
                          label="Дата конца события"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="end"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu2 = false"
                          >Отмена</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu2.save(end)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false"
                >Отмена</v-btn
              >
              <v-btn color="blue darken-1" text @click="addEvent"
                >Создать событие</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <EventsList />
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios"
import EventsList from "@/components/SettingsComponents/EventsList";
export default {
  data: () => ({
    dialog: false,
    nameEvent: null,
    start: new Date().toISOString().substr(0, 10),
    end: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
  }),
  methods: {
    async addEvent() {
      const event = {
        nameEvent: this.nameEvent,
        start: this.start,
        end: this.end,
      };
      const res = await axios.post("/api/events/", event)
      this.dialog = false;
    },
  },
  components: {
    EventsList,
  },
};
</script>
