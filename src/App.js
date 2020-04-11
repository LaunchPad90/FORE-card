import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/SignupForm/SignupForm';
import userService from './utils/userService';
import NavBar from './components/Navbar/NavBar';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  state = {
    user: userService.getUser() 
  }

  render() {
    return (
      <div className="App">
        <h1>Working</h1>
        <SignupForm />
        <NavBar />
      </div>
    );
  }

  }

export default App;
