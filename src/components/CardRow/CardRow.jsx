import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import '../CardRow/CardRow.css'
import PlayerScore from './PlayerScore/PlayerScore';
import Par from './Par/Par';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



export default function CardRow() {

    const [] = useState({

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

    return (

        <Grid container className={classes.container} spacing={1}>
            <Grid item xs={1}></Grid>
            {/* for spacing purposes */}
                <Grid item xs={2}>
                    <Paper className={classes.paper}><p>#</p></Paper>
                </Grid>

                <Grid item xs={2}>
                    <Paper className={classes.paper}><Par/></Paper>
                </Grid>

                <Grid container className={classes.container} xs={6}>
                    <Grid item xs={12}>                    
                        <Paper className={classes.paper}><PlayerScore/></Paper>
                    </Grid>
                </Grid>
            {/* for spacing purposes */}
            <Grid xs={1}></Grid>
        </Grid>
    )
}
