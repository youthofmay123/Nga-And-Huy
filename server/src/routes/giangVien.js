const express = require("express");
const router = express.Router();

const giangVienController = require("../app/controllers/GiangVienController");
router.get("/", giangVienController.index);
router.get("/:id", giangVienController.show);

module.exports = router;
