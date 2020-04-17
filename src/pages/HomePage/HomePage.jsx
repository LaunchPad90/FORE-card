import React from 'react';
import '../HomePage/HomePage.css'
import OutlinedCard from '../../components/RecapCard/MaterailCard';



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
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
            </div>
        </div>
    )
}

export default HomePage;