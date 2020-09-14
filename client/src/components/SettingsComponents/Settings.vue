<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-toolbar class="ma-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Данные учебного заведения</v-toolbar-title>
      </v-toolbar>
      <v-expansion-panels class="ma-2">
        <v-expansion-panel>
          <v-expansion-panel-header
            >Реквизиты организации</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <organization />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            >Члены комиссии учебного центра</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <admins />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script>
import admins from "@/components/SettingsComponents/Admins";
import organization from "@/components/SettingsComponents/Organization";
export default {
  metaInfo: {
    title: "Настройки | СДО PRO",
  },
  components: {
    admins,
    organization,
  },
};
</script>
<style scoped>
@import "../../assets/index.css";
</style>
