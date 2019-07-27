import {
    FETCHED_WEATHER,
    FETCHING_WEATHER,
    ERROR
} from '../actions';

const initialState = {
    counter: 0,
}

export const weatherReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHED_WEATHER: return { ...prevState, counter: 1 }
        case FETCHING_WEATHER: return {...prevState, counter: 1}
        case ERROR: return {...prevState, counter: 1}
        default: return prevState;
    }
}