const express = require("express");
const router = express.Router();
const Course = require("../models/courses");

router.get("/", (req, res) => {
  Course.find((err, courses) => {
    if (err) {
      throw err;
    } else {
      res.json(courses);
    }
  });
});

router.get("/:id", (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    res.json(course);
  });
});

router.post("/", (req, res) => {
  const course = new Course(req.body);
  course
    .save()
    .then((course) => {
      res.status(200).json({ group: "Course Added" });
    })
    .catch((err) => {
      res.status(400).send({ group: "Error of added" });
    });
});

router.put("/:id", (req, res, next) => {
  Course.findById(req.params.id, (err, course) => {
    if (!course) {
      return next(new Error("Error update course"));
    } else {
      course.namecourse = req.body.namecourse,
      course.testDostupTests = req.body.testDostupTests,
      course.testDostupMaterial = req.body.testDostupMaterial,
      course.tests = req.body.tests,
      course.examen = req.body.examen,
      course.examenID = req.body.examenID,
      course.quantityExam = req.body.quantityExam,
      course.materials = req.body.materials
      course.save()
        .then((course) => {
          res.json("Update completed");
        })
        .catch((err) => {
          res.status(400).send("No Update course");
        });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Course.findByIdAndRemove(req.params.id, (err, course) => {
    if (err) {
      res.json(err);
    } else {
      res.json("course deleted");
    }
  });
});

module.exports = router;
