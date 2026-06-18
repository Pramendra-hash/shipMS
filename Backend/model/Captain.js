const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  rank: {
    type: String,
    required: true,
  },

  experience: {
    type: Number,
    required: true,
  },

  assignedShip: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "Captain",
  captainSchema
);