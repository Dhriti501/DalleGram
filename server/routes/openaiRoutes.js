const {generateImage} = require('../controller/openaiController')
const express = require('express');
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;