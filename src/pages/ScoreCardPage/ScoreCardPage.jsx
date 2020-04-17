import React from 'react';
import { Component, useLocation } from 'react';
import CardRow from '../../components/CardRow/CardRow'

class ScoreCardPage extends Component {

    handleScoreSubmit() {
        
    }
   
    render() {
        return(
            <div>
                <CardRow
                    course={this.props.location.state.detail}          
                />
                <button>Submit Score</button>
            </div>
        )
    }
}

export default ScoreCardPage;