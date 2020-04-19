require('dotenv').config();
require('./backend/config/database');
const Course = require('./backend/models/course');

Course.deleteMany({}).then(() => {
    Course.create([
        {name: 'Deer Creek Golf Club', pars: [3,4,5,3,3,5,4,3,5,4,4,4,5,3,4,5,4,3]},
        {name: 'Broken Tee', pars: [3,4,5,3,3,5,4,3,5,4,4,4,5,3,4,5,4,3]},
        {name: 'Fox Hollow', pars: [4,5,4,4,3,5,4,4,3,5,4,4,4,3,5,3,4,4]},
        {name: 'Harvard Gulch', pars: [3,3,3,3,3,3,3,3,3]},
        {name: 'Racoon Creek', pars: [4,4,4,4,4,5,4,3,4,3,4,4,4,4,4,5,4,4]},
    ]).then(() => {
        process.exit();
    })
})