const Course = require("../models/LopHocPhan");
const { multipleMongooseToObject } = require("../../util/mongoose");

class HomeController {
  //[GET] /news
  index(req, res, next) {
    //Viết promise
    Course.find({})
      .then((courses) => {
        res.json(courses);
        // res.render("home", {
        //   courses: multipleMongooseToObject(courses),
        // });
      })
      .catch(next);

    //Viết callback => bị lỗi
    // Course.find({}, function (err, courses) {
    // if(!err) {
    // res.json(courses);
    // } else{
    // res.status(400).json({ error: 'ERROR!!!' });
    // }
    //
    // });

    // res.render('home'); // Kết quả trả về
  }

  //[GET] /news/:slug
  search(req, res) {
    res.send("search");
  }
}

module.exports = new HomeController(); // Xuất ra đối tượng NewsController (như constructor)
