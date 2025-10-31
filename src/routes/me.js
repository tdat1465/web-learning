const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// Tuyến đường khớp từ trên xuống dưới
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
