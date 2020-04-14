require('dotenv').config();
require('./backend/config/database');
const Course = require('./backend/models/course');

Course.deleteMany({}).then(() => {
    Course.create([
        {name: 'SomeName', pars: [3,4,5,3,3,5,4,3,5,4,4,4,5,3,4,5,4,3]},
        {name: 'Broken Tee', pars: [3,4,5,3,3,5,4,3,5,4,4,4,5,3,4,5,4,3]},
    ]).then(() => {
        process.exit();
    })
})