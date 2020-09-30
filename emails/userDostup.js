const config = require("../config/db")

module.exports = function (email, text, name) {
  return {
    to: email,
    from: config.email_from,
    subject: "СДО PRO Вам выдан доступ до обучения.",
    html: `
      <h1>Вам выдан доступ до обучения</h1>
      <p>Поздравляем ${name}</p>
      <hr/>
      <p>Текст ${text}</p>
    `
  };
};
