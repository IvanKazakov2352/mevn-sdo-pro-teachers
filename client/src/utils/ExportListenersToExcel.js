export function exportToExcel(array, name) {
  import("../vendor/Export2Excel").then((excel) => {
    const tHeader = ["ФИО Слушателя", "Логин", "Пароль", "Дата регистрации"];
    const filterVal = ["fiolistener", "login", "password", "dateregister"];
    const list = array;
    const data = formatJson(filterVal, list);
    const filename = `Досьтупы для группы ${name}`;
    const autoWidth = true;
    const bookType = "xlsx";
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
