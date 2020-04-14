const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holeSchema = new Schema([
    {
        // course: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Course'
        // },
        holeId: Number,
        holeNum: Number,
        // teeBox: [
        //     {
        //         color: String,
        //         distance: Number,

        //     }
        // ],
        
    }
])


module.exports = mongoose.model('Hole', holeSchema);