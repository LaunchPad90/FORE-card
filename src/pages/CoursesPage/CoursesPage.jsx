import React from 'react'
import '../CoursesPage/CoursesPage.css';


const CoursesPage = (props) => {

    const parScore = (total, num) => {
        return total + num;
    }
    
    const handleCreateCard = () => {
        props.history.push('/scorecards')
    }


    const allCourses = props.allCourses.map((course, idx) => {
        return (
            <div onClick={handleCreateCard} className="course-container">
                <p> {course.name} </p>
                <p>par: {course.pars.reduce(parScore)} </p>
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