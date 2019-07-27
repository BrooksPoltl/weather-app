import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';


const App = (props) => {
  useEffect(()=>{
      let response = props.fetchWeather();
        console.log(response)
  },[])
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
