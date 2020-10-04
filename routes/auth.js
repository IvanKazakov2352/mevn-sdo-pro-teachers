const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Admin");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      const isPassword = await bcrypt.compare(password, candidate.password)
      if (isPassword) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;
        req.session.cookie.httpOnly = false
        req.session.save((err) => {
          if (err) {
            throw err;
          } else {
            res.json({ message: "Вы успешно авторизованы в системе", user: req.session.user = candidate });
          }
        });
      } else {
        res.json({ message: "Неверный пароль, введите еще раз" });
      }
    } else {
      res.json({ message: "Пользователь с данным email не найден в системе" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/register", async (req, res) => {
  const { email, password, position, fio } = req.body;
  const candidate = await User.findOne({ email });
  if (candidate) {
    res.json({ message: "Пользователь с данным email уже существует" });
  } else {
    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, fio, position, password: hashPassword });
    await user.save();
    res.json({ message: "Регистрация в системе прошла успешно, пожалуйста пройдите авторизацию" });
  }
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Вы вышли из системы" });
  });
  res.clearCookie("connect.sid")
});

module.exports = router;
