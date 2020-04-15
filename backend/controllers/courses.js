const mongoose = require('mongoose');
const Course = require('../models/course');


module.exports = {
    getOne,
    index
}

async function getOne(req, res) {
    console.log('courseController')
    try {
        const course = await Course.findById(req.body.courseId) 
        res.status(200).json(course);
    } catch(err) {
        console.log(err)
        res.status(500).json({err});
    }
}

async function index(req, res) {
    console.log('index, coursecontroller')
    try {
        const allCourses = await Course.find({})
        console.log('{}{}{}{}{}{}{}{}', allCourses)
        res.status(200).json(allCourses);
    } catch(err) {
        res.status(500).json({err});
    }
}
