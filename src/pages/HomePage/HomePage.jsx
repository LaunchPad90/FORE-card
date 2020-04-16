import React from 'react';
import '../HomePage/HomePage.css'
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import ScoreCardPage from '../ScoreCardPage/ScoreCardPage';



const HomePage = (props) => {

    const handleRoundClick = () => {
        props.history.push('/allCourses')
    }

    return (
        <div>
            <button onClick={handleRoundClick} className="start-round-button">Setup Round</button>   
            <div>
                <h1>Profile</h1>
            </div>
            <div className="recent-scores-container">
                <h4>Recent Scores</h4>
            </div>
        </div>
    )
}

export default HomePage;