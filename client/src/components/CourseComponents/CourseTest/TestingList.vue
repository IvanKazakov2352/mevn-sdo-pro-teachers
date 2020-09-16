<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Создание тестирования для лекции: {{ lection.nameLection }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card
        class="ml-3 mt-4 mb-4"
        max-width="340"
        v-for="test in lection.tests"
        :key="test.id"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ test.nameTest }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-img :src="test.photoTest" height="194"></v-img>
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="redirectToUpdateTest(test)">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span>Редактировать тестирование</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="deleteTest(test.id)">
                <v-icon>
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
            <span>Удалить тестирование</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import TestingList from "@/components/CourseComponents/CourseTest/TestingListItem";
export default {
  props: {
    lection: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data: () => ({
    testing: {}
  }),
  methods: {
    deleteTest(id) {
      this.lection.tests = this.lection.tests.filter(test => test.id !== id)
      this.$store.dispatch("updateProfile", this.$route.params.id)
    },
    redirectToUpdateTest(test) {
      this.$router.push({name: 'testEdit', params: {testID: test.id}})
    }
  },
  components: {
    TestingList,
  },
};
</script>
