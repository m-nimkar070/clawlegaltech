const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const apiRoutes = require("./routes/index");
const cors = require('cors');

dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
