<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title
        >Группы ({{ groupsCount }})
        <router-link tag="button" to="/archives">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-archive</v-icon>
              </v-btn>
            </template>
            <span>Перейти в архив</span>
          </v-tooltip></router-link
        ></v-toolbar-title
      >
    </v-toolbar>
    <v-card max-height="auto" max-width="auto">
      <v-alert v-if="!groupsCount" type="info">
        Групп пока что нет, чтобы добавить нажмите на кнопку добавить группу
      </v-alert>
      <v-col cols="12" v-else>
        <v-simple-table fixed-header id="Table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Название группы</th>
                <th class="text-left">Период обучения</th>
                <th class="text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in paginateProduct" :key="group._id">
                <td>{{ group.namegroup }}</td>
                <td>
                  {{
                    new Date(group.starttraining).toISOString().substr(0, 10)
                  }}
                  -
                  {{ new Date(group.endtraining).toISOString().substr(0, 10) }}
                </td>
                <td>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <router-link
                        tag="button"
                        :to="{
                          name: 'documents',
                          params: { id: group._id },
                        }"
                      >
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon>
                            mdi-file-document
                          </v-icon>
                        </v-btn>
                      </router-link>
                    </template>
                    <span>Формирование документов</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        @click="exportListenersToExcel(group)"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>
                          mdi-lock-check
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Доступы для группы</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        @click="findGroupArchive(group)"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>
                          mdi-archive-arrow-down
                        </v-icon>
                      </v-btn>
                    </template>
                    <span
                      >Добавить группу в архив(Если обучение с группой
                      завершено)</span
                    >
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <router-link
                        tag="button"
                        :to="{
                          name: 'group',
                          params: { id: group._id },
                        }"
                      >
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon>
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </router-link>
                    </template>
                    <span>Редактирование группы</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        @click="deleteGroup(group._id)"
                      >
                        <v-icon>
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Удалить группу</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-pagination
          v-if="groupsCount"
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
const GroupsDocuments = () => import("./GroupsDocuments");
import { exportToExcel } from "@/utils/ExportListenersToExcel";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    groups: [],
    addArchive: [],
    group: {},
    page: 1,
    groupPerPage: 10,
    list: null,
    listLoading: true,
    filename: "Доступы",
    autoWidth: true,
    bookType: "xlsx",
  }),
  methods: {
    findGroupArchive(group) {
      this.$notify({
        title: "СДО PRO",
        message: `Группа обучения ${group.namegroup} успешно перемещена в архив`,
        type: "success",
      });
      this.$store.dispatch("addGroupsToArchive", group);
    },
    deleteGroup(id) {
      this.$notify({
        title: "СДО PRO",
        message: `Группа обучения успешно удалена`,
        type: "success",
      });
      this.$store.dispatch("deleteGroups", id);
    },
    pageClick(page) {
      this.page = page;
    },
    exportListenersToExcel(group) {
      return exportToExcel(group.user, group.namegroup);
    },
  },
  computed: {
    ...mapGetters(["allGroups", "groupsCount"]),
    pages() {
      return Math.ceil(this.allGroups.length / 10);
    },
    paginateProduct() {
      const from = (this.page - 1) * this.groupPerPage;
      const to = from + this.groupPerPage;
      return this.allGroups.slice(from, to);
    },
  },
  mounted() {
    this.$store.dispatch("fetchGroups");
  },
  components: {
    GroupsDocuments,
  },
};
</script>
