import React, {useState} from 'react'
import '../CoursesPage/CoursesPage.css';
import { useHistory } from "react-router-dom";


const CoursesPage = (props) => {
    let history = useHistory();
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
        
        props.history.push({
            pathname: `/scorecards:${courseData}`,
            state: {detail: courseData}
          })
        //   
    }


    const allCourses = props.allCourses.map((course, idx) => {
        return (
            <div course={course} onClick={() => handleCreateCard(course)} className="course-card">
                <p name="name" value={courseData.name}> {course.name} </p>
                <p name="pars" value={courseData.pars}>par: {course.pars.reduce(parScore)} </p>
            </div>
            
        )
    })

    return (
        <div className="course-container">
            {allCourses}
        </div>
    )
}

export default CoursesPage;