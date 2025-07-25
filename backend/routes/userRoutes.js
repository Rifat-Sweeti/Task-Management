const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const { getUsers, getUserById } = require("../controllers/userContoller")

// User Management Routes
router.get("/", protect, adminOnly, getUsers);         // Get all users (Admin only)
router.get("/:id", protect, getUserById);              // Get user by ID (protected)

module.exports = router;
