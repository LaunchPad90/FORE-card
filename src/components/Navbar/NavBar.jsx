import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/NavBar.css';
import styled from "styled-components"

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: .5rem;
  font-size: 1.2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: green;
`;


const NavBar = (props) => {
  
    let nav = props.user ?
    <div className="nav-container">
      <NavLinks className="nav-links">
        <NavLink to="/home" className="nav-links__link">{props.user.name}</NavLink>
        <NavLink to="/allCourses" className="nav-links__link">Courses</NavLink>
        <NavLink to="/map" className="nav-links__link">Map</NavLink>
        <NavLink to="" onClick={props.handleLogOut} className="nav-links__link">Logout</NavLink>
      </NavLinks>
      </div>
      :
      <div className="nav-container">
        <NavLinks className="nav-links">
          <NavLink to="/login" className="nav-links__link 1">LOG IN</NavLink>
          <NavLink to="/signup" className="nav-links__link 2">SIGN UP</NavLink>
        </NavLinks>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
  
  

  export default NavBar;