const express = require("express");
const router = express.Router();

const lopHocPhanCotroller = require("../app/controllers/LopHocPhanCotroller");

router.get("/", lopHocPhanCotroller.index);
router.get("/:id", lopHocPhanCotroller.ChiTietLopHocPhan);

module.exports = router;
