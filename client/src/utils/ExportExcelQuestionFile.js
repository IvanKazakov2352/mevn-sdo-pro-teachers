export function exportToExcel(array) {
  import("../vendor/Export2Excel").then((excel) => {
    const tHeader = [
      "id",
      "question",
      "answer",
      "wronganswer",
      "wronganswer1",
      "wronganswer2",
      "wronganswer3",
      "comment",
    ];
    const filterVal = [
      "id",
      "question",
      "answer",
      "wronganswer",
      "wronganswer1",
      "wronganswer2",
      "wronganswer3",
      "comment",
    ];
    const list = array;
    const data = formatJson(filterVal, list);
    const filename = "Шаблон для вопросов"
    const autoWidth = true
    const bookType = "xlsx"
    excel.export_json_to_excel({
      header: tHeader,
      data,
      filename,
      autoWidth,
      bookType,
    });
  });
}

function formatJson(filterVal, jsonData) {
  return jsonData.map((v) =>
    filterVal.map((j) => {
      if (j === "timestamp") {
        return parseTime(v[j]);
      } else {
        return v[j];
      }
    })
  );
}
