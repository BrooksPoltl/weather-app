import React, {useState, useEffect} from 'react';

import changeHandler from '../../helpers/changeHandler';
import CityDataIcons from './CityDataIcons';
import { handleColor } from './helper';

import {
    
    CardContainer,
    TemperatureText,
    SubmitButton,
    RangeInput,
    CityText,
    MainTempText,
    MainTempWrapper,
    RangeWrapper

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
        const token = localStorage.getItem('token');
        if(token){
            props.changeRange(id, {range:[newRange.minimum, newRange.maximum]})
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
        }
        else{
            props.deleteCity(props.halfCities,props.city.index,props.city.inRange);
        }
        
    }

    return(
        <CardContainer color = {color}>
            <CityText>{props.city.city}</CityText>
            <MainTempWrapper color = {color}>
                  <MainTempText color = {color}>{props.city.temperature}°F</MainTempText>  
            </MainTempWrapper>
            <RangeWrapper >
                <p>Range: </p>
                {
                    !editing
                        ?<TemperatureText>{props.city.range[0]}°F</TemperatureText>
                        :<RangeInput
                            type = "number" 
                            value = {newRange.minimum} 
                            name = "minimum" 
                            placeholder = "minimum"
                            onChange = {(event)=>changeHandler(event,newRange, setNewRange)}
                        />
                }
                <p> to </p>
                {
                    !editing
                        ?<TemperatureText>{props.city.range[1]}°F</TemperatureText>
                        :<RangeInput
                            type = "number" 
                            value = {newRange.maximum} 
                            name = "maximum" 
                            placeholder = "maximum"
                            onChange = {(event)=>changeHandler(event,newRange, setNewRange)}
                        />
                }
                </RangeWrapper>
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