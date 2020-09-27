<template>
  <v-row justify="center">
    <v-dialog v-model="dialogQuestionTable" max-width="650">
      <v-card>
        <v-card-title class="headline"
          >Добавление вопросов списком</v-card-title
        >

        <v-card-text>
          <ExcelImportData
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="closeDialog">
            Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
const ExcelImportData = () => import("@/components/CourseComponents/CourseTest/ExcelImportComponent");
export default {
  props: {
    dialogQuestionTable: {
      type: Boolean,
    },
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.$emit("handleSuccess", { results, header });
      this.closeDialog();
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  components: {
    ExcelImportData,
  },
};
</script>
