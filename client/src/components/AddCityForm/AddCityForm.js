import React, { useState, useEffect } from 'react'
import changeHandler from '../../helpers/changeHandler'
import { checkValid } from './helper';
import { 
    FormContainer, 
    CityForm,
    InputLabel,
    RangeInputContainer,
    RangeInput,
    RangeSymbol,
    CityInput,
    FormHeader,
    FormButton,
    ButtonWrapper,
    InputWrapper
} from './AddCityForm.styling'

const AddCityForm = (props) =>{
    const [cityData, setCityData] = useState({city: ""});
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
        setCityData({city: "", maximum: 0, minimum: 0})
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
                <InputWrapper>
                    <InputLabel>min degrees °F</InputLabel>
                    <RangeInputContainer>
                        <RangeInput 
                            type = "number" 
                            onChange = {(event)=>  changeHandler(event,cityData,setCityData)}
                            name = "minimum"
                            value = {cityData.minimum}
                            placeholder = "min degrees"
                        />
                        <RangeSymbol>°F</RangeSymbol>
                    </RangeInputContainer>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>max degrees °F</InputLabel>
                    <RangeInputContainer>
                        <RangeInput 
                            type = "number" 
                            onChange = {(event)=>   changeHandler(event,cityData,setCityData)}
                            name = "maximum"
                            value = {cityData.maximum}
                            placeholder = "max degrees"
                        />
                        <RangeSymbol>°F</RangeSymbol>
                    </RangeInputContainer>
                </InputWrapper>
                <ButtonWrapper disabled = {valid}>
                    <FormButton disabled  = {valid}>add city</FormButton>
                </ButtonWrapper>
            </CityForm>
            {   errorMessage
                ?   <p>{errorMessage}</p>
                :   null
            }
        </FormContainer>
    )
}

export default AddCityForm;