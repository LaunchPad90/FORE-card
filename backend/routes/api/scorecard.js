const express = require('express');
const router = express.Router();

router.get('/scorecard', scoreCardCtrl.newCard);




module.exports = router;