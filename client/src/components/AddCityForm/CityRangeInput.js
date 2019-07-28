import React from 'react';
import changeHandler from '../../helpers/changeHandler';

import { 

    InputLabel,
    RangeInputContainer,
    RangeInput,
    RangeSymbol,
    InputWrapper

} from './AddCityForm.styling';

const CityRangeInput = (props) =>{
    return(
        <InputWrapper>
            <InputLabel>{props.labelText}</InputLabel>
            <RangeInputContainer>
                <RangeInput 
                    type = "number" 
                    onChange = {(event)=>   changeHandler(event,props.cityData,props.setCityData)}
                    name = {props.name}
                    value = {props.value}
                    placeholder = {props.placeholder}
                />
                <RangeSymbol>°F</RangeSymbol>
            </RangeInputContainer>
        </InputWrapper>
    )
}



export default CityRangeInput;