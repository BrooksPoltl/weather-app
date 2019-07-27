import React from 'react'


const CityDataCard = (props) =>{
    return(
        <div>
            <p>{props.city.city}</p>
            <p>{props.city.temperature}</p>
            <p>{props.city.range[0]}</p>
            <p>{props.city.range[1]}</p>

            <div onClick ={()=>props.deleteCityData(props.cities,props.city.index,props.city.inRange)}>
                <i class="fas fa-trash-alt">
                </i>
            </div>
            
        </div>
    )
}

export default CityDataCard;