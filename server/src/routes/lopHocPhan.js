const express = require("express");
const router = express.Router();

const lopHocPhanCotroller = require("../app/controllers/LopHocPhanCotroller");

router.get("/", lopHocPhanCotroller.index);

module.exports = router;
