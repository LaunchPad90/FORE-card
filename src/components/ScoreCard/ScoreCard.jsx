import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import '../CardRow/CardRow.css'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardRow from '../CardRow/CardRow';

export default function ScoreCard(props) {
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
        },
        row: {
            direction: 'row'
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <div>
                <CardRow />
            </div> 
        </div>
    )
}
