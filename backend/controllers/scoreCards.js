const ScoreCard = require('../models/scoreCard');


module.exports = {
    create,
    index, 
    delete: deleteCard
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
        const scoreCards = await ScoreCard.find({}).populate('course')
        console.log('CONTROLLER INDEX SCORECARD', scoreCards)
        res.status(200).json(scoreCards)
    } catch(err) {
        res.json({err});
    }
}

async function deleteCard(req, res) {
    try {
        const removeOne = await ScoreCard.findByIdAndRemove(req.params.id)
        res.status(200).json(removeOne);
    } catch(err) {
        console.log('DELETE NO WORKY', err)
    }
}