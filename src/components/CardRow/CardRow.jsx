import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import '../CardRow/CardRow.css'
import PlayerScore from './PlayerScore/PlayerScore';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import * as scoreCardsService from '../../utils/scoreCardService';


export default function CardRow(props) {

    const [cardRow, setCardRow] = useState({
        holeNum: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],

    })

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            
        },
        container: {
            padding: theme.spacing(1),
            textAlign: 'center',
            direction: 'row'
        }
    }));

    const classes = useStyles();

    const pars = props.course.pars.map((par, idx) => {
        return (
            
            <div className="row-container">
                <div className="hole-num">
                    <p>{cardRow.holeNum[idx]}</p>
                </div>
                <div className="par">
                    <p>{props.course.pars[idx]}</p>
                </div>
                <div className="player-score">
                    <PlayerScore/>
                </div>
            </div>
        )
    })

    return (
        <div>
            {pars}
            <button>Submit Score</button>
        </div>
    )
}
