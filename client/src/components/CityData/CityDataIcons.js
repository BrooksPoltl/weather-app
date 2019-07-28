import React from 'react'
import { 
    
    IconWrapper 

} from './styling/CityDataIcons.styling'

const CityDataIcons = (props) =>{
    return(
        <IconWrapper>
            <div onClick ={()=>props.deleteCity(props.cities,props.city.index,props.city.inRange)}>
                <i className ="fas fa-trash-alt">
                </i> 
            </div>
            <div onClick = {()=>props.setEditing(!props.editing)}>
                <i className ="fas fa-edit">
                </i>
            </div>
        </IconWrapper>
    )
}

export default CityDataIcons;