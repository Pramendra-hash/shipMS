const express = require("express");

const router = express.Router();

const {
  getShips,
  createShip,
  deleteShip,
  updateShip,
} = require("../controller/shipController");

router.get("/", getShips);

router.post("/", createShip);

router.delete("/:id", deleteShip);
router.put("/:id", updateShip);

module.exports = router;