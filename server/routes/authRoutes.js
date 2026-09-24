const express = require("express");
const { register, login, profile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, profile);
module.exports = router;
