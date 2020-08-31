<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>События ({{ events.length }})</v-toolbar-title>
      </v-toolbar>
      <v-alert class="ma-2" type="info" v-if="!events.length">
        Событий для слушателей пока нет
      </v-alert>
      <v-card class="mr-2 ml-2" max-height="auto" max-width="auto" v-else>
        <v-col cols="12">
          <v-simple-table class="mr-2 ml-2" fixed-header id="Table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Название ивента</th>
                  <th class="text-left">Дата начала ивента</th>
                  <th class="text-left">Дата конца ивента</th>
                  <th class="text-left">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in paginateProduct" :key="event._id">
                  <td>{{ event.nameEvent }}</td>
                  <td>
                    {{ new Date(event.start).toISOString().substr(0, 10) }}
                  </td>
                  <td>
                    {{ new Date(event.end).toISOString().substr(0, 10) }}
                  </td>
                  <td>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <router-link
                          tag="button"
                          :to="{ name: 'event', params: { id: event._id } }"
                        >
                          <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>
                              mdi-pencil
                            </v-icon>
                          </v-btn>
                        </router-link>
                      </template>
                      <span>Редактирование события</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          @click="deleteEvent(event)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Удалить событие</span>
                    </v-tooltip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-pagination
            v-if="events.length"
            v-model="page"
            :length="pages"
            :click-handler="pageClick"
            :total-visible="3"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            color="blue"
          ></v-pagination>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    events: [],
    page: 1,
    eventPerPage: 10,
  }),
  methods: {
    async getEvents() {
      const res = await axios.get("/api/events/");
      this.events = res.data;
    },
    pageClick(page) {
      this.page = page;
    },
    async deleteEvent(event) {
      const id = event._id;
      await axios.delete("/api/events/" + id);
      this.getEvents();
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.events.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.eventPerPage;
      const to = from + this.eventPerPage;
      return this.events.slice(from, to);
    },
  },
  mounted() {
    this.getEvents();
  },
};
</script>
