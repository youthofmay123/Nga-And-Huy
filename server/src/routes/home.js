const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/HomeController");

// router.get("/:slug", homeController.search);
// router.use('/search', siteController.search);
router.get("/", homeController.index);

module.exports = router;
