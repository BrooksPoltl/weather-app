import axios from 'axios';

export const ERROR = 'ERROR';

export const REGISTERING = 'REGISTERING';
export const REGISTERED = 'REGISTERED';
export const REGISTER_ERROR = 'REGISTER_ERROR';


export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';


const BASE_URL = "https://weather-project-api.herokuapp.com";

export const register = (body) =>{
    return dispatch =>{
        dispatch({type: REGISTERING})
        axios.post(`${BASE_URL}/api/register`, body).then(res=>{
            console.log(res);
            dispatch({type: REGISTERED, payload: res});
        }).catch(err=>{
            console.log(err);
            console.log(body)
            dispatch({type: REGISTER_ERROR, payload: err});
        })

    }
    
}


export const login = (body) =>{
    return dispatch =>{
        dispatch({type: LOGGING_IN})
        axios.post(`${BASE_URL}/api/login`, body).then(res=>{
            localStorage.setItem('token', res.data.token);
            dispatch({type: LOGGED_IN, payload: res});
        }).catch(err=>{
            console.log(err);
            dispatch({type: LOGIN_ERROR, payload: err});
        })
    }   
    
}