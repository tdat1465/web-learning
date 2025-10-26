const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Tuyến đường khớp từ trên xuống dưới
router.get('/search', siteController.show);
router.get('/', siteController.index);

module.exports = router;
