<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>
        Профили обучения ({{ countModule }})
      </v-toolbar-title>
    </v-toolbar>
    <v-card max-height="auto" max-width="auto">
      <v-alert v-if="!countModule" type="info">
        Профилей обучения пока что нет
      </v-alert>
      <v-col cols="12" v-else>
        <v-simple-table fixed-header id="Table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Название профиля</th>
                <th class="text-left">Дата создания профиля</th>
                <th class="text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="modul in paginateProduct" :key="modul._id">
                <td>{{ modul.nameProfile }}</td>
                <td>
                  {{ new Date(modul.createdAt).toLocaleString() }}
                </td>
                <td>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <router-link
                        tag="button"
                        :to="{ name: 'course', params: { id: modul._id }}"
                      >
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon>
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </router-link>
                    </template>
                    <span>Редактирование профиля обучения</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="deleteModule(modul._id)"
                      >
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Удалить профиль</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
          v-if="countModule"
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    page: 1,
    modulePerPage: 10,
  }),
  methods: {
    deleteModule(id) {
      this.$store.dispatch("deleteModule", id);
    },
    pageClick(page) {
      this.page = page;
    },
  },
  computed: {
    ...mapGetters(["allModule", "countModule"]),
    pages() {
      return Math.ceil(this.allModule.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.modulePerPage;
      const to = from + this.modulePerPage;
      return this.allModule.slice(from, to);
    },
  },
  mounted() {
    this.$store.dispatch("fetchModules");
  },
};
</script>
