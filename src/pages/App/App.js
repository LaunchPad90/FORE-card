import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ScoreCardPage from '../../pages/ScoreCardPage/ScoreCardPage';
import NavBar from '../../components/Navbar/NavBar';
import SignUp from '../../components/SignupForm/MaterialSignUp';
import Login from '../LoginPage/MaterialLoginPage';
import SimpleMap from '../../components/Map/Map'
import * as courseService from '../../utils/courseService';
import CoursesPage from '../CoursesPage/CoursesPage';





class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState()
    }
  }

  getInitialState = () => {
    return{
      user: userService.getUser(),
      allCourses: [], 
      
    }
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
  // const scoreCard = await scoreCardService.index();
  const allCourses = await courseService.index();
  this.setState({allCourses})
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

          <Route exact path='/home' render={({ history }) => 
            <HomePage 
              history={history}
              user={userService.getUser()}
            />
          }/>

          <Route exact path='/login' render={({ history }) => 
            <Login
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

          <Route exact path='/scorecards:courseData' component={ScoreCardPage} render={() => 
            userService.getUser() ?
              <ScoreCardPage 
                user={userService.getUser()}
                allCourses={this.state.allCourses}
              />
            :
              <Redirect to='/login'/>
          }/>

          <Route exact path='/allCourses' render={({ history }) => 
            <CoursesPage
              allCourses={this.state.allCourses}
              history={history}
            />
          }/>

            <Route path='/map' render={() => 
              <SimpleMap/>     
            }/>
        </Switch>
      </div>
    );
  }

  }
  

export default App;
