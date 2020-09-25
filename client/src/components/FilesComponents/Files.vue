<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Загрузить файлы
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Загрузка файлов для коллекции</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Наименование коллекции"></v-text-field>
              </v-col>
              <v-col cols="12">
                <FileInput />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Отмена
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Добавить файлы</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import FileInput from "@/components/FilesComponents/CustomFileInput"
export default {
  metaInfo: {
    title: "Файловая система | СДО PRO",
  },
  data: () => ({
    dialog: false,
    files: null,
  }),
  components: {
    FileInput
  }
};
</script>
