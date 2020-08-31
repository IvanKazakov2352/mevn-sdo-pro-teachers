const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const course = new Schema(
  {
    namecourse: {
      type: String,
    },
    testDostupTests: {
      type: Boolean
    },
    testDostupMaterial: {
      type: Boolean
    },
    dateAddCourse: {
      type: Date,
      default: Date.now,
    },
    tests: {
      type: Array,
    },
    examen: {
      type: Array,
    },
    examenID: {
      type: String,
    },
    quantityExam: {
      type: Number
    },
    materials: {
      type: Array
    }
  },
  {
    collection: "courses",
  }
);

module.exports = mongoose.model("course", course);
