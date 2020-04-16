import React from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/NavBar.css';



const NavBar = (props) => {
    let nav = props.user ?
    <div className="Nav-Container">
        <Link to='/home' className='NavBar-link'>{props.user.name}</Link>
        {/* <Link to='/scorecards' className='NavBar-link'>Score Cards</Link> */}
        <Link to='/map' className='NavBar-link'>Find Courses</Link>
        <Link to='' className='NavBar-link' onClick={props.handleLogOut}>Logout</Link>
      </div>
      :
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
  
  

  export default NavBar;