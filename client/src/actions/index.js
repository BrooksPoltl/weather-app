import axios from 'axios';

export const FETCHING_WEATHER = 'FETCHING_WEATHER';
export const FETCHED_WEATHER = 'FETCHED_WEATHER';

export const ERROR = 'ERROR';

export const fetchWeather = city =>{
    return dispatch => {
        dispatch({type: FETCHED_WEATHER })
        axios.get(`https://weather-project-api.herokuapp.com/api/weather/${city}`)
        .then(res=>{
            console.log(res)
            dispatch({ type: FETCHED_WEATHER, payload: res.data})
        }).catch(err=>{
            dispatch({type: ERROR, payload: "could not get weather data"})
        })

    }
}