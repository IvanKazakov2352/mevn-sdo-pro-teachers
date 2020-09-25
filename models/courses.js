const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const course = new Schema(
  {
    nameProfile: {
      type: String,
    },
    dostupOnModule: {
      type: Boolean,
    },
    dostupOnTests: {
      type: Boolean,
    },
    dostupOnLections: {
      type: Boolean,
    },
    categories: {
      type: Array
    },
    examens: [],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "courses",
  }
);

module.exports = mongoose.model("course", course);
