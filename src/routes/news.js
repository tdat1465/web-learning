const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Tuyến đường khớp từ trên xuống dưới
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
