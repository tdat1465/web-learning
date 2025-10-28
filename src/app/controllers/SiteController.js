const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                // giải quyết vấn đề mongoose object
                res.render('home', { 
                    courses: multipleMongooseToObject(courses) 
                });
            })
            .catch(next);
    }

    // [GET] /search
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
