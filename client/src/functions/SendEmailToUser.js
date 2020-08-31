import emailjs from "emailjs-com";

export function sendEmailToUser(user) {
  const service_id = "mail_ru";
  const template_id = "template_53mzJSYr";
  const user_id = "user_nY337vvVnnfQu6UUSpba2";
  const templateParams = {
    emailTo: user.email,
    to_name: `${user.fiolistener}`,
    login: `${user.login}`,
    password: `${user.password}`,
  };
  emailjs.send(service_id, template_id, templateParams, user_id, {
      reply_to: "kazakov3344@mail.ru",
    })
    .then((result) => {
      console.log("Success", result.status, result.text);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
