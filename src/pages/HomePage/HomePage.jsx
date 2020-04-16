import React from 'react';
import '../HomePage/HomePage.css'
import ScoreCard from '../../components/ScoreCard/ScoreCard';
import ScoreCardPage from '../ScoreCardPage/ScoreCardPage';



const HomePage = (props) => {

  

    return (
        <div>
            <button  className="StartRound">Setup Round</button>   
            <div>
                <ScoreCardPage />
            </div>
        </div>
    )
}

export default HomePage;