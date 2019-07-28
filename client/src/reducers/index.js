import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';
import {authReducer} from './authReducer';
export default combineReducers({
    weatherReducer,
    authReducer
})