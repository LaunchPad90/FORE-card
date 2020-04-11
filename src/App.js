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

  handleLogOut = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App">
        <h1>Working</h1>
        <SignupForm />
        <NavBar 
          user={this.state.user}
          handleLogOut={this.handleLogOut}
        />
      </div>
    );
  }

  }

export default App;
