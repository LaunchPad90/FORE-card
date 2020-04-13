const ScoreCard = require('../models/scoreCard');


module.exports = {
    create
}

async function create(req, res) {
    try {
        await ScoreCard.create(req.body);
    } catch(err) {
        res.json({err});
    }
}