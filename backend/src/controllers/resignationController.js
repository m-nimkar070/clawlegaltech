const User = require("../models/User");
const Resignation = require("../models/Resignation");
const checkHoliday = require("../utils/holidayCheck");
const sendEmail = require("../utils/emailSender");

exports.submitResignation = async (req, res) => {
    const { lwd, reason } = req.body;
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const isHoliday = await checkHoliday(lwd, user.country);
      const dayOfWeek = new Date(lwd).getDay(); // 0 = Sunday, 6 = Saturday
  
    //   console.log("user", user)
      if (isHoliday || dayOfWeek === 0 || dayOfWeek === 6) {
        return res.status(400).json({ error: "Last working day cannot be a holiday or weekend" });
      }
  
      const resignation = new Resignation({ employeeId: req.user.id, lwd, reason });
    //   console.log("resignation" , resignation)
      await resignation.save();
      res.status(200).json({ data: { resignation: { _id: resignation._id } } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.getResignations = async (req, res) => {
  try {
    const resignations = await Resignation.find().populate("employeeId", "username");
    console.log("res" , resignations)
    res.status(200).json({ data: resignations });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.concludeResignation = async (req, res) => {
    const { resignationId, approved, lwd } = req.body;
    try {
      const resignation = await Resignation.findById(resignationId).populate("employeeId");
      if (!resignation) return res.status(404).json({ error: "Resignation not found" });
  
      resignation.status = approved ? "approved" : "rejected";
      resignation.lwd = lwd;
      await resignation.save();
  
      const employeeEmail = "m.nimkar07@gmail.com"; // Replace with actual employee email
      const subject = `Resignation ${approved ? "Approved" : "Rejected"}`;
      const text = `Your resignation has been ${approved ? "approved" : "rejected"}. Last working day: ${lwd}`;
  
      await sendEmail(employeeEmail, subject, text);
      res.status(200).json({ message: "Resignation updated successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };