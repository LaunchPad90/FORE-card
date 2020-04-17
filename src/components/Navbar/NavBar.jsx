import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/NavBar.css';



const NavBar = (props) => {
    let nav = props.user ?
    <div className="nav-container">
        <Link to='/home' className='nav-link'>{props.user.name}</Link>
        <Link to='/allCourses' className='nav-link'>Courses</Link>
        <Link to='/map' className='nav-link'>Find Courses</Link>
        <Link to='' className='nav-link' onClick={props.handleLogOut}>Logout</Link>
      </div>
      :
      <div className="nav-container">
        <Link to='/login' className='nav-link'>LOG IN</Link>
        <Link to='/signup' className='nav-link'>SIGN UP</Link>
        
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
  
  

  export default NavBar;