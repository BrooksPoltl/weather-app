import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import { authReducer } from './authReducer';
import { loggedInReducer } from './loggedInReducer';


export default combineReducers({
    weatherReducer,
    authReducer,
    loggedInReducer
})