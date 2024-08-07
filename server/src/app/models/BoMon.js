const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const BoMon = new Schema(
  {
    maGiangVien: { type: String, default: "", maxLenght: 255, require: true },
    hoTen: { type: String, default: "", maxLenght: 255, require: true },
    gioiTinh: { type: Boolean },
    ngaySinh: { type: Date },
    email: { type: String, default: "", maxLenght: 255 },
    soDienThoai: { type: String, default: "", maxLenght: 255 },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
BoMon.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("bomons", BoMon);
