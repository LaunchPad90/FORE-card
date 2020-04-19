import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxHeight: 200,
    marginBottom: 12
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RecapCard(props) {
  
  const classes = useStyles();

  
  return (
    <div>
      {props.scoreCards.map((cards, idx) => {
        return(
          <div key={idx} className="card">
            <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Date: {props.scoreCards[idx].createdAt.slice(0, 10)}
                </Typography>
                <Typography variant="body2" component="h5">
                  Course: {props.scoreCards[idx].course.name}
                </Typography>
                <Typography variant="body2" component="h4">
                  <p>Score: {props.scoreCards[idx].scoreTotal}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => props.handleRemoveCard(cards._id)}variant="outlined" size="small">Delete</Button>
            </CardActions>
            </Card>
        </div>
        )
      })}
  </div>
  );
}


