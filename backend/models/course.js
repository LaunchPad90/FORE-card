const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    pars: [Number],
    // totalDistance: Number,
    // hole: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Hole'
    // }],
    // city: String,
    // stateAbr: String,
    // isPrivate: Boolean,
    
})

module.exports = mongoose.model('Course', courseSchema);