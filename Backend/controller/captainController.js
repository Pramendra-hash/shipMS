const Captain = require("../model/Captain");

// Add Captain
exports.addCaptain = async (req, res) => {
  try {
    const captain = await Captain.create(req.body);

    res.status(201).json(captain);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Captains
exports.getCaptains = async (req, res) => {
  try {
    const captains = await Captain.find();

    res.json(captains);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Captain
exports.deleteCaptain = async (req, res) => {
  try {
    await Captain.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Captain Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Captain
exports.updateCaptain = async (req, res) => {
  try {
    const captain = await Captain.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(captain);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};