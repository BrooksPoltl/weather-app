import {
    FETCHED_WEATHER,
    FETCHING_WEATHER,
    ERROR
} from '../actions';

const initialState = {
    fetchingWeather: false,
    fetchedWeather: false,
    inRangeCities:[],
    notInRangeCities: [],
    error:null,
}

export const weatherReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHING_WEATHER: return {...prevState, fetchingWeather: true }
        case FETCHED_WEATHER: 
            if(action.payload.inRange){
                return {
                    ...prevState,
                    fetchedWeather: true, 
                    inRangeCities: [...prevState.inRangeCities, action.payload]
                }
            }else{
                return {
                    ...prevState,
                    fetchedWeather: true, 
                    notInRangeCities: [...prevState.notInRangeCities, action.payload]
                }
            }
        case ERROR: return {...prevState, error: action.payload }
        default: return prevState;
    }
}