import React, {useState, useEffect} from 'react';
import {
    CardContainer,
    TemperatureText,
    SubmitButton,
    RangeInput
} from './styling/CityDataCard.styling'

import changeHandler from '../../helpers/changeHandler';
import CityDataIcons from './CityDataIcons';

const CityDataCard = (props) =>{
    const [color, setColor] = useState("black");
    useEffect(()=>{
        const handleColor = () =>{
            if(props.city.range[0]<= props.city.temperature && props.city.temperature<= props.city.range[1]){
                return setColor("black");
            }
            else if (props.city.range[0] > props.city.temperature){
                let difference = props.city.range[0] - props.city.temperature;
                if(difference > 20){
                    return setColor("#0055AA");
                }else if(difference > 10){
                    return setColor("blue");
                }else{
                    return setColor("#CBF3F0");
                }
            }
            else{
                let difference = props.city.temperature - props.city.range[1];
                if(difference > 20){
                    return setColor("red");
                }else if(difference > 10){
                    return setColor("orange");
                }else{
                    return setColor("#FFBF69");
                }
            }
        }
        handleColor()
    }, [props])
    const handleSubmit=(event)=>{
        props.handleEdit(event, props.index,props.city.inRange)

    }
    return(
        <CardContainer>
            <p style = {{  fontWeight: "bold",lineHeight:"36px", width: "15%", border:"1px solid red"}}>{props.city.city}</p>
            <TemperatureText color = {color}>{props.city.temperature}°F</TemperatureText>
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