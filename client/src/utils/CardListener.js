export function userInfo(user) {
      const word = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
      <meta charset='utf-8'>
      <title>Export HTML to Word Document with JavaScript</title>
      </head>
      <body>
      <h1>Лист слушателя</h1>
      <hr></hr>
      <p>ФИО Слушателя - ${user.fiolistener}</p>
      <p>Дата рождения - ${new Date(
        user.datebirth
      ).toLocaleDateString()}</p>
      <p>Образование - ${user.education}</p>
      <p>Должность - ${user.position}</p>
      </body>
      </html>`;
    let source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(word);
    let fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `Карточка слушателя ${user.fiolistener}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }