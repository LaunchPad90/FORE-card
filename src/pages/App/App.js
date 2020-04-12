import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


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
          <Route exact path='/login' render={({ history }) => 
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }

  }
  

export default App;
