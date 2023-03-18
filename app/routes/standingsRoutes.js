const express = require("express");
const standingsController = require("../controllers/standingsController");

const router = express.Router();

router.get("/", standingsController.getStandings);
router.post("/", standingsController.postResult);

module.exports = router;