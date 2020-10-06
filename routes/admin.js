const express = require("express");
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const router = express.Router();

router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

router.put("/update", async (req, res) => {
  try {
    const candidate = await Admin.findById(req.body._id);
    candidate.fio = req.body.fio,
    candidate.email = req.body.email,
    candidate.position = req.body.position,
    candidate.photo = req.body.photo
    await candidate.save()
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
