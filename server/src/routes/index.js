const homeRouter = require("./home");
const coursesRouter = require("./courses");
const lopHocPhanRouter = require("./lopHocPhan");
const giangVienRouter = require("./giangVien");
// const bomonRouter = require("./bomon");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/", homeRouter);
  app.use("/lophocphan", lopHocPhanRouter);
  app.use("/giangvien", giangVienRouter);
  // app.use("/bomon", bomonRouter);
}

module.exports = route;
