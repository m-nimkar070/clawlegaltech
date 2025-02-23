const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lwd: { type: String, required: true }, // Last working day
  reason: {type: String , default: "Career change"},
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Resignation", resignationSchema);