const scoreCard = require('../models/scoreCard');

module.exports = {
    index
}

function index(req, res) {
    console.log('USER: ', req.user);
}