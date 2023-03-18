const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/login", adminController.getLogin);
router.post("/login", authMiddleware, adminController.postLogin);
router.get("/dashboard", adminController.getDashboard);

module.exports = router;