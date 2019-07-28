
import {

    LOGGED_IN,
    LOGGING_IN,
    LOGIN_ERROR,
    REGISTERED,
    REGISTERING,
    REGISTER_ERROR

} from '../actions/Auth';


const initialState = {
    loggingIn: false,
    loggedIn: false,
    loginError: null,
    registered: false,
    registering: false,
    registerError: false
}

export const authReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case REGISTERING:return {...prevState, registering: true}
        case REGISTERED: return {...prevState, registering: false, registered: true}
        case REGISTER_ERROR: return {...prevState, registerError: action.payload}
        case LOGGING_IN: return {...prevState, loggingIn: true}
        case LOGGED_IN: return {...prevState, loggedIn: true, loggingIn: false}
        case LOGIN_ERROR: return {...prevState, loginError: true}

        default: return prevState;
    }
}