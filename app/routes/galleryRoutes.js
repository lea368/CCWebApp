const express = require("express");
const multer = require("multer");
const galleryController = require("../controllers/galleryController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", galleryController.getGallery);
router.post("/", upload.single("photo"), galleryController.postPhoto);

module.exports = router;