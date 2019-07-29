import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, deleteCity, editRange } from './actions';
import { login, register } from './actions/Auth';
import { addCity, getCities, changeRange, authDeleteCity } from './actions/loggedIn';

import { withRouter, Route, Switch } from 'react-router';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = (props) => {
  return (
      <div>
          <Switch>
              <Route exact path = '/' component = {()=> <LandingPage {...props}/>}/>
              <Route exact path = '/login' component = {()=> <LoginPage {...props}/>}/>
              <Route exact path = '/dashboard' component = {()=> <DashboardPage {...props}/>}/>
          </Switch>
      </div>
  );
}

const mapStatetoProps = state =>{
    return {
      inRangeCities: state.weatherReducer.inRangeCities,
      notInRangeCities: state.weatherReducer.notInRangeCities,
      fetchingWeather: state.weatherReducer.fetchingWeather,
      error: state.weatherReducer.error,
      registerError: state.authReducer.registerError,
      registering: state.authReducer.registering,
      registered: state.authReducer.registered,
      loggingIn: state.authReducer.loggingIn,
      loggedIn: state.authReducer.loggedIn,
      loginError: state.authReducer.loginError,
      addingCity: state.loggedInReducer.addingCity,
      addedCity: state.loggedInReducer.addedCity,
      changedRange: state.loggedInReducer.changeRange
    }
}

export default withRouter(connect(mapStatetoProps,
  { 
    fetchWeather,
    deleteCity,
    editRange,
    login, 
    register,
    addCity, 
    getCities,
    changeRange,
    authDeleteCity
    
  })(App));
