import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, deleteCity, editRange } from './actions';
import { login, register } from './actions/Auth';
import { withRouter, Route, Switch } from 'react-router';

import DashboardPage from './pages/DashboardPage/DashboardPage';

const App = (props) => {
  return (
      <div>
          <Switch>
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
      error: state.weatherReducer.error
    }
}

export default withRouter(connect(mapStatetoProps,{ fetchWeather,deleteCity, editRange, login, register })(App));
