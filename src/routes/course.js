const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Tuyến đường khớp từ trên xuống dưới
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

module.exports = router;
