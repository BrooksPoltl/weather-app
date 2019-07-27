import axios from 'axios';

export const FETCHING_WEATHER = 'FETCHING_WEATHER';
export const FETCHED_WEATHER = 'FETCHED_WEATHER';

export const DELETING_CITY_DATA = 'DELETING_CITY_DATA';
export const DELETED_CITY_DATA = 'DELETED_CITY_DATA';

export const EDITING_RANGE = 'EDITING_RANGE';
export const EDITED_RANGE = 'EDITED_RANGE';

export const ERROR = 'ERROR';

export const fetchWeather = (city, range) =>{
    return dispatch => {
        dispatch({type: FETCHING_WEATHER })
        axios.get(`https://weather-project-api.herokuapp.com/api/weather/${city}`)
        .then(res=>{
            let temp = res.data.temperature;
            let responseData = {
                temperature: temp,
                inRange: false, 
                coords: res.data.coords,
                city,
                range 
            }
            if(temp >= range[0] && temp <= range[1]){
                responseData.inRange = true;
            }
            dispatch({ type: FETCHED_WEATHER, payload: responseData})
        }).catch(err=>{
            dispatch({type: ERROR, payload: "could not get weather data"})
        })

    }
}

export const deleteCity = (array,index, inRange) =>{
    return dispatch =>{
        dispatch({type: DELETING_CITY_DATA });
        const newArr = array;
        newArr.splice(index,1);

        dispatch({type: DELETED_CITY_DATA, payload: { array: newArr, inRange}})
    }
}

export const editRange = (array,index,inRange, minimum = null, maximum = null) =>{
    return dispatch =>{
        dispatch({type: EDITING_RANGE });
        const newArr = array;
        if(minimum){
            newArr[index]["range"][0] = minimum;
        }
        if(maximum){
            newArr[index]["range"][1] = maximum;
        }
        dispatch({type: EDITED_RANGE, payload: { array: newArr, inRange }})
    }
}