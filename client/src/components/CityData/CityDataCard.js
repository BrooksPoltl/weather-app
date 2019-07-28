import React from 'react';
import {
    CardContainer,
    TemperatureText,
    SubmitButton,
    RangeInput
} from './styling/CityDataCard.styling'

import changeHandler from '../../helpers/changeHandler';
import CityDataIcons from './CityDataIcons';

const CityDataCard = (props) =>{
    const handleSubmit=(event)=>{
        props.handleEdit(event, props.index,props.city.inRange)

    }
    return(
        <CardContainer editing = {props.editing}>
            <p style = {{  fontWeight: "bold",lineHeight:"36px", width: "15%", border:"1px solid red"}}>{props.city.city}</p>
            <TemperatureText>{props.city.temperature}°F</TemperatureText>
            {!props.editing
                ? <TemperatureText>{props.city.range[0]}°F</TemperatureText>
                :<RangeInput
                    type = "number" 
                    value = {props.newRange.minimum} 
                    name = "minimum" 
                    placeholder = "minimum"
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                />
            }
            {!props.editing
                ? <TemperatureText>{props.city.range[1]}°F</TemperatureText>
                :<RangeInput
                    type = "number" 
                    value = {props.newRange.maximum} 
                    name = "maximum" 
                    placeholder = "maximum"
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
            />
            }
            {!props.editing
                ? null
                :<SubmitButton
                    onClick = {(event)=>handleSubmit(event)}>
                        submit
                </SubmitButton>

            }
            <CityDataIcons {...props}/>
           
        </CardContainer>
    )
}

export default CityDataCard;