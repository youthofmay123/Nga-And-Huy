const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const LopHocPhan = new Schema(
  {
    maLopHocPhan: { type: String, default: "", maxLenght: 255, require: true },
    tenMonHoc: { type: String, default: "", maxLenght: 255, require: true },
    tenLopHocPhan: { type: String, maxLenght: 600 },
    trangThai: { type: Boolean },
    slug: { type: String, slug: "tenMonHoc", unique: true },
  },
  {
    timestamps: true,
  }
);

//Add plugin
mongoose.plugin(slug);
LopHocPhan.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("lophocphans", LopHocPhan);
