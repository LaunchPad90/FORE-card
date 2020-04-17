import React from 'react';
import { Component } from 'react';
import CardRow from '../../components/CardRow/CardRow';
import * as scoreCardService from '../../utils/scoreCardService';
import userService from '../../utils/userService';

class ScoreCardPage extends Component {


    state = {
        holeNum: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        scores: {},
        course: this.props.location.state.detail._id,
        user: userService.getUser()
    }

    handleScoreSubmit = async (e) => {
        e.preventDefault();
        await scoreCardService.create(this.state)
        
    }

    handleChange = (e) => {
        this.setState({
            scores: {
                ...this.state.scores, 
                [e.target.name]: e.target.value
            }

        })
    }
   
    render() {
        return(
            <div>
                {this.props.location.state.detail.pars.map((par, idx) => {
                return(
                    <div key={idx} className="row-container">
                        <div className="hole-num">
                            <p>{this.state.holeNum[idx]}</p>
                        </div>
                        <div className="par">
                            <p>{par}</p>
                        </div>
                        <div className="player-score">
                            <input name={`hole${idx + 1}`} onChange={this.handleChange} type="text"/>
                        </div>
                        <div>
                            {/* Round Score: {this.state.scores} */}
                        </div>
                    </div>
                    )})}
                    <button onClick={this.handleScoreSubmit}>Submit Score</button>
            </div>
        )
    }
}

export default ScoreCardPage;