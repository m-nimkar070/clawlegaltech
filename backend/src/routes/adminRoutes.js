const express = require("express");
const { getResignations, concludeResignation } = require("../controllers/resignationController");
const { authenticate, isAdmin } = require("../middleware/authMiddleware");
const { getResponses } = require("../controllers/exitResponseController");

const router = express.Router();

router.get("/resignations", authenticate, isAdmin, getResignations);
router.put("/conclude_resignation", authenticate, isAdmin, concludeResignation);
router.get("/exit_responses", authenticate, isAdmin, getResponses);

module.exports = router;