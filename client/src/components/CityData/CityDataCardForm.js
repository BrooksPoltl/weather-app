import React from 'react';
import changeHandler from '../../helpers/changeHandler';

const CityDataCardForm = (props)=>{
    const handleSubmit=(event)=>{
        props.handleEdit(event, props.index,props.city.inRange)

    }
    return(
        <form>
                <input 
                    type = "number" 
                    value = {props.newRange.minimum} 
                    name = "minimum" 
                    placeholder = "minimum"
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                />
                <input 
                    type = "number" 
                    value = {props.newRange.maximum} 
                    name = "maximum" 
                    placeholder = "maximum"
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                />
                <button onClick = {(event)=>handleSubmit(event)}>submit</button>
        </form>
    )
}

export default CityDataCardForm;