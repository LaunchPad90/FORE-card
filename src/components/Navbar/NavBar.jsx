import React from 'react';
import {Link} from 'react-router-dom';




const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link to='/' className='NavBar-link'>{props.user.name}</Link>
        <Link to='' className='NavBar-link' onClick={props.handleLogOut}>Logout</Link>
        <Link to='/scorecards' className='NavBar-link'>Score Cards</Link>
        <Link to='/map' className='NavBar-link'>Find Courses</Link>
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