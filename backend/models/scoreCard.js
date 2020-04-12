const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreCardSchema = new Schema ({
    name: String,
    course: String,
    score: Number
})

module.exports = mongoose.model('ScoreCard', scoreCardSchema);