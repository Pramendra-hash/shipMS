const express = require("express");

const router = express.Router();

const {
  addCaptain,
  getCaptains,
  deleteCaptain,
  updateCaptain,
} = require("../controller/captainController");

router.get("/", getCaptains);

router.post("/", addCaptain);

router.put("/:id", updateCaptain);

router.delete("/:id", deleteCaptain);


module.exports = router;