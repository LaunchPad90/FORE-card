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
import * as scoreCardService from '../../utils/scoreCardService';
import LandingPage from '../Landing/LandingPage';





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
      scoreCards: []
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

  handleRemoveCard = async(id) => {
    console.log('handleREMOVECARD')
    await scoreCardService.removeCard(id);
    this.setState(state => ({
      scoreCards: state.scoreCards.filter(card => card._id !== id)
    }), () => this.props.history.push('/home'));
  }
  /* -------- Lifecycle Methods -------- */

async componentDidMount() {
  const allCourses = await courseService.index();
  this.setState({allCourses})
  const scoreCards = await scoreCardService.index();
  this.setState({scoreCards})
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
            <LandingPage />
          }/>

          <Route exact path='/home' render={({ history }) => 
            <HomePage 
              history={history}
              user={userService.getUser()}
              scoreCards={this.state.scoreCards}
              handleRemoveCard={this.handleRemoveCard}
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

          <Route exact path='/scorecards:id' component={ScoreCardPage} render={({history}) => 
            userService.getUser() ?
              <ScoreCardPage 
                user={userService.getUser()}
                allCourses={this.state.allCourses}
                history={history}
              />
            :
              <Redirect to='/login'/>
          }/>

          <Route exact path='/allCourses' render={({ history }) => 
            userService.getUser() ?
            <CoursesPage
              allCourses={this.state.allCourses}
              history={history}
            />
            :
            <Redirect to='/login'/>
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
