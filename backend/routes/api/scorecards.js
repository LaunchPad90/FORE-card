const express = require('express');
const router = express.Router();
const scoreCardCtrl = require('../../controllers/scoreCards');

router.use(require('../../config/auth'));




router.get('/home', scoreCardCtrl.index)
router.post('/', checkAuth, scoreCardCtrl.create);
router.delete('/:id', checkAuth, scoreCardCtrl.delete);



function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;