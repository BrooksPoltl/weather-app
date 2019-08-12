import React from 'react'
import { 
    
    IconWrapper,
    Icon

} from './styling/CityDataIcons.styling'

const CityDataIcons = (props) =>{

    return(
        <IconWrapper>
            <Icon onClick ={()=> props.handleDelete()}>
                <i className ="fas fa-trash-alt">
                </i> 
            </Icon>
            <Icon onClick = {()=>props.setEditing(!props.editing)}>
                <i className ="fas fa-edit">
                </i>
            </Icon>
        </IconWrapper>
    )
}

export default CityDataIcons;