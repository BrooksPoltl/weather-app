import React, {useState, useEffect} from 'react';

import changeHandler from '../../helpers/changeHandler';
import CityDataIcons from './CityDataIcons';
import { handleColor } from './helper';

import {
    
    CardContainer,
    TemperatureText,
    SubmitButton,
    RangeInput,
    CityText

} from './styling/CityDataCard.styling'

const CityDataCard = (props) =>{
    const [color, setColor] = useState("black");
    useEffect(()=>{
        
        handleColor(props, setColor);
    }, [props])
    
    const handleSubmit=(event)=>{
        props.handleEdit(event, props.index,props.city.inRange)

    }
    return(
        <CardContainer>
            <CityText>{props.city.city}</CityText>
            <TemperatureText color = {color}>{props.city.temperature}°F</TemperatureText>
            {
                !props.editing
                    ? <TemperatureText>{props.city.range[0]}°F</TemperatureText>
                    :<RangeInput
                        type = "number" 
                        value = {props.newRange.minimum} 
                        name = "minimum" 
                        placeholder = "minimum"
                        onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                    />
            }
            {
                !props.editing
                    ? <TemperatureText>{props.city.range[1]}°F</TemperatureText>
                    :<RangeInput
                        type = "number" 
                        value = {props.newRange.maximum} 
                        name = "maximum" 
                        placeholder = "maximum"
                        onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                    />
            }
            {
                !props.editing
                    ? null
                    :<SubmitButton
                        onClick = {(event)=>handleSubmit(event)}
                     >
                            submit
                    </SubmitButton>

            }
            <CityDataIcons {...props}/>
           
        </CardContainer>
    )
}

export default CityDataCard;