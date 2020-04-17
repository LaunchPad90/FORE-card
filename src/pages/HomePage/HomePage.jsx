import React from 'react';
import '../HomePage/HomePage.css'
import OutlinedCard from '../../components/RecapCard/MaterailCard';
import * as scoreCardService from '../../utils/scoreCardService';
import userService from '../../utils/userService';





const HomePage = (props) => {

    const handleRoundClick = () => {
        props.history.push('/allCourses')
    }
    
            return (
                <div>
                    <button onClick={handleRoundClick} className="start-round-button">Setup Round</button>   
                    <div>
                        <h1>{props.user.name}'s recent rounds</h1>
                        
                    </div>
                    <div className="recent-scores-container">
                        <OutlinedCard 
                            user={props.user}
                            scoreCards={props.scoreCards}
                        />
                    </div>
                </div>
            )
}

export default HomePage;