const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema({
  shipName: {
    type: String,
    required: true,
  },

  captain: {
    type: String,
    required: true,
  },

  destination: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Ship", shipSchema);