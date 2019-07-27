import axios from 'axios';

export const FETCHING_WEATHER = 'FETCHING_WEATHER';
export const FETCHED_WEATHER = 'FETCHED_WEATHER';

export const ERROR = 'ERROR';

export const fetchWeather = (city, range) =>{
    return dispatch => {
        dispatch({type: FETCHING_WEATHER })
        axios.get(`https://weather-project-api.herokuapp.com/api/weather/${city}`)
        .then(res=>{
            let temp = res.data.temperature;
            let responseData = {temperature: temp, inRange: false, coords: res.data.coords }
            if(temp >= range[0] && temp <= range[1]){
                responseData.inRange = true;
            }
            dispatch({ type: FETCHED_WEATHER, payload: responseData})
        }).catch(err=>{
            dispatch({type: ERROR, payload: "could not get weather data"})
        })

    }
}