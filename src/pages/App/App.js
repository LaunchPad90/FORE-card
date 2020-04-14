import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import ScoreCardPage from '../../pages/ScoreCardPage/ScoreCardPage';
import NavBar from '../../components/Navbar/NavBar';
import scoreCardService from '../../utils/scoreCardService';
import SignUp from '../../components/SignupForm/MaterialSignUp';
import SignIn from '../LoginPage/MaterialLoginPage';



class App extends Component {
  state = {
    user: userService.getUser(),
    scoreCard: []
  }

  handleLogOut = () => {
    userService.logOut();
    this.setState({ user: null });
    localStorage.removeItem('token');
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /* -------- Lifecycle Methods -------- */

async componentDidMount() {
  const scoreCard = await scoreCardService.index();
  this.setState({scoreCard})
}

  render() {
    return (
      <div className="App">
        <header>
          <NavBar 
            user={userService.getUser()}
            handleLogOut={this.handleLogOut}
          />
        </header>
        <Switch>
          <Route exact path='/' render={() => 
            <HomePage 
              user={userService.getUser()}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <SignIn
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignUp 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/scorecard' render={() => 
            userService.getUser() ?
              <ScoreCardPage 
                user={userService.getUser()}
              />
            :
              <Redirect to='/login/'/>
          }/>
        </Switch>
      </div>
    );
  }

  }
  

export default App;
