import React, { useState, useEffect } from 'react'
import changeHandler from '../../helpers/changeHandler'
import { checkValid } from './helper';
const AddCityForm = (props) =>{
    const [cityData, setCityData] = useState({city: "", minimum:"", maximum:""});
    const [valid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        checkValid(cityData,setValid,setErrorMessage)
    },[cityData])

    const submitHandler = (event) =>{
        event.preventDefault();
        cityData.minimum = Number(cityData.minimum)
        cityData.maximum = Number(cityData.maximum)
        props.fetchWeather(cityData.city, [cityData.minimum, cityData.maximum])
        setCityData({city: "", minimum: "", maximum:""})
    }
    return (
        <form onSubmit = {submitHandler}>
            <input 
                type = "text" 
                onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                name = "city"
                value = {cityData.city}
            />
            <input 
                type = "text" 
                onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                name = "minimum"
                pattern="[0-9]*"
                value = {cityData.minimum}
            />
            <input 
                type = "text" 
                onChange = {(event)=>   changeHandler(event,cityData,setCityData)}
                name = "maximum"
                pattern="[0-9]*"
                value = {cityData.maximum}
            />
            <button disabled  = {valid}>add city</button>
        </form>
    )
}

export default AddCityForm;