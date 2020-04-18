import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/NavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import red from '@material-ui/core/colors/red';

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
          <Link className={classes.button} to='/home' className='nav-link'>{props.user.name}</Link>
          <Link to='/allCourses' className='nav-link'>Courses</Link>
          <Link to='/map' className='nav-link'>Find Courses</Link>
          <Link to='' className='nav-link' onClick={props.handleLogOut}>Logout</Link>
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