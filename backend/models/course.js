const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    par: Number,
    city: String,
    stateAbr: String,
    isPrivate: Boolean,
})

module.exports = mongoose.model('Course', courseSchema);