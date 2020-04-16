import React from 'react'



const CoursesPage = (props) => {
    const allCourses = props.allCourses.map((course, idx) => {
        return (
            <div>
                <p>name: {course.name} </p>
                <p>pars: {course.pars.join(', ')} </p>

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