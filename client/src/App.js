import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';


const App = () => {
  return (
    <div >
        weather app
    </div>
  );
}

const mapStatetoProps = state =>{
    return {
      counter: state.weatherReducer.counter
    }
}

export default connect(mapStatetoProps,{ fetchWeather })(App);
