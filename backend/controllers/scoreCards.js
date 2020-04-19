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
    console.log('INDEXCTRL', req.user._id)
    try {
        const scoreCards = await ScoreCard.find({user:req.user._id}).populate('course')
        console.log('CONTROLLER INDEX SCORECARD', scoreCards)
        res.status(200).json(scoreCards)
    } catch(err) {
        res.json({err});
    }
}

async function deleteCard(req, res) {
    console.log('DELETECTRL', req.params)
    try {
        const removeOne = await ScoreCard.findOneAndDelete({_id: req.params.id})
        console.log('DELTECTRL', removeOne)
        res.status(200).json(removeOne);
    } catch(err) {
        console.log('DELETE NO WORKY', err)
    }
}