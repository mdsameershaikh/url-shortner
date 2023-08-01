const express = require('express');
const {genetateShortURL} = require('../controllers/url')
const router = express.Router();

router.post('/', genetateShortURL );

module.exports = router;
