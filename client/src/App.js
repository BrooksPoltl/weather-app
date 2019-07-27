import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';


const App = (props) => {
  useEffect(()=>{
    props.fetchWeather("allen", [50,80])
    props.fetchWeather("london", [50,80])
    props.fetchWeather("london", [50,80])
  },[])
  return (
    <div >
        weather app
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
