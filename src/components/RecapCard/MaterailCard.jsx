import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  
  const classes = useStyles();

  return (
    <div>
      {props.scoreCards.map((cards, idx) => {
        return(
          <div key={idx} className="card">
            <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Date
                </Typography>
                <Typography variant="h5" component="h2">
                  <p>{props.scoreCards[idx].scores.hole1}</p>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                Par
                </Typography>
                <Typography variant="body2" component="p">
                Score
                <br />
                Front 9, Back 9
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Card</Button>
            </CardActions>
            </Card>
        </div>
        )
      })}
  </div>
  );
}
