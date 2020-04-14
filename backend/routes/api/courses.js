const express = require('express');
const router = express.Router();
const courseCtrl = require('../../controllers/courses');

router.get('/', courseCtrl.getOne);

module.exports = router;