import React, {useState, useEffect } from 'react';

import changeHandler from '../../helpers/changeHandler';

const CityDataCard = (props) =>{

    const handleSubmit=(event)=>{
        props.handleEdit(event, props.index,props.city.inRange)

    }
    return(
        <div>
            <p>{props.city.city}</p>
            <p>{props.city.temperature}</p>
            {props.editing?<form onSubmit = {(event)=> handleSubmit(event)}>
                <input 
                    type = "number" 
                    value = {props.newRange.minimum} 
                    name = "minimum" 
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                />
                <input 
                    type = "number" 
                    value = {props.newRange.maximum} 
                    name = "maximum" 
                    onChange = {(event)=>changeHandler(event,props.newRange, props.setNewRange)}
                />
                <button onClick = {(event)=>handleSubmit(event)}>submit</button>
                </form>
            : <div>
                <p>{props.city.range[0]}</p>
                <p>{props.city.range[1]}</p>
            </div>}
           
            <div>
                <div onClick ={()=>props.deleteCity(props.cities,props.city.index,props.city.inRange)}>
                    <i className ="fas fa-trash-alt">
                    </i> 
                </div>
                <div onClick = {()=>props.setEditing(!props.editing)}>
                    <i className ="fas fa-edit">
                    </i>
                </div>
            </div>
        </div>
    )
}

export default CityDataCard;