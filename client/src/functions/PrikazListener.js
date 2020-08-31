export function PrikazListener(user) {
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
        </style>
      </head>
      <body>
      <center>
      <h1>Лист учета слушателя</h1>
      </center>
      <hr></hr>
      <center>
        Прошу зачислить меня слушателем в данную группу обучения 
      </center>
      <h3>Данные о слушателе</h3>
      <p>ФИО слушателя - ${user.fiolistener}</p>
      <p>Дата рождения - ${new Date(user.datebirth).toLocaleDateString()}</p>
      <p>Должность - ${user.education}</p>
      <p>Email слушателя - ${user.email}</p>
      <p>Номер телефона слушателя - ${user.phone}</p>
      <hr></hr>
      <p>С Уставом образовательного учреждения, лицензией на право образовательной деятельности, инструкциями по охране труда и пожарной безопасности, правилами приема слушателя на обучение по дополнительным профессиональным программам ознакомлен (а).
          Согласен (а) на сбор своих персональных данных.
      </p>
      <p>
      Настоящим подтверждаю, что в рамках оказания услуги по обучению даю добровольное согласие на получение, обработку, хранение и передачу моих персональных данных на основании и в соответствии с Федеральным законом Российской Федерации от 27.07.2006 № 152-ФЗ «О персональных данных» и иными законодательными актами РФ . С Положением о порядке обработки, хранения и передачи информации ознакомлен.
      </p>
      <p>Дата__________ФИО___________________________Подпись__________</p>
      </body>
      </html>`;
    let source =
      "data:application/vnd.ms-word;charset=utf-8," +
      encodeURIComponent(word);
    let fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `Зачисление по пользователю ${user.fiolistener}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }