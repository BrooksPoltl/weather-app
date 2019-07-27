import {
    FETCHED_WEATHER,
    FETCHING_WEATHER,
    DELETING_CITY_DATA,
    DELETED_CITY_DATA,
    ERROR
} from '../actions';

const initialState = {
    fetchingWeather: false,
    fetchedWeather: false,
    deletingCityData: false,
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
        case DELETING_CITY_DATA: return {...prevState, deletingCityData: true }
        case DELETED_CITY_DATA:
            if(action.payload.inRange){
                return {
                    ...prevState,
                    deletedCityData: true,
                    inRangeCities:[...action.payload.array]
                }
            } else{
                return {
                    ...prevState,
                    deletedCityData: true,
                    notInRangeCities:[...action.payload.array]
                }
            }
        case ERROR: return {...prevState, error: action.payload }
        default: return prevState;
    }
}