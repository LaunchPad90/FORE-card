import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';


class App extends Component {
  state = {
    user: userService.getUser() 
  }

  handleLogOut = () => {
    userService.logOut();
    this.setState({ user: null });
  }
  
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }

  }

export default App;
