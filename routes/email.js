const express = require("express");
const nodemailer = require("nodemailer");
const sendgrid = require("nodemailer-sendgrid-transport");
const userEmail = require("../emails/userDostup");
const config = require("../config/db");

const router = express.Router();

const transporter = nodemailer.createTransport(
  sendgrid({
    auth: { api_key: config.sendgrid_api_key },
  })
);
router.post("/send", async (req, res) => {
  const { email, name, text } = req.body;
  await transporter.sendMail(userEmail(email, text, name))
});
module.exports = router;
