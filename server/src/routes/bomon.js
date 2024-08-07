const express = require("express");
const router = express.Router();

const bomonController = require("../app/controllers/BoMonController");
router.get("/", bomonController.index);
router.get("/:id", bomonController.show);

module.exports = router;
