import React from 'react';
import {
    CardContainer
} from './styling/CityDataCard.styling'

import CityDataCardForm from './CityDataCardForm';
import RangeData from './RangeData';

const CityDataCard = (props) =>{
    return(
        <CardContainer>
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
        </CardContainer>
    )
}

export default CityDataCard;