import React, { Component } from 'react';
import './App.css';
import userService from '../../utils/userService';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ScoreCardPage from '../../pages/ScoreCardPage/ScoreCardPage';
import NavBar from '../../components/Navbar/NavBar';
import scoreCardService from '../../utils/scoreCardService';
import Course from '../../components/Course/Course';
import SignUp from '../../components/SignupForm/MaterialSignUp';
import Login from '../LoginPage/MaterialLoginPage';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import SimpleMap from '../../components/Map/Map'
import * as courseService from '../../utils/courseService';




// function Map() {
    
//     return(
//         <GoogleMap
//             defaultZoom={10}
//             defaultCenter={{lat: 39.695954199999996, lng:-104.9885202}} 
//         />
//         )
//     }
    
// const WrappedMap = withScriptjs(withGoogleMap(Map));




class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState()
    }
  }

  getInitialState() {
    return{
      user: userService.getUser(),
      scoreCard: scoreCardService.index(),
      allCourses: []
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
  console.log('COMPONENTDIDMONUTN', allCourses)
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
          <Route exact path='/' render={({ history }) => 
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
          <Route exact path='/scorecards' render={() => 
            userService.getUser() ?
              <ScoreCardPage 
                user={userService.getUser()}
              />
            :
              <Redirect to='/login/'/>
          }/>
          <Route exact path='/courses' render={() => 
            <Course />
          }/>
            <Route path='/map' render={() => 
              <SimpleMap/>
          // <div style={{ width: '100vw', height: '100vh' }}>
          // <h1>SOmething</h1>
          //   <WrappedMap
          //     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`}
          //     loadingElement={<div style={{height: "100%" }} />}
          //     containerElement={<div style={{height: "100%" }} />}
          //     mapElement={<div style={{height: "100%" }} />}
          //     />
          // </div>            
            }/>
        </Switch>
      </div>
    );
  }

  }
  

export default App;
