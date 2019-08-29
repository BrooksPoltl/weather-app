import React, { useState, useEffect } from 'react';
import changeHandler from '../../helpers/changeHandler';
import { checkValid } from './helper';

import CityRangeInput from './CityRangeInput';

import { 

    FormContainer, 
    CityForm,
    InputLabel,
    CityInput,
    FormHeader,
    FormButton,
    InputWrapper,
    LoadingIcon,
    ErrorText

} from './AddCityForm.styling'

const AddCityForm = (props) =>{
    const [cityData, setCityData] = useState({city: ""});
    const [valid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(()=>{
        checkValid(cityData,setValid,setErrorMessage);
        if(props.error){
            setErrorMessage("Cannot find that city");
        }else{
            setErrorMessage(null);
        }
    },[cityData, props.error]);

    const submitHandler = () =>{
        cityData.maximum = Number(cityData.maximum);
        cityData.minimum = Number(cityData.minimum);
        const token = localStorage.getItem('token');
        if(token){  
            props.addCity({city: cityData.city, range:[cityData.minimum, cityData.maximum]})
        }else{
            props.fetchWeather(cityData.city, [cityData.minimum, cityData.maximum]);
            setCityData({city: "", maximum: 0, minimum: 0});
        }
        
    }

    return (
        <FormContainer>
            <FormHeader>Add a City</FormHeader>
            <CityForm onSubmit = {submitHandler} autoComplete = "off">
                <InputWrapper>
                    <InputLabel>city</InputLabel>
                    <CityInput 
                        type = "text" 
                        onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                        name = "city"
                        value = {cityData.city}
                        placeholder = "city"
                    />
                </InputWrapper>
                <CityRangeInput 
                    labelText = "min degrees °F" 
                    cityData = {cityData}
                    name = "minimum" 
                    setCityData= {setCityData} 
                    value = {cityData.minimum} 
                    placeholder = "min degrees"  
                />
                <CityRangeInput 
                    labelText = "max degrees °F" 
                    cityData = {cityData}
                    name = "maximum" 
                    setCityData= {setCityData} 
                    value = {cityData.maximum} 
                    placeholder = "max degrees"  
                />
                {
                    props.fetchingWeather
                    ?<LoadingIcon>
                        <i class="fas fa-circle-notch fa-spin"></i>
                    </LoadingIcon>
                    :<FormButton disabled  = {valid} type = "submit">add city</FormButton>
                    
                }
                
            </CityForm>
            {   errorMessage
                ?   <ErrorText>{errorMessage}</ErrorText>
                :   null
            }
        </FormContainer>
    )
}

export default AddCityForm;
