
import {
    ADDING_CITY,
    ADDED_CITY,
    GETTING_CITIES,
    GOT_CITIES,
    CHANGED_RANGE,
    CHANGING_RANGE,
    DELETED_CITY,
    DELETING_CITY,

} from '../actions/loggedIn';


const initialState = {
    addingCity: false,
    addedCity: false,
    gettingCities: false,
    gotCities: false,
    changingRange:false,
    changedRange: false,
    deletingCity: false,
    deletedCity: false
}

export const loggedInReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case ADDING_CITY: return {...prevState, addingCity: true }
        case ADDED_CITY: return {...prevState, addedCity: true }
        case GETTING_CITIES: return {...prevState, gettingCities: true}
        case GOT_CITIES: return {...prevState, gettingCities: false, gotCities: true}
        case CHANGING_RANGE: return {...prevState, changingRange: true}
        case CHANGED_RANGE: return{...prevState, changingRange: false, changedRange: true}
        case DELETING_CITY: return {...prevState, deletingCity: true}
        case DELETED_CITY: return {...prevState, deletingCity: false, deletedCity: true}
        default: return prevState;
    }
}