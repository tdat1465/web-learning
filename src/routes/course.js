const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Tuyến đường khớp từ trên xuống dưới
router.get('/:slug', courseController.show);

module.exports = router;
