import React, {useState} from 'react'
import '../CoursesPage/CoursesPage.css';


const CoursesPage = (props) => {

    const [courseData, setCourseData] = useState({
        name: '',
        courseId: '',
        pars: []
    })

    const parScore = (total, num) => {
        return total + num;
    }
    
    const handleCreateCard = (courseData) => {
        setCourseData({
            ...courseData
        })
        console.log(courseData)
        props.history.push('/scorecards')
    }


    const allCourses = props.allCourses.map((course, idx) => {
        return (
            <div course={course} onClick={() => handleCreateCard(course)} className="course-container">
                <p name="name" value={courseData.name}> {course.name} </p>
                <p name="courseId" value={courseData.courseId}> {course._id} </p>
                <p name="pars" value={courseData.pars}>par: {course.pars.reduce(parScore)} </p>
            </div>
        )
    })

    return (
        <div>
            {allCourses}
        </div>
    )
}

export default CoursesPage;