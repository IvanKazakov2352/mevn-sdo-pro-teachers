const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const group = new Schema(
  {
    namegroup: {
      type: String,
    },
    starttraining: {
      type: Date,
      default: Date.now,
    },
    endtraining: {
      type: Date,
      default: Date.now,
    },
    dateexamen: {
      type: Date,
      default: Date.now,
    },
    trainingplan: {
      type: String,
    },
    messagelistener: {
      type: String,
    },
    dostupExamen: {
      type: Boolean
    },
    user: {
      type: Array,
      default: []
    },
    course: {
      type: Array,
      default: []
    },
    tests: {
      type: Array,
      default: []
    }
  },
  {
    collection: "groups",
  }
);
module.exports = mongoose.model("group", group);
