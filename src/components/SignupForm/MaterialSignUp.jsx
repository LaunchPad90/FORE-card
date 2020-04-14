import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import userService from '../../utils/userService';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignUp(props) {
  console.log(props)
  const classes = useStyles();
  
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  const handleSubmit = async(e) => {
      e.preventDefault();
      console.log('HANDLESUBMITSIGNUP', formData)
      try {
        await userService.signup(formData)
        props.handleSignupOrLogin();
        props.history.push('/');
      }
      catch(err) {
        console.log(err)
      }
      
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const isFormInvalid = () => {
    return (!(formData.name && formData.email && formData.password === formData.passwordConf));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div 
        className={classes.paper}
        >
        <Avatar 
            className={classes.avatar}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form 
        onSubmit={handleSubmit}
        className={classes.form} 
        noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="none"
                name="name"
                value={formData.name}
                variant="outlined"
                required
                fullWidth
                id="name"
                label="User Name"
                autoFocus
                onChange={handleChange}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={formData.email}
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                autoComplete="none"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConf"
                label="Confirm Password"
                type="password"
                id="passwordConf"
                autoComplete='none'
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isFormInvalid()}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}