import React from 'react';
import '../HomePage/HomePage.css'
// import * as scoreCardService from '../../utils/scoreCardService';
// import userService from '../../utils/userService';
import Button from '@material-ui/core/Button';
import RecapCard from '../../components/RecapCard/RecapCard';




const HomePage = (props) => {

    const handleRoundClick = () => {
        props.history.push('/allCourses')
    }
    
    // let cards = (props.user._id === (props.scoreCards.user)) ?
    
    let cards = props.scoreCards.length > 0 ?

            <div className="recent-scores-container">
                <RecapCard 
                    user={props.user}
                    scoreCards={props.scoreCards}
                    handleRemoveCard={props.handleRemoveCard}
                    history={props.history}
                />
            </div>
            :
            <div>No Recent Rounds</div>;
        
            
        return (

        <div>
            <Button variant="outlined" onClick={handleRoundClick} className="start-round-button">Setup Round</Button>   
            <div>
                <h1>{props.user.name}'s recent rounds</h1>
                
            </div>
            {/* <div className="recent-scores-container">
                <RecapCard
                    user={props.user}
                    scoreCards={props.scoreCards}
                    handleRemoveCard={props.handleRemoveCard}
                    history={props.history}
                />
            </div> */}

            <div className='NavBar'>
              {cards}
            </div>
        </div>
          );
};

export default HomePage;