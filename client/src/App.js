import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, deleteCityData } from './actions';

import AddCityForm from './components/AddCityForm/AddCityForm';
import CityData from './components/CityData/CityData';

const App = (props) => {
  return (
    <div >
        <AddCityForm {...props}/>
        <CityData {...props}/>
    </div>
  );
}

const mapStatetoProps = state =>{
    return {
      inRangeCities: state.weatherReducer.inRangeCities,
      notInRangeCities: state.weatherReducer.notInRangeCities,
    }
}

export default connect(mapStatetoProps,{ fetchWeather,deleteCityData })(App);
