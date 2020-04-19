import React, {useState} from 'react'
import '../CoursesPage/CoursesPage.css';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const CoursesPage = (props) => {

    const classes = useStyles();    let history = useHistory();

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
            // <div course={course} onClick={() => handleCreateCard(course)} className="course-card">
            //     <p name="name" value={courseData.name}> {course.name} </p>
            //     <p name="pars" value={courseData.pars}>par: {course.pars.reduce(parScore)} </p>
            // </div>
            <div course={course} onClick={() => handleCreateCard(course)} className="course-card">
            <Card className={classes.root} variant="outlined">
            <CardContent>
                
                <Typography variant="h5" component="h5">
                    <h5 name="name" value={courseData.name}> {course.name}</h5>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <h6 name="pars" value={courseData.pars}>par: {course.pars.reduce(parScore)} </h6>
                </Typography>
                
            </CardContent>            
            </Card>
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