import React, {useState, useEffect } from 'react';


import CityDataCardForm from './CityDataCardForm';
import RangeData from './RangeData';

const CityDataCard = (props) =>{
    return(
        <div>
            <p>{props.city.city}</p>
            <p>{props.city.temperature}</p>
            { props.editing
                ?   <CityDataCardForm {...props} />
                :   <RangeData {...props}/>
            }
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