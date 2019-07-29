
import {
    ADDING_CITY,
    ADDED_CITY,
    GETTING_CITIES,
    GOT_CITIES,
} from '../actions/loggedIn';


const initialState = {
    addingCity: false,
    addedCity: false,
    gettingCities: false,
    gotCities: false,
}

export const loggedInReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case ADDING_CITY: return {...prevState, addingCity: true }
        case ADDED_CITY: return {...prevState, addedCity: true }
        case GETTING_CITIES: return {...prevState, gettingCities: true}
        case GOT_CITIES: return {...prevState, gettingCities: false, gotCities: true}
        default: return prevState;
    }
}