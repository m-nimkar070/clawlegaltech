const mongoose = require("mongoose");

const exitResponseSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resignationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resignation",
    required: true,
  },
  responses: [
    {
      questionText: { type: String, required: true },
      response: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("ExitResponse", exitResponseSchema);
