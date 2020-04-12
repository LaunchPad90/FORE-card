import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupForm from '../SignupPage/SignupPage';
import LoginForm from '../LoginPage/LoginPage';


class App extends Component {
  state = {
    user: userService.getUser() 
  }

  handleLogOut = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => 
            <HomePage />
          }/>
          <Route exact path='/login' render={() => 
            <LoginForm 
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={() => 
            <SignupForm 
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }

  }

export default App;
