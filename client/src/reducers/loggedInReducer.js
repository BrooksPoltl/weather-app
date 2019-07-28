
import {
    ADDING_CITY,
    ADDED_CITY

} from '../actions/loggedIn';


const initialState = {
    addingCity: false,
    addedCity: false,
    inRangeCities:[],
    notInRangeCities: [],
}

export const loggedInReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case ADDING_CITY: return {...prevState, addingCity: true }
        case ADDED_CITY: return {...prevState, addedCity: true }
        default: return prevState;
    }
}