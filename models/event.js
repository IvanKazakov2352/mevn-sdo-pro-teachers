const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema(
  {
    nameEvent: {
      type: String,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  {
    collection: "events",
  }
);
module.exports = mongoose.model("event", event);
