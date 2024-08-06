const giangVien = require("../models/GiangVien");
const { multipleMongooseToObject } = require("../../util/mongoose");

class GiangVienController {
  index(req, res, next) {
    giangVien
      .aggregate([
        {
          $project: {
            _id: 1,
            maGiangVien: 1,
            chucVu: 1,
            email: 1,
            ngaySinh: 1,
            soDienThoai: 1,
            hoTen: 1,
            trangThai: {
              $cond: {
                if: { $eq: ["$trangThai", true] },
                then: "Còn dạy",
                else: "Đã nghỉ",
              },
            },
          },
        },
      ])
      .then((giangVien) => {
        res.json(giangVien);
      })
      .catch(next);
  }

  show(req, res, next) {
    const id = req.params.id;
    giangVien
      .findOne({ maGiangVien: id })
      .then((giangViens) => {
        res.json(giangViens);
      })
      .catch(next);
  }
}

module.exports = new GiangVienController();
