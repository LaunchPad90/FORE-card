import React from 'react';
import { Component } from 'react';
import ScoreCard from '../../components/ScoreCard/ScoreCard';

class ScoreCardPage extends Component {

    render() {
        return(
            <ScoreCard 
                user={this.props.user}
            />
        )
    }
}

export default ScoreCardPage;