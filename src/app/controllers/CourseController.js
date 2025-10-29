const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // giải quyết vấn đề mongoose object
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: course ? mongooseToObject(course) : null,
                });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = new CourseController();
