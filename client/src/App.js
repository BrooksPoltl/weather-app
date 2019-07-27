import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';

import AddCityForm from './components/AddCityForm/AddCityForm';

const App = (props) => {
  return (
    <div >
        <AddCityForm {...props}/>
    </div>
  );
}

const mapStatetoProps = state =>{
    return {
      inRangeCities: state.weatherReducer.inRangeCities,
      notInRangeCities: state.weatherReducer.notInRangeCities,
    }
}

export default connect(mapStatetoProps,{ fetchWeather })(App);
