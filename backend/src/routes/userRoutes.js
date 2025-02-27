const express = require("express");
const { submitResignation, getResignations } = require("../controllers/resignationController");
const { submitResponses } = require("../controllers/exitResponseController");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/resignations", authenticate, getResignations);
router.post("/resign", authenticate, submitResignation);
router.post("/responses", authenticate, submitResponses);

module.exports = router;