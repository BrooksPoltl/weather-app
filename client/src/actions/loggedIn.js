
import axios from 'axios';
import { DELETED_CITY_DATA } from '.';

export const ADDED_CITY = 'ADDED_CITY';
export const ADDING_CITY = 'ADDING_CITY';

export const GETTING_CITIES = 'GETTING_CITIES';
export const GOT_CITIES = 'GOT_CITIES';


export const CHANGING_RANGE = 'CHANGING_RANGE';
export const CHANGED_RANGE = 'CHANGED_RANGE';

export const DELETING_CITY = 'DELETING_CITY';
export const DELETED_CITY = 'DELETED_CITY';


// // add token to local storage when you login
// const token = localStorage.getItem('jwt')
// const request = {
//     headers: {
//         authorization: token,
//     },
// }
// // for creating a post

// axios.post('url',body, request)


const BASE_URL = "https://weather-project-api.herokuapp.com";



export const addCity = (body) =>{
    return dispatch=>{
        dispatch({type: ADDING_CITY});
  
        const token = localStorage.getItem('token');
        const request = {
            headers: {
                authorization: token,
            },
        }
        axios.post(`${BASE_URL}/api/citydata`,body,request).then(res=>{
            console.log(res);
            dispatch({type: ADDED_CITY, payload: res})
        }).catch(err=>{
            console.log(err)
        })

    }
}

export const getCities = () =>{
    return dispatch =>{
        dispatch({type: GETTING_CITIES})
        const token = localStorage.getItem('token');
        const request = {
            headers: {
                authorization: token,
            },
        }
        axios.get(`${BASE_URL}/api/citydata`, request).then(res=>{
            dispatch({type: GOT_CITIES})
            return res.data
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const changeRange = (id, range) =>{
    return dispatch =>{
        dispatch({type: CHANGING_RANGE})
        const token = localStorage.getItem('token');
        const request = {
            headers: {
                authorization: token,
            },
        }
        axios.put(`${BASE_URL}/api/citydata/${id}`,range, request).then(res=>{
            dispatch({type: CHANGED_RANGE})

        }).catch(err=>{
            console.log(err)
        })
    }
}
export const authDeleteCity = (id) =>{
    return dispatch =>{
        dispatch({type: DELETING_CITY})
        const token = localStorage.getItem('token');
        const request = {
            headers: {
                authorization: token,
            },
        }
        axios.delete(`${BASE_URL}/api/citydata/${id}`, request).then(res=>{
            dispatch({type: DELETED_CITY})

        }).catch(err=>{
            console.log(err)
        })
    }
}