<template>
  <v-container>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>Контрагенты ({{ countCounterparties }})</v-toolbar-title>
    </v-toolbar>
    <v-alert v-if="!countCounterparties" type="info">
      Контрагентов пока что нет, нажмите на кнопку добавить контрагента
    </v-alert>
    <v-card max-height="auto" max-width="auto" v-else>
      <v-col cols="12">
        <v-simple-table class="mr-2 ml-2" fixed-header id="Table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Название контрагента</th>
                <th class="text-left">ИНН</th>
                <th class="text-left">Менеджер</th>
                <th class="text-left">Дата внесения</th>
                <th class="text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="counterparty in allCounterpartiesPaginate"
                :key="counterparty._id"
              >
                <td>{{ counterparty.name }}</td>
                <td>{{ counterparty.inn }}</td>
                <td>{{ counterparty.manager }}</td>
                <td>{{ new Date(counterparty.date).toLocaleString() }}</td>
                <td>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <router-link
                        tag="button"
                        :to="{
                          name: 'CounterpartiesEdit',
                          params: { id: counterparty._id },
                        }"
                      >
                        <v-btn icon v-on="on" v-bind="attrs">
                          <v-icon>
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </router-link>
                    </template>
                    <span>Редактирование контрагента</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        @click="deleteCounterparty(counterparty._id)"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Удалить контрагента</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
          v-if="countCounterparties"
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
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    itemsPerPage: 10,
    page: 1,
    counterpartyPerPage: 10,
  }),
  methods: {
    deleteCounterparty(id) {
      this.$store.dispatch("deleteCounterparties", id)
    },
    pageClick(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapGetters(["allCounterparties", "countCounterparties"]),
    pages() {
      return Math.ceil(this.allCounterparties.length / 10);
    },
    allCounterpartiesPaginate() {
      const from = (this.page - 1) * this.counterpartyPerPage;
      const to = from + this.counterpartyPerPage;
      return this.allCounterparties.slice(from, to);
    },
  },
  mounted() {
    this.$store.dispatch("fetchCounterparties");
  },
};
</script>
