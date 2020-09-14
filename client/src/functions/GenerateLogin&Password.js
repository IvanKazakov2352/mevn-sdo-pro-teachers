export function generateLogin() {
  var login = "";
  var string = "0123456789";
  for (var i = 0; i < 7; i++) {
    login += string.charAt(Math.floor(Math.random() * string.length));
  }
  return login;
}

export function generatePassword() {
  var password = "";
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/|=-_()!@#$%^&+";
  for (var i = 0; i < 15; i++) {
    password += string.charAt(Math.floor(Math.random() * string.length));
  }
  return password;
}
