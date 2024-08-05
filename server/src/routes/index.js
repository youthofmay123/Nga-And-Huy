const homeRouter = require("./home");
const coursesRouter = require("./courses");
const lopHocPhanRouter = require("./lopHocPhan");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/", homeRouter);
  app.use("/lophocphan", lopHocPhanRouter);
}

module.exports = route;
