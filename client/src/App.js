import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, deleteCity, editRange } from './actions';

import AddCityForm from './components/AddCityForm/AddCityForm';
import CityData from './components/CityData/CityData';
import Header from './components/Header/Header';

import { 
  AppContainer,
  TopSectionContainer
} from './App.styling';

const App = (props) => {
  return (
    <AppContainer>
      <TopSectionContainer style = {{display: "flex", flexDirection: "row"}}>
        <Header />
        <AddCityForm {...props}/>
      </TopSectionContainer>
      <CityData {...props}/>
    </AppContainer>
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

export default connect(mapStatetoProps,{ fetchWeather,deleteCity, editRange })(App);
