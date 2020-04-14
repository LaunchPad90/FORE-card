import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';






const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        
    }
}))

export default function ScoreCard() {
    const classes = useStyles();

    const [card, setCard] = useState({
        user: '',
        course: '',
        scores: []
    })


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Grid container>
                    <Grid item>
                        
                        
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
