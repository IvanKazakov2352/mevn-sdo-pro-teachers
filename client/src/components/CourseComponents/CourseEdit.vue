<template>
  <v-container fluid>
    <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
      <v-toolbar-title>Модуль обучения</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-row justify="center" class="mr-4 ml-4">
        <v-expansion-panels focusable class="mt-4">
          <category :profile="profile" />
        </v-expansion-panels>
        <v-col cols="12">
          <v-btn class="ma-2" x-large tile outlined color="success" @click="updateProfile">
            <v-icon left>mdi-pencil</v-icon> Редактировать
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import category from "@/components/CourseComponents/CourseCategory/CategoryCreate";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    nameCategory: null,
    trainingHours: 0,
    profile: {},
  }),
  methods: {
    async getProfile() {
      const res = await axios.get("/api/course/" + this.$route.params.id);
      this.profile = res.data;
    },
    async updateProfile() {
      this.profile = Object.assign(this.profile, {allCategories: this.allCategories})
      const res = await axios.put("/api/course/" + this.$route.params.id, this.profile)
      this.profile = res.data
      this.$router.push({name: 'courses', query: {message: 'profile updated'}})
    }
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  mounted() {
    this.getProfile();
  },
  components: {
    category,
  },
};
</script>
