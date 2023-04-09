const express = require('express');
const router = express.Router();
const {addImage, getImage} = require('../controller/dbController')


router.post('/addimage', addImage);
router.get('/getimage',getImage);

module.exports = router;
