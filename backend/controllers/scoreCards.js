const ScoreCard = require('../models/scoreCard');


module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log('CONTROLLER CREATE SCORECARD')
    try {
        const scoreCard = await ScoreCard.create(req.body);
        res.status(200).json(scoreCard)
    } catch(err) {
        res.json({err});
    }
}

async function index(req, res) {
    try {
        const scoreCards = await ScoreCard.find({})
        console.log('CONTROLLER INDEX SCORECARD', scoreCards)
    } catch(err) {
        res.json({err});
    }
}