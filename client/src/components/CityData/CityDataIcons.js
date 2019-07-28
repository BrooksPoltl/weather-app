import React from 'react'


const CityDataIcons = (props) =>{
    return(
        <div style = {{position: "absolute", right: "10%"}}>
        <div onClick ={()=>props.deleteCity(props.cities,props.city.index,props.city.inRange)}>
            <i className ="fas fa-trash-alt">
            </i> 
        </div>
        <div onClick = {()=>props.setEditing(!props.editing)}>
            <i className ="fas fa-edit">
            </i>
        </div>
    </div>
    )
}

export default CityDataIcons;