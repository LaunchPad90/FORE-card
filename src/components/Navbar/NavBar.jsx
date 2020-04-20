import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/NavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import red from '@material-ui/core/colors/red';
import { Button } from '@material-ui/core';

const primary = red[500];


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar = (props) => {

  const classes = useStyles();
  
    let nav = props.user ?
    <div className="nav-container">
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link className={classes.menuButton} to='/home' className='nav-link'>{props.user.name}</Link>
          </Button>
          <Button>
            <Link to='/allCourses' className='nav-link'>Courses</Link>
          </Button>
          <Button>
            <Link to='/map' className='nav-link'>Map</Link>
          </Button>
          <Button>
            <Link to='' className='nav-link' onClick={props.handleLogOut}>Logout</Link>
          </Button>
        </Toolbar>
      </AppBar>
      </div>
      :
      <div className="nav-container">
        <AppBar>
          <Toolbar>
            <Link to='/login' className='nav-link'>LOG IN</Link>
            <Link to='/signup' className='nav-link'>SIGN UP</Link>
          </Toolbar>
        </AppBar>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
  
  

  export default NavBar;