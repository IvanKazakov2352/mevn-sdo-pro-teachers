export function exportToExcel(array) {
    import("../vendor/Export2Excel").then((excel) => {
      const tHeader = [
        "Имя слушателя",
        "Процент прохождения(Проценты)",
        "Оценка за тестирование",
      ];
      const filterVal = [
        "userName",
        "percent",
        "appraisal",
      ];
      const list = array;
      const data = formatJson(filterVal, list);
      const filename = "Результаты тестирвоания"
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