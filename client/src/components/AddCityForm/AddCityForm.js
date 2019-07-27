import React, { useState, useEffect } from 'react'
import changeHandler from '../../helpers/changeHandler'
import { checkValid } from './helper';

const AddCityForm = (props) =>{
    const [cityData, setCityData] = useState({city: "", minimum:null, maximum:null});
    const [valid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        checkValid(cityData,setValid,setErrorMessage)
    },[cityData])

    const submitHandler = (event) =>{
        cityData.maximum = Number(cityData.maximum);
        cityData.minimum = Number(cityData.minimum);
        event.preventDefault();
        props.fetchWeather(cityData.city, [cityData.minimum, cityData.maximum])
        setCityData({city: "", minimum: null, maximum:null})
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <input 
                    type = "text" 
                    onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                    name = "city"
                    value = {cityData.city}
                    placeholder = "city"
                />
                <input 
                    type = "number" 
                    onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                    name = "minimum"
                    value = {cityData.minimum}
                    placeholder = "min degrees"
                />
                <input 
                    type = "number" 
                    onChange = {(event)=>   changeHandler(event,cityData,setCityData)}
                    name = "maximum"
                    value = {cityData.maximum}
                    placeholder = "max degrees"
                />
                <button disabled  = {valid}>add city</button>
            </form>
            {errorMessage
                ?<p>{errorMessage}</p>:
                null
            }
        </div>
    )
}

export default AddCityForm;