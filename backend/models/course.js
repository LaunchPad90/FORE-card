const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    pars: [Number],
})

module.exports = mongoose.model('Course', courseSchema);