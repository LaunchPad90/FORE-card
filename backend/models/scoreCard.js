const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreCardSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    scores: [Number]
})

module.exports = mongoose.model('ScoreCard', scoreCardSchema);