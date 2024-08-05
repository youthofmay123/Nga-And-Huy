const lopHocPhan = require("../models/LopHocPhan");
const { multipleMongooseToObject } = require("../../util/mongoose");

class LopHocPhanController {
  index(req, res, next) {
    lopHocPhan
      .find({})
      .then((lopHocPhan) => {
        res.json(lopHocPhan);
      })
      .catch(next);
  }
}

module.exports = new LopHocPhanController();
