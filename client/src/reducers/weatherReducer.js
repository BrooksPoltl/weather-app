import {
    FETCHED_WEATHER,
    FETCHING_WEATHER,
    DELETING_CITY_DATA,
    DELETED_CITY_DATA,
    EDITED_RANGE,
    EDITING_RANGE,
    ERROR
} from '../actions';

const initialState = {
    fetchingWeather: false,
    fetchedWeather: false,
    deletingCityData: false,
    editingRange: false,
    editedRange: false,
    inRangeCities:[],
    notInRangeCities: [],
    error:null,
}

export const weatherReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHING_WEATHER: return {...prevState, fetchingWeather: true }
        case FETCHED_WEATHER: 
            if(action.payload.inRange){
                return {
                    ...prevState,
                    fetchingWeather: false,
                    error: false,
                    fetchedWeather: true, 
                    inRangeCities: [...prevState.inRangeCities, action.payload]
                }
            }else{
                return {
                    ...prevState,
                    fetchingWeather: false,
                    error: false,
                    fetchedWeather: true, 
                    notInRangeCities: [...prevState.notInRangeCities, action.payload]
                }
            }
        case DELETING_CITY_DATA: return {...prevState, deletingCityData: true }
        case DELETED_CITY_DATA:
            if(action.payload.inRange){
                return {
                    ...prevState,
                    deletedCityData: true,
                    inRangeCities:[...action.payload.array]
                }
            } else{
                return {
                    ...prevState,
                    deletedCityData: true,
                    notInRangeCities:[...action.payload.array]
                }
            }
        case EDITING_RANGE: return {...prevState, editingRange: true }
        case EDITED_RANGE: 
            if(action.payload.array){
                if(action.payload.inRange){
                    return {
                        ...prevState,
                        editedRange: true,
                        inRangeCities: [...action.payload.array]
                    }
                } else{
                    return {
                        ...prevState,
                        editedRange: true,
                        notInRangeCities: [...action.payload.array]
                    }
                }
                
            }else{
                if(action.payload.inRange){
                    return {
                        ...prevState,
                        editedRange: true,
                        inRangeCities: [...prevState.inRangeCities,action.payload.editedItem],
                        notInRangeCities: [...action.payload.newArr]
                    }
                } else{
                    return {
                        ...prevState,
                        editedRange: true,
                        notInRangeCities: [...prevState.notInRangeCities,action.payload.editedItem],
                        inRangeCities: [...action.payload.newArr]
                    }
                }
            }
        case ERROR: return {...prevState, fetchingWeather:false, error: action.payload }
        default: return prevState;
    }
}