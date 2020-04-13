const express = require('express');
const router = express.Router();
const scoreCardCtrl = require('../../controllers/scoreCards');

router.use(require('../../../backend/config/auth'));
router.get('/', checkAuth, scoreCardCtrl.create);



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;