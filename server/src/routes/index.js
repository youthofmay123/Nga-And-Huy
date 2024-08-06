const homeRouter = require("./home");
const coursesRouter = require("./courses");
const lopHocPhanRouter = require("./lopHocPhan");
const giangVienRouter = require("./giangVien");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/", homeRouter);
  app.use("/lophocphan", lopHocPhanRouter);
  app.use("/giangvien", giangVienRouter);
}

module.exports = route;
