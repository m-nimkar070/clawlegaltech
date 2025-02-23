const ExitResponse = require("../models/ExitResponse");
const Resignation = require("../models/Resignation");

exports.submitResponses = async (req, res) => {
  const { responses, resignationId } = req.body;
  try {
    const resignation = await Resignation.findById(resignationId);
    if (!resignation || resignation.status !== "approved") {
      return res.status(400).json({ error: "Resignation not approved" });
    }

    const exitResponse = new ExitResponse({
      employeeId: req.user.id,
      resignationId,
      responses,
    });
    await exitResponse.save();
    res.status(200).json({ message: "Responses submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getResponses = async (req, res) => {
  try {
    const responses = await ExitResponse.find().populate(
      "employeeId",
      "username"
    );
    res.status(200).json({ data: responses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
