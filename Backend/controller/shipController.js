const Ship = require("../model/Ship");

// Get All Ships
exports.getShips = async (req, res) => {
  try {
    const ships = await Ship.find();
    res.json(ships);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Ship
exports.createShip = async (req, res) => {
  try {
    const ship = await Ship.create(req.body);

    res.status(201).json(ship);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Ship
exports.deleteShip = async (req, res) => {
  try {
    await Ship.findByIdAndDelete(req.params.id);

    res.json({
      message: "Ship Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//update pp
exports.updateShip = async (req, res) => {
  try {
    const ship = await Ship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(ship);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};