export function PrikazZachslenie(datePrikaz, numberPrikaz, group) {
  const iterationUsers = (coll) => {
    var result = "<ol>";
    for (const user of group.user) {
      result += `<li>${user.fiolistener}</li>`;
    }
    result = `${result}</ol>`;
    return result;
  };
  const word = `<html xmlns:o='urn:schemas-microsoft-com:office:office
        xmlns:w='urn:schemas-microsoft-com:office:word'
        xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>Просьба зачислить пользователя</title>
          <style>
            p {
              font-family: 'Times New Roman', Times, serif; 
              font-size: 14pt;
            }
            li {
              font-family: 'Times New Roman', Times, serif; 
              font-size: 14pt;
            }
          </style>
        </head>
        <body>
          <center>
            <h1>Система дистанционного обучение СДО PRO</h1>
            <h3>Дата приказа: ${datePrikaz}. Приказ №${numberPrikaz}</h3>
            <h4>«О зачислении в учебную группу и организации занятий учебной группы ${group.namegroup}»</h4>
          </center>
          <p>На основании Договоров об оказании образовательных услуг, заключенных между СДО PRO и гражданами</p>
            <hr></hr>
              ${iterationUsers()}
            <hr></hr>
            <center>
              <h1>Приказываю</h1>
            </center>
            <ol>
              <li>Сформировать учебную группу "${group.namegroup}"</li>
              <li>
                Зачислить вышеуказанных граждан на обучение по дополнительной программе профессионального образования 
                "СДО PRO" в состав учебной группы "${group.namegroup}"
              </li>
              <li>Ввести группу "${group.namegroup}" в учебное расписание СДО PRO  ${datePrikaz}г.</li>
              <li>Руководителю УМО известить обучающихся группы о дате начала и дальнейшем расписании занятий.</li>
              <li>Руководителю УМО известить привлекаемого к занятиям в данной группе преподавателя о расписании учебных занятий.</li>
              <li>
                Назначить преподавателем для проведения занятий в данной учебной группе и возложить на него ответственность за проведение занятий учебной группы "${group.namegroup}"
                соответствии с учебной программой и расписанием для данной учебной группы.
              </li>
              <p>С приказом ознакомлены</p>
              <p>Председатель комиссии: (Кто-то там) _____________</p>
              <p>Член комиссии1: (Кто-то там1) _____________</p>
              <p>Член комиссии2: (Кто-то там2) _____________</p>
              <p>Член комиссии3: (Кто-то там3) _____________</p>
            </ol>
        </body>
      </html>`;
  let source =
    "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(word);
  let fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = `Зачисление на обучение.doc`;
  fileDownload.click();
  document.body.removeChild(fileDownload);
}
