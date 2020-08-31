<template>
  <v-container fluid>
    <v-data-iterator
      :items="allDeals"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>Сделки ({{ dealsCount }})</v-toolbar-title>
        </v-toolbar>
      </template>

      <template>
        <v-row>
          <v-col
            v-for="deal in allDeals"
            :key="deal._id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              max-width="344"
              class="mx-auto ma-2"
              :color="`${deal.colorCard}`"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    {{ deal.namedeal }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ deal.sumdok }} руб
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                {{ deal.commentary }}
              </v-card-text>

              <v-card-actions>
                <router-link
                  tag="button"
                  :to="{ name: 'deal', params: { id: deal._id } }"
                >
                  <v-btn text>
                    Редактировать
                  </v-btn>
                </router-link>
                <v-spacer></v-spacer>
                <v-chip class="ma-2" :color="`${deal.colorChip}`">
                  {{ deal.status }}
                </v-chip>
              </v-card-actions>
              <v-btn class="mb-2 ml-2" text @click="deleteDeal(deal._id)">
                Удалить сделку
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:no-data>
        <v-alert type="info">
          Сделок пока нет
        </v-alert>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    itemsPerPage: 4,
  }),
  methods: {
    deleteDeal(id) {
      this.$store.dispatch("deleteDeal", id)
    },
  },
  computed: {
    ...mapGetters(["allDeals", "dealsCount"]),
  },
  mounted() {
    this.$store.dispatch("fetchDeals");
  },
};
</script>
