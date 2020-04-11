const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);

module.exports = router;