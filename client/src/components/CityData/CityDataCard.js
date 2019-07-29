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

} from './styling/CityDataCard.styling';


const CityDataCard = (props) =>{
    const [color, setColor] = useState("black");
    const [editing, setEditing ] = useState(false); 
    const [newRange, setNewRange] = useState({minimum: 0,maximum: 0})
    useEffect(()=>{
        
        handleColor(props, setColor);
    }, [props])
    
        
    const handleEdit = async(event,index,inRange,id = null) =>{
        event.preventDefault();
        newRange.minimum = Number(newRange.minimum);
        newRange.maximum = Number(newRange.maximum);
        if(props.id){
            props.changeRange(id, {range:[newRange.minimum, newRange.maximum]})
            props.history.push("/dashboard")
        }else{
            if(inRange){
                await props.editRange(props.inRangeCities,index,inRange, newRange.minimum, newRange.maximum)
                
            }
            else{
                await props.editRange(props.notInRangeCities,index,inRange, newRange.minimum, newRange.maximum)
            }
        }
        setEditing(false);
        
    }
    const handleDelete = () =>{
        if(props.id){
            props.authDeleteCity(props.id);
            props.history.push("/dashboard")
        }
        else{
            props.deleteCity(props.halfCities,props.city.index,props.city.inRange);
        }
        
    }

    return(
        <CardContainer>
            <CityText>{props.city.city}</CityText>
            <TemperatureText color = {color}>{props.city.temperature}°F</TemperatureText>
            {
                !editing
                    ? <TemperatureText>{props.city.range[0]}°F</TemperatureText>
                    :<RangeInput
                        type = "number" 
                        value = {newRange.minimum} 
                        name = "minimum" 
                        placeholder = "minimum"
                        onChange = {(event)=>changeHandler(event,newRange, setNewRange)}
                    />
            }
            {
                !editing
                    ? <TemperatureText>{props.city.range[1]}°F</TemperatureText>
                    :<RangeInput
                        type = "number" 
                        value = {newRange.maximum} 
                        name = "maximum" 
                        placeholder = "maximum"
                        onChange = {(event)=>changeHandler(event,newRange, setNewRange)}
                    />
            }
            {
                !editing
                    ? null
                    :<SubmitButton
                        onClick = {(event)=>handleEdit(event, props.index,props.city.inRange,props.id)}
                     >
                            submit
                    </SubmitButton>

            }
            <CityDataIcons handleDelete = {handleDelete} editing = {editing} setEditing = {setEditing} {...props}/>
           
        </CardContainer>
    )
}

export default CityDataCard;