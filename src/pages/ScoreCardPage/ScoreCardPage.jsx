import React from 'react';
import { Component, useLocation } from 'react';
import CardRow from '../../components/CardRow/CardRow'

class ScoreCardPage extends Component {
   
    render() {
        return(
            <CardRow
                course={this.props.location.state.detail}          
            />
        )
    }
}

export default ScoreCardPage;