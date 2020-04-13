const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holeSchema = new Schema({
    course: String,
    holeNum: Number,
    distance: Number
})


module.exports = mongoose.model('Hole', holeSchema);