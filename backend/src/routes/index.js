const express = require("express");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes")
const adminRoutes = require("./adminRoutes")
const router = express.Router();

router.use("/auth" , authRoutes);
router.use("/user" , userRoutes);
router.use("/admin" , adminRoutes);


module.exports = router;