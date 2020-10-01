<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title
          >Архив с группами ({{ archivesCount }})</v-toolbar-title
        >
      </v-toolbar>
      <v-alert class="ma-2" type="info" v-if="!archivesCount">
        Архив пока что пуст
      </v-alert>
      <v-card class="mr-2 ml-2" max-height="auto" max-width="auto" v-else>
        <v-col cols="12">
          <v-simple-table class="mr-2 ml-2" fixed-header id="Table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Название группы</th>
                  <th class="text-left">Дата начала обучения</th>
                  <th class="text-left">Дата конца обучения</th>
                  <th class="text-left">Дата экзамена</th>
                  <th class="text-left">Действия</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="archive in paginateProduct" :key="archive._id">
                  <td>{{ archive.group.namegroup }}</td>
                  <td>
                    {{
                      new Date(archive.group.starttraining)
                        .toISOString()
                        .substr(0, 10)
                    }}
                  </td>
                  <td>
                    {{
                      new Date(archive.group.endtraining)
                        .toISOString()
                        .substr(0, 10)
                    }}
                  </td>
                  <td>
                    {{
                      new Date(archive.group.dateexamen)
                        .toISOString()
                        .substr(0, 10)
                    }}
                  </td>
                  <td>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <router-link
                          tag="button"
                          :to="{ name: 'archive', params: { id: archive._id } }"
                        >
                          <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>
                              mdi-magnify
                            </v-icon>
                          </v-btn>
                        </router-link>
                      </template>
                      <span>Просмотр архивированной группы</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          @click="deleteGroupToArchive(archive._id)"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Удалить архивированную группу</span>
                    </v-tooltip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-pagination
            v-if="archivesCount"
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    page: 1,
    archivesPerPage: 5,
  }),
  methods: {
    pageClick(page) {
      this.page = page;
    },
    deleteGroupToArchive(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Группа обучения из архива успешно удалена`,
        type: "success",
      });
      this.$store.dispatch("deleteGroupsToArchive", id);
    },
  },
  computed: {
    ...mapGetters(["allArchives", "archivesCount"]),
    pages() {
      return Math.ceil(this.allArchives.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.archivesPerPage;
      const to = from + this.archivesPerPage;
      return this.allArchives.slice(from, to);
    },
  },
  mounted() {
    this.$store.dispatch("fetchArchives");
  },
};
</script>
