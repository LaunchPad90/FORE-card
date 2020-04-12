const express = require('express');
const router = express.Router();
const scoreCardCtrl = require('../../controllers/scoreCards');

router.use(require('../../../backend/config/auth'));
router.post('/scorecard', scoreCardCtrl.index);






module.exports = router;