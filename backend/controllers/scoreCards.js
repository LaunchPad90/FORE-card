const ScoreCard = require('../models/scoreCard');


module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log('scorecardcontroller{}{}{}')
    try {
        await ScoreCard.create(req.body);
    } catch(err) {
        res.json({err});
    }
}

async function index(req, res) {
    try {
        await ScoreCard.index(req.body)
    } catch(err) {
        res.json({err});
    }
}